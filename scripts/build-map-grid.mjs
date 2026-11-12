// scripts/build-map-grid.mjs
// Run once: node scripts/build-map-grid.mjs
// Generates src/data/map-grid.json (committed to repo; no runtime dependency on d3-geo)

import { geoContains } from "d3-geo";
import { feature } from "topojson-client";
import { readFileSync, writeFileSync } from "fs";

const landTopo      = JSON.parse(readFileSync("node_modules/world-atlas/land-110m.json", "utf8"));
const countriesTopo = JSON.parse(readFileSync("node_modules/world-atlas/countries-110m.json", "utf8"));

const land  = feature(landTopo, landTopo.objects.land);
const india = feature(countriesTopo, countriesTopo.objects.countries).features.find(f => f.id === "356");

if (!india) { console.error("India feature not found"); process.exit(1); }

const STEP = 7, OFF = 3.5, K = 254.634, X0 = 800, Y0 = 472.26, RAD = Math.PI / 180;

const encode = (shape) => {
  const rows = [];
  for (let j = 12; j <= 106; j++) {
    const lat = (Y0 - (OFF + STEP * j)) / K / RAD;
    if (lat > 90 || lat < -60) continue;      // drop Antarctica
    const cols = [];
    for (let i = 0; i < 229; i++) {
      const lon = ((OFF + STEP * i) - X0) / K / RAD;
      if (lon < -180 || lon > 180) continue;
      if (geoContains(shape, [lon, lat])) cols.push(i);
    }
    if (cols.length) rows.push(j + ":" + cols.join(","));
  }
  return rows.join(";");
};

console.log("Encoding India grid...");
const indiaGrid = encode(india);

// Build a set for fast lookup
const indiaSet = new Set(
  indiaGrid.split(";").flatMap(r => {
    const [j, l] = r.split(":");
    return l.split(",").map(i => j + ":" + i);
  })
);

// LAND grid: excludes India dots (India drawn separately for per-proximity colouring)
console.log("Encoding world land grid (excluding India)...");
const landRows = encode(land).split(";").map(r => {
  const [j, l] = r.split(":");
  const keep = l.split(",").filter(i => !indiaSet.has(j + ":" + i));
  return keep.length ? j + ":" + keep.join(",") : null;
}).filter(Boolean).join(";");

writeFileSync("src/data/map-grid.json", JSON.stringify({ LAND: landRows, INDIA: indiaGrid }));
console.log("Done: src/data/map-grid.json written");
