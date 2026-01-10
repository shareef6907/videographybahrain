'use client'

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold gradient-text mb-2">Bahrain Nights</p>
            <p className="text-gray-400">CR 113587-1 | Manama, Kingdom of Bahrain</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Professional Videography & Film Production Services</p>
              <p>Wedding Films | Corporate Videos | Event Coverage</p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <a href="tel:+97339007750" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+973 3900 7750</span>
            </a>
            <a href="mailto:shareef@eventsbahrain.com" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>shareef@eventsbahrain.com</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Wedding Videography</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Corporate Film Production</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Event Video Coverage</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Documentary Filmmaking</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">TVC Advertisements</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-semibold mb-4 text-lg">Service Areas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Manama, Bahrain</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Riffa, Bahrain</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Muharraq, Bahrain</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Seef District, Bahrain</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Juffair, Bahrain</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-semibold mb-4 text-lg">Equipment</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Professional Cinema Cameras</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Premium Lenses & Lighting</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Stabilization Systems</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">High-End Drone Equipment</li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer">Professional Audio Recording</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BahrainNights Link */}
        <div className="mt-8 pt-8 text-center border-t border-white/10">
          <p className="text-gray-400">
            Discover events, venues & nightlife:{' '}
            <a 
              href="https://www.bahrainnights.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              BahrainNights.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 text-center text-sm text-gray-500 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Videography Bahrain. All rights reserved.</p>
          <p className="mt-2">Bahrain's Premier <span className="gradient-text font-semibold">Film Production Company</span> - Cinematic Storytelling</p>
        </div>
      </div>
    </footer>
  )
}
