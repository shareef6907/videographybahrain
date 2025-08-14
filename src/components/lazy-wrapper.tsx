'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyWrapperProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function LazyWrapper({ 
  children, 
  className = '',
  threshold = 0.1,
  rootMargin = '100px'
}: LazyWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return (
    <div 
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fadeUp' : 'opacity-0'}`}
    >
      {isVisible && children}
    </div>
  )
}