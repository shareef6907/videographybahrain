'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '97339007750'
const CONTACT_EMAIL = 'shareef@eventsbahrain.com'

// Inline SVG icons — this site has no icon-library dependency.
const IconCheck = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const IconAlert = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const IconMail = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const IconWhatsApp = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
)

const IconPhone = (props: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

type SubmitStatus = {
  state: 'idle' | 'sent' | 'error'
  message?: string
  whatsappUrl?: string
  mailtoUrl?: string
}

/**
 * Copy text to the clipboard, falling back to a hidden textarea for browsers
 * that block the async clipboard API (non-secure contexts, older Safari).
 */
const copyToClipboard = (text: string): boolean => {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {})
      return true
    }
  } catch {
    // fall through to the legacy path
  }

  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  } catch {
    return false
  }
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState<SubmitStatus>({ state: 'idle' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = [
      'New enquiry from videographybahrain.com',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      '',
      formData.message,
    ]
      .filter(Boolean)
      .join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Videography enquiry from videographybahrain.com - ${formData.name}`
    )}&body=${encodeURIComponent(text)}`

    // Open WhatsApp. window.open returns null when a popup blocker intervenes,
    // so the result is checked and a manual fallback is always offered.
    const whatsappWindow = window.open(whatsappUrl, '_blank')

    if (whatsappWindow) {
      setStatus({
        state: 'sent',
        message:
          'Your enquiry is ready to send in WhatsApp — just press send. If the WhatsApp window did not come up, use the buttons below.',
        whatsappUrl,
        mailtoUrl,
      })
      return
    }

    // Popup blocked - copy the enquiry so nothing is lost.
    const copied = copyToClipboard(text)
    setStatus({
      state: 'error',
      message: copied
        ? 'Your browser blocked the WhatsApp window, so your enquiry has been copied to your clipboard — paste it into WhatsApp or email us directly.'
        : 'Your browser blocked the WhatsApp window. Please use the buttons below to send your enquiry directly.',
      whatsappUrl,
      mailtoUrl,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fadeUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Let's discuss your next video project
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass p-8 rounded-2xl border border-white/10 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="+973 XXXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg glass border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full btn-gradient py-4 px-6 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
                >
                  Send Message
                </button>
              </div>
            </form>

            {status.state !== 'idle' && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-6 p-5 rounded-xl border ${
                  status.state === 'sent'
                    ? 'border-green-500/40 bg-green-500/10'
                    : 'border-amber-500/40 bg-amber-500/10'
                }`}
              >
                <div className="flex items-start gap-3">
                  {status.state === 'sent' ? (
                    <IconCheck className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  ) : (
                    <IconAlert className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                  )}
                  <p className="text-sm text-gray-200 leading-relaxed">{status.message}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {status.whatsappUrl && (
                    <a
                      href={status.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-all duration-300"
                    >
                      <IconWhatsApp className="w-4 h-4" />
                      Open WhatsApp
                    </a>
                  )}
                  {status.mailtoUrl && (
                    <a
                      href={status.mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white border border-white/15 hover:border-white/30 transition-all duration-300"
                    >
                      <IconMail className="w-4 h-4" />
                      Open Email
                    </a>
                  )}
                  <a
                    href="tel:+97339007750"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white border border-white/15 hover:border-white/30 transition-all duration-300"
                  >
                    <IconPhone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Call Us</p>
                  <a href="tel:+97339007750" className="text-white hover:text-purple-400 transition-colors">
                    +973 3900 7750
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Email</p>
                  <a href="mailto:shareef@eventsbahrain.com" className="text-white hover:text-purple-400 transition-colors">
                    shareef@eventsbahrain.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Location</p>
                  <p className="text-white">Bahrain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 