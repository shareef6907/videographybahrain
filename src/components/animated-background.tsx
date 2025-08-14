'use client'

import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-purple w-96 h-96 -top-48 -left-48" />
        <div className="orb orb-pink w-80 h-80 top-1/3 right-0" style={{ animationDelay: '5s' }} />
        <div className="orb orb-blue w-72 h-72 bottom-0 left-1/3" style={{ animationDelay: '10s' }} />
        <div className="orb orb-purple w-64 h-64 top-1/2 left-1/2" style={{ animationDelay: '15s' }} />
      </div>

      {/* Animated Stars */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </>
  )
}