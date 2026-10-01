import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/logo.png';

const verticals = [
  { name: 'AKROMIND', path: '/verticals/akromind', desc: 'Mindset & Dynamic Guidance' },
  { name: 'AKROTUTION', path: '/verticals/akrotution', desc: 'Symmetrical Academy Learning' },
  { name: 'AKROPLACEMENT', path: '/verticals/akroplacement', desc: 'Elite Work & Career Transitions' },
  { name: 'AKROHOLIDAYS', path: '/verticals/akroholidays', desc: 'Custom Journeys & Stranger Trips' },
  { name: 'AKROBOOKS', path: '/verticals/akrobooks', desc: 'Thought Leadership & Literature Publishing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-warm-cream/90 backdrop-blur-md border-b border-[#E5E0D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-warm-charcoal tracking-tight flex items-center gap-3 group cursor-pointer"
          >
            <img 
              src={logoImg} 
              alt="New Akromind Logo" 
              className="w-10 h-10 object-contain rounded-xs shadow-xs group-hover:scale-105 transition-transform duration-200" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
            <span className="font-sans font-extrabold tracking-tight text-lg uppercase text-warm-charcoal group-hover:text-terracotta transition duration-200">New Akromind</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-stone-700 hover:text-terracotta transition-colors duration-200 text-xs uppercase tracking-wider font-semibold">Home</Link>
            <Link to="/about" className="text-stone-700 hover:text-terracotta transition-colors duration-200 text-xs uppercase tracking-wider font-semibold">About</Link>
            
            <div 
              className="relative py-2" 
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className="text-stone-700 hover:text-terracotta flex items-center text-xs uppercase tracking-wider font-semibold gap-1 cursor-pointer focus:outline-none"
              >
                Our Verticals <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-72 bg-[#FCFAF7] rounded-lg shadow-lg border border-[#E5E0D5] p-2 z-50"
                  >
                    {verticals.map(v => (
                      <Link 
                        key={v.name} 
                        to={v.path} 
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-3 hover:bg-warm-beige/60 rounded text-stone-800 transition-colors"
                      >
                        <div className="font-bold text-warm-charcoal tracking-tight flex items-center gap-1.5 text-sm">
                          <span>{v.name}</span>
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
              <Link to="/contact" className="bg-warm-charcoal text-white px-5 py-2.5 rounded text-[11px] uppercase tracking-widest font-bold hover:bg-terracotta transition-colors shadow-xs">Get Started</Link>
            </motion.div>
          </div>

          {/* Toggle Button for Mobile */}
          <button 
            className="md:hidden bg-warm-beige/40 p-2.5 rounded border border-[#E5E0D5] text-warm-charcoal cursor-pointer hover:bg-warm-beige/80 transition" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FCFAF7] border-b border-[#E5E0D5] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="block p-3 hover:bg-warm-beige/55 rounded font-semibold text-warm-charcoal text-sm"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)} 
                className="block p-3 hover:bg-warm-beige/55 rounded font-semibold text-warm-charcoal text-sm"
              >
                About
              </Link>
              
              {/* Verticals section inside Mobile */}
              <div className="p-3 bg-warm-beige/30 rounded border border-[#E5E0D5]/70 space-y-2">
                <span className="text-[10px] uppercase font-bold text-terracotta font-sans tracking-widest px-1">Our Verticals</span>
                <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
                  {verticals.map(v => (
                    <Link
                      key={v.name}
                      to={v.path}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 bg-[#FCFAF7] hover:bg-warm-beige/65 border border-[#E5E0D5] rounded-sm"
                    >
                      <div className="text-xs font-bold text-warm-charcoal">{v.name}</div>
                      <div className="text-[9px] text-stone-500 font-medium select-none mt-0.5">{v.name === 'AKROMIND' ? 'Counseling' : v.name === 'AKROTUTION' ? 'Education' : v.name === 'AKROPLACEMENT' ? 'Career' : 'Travel'}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/why-choose-us" 
                onClick={() => setIsOpen(false)} 
                className="block p-3 hover:bg-warm-beige/55 rounded font-semibold text-warm-charcoal text-sm"
              >
                Why Choose Us
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="block p-3 hover:bg-warm-beige/55 rounded font-semibold text-warm-charcoal text-sm"
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full bg-warm-charcoal text-white py-3 rounded text-[11px] uppercase tracking-widest font-bold hover:bg-terracotta transition-colors flex justify-center text-center shadow-sm"
                >
                  Consultation Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
