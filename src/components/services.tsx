import Image from 'next/image'

const services = [
  {
    title: 'Wedding Videography',
    description: 'Capture your special day with cinematic storytelling that you will cherish forever.',
    icon: '🎥',
  },
  {
    title: 'Corporate Videos',
    description: 'Professional video content to showcase your business and engage your audience.',
    icon: '💼',
  },
  {
    title: 'Event Coverage',
    description: 'Dynamic coverage of conferences, concerts, and special events.',
    icon: '🎬',
  },
  {
    title: 'Aerial Videography',
    description: 'Stunning aerial shots to add a unique perspective to your video.',
    icon: '🚁',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Professional videography services tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 