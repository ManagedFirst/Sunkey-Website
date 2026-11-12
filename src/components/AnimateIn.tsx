'use client'
import React from 'react'
import { useInView } from '@/hooks/useInView'
import { CSSProperties } from 'react'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
  as?: React.ElementType
}

const directionClass: Record<NonNullable<AnimateInProps['direction']>, string> = {
  up:    'animate-fade-up',
  left:  'animate-slide-left',
  right: 'animate-slide-right',
  fade:  'animate-fade-in',
}

export function AnimateIn({
  children, delay = 0, direction = 'up',
  className = '', as: Tag = 'div',
}: AnimateInProps) {
  const { ref, isInView } = useInView()

  const style: CSSProperties = isInView
    ? { animationDelay: `${delay}ms` }
    : { opacity: 0 }

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      // When not in view: opacity-0 via inline style
      // When in view: animation class (which transitions FROM opacity-0 TO opacity-1)
      // Default state is opacity:1 so SSR always renders visibly — JS adds animation
      className={`${isInView ? directionClass[direction] : ''} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
