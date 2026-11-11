import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Event Videography in Bahrain | Videography Bahrain',
  description:
    'Event videography in Bahrain for conferences, concerts and corporate events. Multi-camera coverage, live streaming, crane and gimbal work across Manama, Riffa and Muharraq.',
  alternates: {
    canonical: '/event-videography',
  },
  openGraph: {
    title: 'Event Videography in Bahrain | Videography Bahrain',
    description:
      'Event videography in Bahrain for conferences, concerts and corporate events. Multi-camera coverage, live streaming, crane and gimbal work across Manama, Riffa and Muharraq.',
    url: 'https://www.videographybahrain.com/event-videography',
    siteName: 'Videography Bahrain',
    type: 'article',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Event videography in Bahrain by Videography Bahrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Videography in Bahrain | Videography Bahrain',
    description:
      'Event videography in Bahrain for conferences, concerts and corporate events. Multi-camera coverage, live streaming, crane and gimbal work across Manama, Riffa and Muharraq.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'How many cameras do you use for an event in Bahrain?',
    a: 'It depends on the shape of the event rather than a fixed number. A conference usually needs a wide shot of the stage, a camera on the speaker and a camera that can move through the room for audience reactions. A concert needs a different balance again, with more angles available for the performance. We agree the camera plan with you in advance so the coverage matches the room and the running order.',
  },
  {
    q: 'Can you film an event and live stream it at the same time?',
    a: 'Yes. Multi-cam live streaming is one of our services, so the ceremony, the presentation or the performance can be streamed live with more than one camera angle and clean audio while the same cameras record the event for editing afterwards. The live feed and the finished film come from one crew and one setup.',
  },
  {
    q: 'Do you need to see the venue before the event?',
    a: 'It helps. Lighting, room shape, screen positions and the running order all affect how the cameras are placed, so we prefer to see the space or to work from a detailed floor plan and your event schedule. That lets us set camera positions and angles before guests arrive instead of improvising once the room is full.',
  },
  {
    q: 'What do you deliver after the event?',
    a: 'You get the material from the event cut into the films you asked for. Most organisers want a highlights edit for social and internal channels, and a longer cut that holds the full session or the key moments of the day. Both are cut from the same shoot, so the event is not filmed twice.',
  },
  {
    q: 'Can the lighting, sound and LED screens for our event be arranged as well?',
    a: 'Yes. Videography Bahrain is part of the Premiera Live family, and our sister company Events Bahrain handles event equipment rental in Bahrain, including LED screens, sound systems and lighting. That means the production side of the venue and the filming side can be booked through the same team rather than run separately.',
  },
]

export default function EventVideographyPage() {
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
    name: 'Event Videography in Bahrain',
    serviceType: 'Event videography',
    description:
      'Event videography in Bahrain for conferences, concerts, corporate events and celebrations, with multi-camera coverage, professional audio recording, crane and gimbal work, and multi-cam live streaming.',
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
        name: 'Event Videography',
        item: 'https://www.videographybahrain.com/event-videography',
      },
    ],
  }

  return (
    <>
      <Navbar />

      <Script id="event-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="event-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="event-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="relative bg-black pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-pink-900/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Event Videography</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Event Videography in <span className="gradient-text">Bahrain</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Event films made by videographers working across Bahrain, from conference stages and
            product launches to concerts, exhibitions and private celebrations. We are event
            videographers in Bahrain covering the day properly, so the footage is usable long
            after the room has emptied.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">What event coverage includes</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Every event has a shape, and the coverage is planned around that shape before the day
            starts. We agree the running order, the key moments that must be recorded cleanly, and
            the shots that need to look good rather than simply exist. From that we set the camera
            positions, the angles and the movement for each part of the programme.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Coverage is planned with more than one camera wherever it matters. A second angle gives
            you the wide framing and the audience reaction that a single camera cannot show at the
            same time, and it means the recording continues if one unit has to stop during the
            event. Quieter passages are shot on a stabilised rig, while the busy open floor is
            covered with a more mobile setup that can move through the crowd.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Conferences and corporate events</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Conferences and corporate events are shot to work for two audiences at once: the people
            in the room, and the people who were not there. That means a clean, locked shot of the
            speaker and the stage screen, plus a camera free to move through the audience for the
            reaction shots and the informal moments between sessions. Session content is captured
            in full, and the same setup carries across a full running order of talks, panels and
            presentations.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Where a company needs the material cut into different versions, that is handled after
            the event from the same footage: a highlights edit for internal channels, a longer cut
            for the full session, and shorter pieces for social. We also film
            {' '}
            <Link href="/#services" className="text-purple-400 hover:text-purple-300 underline">
              corporate video production
            </Link>{' '}
            for the company film that sits alongside the event coverage, so the two share a look.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Concerts, exhibitions and live events</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Live events need a different approach. A concert is fast, loud and unpredictable, so
            the cameras are positioned for the performance rather than for the audience, and the
            audio is recorded separately and professionally because a loud room is exactly where
            video usually loses the sound. Movement is used to keep the energy in the film, with
            gimbal passes through the crowd and controlled crane moves for the wide moments.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Exhibitions and trade events work on the opposite principle: the interest is spread
            across a floor rather than concentrated on one stage. The coverage follows the
            activity, moving between stands, demonstrations and the moments where visitors and
            hosts actually talk to each other. The full set of our service options is listed on
            the {' '}
            <Link href="/#services" className="text-purple-400 hover:text-purple-300 underline">
              services section
            </Link>{' '}
            of the homepage.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Equipment for event filming</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We shoot with professional cinema cameras and a considered set of prime lenses so the
            look stays consistent across the whole event. Lighting is handled for the room rather
            than left to chance, whether that is a dim hall that needs a soft key or a bright
            stage that has to be controlled. Stabilisation systems keep moving shots steady, and
            crane, jib and gimbal rigs give the film the sense of occasion that static framing
            cannot. Audio is recorded separately and professionally, because an event film is only
            as good as the sound it can actually be heard in.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            For events that also need venue production, our sister company Events Bahrain handles
            equipment rental in Bahrain, including LED screens, sound systems and lighting. The
            filming and the venue production can be arranged through one team, which keeps the
            camera positions and the screen content working together.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Where we cover events in Bahrain</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            We are based in Manama and cover the whole Kingdom. Our regular working areas are
            Manama, Riffa, Muharraq, Seef District and Juffair, and we travel to any venue in
            Bahrain for a full event shoot. That range covers the hotel ballrooms and event halls
            used for conferences and launches, the exhibition spaces used for trade events, the
            live music venues used for concerts, and the private home celebrations and outdoor
            settings that make up the rest of the calendar.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Live streaming for events</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Many events in Bahrain have an audience that is not in the room, whether that is a
            conference for regional teams, a launch for a distributor network, or a celebration for
            family overseas. We run multi-cam live streaming with more than one camera angle and
            clean audio, so remote viewers watch the event as it happens rather than waiting for
            the recap. Streaming and filming are shot together, so the live feed and the finished
            film come from the same crew and the same cameras.
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">How we work with organisers</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Before the event we go through the brief properly: the venue, the running order, the
            speakers, the moments that matter most and the shots you would rather keep simple. If
            you already have an events planner or production company, we work with them so the
            filming schedule runs alongside the event schedule without pulling anyone away from the
            guests.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            On the day the crew arrives early, sets up in position and stays through the end of the
            programme. Afterwards the footage is cut into the films you asked for, usually a
            highlights edit and a longer cut of the key moments. You can see examples of our work
            in the {' '}
            <Link href="/#portfolio" className="text-purple-400 hover:text-purple-300 underline">
              portfolio
            </Link>
            , and wedding filming is covered on our{' '}
            <Link href="/wedding-videography" className="text-purple-400 hover:text-purple-300 underline">
              wedding videography page
            </Link>
            .
          </p>

          <h2 className="mt-14 text-3xl sm:text-4xl font-bold text-white">Event videography questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white">{f.q}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 glass p-8 rounded-2xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white">Planning an event in Bahrain?</h2>
            <p className="mt-3 text-gray-300">
              Tell us the venue, the date and the running order, and we will come back with how we
              would cover it.
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
