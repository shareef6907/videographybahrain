import Image from 'next/image'

const services = [
  {
    title: 'Wedding Videography',
    description: 'Cinematic wedding films capturing your special day in Bahrain with stunning storytelling that you will cherish forever.',
    icon: '🎥',
  },
  {
    title: 'Corporate Videos',
    description: 'Professional corporate video production to showcase your Bahrain business and engage your audience with compelling content.',
    icon: '💼',
  },
  {
    title: 'Event Coverage',
    description: 'Dynamic event videography in Bahrain covering conferences, concerts, and special events with professional quality.',
    icon: '🎬',
  },
  {
    title: 'TVC Advertisements',
    description: 'Capture the moment with precision and passion—your product deserves a cinematic spotlight.',
    icon: '📺',
  },
  {
    title: 'Multi-Cam Live Streaming',
    description: 'Professional live streaming services in Bahrain with multiple camera angles for events, conferences and virtual experiences.',
    icon: '📡',
  },
  {
    title: 'Podcast Filming',
    description: 'High-quality podcast video production in Bahrain with professional lighting, sound and cinematic visuals.',
    icon: '🎙️',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-pink-900/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Premium <span className="gradient-text">Film Production</span> Services
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Professional videography services tailored to your needs by Bahrain's top videographers
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass p-8 rounded-2xl border border-white/10 card-hover animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="text-5xl mb-6 animate-floating" style={{ animationDelay: `${index * 0.2}s` }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 