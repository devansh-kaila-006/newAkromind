import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/logo.png';

const verticals = [
  { 
    name: 'AKROMIND', 
    path: '/verticals/akromind', 
    desc: 'Mindset & Dynamic Guidance', 
    badge: 'Psychology' 
  },
  { 
    name: 'AKROTUTION', 
    path: '/verticals/akrotution', 
    desc: 'Symmetrical Academy Learning', 
    badge: 'Academics' 
  },
  { 
    name: 'AKROPLACEMENT', 
    path: '/verticals/akroplacement', 
    desc: 'Elite Work & Career Transitions', 
    badge: 'Careers' 
  },
  { 
    name: 'AKROHOLIDAYS', 
    path: '/verticals/akroholidays', 
    desc: 'Custom Journeys & Mountain Circuits', 
    badge: 'Voyages' 
  },
  { 
    name: 'AKROBOOKS', 
    path: '/verticals/akrobooks', 
    desc: 'Evidence Literature & Student Guides', 
    badge: 'Publishing' 
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-warm-cream/95 backdrop-blur-md border-b border-[#E5E0D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-xl sm:text-2xl font-bold text-warm-charcoal tracking-tight flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
          >
            <img 
              src={logoImg} 
              alt="New Akromind Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-xs shadow-xs group-hover:scale-105 transition-transform duration-200" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
            <span className="font-sans font-extrabold tracking-tight text-base sm:text-lg uppercase text-warm-charcoal group-hover:text-terracotta transition duration-200">
              New Akromind
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-7 lg:space-x-8 items-center">
            <Link to="/" className="text-stone-700 hover:text-terracotta transition-colors duration-200 text-xs uppercase tracking-wider font-semibold">Home</Link>
            <Link to="/about" className="text-stone-700 hover:text-terracotta transition-colors duration-200 text-xs uppercase tracking-wider font-semibold">About</Link>
            
            <div 
              className="relative py-2" 
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-stone-700 hover:text-terracotta flex items-center text-xs uppercase tracking-wider font-semibold gap-1 cursor-pointer focus:outline-none"
              >
                Our Verticals <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-[#FCFAF7] rounded-lg shadow-xl border border-[#E5E0D5] p-2 z-50"
                  >
                    {verticals.map(v => (
                      <Link 
                        key={v.name} 
                        to={v.path} 
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-3 hover:bg-warm-beige/60 rounded text-stone-800 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-warm-charcoal tracking-tight text-sm group-hover:text-terracotta transition-colors">{v.name}</span>
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded-2xs border border-stone-200">{v.badge}</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">{v.desc}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/why-choose-us" className="text-stone-700 hover:text-terracotta transition-colors duration-200 text-xs uppercase tracking-wider font-semibold">Why Choose Us</Link>
            <Link to="/contact" className="text-stone-700 hover:text-terracotta transition-colors duration-200 text-xs uppercase tracking-wider font-semibold">Contact</Link>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="bg-warm-charcoal text-white px-5 py-2.5 rounded-xs text-[11px] uppercase tracking-widest font-bold hover:bg-terracotta transition-colors shadow-xs">Get Started</Link>
            </motion.div>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <a 
              href="tel:+917719783125"
              className="p-2 text-stone-700 hover:text-terracotta transition-colors rounded-xs border border-[#E5E0D5] bg-[#FCFAF7]"
              aria-label="Direct Phone Consultation"
              title="Call Us"
            >
              <Phone className="w-4 h-4 text-terracotta" />
            </a>
            
            <button 
              className="bg-warm-beige/60 p-2.5 rounded-xs border border-[#E5E0D5] text-warm-charcoal cursor-pointer hover:bg-warm-beige transition active:scale-95 touch-manipulation" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-warm-charcoal" /> : <Menu className="w-5 h-5 text-warm-charcoal" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 bg-black/40 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Menu Slide-Down Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 max-h-[calc(100vh-4rem)] bg-[#FCFAF7] border-b border-[#E5E0D5] shadow-2xl z-50 overflow-y-auto md:hidden"
            >
              <div className="px-4 py-5 space-y-4">
                {/* Main Links */}
                <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs uppercase tracking-wider font-semibold">
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)} 
                    className="p-3 bg-white border border-[#E5E0D5] rounded-xs text-warm-charcoal active:bg-warm-cream"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setIsOpen(false)} 
                    className="p-3 bg-white border border-[#E5E0D5] rounded-xs text-warm-charcoal active:bg-warm-cream"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/why-choose-us" 
                    onClick={() => setIsOpen(false)} 
                    className="p-3 bg-white border border-[#E5E0D5] rounded-xs text-warm-charcoal active:bg-warm-cream"
                  >
                    Why Choose Us
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)} 
                    className="p-3 bg-white border border-[#E5E0D5] rounded-xs text-warm-charcoal active:bg-warm-cream"
                  >
                    Contact
                  </Link>
                </div>

                {/* Verticals section inside Mobile */}
                <div className="p-3.5 bg-warm-beige/35 rounded-xs border border-[#E5E0D5] space-y-2.5">
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[10px] uppercase font-bold text-terracotta font-mono tracking-widest">
                      Our Five Verticals
                    </span>
                    <span className="text-[10px] text-stone-500 font-serif italic">
                      Integrated Architecture
                    </span>
                  </div>

                  <div className="space-y-2 font-sans">
                    {verticals.map(v => (
                      <Link
                        key={v.name}
                        to={v.path}
                        onClick={() => setIsOpen(false)}
                        className="p-3 bg-[#FCFAF7] active:bg-warm-cream border border-[#E5E0D5] rounded-xs flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-warm-charcoal">{v.name}</div>
                          <div className="text-[11px] text-stone-500 font-serif italic">{v.desc}</div>
                        </div>
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-stone-100 text-stone-600 rounded-2xs border border-stone-200 shrink-0">
                          {v.badge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Quick Action Buttons */}
                <div className="space-y-2 pt-1">
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)} 
                    className="w-full bg-warm-charcoal text-white py-3.5 rounded-xs text-xs uppercase tracking-widest font-bold hover:bg-terracotta transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Book Free Discovery Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a 
                      href="tel:+917719783125"
                      className="py-2.5 px-3 bg-white border border-[#E5E0D5] rounded-xs text-warm-charcoal font-mono flex items-center justify-center gap-1.5 active:bg-stone-50 text-[11px]"
                    >
                      <Phone className="w-3 h-3 text-terracotta" />
                      <span>Call Advisor</span>
                    </a>
                    <a 
                      href="https://wa.me/917719783125?text=Hello%20New%20Akromind%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xs text-[#128C7E] font-mono font-bold flex items-center justify-center gap-1.5 active:bg-[#25D366]/20 text-[11px]"
                    >
                      <MessageSquare className="w-3 h-3 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Sub-footer inside drawer */}
                <div className="pt-2 text-center text-[10px] text-stone-500 font-mono flex items-center justify-center gap-1.5 border-t border-[#E5E0D5]/70">
                  <ShieldCheck className="w-3 h-3 text-terracotta" />
                  <span>Corporate Atelier · 18, Kapoor Niwas, Dugri, Ludhiana</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
