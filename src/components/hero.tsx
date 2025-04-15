import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image/video placeholder */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Videography background"
          fill
          className="object-cover"
          priority
        />
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
            className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
} 