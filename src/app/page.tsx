import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
} 