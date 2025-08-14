import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AnimatedBackground } from '@/components/animated-background'
import { LazyWrapper } from '@/components/lazy-wrapper'

// Lazy load components below the fold
const Services = dynamic(() => import('@/components/services').then(mod => mod.Services), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const Contact = dynamic(() => import('@/components/contact').then(mod => mod.Contact), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer), {
  loading: () => <div className="h-64 bg-black" />,
  ssr: true
})

const FloatingButtons = dynamic(() => import('@/components/floating-buttons').then(mod => mod.FloatingButtons), {
  ssr: false
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