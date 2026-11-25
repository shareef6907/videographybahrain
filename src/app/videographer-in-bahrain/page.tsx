import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Videographer in Bahrain | Videography Bahrain',
  description:
    'Hiring a videographer in Bahrain? What the shoot involves, what to ask, and which kind of videographer your wedding, corporate or event film needs.',
  alternates: {
    canonical: '/videographer-in-bahrain',
  },
  openGraph: {
    title: 'Videographer in Bahrain | Videography Bahrain',
    description:
      'Hiring a videographer in Bahrain? What the shoot involves, what to ask, and which kind of videographer your wedding, corporate or event film needs.',
    url: 'https://www.videographybahrain.com/videographer-in-bahrain',
    siteName: 'Videography Bahrain',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Videographer in Bahrain filming in Manama for Videography Bahrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videographer in Bahrain | Videography Bahrain',
    description:
      'Hiring a videographer in Bahrain? What the shoot involves, what to ask, and which kind of videographer your wedding, corporate or event film needs.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'How do I choose a videographer in Bahrain for my project?',
    a: 'Start with the kind of film you need rather than with a list of names. A wedding film, a corporate brand film and a live event all ask for completely different things on the day. Once that is clear, ask any videographer three practical questions: what will you shoot with, who will be on the crew, and what do I receive at the end and how quickly. If the answers are specific rather than general, you are talking to someone who has planned shoots like yours before.',
  },
  {
    q: 'Should my videographer in Bahrain work alone or bring a crew?',
    a: 'It depends on the shoot, and the right answer comes from the brief. A single-camera interview or a short studio piece can be handled by one operator. A wedding, a conference or a brand film with several locations is usually better with a second camera and a sound recordist working alongside, so the film has more than one angle and the audio is captured separately and professionally. We agree the crew size with you in advance rather than deciding on the day.',
  },
  {
    q: 'Do I need to be on site while you film?',
    a: 'Not for the whole shoot, but you should be reachable. For a wedding, someone from the family or the venue contact usually needs to confirm the running order. For corporate work, someone who knows the product, the site or the process is useful on the day. For events, the organiser needs to share the schedule and any moments that must be recorded cleanly.',
  },
  {
    q: 'Can a videographer in Bahrain also provide the equipment for the event?',
    a: 'Yes, when the shoot is part of a full production. Videography Bahrain is part of the Premiera Live family, and our sister company Events Bahrain handles event equipment rental in Bahrain, including LED screens, sound systems, lighting and exhibition stands. That means the cameras, the sound and the screens are planned together instead of arriving as separate suppliers who have never spoken.',
  },
  {
    q: 'Do you travel outside Manama for shoots?',
    a: 'Yes. We are based in Manama and work across the Kingdom, with Riffa, Muharraq, Seef District and Juffair as regular working areas. We travel to any venue in Bahrain for a full shoot, including hotel ballrooms, exhibition halls, private homes and outdoor locations.',
  },
]

export default function VideographerInBahrainPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Videographer in Bahrain',
    serviceType: 'Videography and video production',
    description:
      'Videographer in Bahrain for weddings, corporate films, events, commercials, live streaming and podcast filming, with cinematic camera work, professional audio recording, crane and gimbal rigs, and edited deliverables.',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Videography Bahrain',
      url: 'https://www.videographybahrain.com',
      telephone: '+97339007750',
      email: 'shareef@eventsbahrain.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manama',
        addressRegion: 'Capital Governorate',
        addressCountry: 'Bahrain',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Manama' },
      { '@type': 'City', name: 'Riffa' },
      { '@type': 'City', name: 'Muharraq' },
      { '@type': 'City', name: 'Seef' },
      { '@type': 'City', name: 'Juffair' },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.videographybahrain.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Videographer in Bahrain',
        item: 'https://www.videographybahrain.com/videographer-in-bahrain',
      },
    ],
  }

  return (
    <>
      <Navbar />

      <Script id="videographer-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="videographer-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="videographer-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="relative bg-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-pink-900/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Videographer in Bahrain</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Videographer in <span className="gradient-text">Bahrain</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            If you are looking for a videographer in Bahrain, this page explains how a shoot
            actually works, what to ask before you commit to anyone, and which type of videographer
            your project needs. We are a film production team based in Manama covering the whole
            Kingdom, and we would rather set expectations early than deliver a film that does not
            fit what you had in mind.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">What a videographer in Bahrain actually does</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Filming is the part everyone sees, and it is the smallest part of the job. Before a
            camera is switched on there is the conversation about what the film is for, who is
            going to watch it, and where it will live. A film made for a trade show screen, a
            film made for a company website and a film made for a family are shot differently,
            even when the venue and the day look identical.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            On the day itself, the crew arrives early, works out the space, sets the camera
            positions, tests the sound and adjusts the lighting to the room rather than the other
            way round. Audio is recorded separately and professionally, because a film is only as
            good as the sound it can actually be heard in. Movement is used where it helps, with
            stabilised rigs for controlled shots and crane, jib and gimbal work for the moments
            that need to feel like an occasion.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            After the shoot, the footage is cut. This is where the deliverables are decided: a long
            version, a short version for social channels, and specific edits for individual
            campaigns or teams, all drawn from the same material so the message stays consistent.
            Our work across weddings, corporate production and live events is shown in the{' '}
            <Link href="/#portfolio" className="text-purple-400 hover:text-purple-300 underline">
              portfolio
            </Link>{' '}
            section of the homepage.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Which kind of videographer you need</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Different work asks for different experience, and the specialism matters more than
            the name on the reel. These are the areas we work in, and each one is covered in
            detail on its own page.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            For a wedding, the priority is a calm crew that disappears into the day and captures
            the ceremony and the moments around it without turning it into a production. That is
            covered on our{' '}
            <Link href="/wedding-videography" className="text-purple-400 hover:text-purple-300 underline">
              wedding videography page
            </Link>
            , including multi-camera coverage, crane and gimbal work for the wide moments, and live
            streaming for family who cannot be in the room.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            For company work, the film has to work harder, because it has a job to do. Brand
            films, executive interviews, training videos and product work are covered on the{' '}
            <Link href="/corporate-video" className="text-purple-400 hover:text-purple-300 underline">
              corporate video page
            </Link>
            , where the same shoot is cut into the versions each audience needs.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            For events, the coverage is planned around the running order of the day rather than
            around the speaker on stage, which is the approach behind our{' '}
            <Link href="/event-videography" className="text-purple-400 hover:text-purple-300 underline">
              event videography page
            </Link>
            . That page also covers conferences, concerts and exhibitions, and multi-cam live
            streaming for audiences watching from outside Bahrain.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">What to ask before you hire anyone</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Most enquiries start with a question about cost, and it is a fair question, but it is
            not the one that decides whether a videographer in Bahrain is the right one. The
            questions that actually predict the quality of the result are practical ones: what
            will you be shooting with, is that the same crew that will be on site, what does the
            day look like, and what will I be holding at the end.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Ask what happens if the weather turns, if the room is darker than it looked in the
            photos, or if the running order changes on the day. Every production has a plan for
            those situations, and the answer should be about the work rather than about the
            circumstances. If you are working with an events planner or a production company
            already, tell the videographer at the start. We are happy to work alongside an
            existing team so the filming schedule runs without pulling anyone away from the
            guests.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">What we need from you before the shoot</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            A short brief makes a shoot faster and the edit sharper. It does not need to be
            formal. Useful things to send are the running order or the schedule, the location and
            access details, the names and roles of the people who matter on the day, the shots or
            moments you already know you want, and any brand assets such as logos, colour
            references and existing footage that has to match.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            It also helps to know where the finished film will be used, because that decides the
            format, the length and how many versions you need. A film for internal training, a
            film for a trade show screen and a film for social feeds are cut from the same
            footage but delivered differently. The service options we cover are listed in the{' '}
            <Link href="/#services" className="text-purple-400 hover:text-purple-300 underline">
              services section
            </Link>{' '}
            of the homepage, from wedding and corporate production through to television
            commercials, multi-cam live streaming and podcast filming.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Where we work</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We are based in Manama and travel across Bahrain for full shoots. Our regular working
            areas are Manama, Riffa, Muharraq, Seef District and Juffair, and beyond that we work
            in any venue in the Kingdom, from hotel ballrooms and conference halls to exhibition
            spaces, live music venues, private homes and outdoor locations such as beach and desert
            settings.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            If the project also needs venue production, our sister company Events Bahrain handles
            event equipment rental in Bahrain, including LED screens, sound systems, lighting and
            exhibition stands. Booking the filming and the production through the same team keeps
            the camera positions, the screen content and the sound working together on the day.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Videographer in Bahrain questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white">{f.q}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 glass p-8 rounded-2xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white">Looking for a videographer in Bahrain?</h2>
            <p className="mt-3 text-gray-300">
              Tell us what the film is for, where it will be used and when you need it, and we
              will come back with how we would approach it.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+97339007750"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border border-white/15 hover:border-white/30 rounded-full transition-all duration-300"
              >
                +973 3900 7750
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Need LED screens, sound or lighting for the venue?{' '}
              <a
                href="https://www.eventsbahrain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Events Bahrain
              </a>{' '}
              handles event equipment rental as part of the Premiera Live family.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
