import React from 'react';
import { Shield, Lock, Server, Users, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Secure Your Digital Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Expert IT consultation and cybersecurity insurance solutions to protect your business in an ever-evolving digital landscape.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            Get Started <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-pink-500" />,
                title: "Cybersecurity Insurance",
                description: "Comprehensive coverage against digital threats and data breaches."
              },
              {
                icon: <Lock className="w-8 h-8 text-purple-500" />,
                title: "Security Assessment",
                description: "In-depth analysis of your IT infrastructure and security posture."
              },
              {
                icon: <Server className="w-8 h-8 text-pink-500" />,
                title: "Infrastructure Planning",
                description: "Strategic IT infrastructure design and implementation."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-pink-500/50 transition-colors">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-pink-900/10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                alt="Cybersecurity Operations"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Users className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-400">Industry-certified professionals with years of experience in cybersecurity.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Shield className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-400">Tailored insurance solutions that protect against modern cyber threats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-pink-500" />
                <p>contact@cloudshieldx.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-purple-500" />
                <p>305.849.8975</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-pink-500" />
                <p>Miami, Florida</p>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-pink-500 focus:outline-none"
              />
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 CloudShieldX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;