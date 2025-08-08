import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Dhandha</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Properties</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Agents</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign In
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-blue-600 block">Property in India</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover verified land, plots, and properties across tier 1, 2, and 3 cities. 
            Trusted by thousands of buyers, sellers, and agents nationwide.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input 
                  type="text" 
                  placeholder="Enter city or area" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Types</option>
                  <option>Land</option>
                  <option>Plot</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Any Budget</option>
                  <option>Under ₹10L</option>
                  <option>₹10L - ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>Above ₹1Cr</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Properties</h3>
            <p className="text-gray-600">All properties undergo 3-step verification including legal title and document checks.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pan-India Coverage</h3>
            <p className="text-gray-600">Find properties across tier 1, 2, and 3 cities with local expert agents.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Consumer Protection</h3>
            <p className="text-gray-600">Escrow services, legal verification, and fraud protection for secure transactions.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Verified Properties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Trusted Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹500Cr+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-xl font-bold">Dhandha</span>
              </div>
              <p className="text-gray-400">
                India&apos;s most trusted property marketplace platform for land, plots, and real estate.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Buy Property</a></li>
                <li><a href="#" className="hover:text-white">Sell Property</a></li>
                <li><a href="#" className="hover:text-white">Find Agents</a></li>
                <li><a href="#" className="hover:text-white">Property Verification</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Legal Documents</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">WhatsApp Support</a></li>
                <li><a href="#" className="hover:text-white">Email Support</a></li>
                <li><a href="#" className="hover:text-white">Phone Support</a></li>
                <li><a href="#" className="hover:text-white">Mobile App</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dhandha. All rights reserved. Made with ❤️ for the Indian real estate market.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
