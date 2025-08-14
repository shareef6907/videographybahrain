'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
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