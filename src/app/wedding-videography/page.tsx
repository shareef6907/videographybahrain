import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedBackground } from '@/components/animated-background'

export const metadata: Metadata = {
  title: 'Wedding Videography Bahrain | Cinematic Wedding Films',
  description: 'Cinematic wedding videography in Bahrain. From traditional ceremonies at historic mosques to luxury hotel receptions, we capture every moment with professional storytelling.',
  keywords: 'wedding videography Bahrain, Bahrain wedding film, wedding videographer Bahrain, Bahrain wedding video, cinematic wedding film Bahrain, luxury wedding videography Bahrain',
}

const faqData = [
  {
    question: 'How far in advance should I book my wedding videographer in Bahrain?',
    answer: 'We recommend booking at least three to six months before your wedding date. Bahrain hosts many weddings year-round, especially during the wedding season from October to April, so earlier booking gives us time for a pre-wedding consultation and planning session.',
  },
  {
    question: 'What is included in your wedding videography packages?',
    answer: 'Every package includes full-day coverage from preparations through to the reception, a lead videographer and second camera operator, professional audio recording, and cinematic editing. Packages vary in duration of the final film, from a 3–5 minute highlights reel to a full 30-minute cinematic film of the complete day.',
  },
  {
    question: 'Do you film traditional Bahraini and Islamic wedding ceremonies?',
    answer: 'Yes. We have extensive experience filming traditional Bahraini engagements, the henna night, the wedding ceremony under the marquee, and the reception. We work respectfully around religious customs and coordinate with your family to ensure we capture the moments that matter most.',
  },
  {
    question: 'What delivery time should I expect for my wedding film?',
    answer: 'The final edited wedding film is typically delivered within six to eight weeks of your wedding date. A short highlight reel is often available within two weeks for sharing with family and friends while the full film is being edited.',
  },
  {
    question: 'Can you videograph weddings at outdoor venues and beaches in Bahrain?',
    answer: 'Yes. Bahrain has a range of coastal and outdoor venues, from beachside areas to garden settings. We use weather-resistant equipment and have experience filming across Bahrain is locations including Manama, Muharraq, and the northern coastline.',
  },
]

export default function WeddingVideographyPage() {
  return (
    <>
      <AnimatedBackground />
      {/* Navbar */}
      <nav className="fixed w-full bg-black/30 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Videography Bahrain" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold gradient-text">Videography Bahrain</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/" className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white glass hover:scale-105 transition-all duration-300">Home</Link>
              <Link href="/#services" className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white glass hover:scale-105 transition-all duration-300">Services</Link>
              <Link href="/#portfolio" className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white glass hover:scale-105 transition-all duration-300">Portfolio</Link>
              <Link href="/#contact" className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white glass hover:scale-105 transition-all duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/80 to-black" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
          <p className="text-purple-400 font-medium uppercase tracking-widest text-sm mb-4">Wedding Videography in Bahrain</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Your Wedding Day,<br /><span className="gradient-text">Cinematically Told</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Professional wedding videography across Bahrain, from traditional ceremonies to luxury hotel receptions. We capture every emotion, every detail, every moment worth remembering.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/97339007750"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full text-white glass border border-white/10 hover:scale-105 transition-all duration-300 text-sm"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Intro */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Wedding Videography <span className="gradient-text">Across Bahrain</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Bahrain has a rich tradition of celebration. From grand marquee weddings in Manama to intimate ceremonies in Muharraq, every wedding tells a unique story. Wedding videography is the only way to fully capture the movement, the laughter, the vows, and the tears of your day — not just frozen moments, but the full emotional arc as it unfolded.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Our videography team operates across Bahrain, working with Bahraini families, expat couples, and destination weddings throughout the year. We understand the flow of a Bahraini wedding — the morning preparations, the henna night, the ceremony, and the reception — and we plan our coverage accordingly.
            </p>
          </div>

          {/* Coverage Sections */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Preparations and Bridal Session</h2>
                <p className="text-gray-300 leading-relaxed">
                  The morning of your wedding is full of anticipation. We arrive during preparations to capture hair and makeup, the moment the dress goes on, and the interactions between family and friends. For the groom's side, we film the dressing, the final adjustments, and the journey to the venue. These early moments often produce the most genuine emotions in the final film.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80"
                  alt="Bride preparation — Bahrain wedding videography"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80"
                  alt="Bahrain wedding ceremony"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold text-white mb-4">The Ceremony</h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether your ceremony takes place in a hotel ballroom, a traditional hall, or an outdoor marquee, we position our cameras to capture the key moments without intrusion. Multiple camera angles let us catch the reaction of family members, the entrance, the exchange of vows, and the ring ceremony from complementary perspectives. We work quietly and respectfully throughout.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Reception and Celebrations</h2>
              <p className="text-gray-300 leading-relaxed">
                The reception is where your guests let loose and the joy becomes infectious. We cover the entrance, the first dance, speeches and toasts, the cake cutting, and the candid moments on the dance floor. With a second camera on the crowd and a separate audio recording, we capture reactions and ambient sound that bring the film to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Cinematic Highlights Film</h3>
                <p className="text-gray-300 leading-relaxed">
                  A 3–5 minute edited highlights film that tells the full story of your wedding day in the most compelling way. We blend ceremony footage, reception moments, and candid scenes with licensed music to create a film you will want to watch again and again. This is the film you will share with family overseas and watch on your anniversary.
                </p>
              </div>
              <div className="glass p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Full Day Cinematic Film</h3>
                <p className="text-gray-300 leading-relaxed">
                  The complete documentary of your wedding day, edited with the same cinematic quality as the highlights film. This longer format includes full ceremony footage, all speeches in their entirety, and extended reception coverage. It is the most complete record of your day and a film you will treasure for decades.
                </p>
              </div>
            </div>
          </div>

          {/* Why Bahrain Weddings */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bahrain Wedding Venues We Know Well
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Bahrain offers an exceptional range of wedding venues, from five-star hotel ballrooms in Manama to traditional halls and coastal locations. We have filmed at venues across the island and understand the lighting conditions, acoustics, and logistics at each. Whether you are planning a 50-person gathering or a 500-guest celebration, we adapt our coverage to match the scale and style of your event.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Ballroom Weddings', 'Marquee Weddings', 'Hotel Receptions', 'Traditional Halls', 'Coastal Venues', 'Private Villa Weddings'].map((venue) => (
                <div key={venue} className="glass p-4 rounded-xl border border-white/10 text-center">
                  <p className="text-gray-300 text-sm">{venue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              More Services from <span className="gradient-text">Videography Bahrain</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/#services"
                className="group glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <p className="text-3xl mb-3">💼</p>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Corporate Video Production</h3>
                <p className="text-gray-400 text-sm mt-2">Professional videos for Bahrain businesses and organisations.</p>
              </Link>
              <Link
                href="/#services"
                className="group glass p-6 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all"
              >
                <p className="text-3xl mb-3">🎬</p>
                <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">Event Video Coverage</h3>
                <p className="text-gray-400 text-sm mt-2">Conference, concert, and special event videography in Bahrain.</p>
              </Link>
              <Link
                href="/#services"
                className="group glass p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <p className="text-3xl mb-3">📺</p>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">TVC Advertisements</h3>
                <p className="text-gray-400 text-sm mt-2">Commercial and advertising video production.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqData.map((item, index) => (
                <div key={index} className="glass p-6 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <div className="glass p-12 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Plan Your Wedding Film?</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Tell us about your wedding date, venue, and the style of film you have in mind. We will respond within one working day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get in Touch
                </Link>
                <a
                  href="tel:+97339007750"
                  className="inline-flex items-center px-6 py-3 rounded-full text-white glass border border-white/10 hover:scale-105 transition-all duration-300 text-sm"
                >
                  Call +973 3900 7750
                </a>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="mt-12 text-sm text-gray-500">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Wedding Videography</span>
          </div>

        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Wedding Videography in Bahrain',
            description: 'Cinematic wedding videography services across Bahrain, covering traditional ceremonies, hotel receptions, and outdoor celebrations.',
            provider: {
              '@type': 'ProfessionalService',
              name: 'Videography Bahrain',
              url: 'https://www.videographybahrain.com/wedding-videography',
              telephone: '+97339007750',
              email: 'shareef@eventsbahrain.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Manama',
                addressCountry: 'BH',
              },
            },
            areaServed: {
              '@type': 'Country',
              name: 'Bahrain',
            },
            serviceType: 'Wedding Videography',
          }),
        }}
      />
    </>
  )
}
