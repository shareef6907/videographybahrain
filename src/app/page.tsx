import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  )
} 