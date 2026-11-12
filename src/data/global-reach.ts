// src/data/global-reach.ts
// Sunkey Design Systems -- Global Reach configuration
// Edit destinations and stats to match real data.

export const HQ = {
  lon: 80.2707, lat: 13.0827,
  name: "Chennai, India", sub: "Head Office",
  flag: "in" as const,
  side: 1 as 1 | -1,
  dy: 0,
}

export type Destination = {
  key: string
  lon: number
  lat: number
  name: string
  sub: string
  flag: string
  side: 1 | -1
  dy: number
}

export const DESTINATIONS: Destination[] = [
  { key: "usa",       lon: -95.7129,  lat: 37.0902,  name: "USA",        sub: "Active Client", flag: "us", side: -1, dy: 0  },
  { key: "germany",   lon:  10.4515,  lat: 51.1657,  name: "Germany",    sub: "Active Client", flag: "de", side: -1, dy: 0  },
  { key: "spain",     lon:  -3.7492,  lat: 40.4637,  name: "Spain",      sub: "Active Client", flag: "es", side: -1, dy: 0  },
  { key: "uae",       lon:  53.8478,  lat: 23.4241,  name: "UAE",        sub: "Active Client", flag: "ae", side:  1, dy: 0  },
  { key: "singapore", lon: 103.8198,  lat:  1.3521,  name: "Singapore",  sub: "Active Client", flag: "sg", side:  1, dy: 56 },
  { key: "australia", lon: 133.7751,  lat: -25.2744, name: "Australia",  sub: "Active Client", flag: "au", side: -1, dy: 38 },
]

export type StatItem = {
  icon: "Globe" | "Building2" | "Settings" | "Handshake" | "Award"
  value: string
  suffix: string
  label: string
}

export const STATS: StatItem[] = [
  { icon: "Globe",     value: "30",  suffix: "+",   label: "Years of Experience"  },
  { icon: "Building2", value: "20",  suffix: "+",   label: "Global Customers"     },
  { icon: "Settings",  value: "50",  suffix: "+",   label: "Products Delivered"   },
  { icon: "Handshake", value: "98",  suffix: "%",   label: "On-Time Delivery"     },
  { icon: "Award",     value: "9.7", suffix: "/10", label: "Client Satisfaction"  },
]
