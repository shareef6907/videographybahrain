'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AnimatedBackground } from '@/components/animated-background'
import { LazyWrapper } from '@/components/lazy-wrapper'
import { FloatingButtons } from '@/components/floating-buttons'

// Lazy load components below the fold
const Services = dynamic(() => import('@/components/services').then(mod => mod.Services), {
  loading: () => <div className="h-96 bg-black" />
})

const Contact = dynamic(() => import('@/components/contact').then(mod => mod.Contact), {
  loading: () => <div className="h-96 bg-black" />
})

const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer), {
  loading: () => <div className="h-64 bg-black" />
})

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <LazyWrapper>
        <Services />
      </LazyWrapper>
      <LazyWrapper>
        <Contact />
      </LazyWrapper>
      <LazyWrapper>
        <Footer />
      </LazyWrapper>
      <FloatingButtons />
    </>
  )
} 