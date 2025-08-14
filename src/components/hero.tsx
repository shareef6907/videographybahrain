'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Set intro text to visible after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play the video
      const playPromise = videoRef.current.play();
      
      // Handle play promise (avoid uncaught promise errors)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video play failed:", error)
          setVideoError(true)
        });
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section with Video */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Contact buttons at the top */}
        <div className="absolute top-24 left-0 right-0 z-30 flex justify-center space-x-4 px-4 animate-fadeIn">
          <a 
            href="tel:+97339007750" 
            className="flex items-center glass px-4 py-2 rounded-full text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
          <a 
            href="https://wa.me/97339007750" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center btn-gradient px-4 py-2 rounded-full text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Video/Image background */}
        <div className="absolute inset-0 bg-black/20 z-10 video-gradient-overlay" />
        <div className="absolute inset-0 overflow-hidden">
          {!videoError ? (
            <video
              ref={videoRef}
              className="object-cover w-full h-full opacity-70"
              src="/videos/optimized.mp4"
              autoPlay
              playsInline
              muted
              loop
              onError={() => setVideoError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black"></div>
          )}
        </div>
        
        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 animate-fadeUp">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
            We <span className="gradient-text">Film</span> Your Story
          </h1>
          <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-white/80">
            Professional Filming Services in Bahrain for Weddings, Events and Commercial Projects
          </p>
          <div className="mt-10">
            <a 
              href="mailto:shareef@eventsbahrain.com" 
              className="inline-flex items-center glass px-8 py-3 rounded-full text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/10 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Intro Text Section with Animation */}
      <div className="relative bg-black py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
        <div 
          className={`relative max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass p-8 rounded-2xl border border-white/10 card-hover">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Welcome to <span className="gradient-text font-bold">Bahrain Nights</span>, a Premier <span className="text-amber-400 font-semibold">Film Production Company in Bahrain</span> dedicated to transforming visions into <span className="text-amber-400 font-semibold">Cinematic Masterpieces</span>. Based in the heart of Bahrain, we specialize in delivering unparalleled <span className="text-purple-400 font-semibold">wedding videography</span>, <span className="text-yellow-400 font-semibold">corporate video production</span>, and <span className="text-green-400 font-semibold">documentary filmmaking</span> through cutting-edge technology and high-end filming equipment. Our state-of-the-art gear, including industry-leading cameras, lenses, and advanced stabilization systems, ensures every frame captures the essence of your story with stunning clarity and precision. At <span className="gradient-text font-bold">Bahrain Nights</span>, we blend <span className="text-green-400 font-semibold">Creativity</span> with <span className="text-red-400 font-semibold">Technical excellence</span> to produce films that <span className="text-purple-400 font-semibold">Resonate</span>, <span className="text-yellow-400 font-semibold">Inspire</span>, and leave a <span className="text-teal-400 font-semibold">Lasting Impact</span>. Let us illuminate your narrative under the stars of Bahrain's vibrant Nights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 