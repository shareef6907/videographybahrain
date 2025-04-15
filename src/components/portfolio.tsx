import Image from 'next/image'

const portfolioItems = [
  {
    title: "Royal Wedding Highlights",
    category: "Wedding",
    thumbnail: "/portfolio/wedding-1.jpg",
  },
  {
    title: "Corporate Brand Story",
    category: "Corporate",
    thumbnail: "/portfolio/corporate-1.jpg",
  },
  {
    title: "Music Festival Coverage",
    category: "Event",
    thumbnail: "/portfolio/event-1.jpg",
  },
  {
    title: "Bahrain Aerial Tour",
    category: "Aerial",
    thumbnail: "/portfolio/aerial-1.jpg",
  },
  {
    title: "Luxury Wedding Film",
    category: "Wedding",
    thumbnail: "/portfolio/wedding-2.jpg",
  },
  {
    title: "Product Launch Event",
    category: "Corporate",
    thumbnail: "/portfolio/corporate-2.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Browse through our recent projects
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div key={item.title} className="group relative">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={640}
                  height={360}
                  className="object-cover group-hover:opacity-75 transition-opacity"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 