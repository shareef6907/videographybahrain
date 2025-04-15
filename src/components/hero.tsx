'use client'

import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  
  useEffect(() => {
    // Ensure video plays automatically
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error)
        setVideoError(true)
      })
    }
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Video/Image background */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/videos/0.mp4"
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Capture Your Story
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto">
          Professional videography services in Bahrain for weddings, events, and commercial projects
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-md text-lg font-medium hover:bg-white/20 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
} 