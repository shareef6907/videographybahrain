'use client'

import { useState } from 'react'

const portfolioItems = [
  {
    title: 'Luxury Wedding Film',
    category: 'Wedding',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    description: 'A beautiful wedding celebration in Bahrain captured in cinematic style.',
  },
  {
    title: 'Corporate Brand Story',
    category: 'Corporate',
    thumbnail: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&q=80',
    description: 'Brand storytelling video for a leading Bahrain company.',
  },
  {
    title: 'Live Concert Coverage',
    category: 'Events',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    description: 'Multi-camera concert documentation with professional audio.',
  },
  {
    title: 'Product Commercial',
    category: 'Advertising',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    description: 'High-end product commercial with stunning visuals.',
  },
  {
    title: 'Documentary Film',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80',
    description: 'Compelling documentary showcasing Bahrain heritage.',
  },
  {
    title: 'Beachside Wedding',
    category: 'Wedding',
    thumbnail: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
    description: 'Romantic beach wedding captured at sunset.',
  },
]

const categories = ['All', 'Wedding', 'Corporate', 'Events', 'Advertising', 'Documentary']

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 via-black to-purple-900/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of our finest work across weddings, corporate, and creative projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden card-hover animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
