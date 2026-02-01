import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  Flame,
  Snowflake,
  Heart,
  Calendar,
  Users,
  Utensils,
  CircleDot,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const benefits = [
    {
      title: "Detoxification",
      description: "Sweating is the body's safe and natural way to heal and stay healthy. Sauna heats the body directly causing a rise in core temperature resulting in a deep, detoxifying sweat at the cellular level, where toxins reside."
    },
    {
      title: "Lower Blood Pressure",
      description: "Saunas induce a deep sweat to make the heart pump faster, which in turn increases blood flow, lowers blood pressure and helps circulation. Scientific evidence shows that visiting a sauna couple times a week lowers blood pressure."
    },
    {
      title: "Cell Health & Anti-Aging",
      description: "Sauna therapy stimulates the circulatory system and more fully oxygenate the body's cells. Better blood circulation means more toxins flow from the cellular level to the skin's surface to improve cell health, aid in muscle recovery and strengthen the immune system."
    },
    {
      title: "Weight Loss",
      description: "Studies have shown that a single sauna visit can burn upwards of 700 calories while you relax! As the body works to cool itself, there is a substantial increase in heart rate, cardiac output and metabolic rate."
    },
    {
      title: "Improved Circulation",
      description: "Heating the muscles produces an increase in blood flow similar to that seen during exercise. Regular sauna use can significantly stimulate blood flow up to twice the normal rate and increased blood circulation to the skin prevents and reduces cellulite."
    },
    {
      title: "Pain Relief",
      description: "Heat penetrates tissue, joints, and muscles to relieve anything from minor aches and pains to chronic pain conditions such as fibromyalgia. Pain management professionals incorporate heat therapy into treatment plans."
    }
  ];

  const facilities = [
    { name: "River Rock Sauna", icon: Flame },
    { name: "Granite Sauna", icon: CircleDot },
    { name: "Steam Room", icon: Droplets },
    { name: "Cold Plunge", icon: Snowflake },
    { name: "Hot Tub", icon: Heart },
    { name: "VIP Lounge", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Droplets className="w-7 h-7 text-stone-700" strokeWidth={1.5} />
              <span className="text-xl tracking-wide font-light">MARLBORO BANYA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm tracking-wider">
              <a href="#experience" className="hover:text-stone-500 transition-colors duration-300">EXPERIENCE</a>
              <a href="#admission" className="hover:text-stone-500 transition-colors duration-300">ADMISSION</a>
              <a href="#contact" className="hover:text-stone-500 transition-colors duration-300">CONTACT</a>
              <a 
                href="https://marlborobanya.square.site" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-stone-900 text-white hover:bg-stone-700 transition-all duration-300"
              >
                BOOK NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200">
            <div className="px-6 py-6 space-y-4">
              <a href="#experience" className="block text-sm tracking-wider hover:text-stone-500">EXPERIENCE</a>
              <a href="#admission" className="block text-sm tracking-wider hover:text-stone-500">ADMISSION</a>
              <a href="#contact" className="block text-sm tracking-wider hover:text-stone-500">CONTACT</a>
              <a 
                href="https://marlborobanya.square.site" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-2.5 bg-stone-900 text-white text-sm tracking-wider"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeIn">
            <Droplets className="w-20 h-20 mx-auto text-stone-700 mb-6" strokeWidth={1} />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6 animate-fadeIn" style={{animationDelay: '0.1s'}}>
            MARLBORO BANYA
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-600 tracking-wide mb-12 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Modern Upscale Bathhouse
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <a 
              href="#experience" 
              className="px-8 py-4 bg-stone-900 text-white text-sm tracking-widest hover:bg-stone-700 transition-all duration-300 w-full sm:w-auto"
            >
              DISCOVER
            </a>
            <a 
              href="https://marlborobanya.square.site" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-stone-900 text-stone-900 text-sm tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              BOOK VISIT
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-stone-400" strokeWidth={1.5} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-8">
                A Sanctuary of <br />Renewal
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6 font-light">
                Experience the ancient tradition of Russian banya reimagined for modern luxury. Our state-of-the-art facilities combine time-honored practices with contemporary comfort.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                From therapeutic heat cycles to restorative cold plunges, every element is designed to rejuvenate your body and calm your mind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div 
                    key={index} 
                    className="p-8 bg-stone-50 hover:bg-stone-100 transition-all duration-500 group"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <Icon className="w-8 h-8 mb-4 text-stone-700 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    <h3 className="text-sm tracking-wider font-light">{facility.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 md:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-center mb-6">
            Our Facilities
          </h2>
          <p className="text-center text-stone-600 mb-16 font-light text-lg">
            Meticulously crafted spaces for your wellness journey
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden aspect-[4/3] bg-stone-200">
              <img 
                src="https://www.marlborobanya.com/images/fulls/1.jpg"
                alt="River Rock Sauna with cedar benches"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-light tracking-wide mb-2">River Rock Sauna</h3>
                  <p className="text-white/90 font-light">Cedar benches and river stone walls</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-[4/3] bg-stone-200">
              <img 
                src="https://www.marlborobanya.com/images/fulls/3.jpg"
                alt="Granite Sauna with traditional design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-light tracking-wide mb-2">Granite Sauna</h3>
                  <p className="text-white/90 font-light">Traditional stone construction with modern comfort</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden aspect-[4/3] bg-stone-200">
              <img 
                src="https://www.marlborobanya.com/images/fulls/2.jpg"
                alt="Premium sauna facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-light tracking-wide mb-2">Sauna Experience</h3>
                  <p className="text-white/90 font-light">State-of-the-art thermal therapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-center mb-20">
            Exceptional Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Flame className="w-12 h-12 mx-auto mb-6 text-stone-700" strokeWidth={1.5} />
              <h3 className="text-xl font-light tracking-wide mb-4">Four State-of-the-Art Saunas</h3>
              <p className="text-stone-600 leading-relaxed font-light">
                River rock, granite, cedar, and steam rooms designed for the ultimate thermal experience
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-6 text-stone-700" strokeWidth={1.5} />
              <h3 className="text-xl font-light tracking-wide mb-4">Expert Massage Services</h3>
              <p className="text-stone-600 leading-relaxed font-light">
                Swedish, sports, and deep tissue massage by certified professionals
              </p>
            </div>
            <div className="text-center">
              <Utensils className="w-12 h-12 mx-auto mb-6 text-stone-700" strokeWidth={1.5} />
              <h3 className="text-xl font-light tracking-wide mb-4">Culinary Excellence</h3>
              <p className="text-stone-600 leading-relaxed font-light">
                Restaurant with delicious food and VIP lounge. BYOB welcome
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Benefits */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-center mb-6">
            Wellness Benefits
          </h2>
          <p className="text-center text-stone-600 mb-16 font-light text-lg">
            Rejuvenate, lose weight, and detoxify through thermal therapy
          </p>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-b border-stone-200 last:border-0">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-stone-600 transition-colors duration-300"
                >
                  <span className="text-xl font-light tracking-wide">{benefit.title}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${activeSection === index ? 'rotate-180' : ''}`} 
                    strokeWidth={1.5}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeSection === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className="text-stone-600 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Pricing */}
      <section id="admission" className="py-24 md:py-32 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-center mb-20">
            Admission & Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-8 text-stone-300">Day Passes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">Day Pass</span>
                  <span className="text-xl">$60</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">Students / Military (Valid ID)</span>
                  <span className="text-xl">$50</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">Kids Under 12</span>
                  <span className="text-xl">$30</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light tracking-wide mb-8 text-stone-300">Memberships</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">Monthly Membership</span>
                  <span className="text-xl">$235</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">Student Monthly</span>
                  <span className="text-xl">$195</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">10 Admissions</span>
                  <span className="text-xl">$495</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-stone-700">
                  <span className="font-light">Annual Membership</span>
                  <span className="text-xl">$1,499</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-light tracking-wide mb-8 text-stone-300 text-center">Massage Services</h3>
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-stone-700">
                <span className="font-light">30 Minutes</span>
                <span className="text-xl">$75</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-stone-700">
                <span className="font-light">60 Minutes</span>
                <span className="text-xl">$115</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://marlborobanya.square.site" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-stone-900 text-sm tracking-widest hover:bg-stone-100 transition-all duration-300"
            >
              PURCHASE ONLINE
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-center mb-20">
            Visit Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm tracking-widest text-stone-500 mb-4">HOURS</h3>
                <div className="space-y-2 text-lg font-light">
                  <p>Monday - Wednesday: 2pm - Midnight</p>
                  <p>Thursday: 2pm - 1am</p>
                  <p>Friday: 2pm - Midnight</p>
                  <p>Saturday - Sunday: 11am - Midnight</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-stone-500 mb-4">LOCATION</h3>
                <div className="space-y-2 text-lg font-light">
                  <p>Marlboro Business Park</p>
                  <p>165 Amboy Road</p>
                  <p>Morganville, NJ 07751</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-stone-500 mb-4">CONTACT</h3>
                <div className="space-y-3">
                  <a href="tel:732-812-1030" className="flex items-center gap-3 text-lg font-light hover:text-stone-600 transition-colors">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                    732-812-1030
                  </a>
                  <a href="mailto:marlborobanya@gmail.com" className="flex items-center gap-3 text-lg font-light hover:text-stone-600 transition-colors">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                    marlborobanya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <a 
                  href="https://www.facebook.com/marlborobanya" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a 
                  href="https://www.instagram.com/marlborobanya" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form method="post" action="https://formspree.io/marlborobanya@gmail.com" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="px-6 py-4 bg-white border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors text-sm tracking-wide"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="px-6 py-4 bg-white border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors text-sm tracking-wide"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-white border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors text-sm tracking-wide resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-stone-900 text-white text-sm tracking-widest hover:bg-stone-700 transition-all duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Droplets className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-sm tracking-widest">MARLBORO BANYA</span>
            </div>
            <p className="text-sm text-stone-400 font-light">
              © {new Date().getFullYear()} Marlboro Banya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
