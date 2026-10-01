import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-cream border-t border-[#E5E0D5] py-12 sm:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        
        {/* Brand Description */}
        <div className="space-y-4 sm:col-span-2">
          <div className="flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="New Akromind Logo" 
              className="w-8 h-8 object-contain rounded-xs" 
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h3 className="text-2xl font-serif font-bold text-warm-charcoal tracking-tight">
              New <span className="font-serif italic font-normal text-terracotta">Akromind</span>
            </h3>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed max-w-sm font-serif">
            One intelligent ecosystem powering education, careers, travel, mindset, and thought leadership publishing.
          </p>
          <div className="pt-1 flex flex-wrap gap-2 text-xs">
            <a 
              href="https://wa.me/917719783125?text=Hello%20New%20Akromind%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xs font-mono text-[11px] font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
            <a 
              href="tel:+917719783125"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-stone-700 hover:text-terracotta border border-[#E5E0D5] rounded-xs font-mono text-[11px] font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-terracotta" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

        {/* Verticals */}
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-terracotta uppercase mb-4 sm:mb-5 font-mono">
            Verticals
          </h4>
          <ul className="space-y-3 text-xs text-stone-600 font-mono uppercase tracking-wider">
            <li>
              <Link to="/verticals/akromind" className="hover:text-terracotta transition-colors py-1 block">
                AKROMIND · Counseling
              </Link>
            </li>
            <li>
              <Link to="/verticals/akrotution" className="hover:text-terracotta transition-colors py-1 block">
                AKROTUTION · Academics
              </Link>
            </li>
            <li>
              <Link to="/verticals/akroplacement" className="hover:text-terracotta transition-colors py-1 block">
                AKROPLACEMENT · Careers
              </Link>
            </li>
            <li>
              <Link to="/verticals/akroholidays" className="hover:text-terracotta transition-colors py-1 block">
                AKROHOLIDAYS · Voyages
              </Link>
            </li>
            <li>
              <Link to="/verticals/akrobooks" className="hover:text-terracotta transition-colors font-bold text-warm-charcoal py-1 block">
                AKROBOOKS · Publishing
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-terracotta uppercase mb-4 sm:mb-5 font-mono">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-terracotta transition-colors duration-200 py-1 block">Home</Link></li>
            <li><Link to="/about" className="hover:text-terracotta transition-colors duration-200 py-1 block">About Us</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-terracotta transition-colors duration-200 py-1 block">Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta transition-colors duration-200 py-1 block">Contact Desk</Link></li>
            <li><Link to="/privacy" className="hover:text-terracotta transition-colors duration-200 text-xs text-stone-400 py-1 block">Privacy & Terms</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-terracotta uppercase mb-4 sm:mb-5 font-mono">
            Corporate Atelier
          </h4>
          <p className="text-xs text-stone-600 leading-relaxed font-serif">
            18, Kapoor Niwas, Dugri,<br />
            Ludhiana, Punjab, India 141001
          </p>
          <div className="pt-2 space-y-1.5">
            <a 
              href="tel:+917719783125" 
              className="text-xs text-stone-700 font-mono hover:text-terracotta transition-colors block py-0.5"
            >
              +91 771 978 3125
            </a>
            <a 
              href="mailto:hello.newakromind@gmail.com" 
              className="text-xs text-stone-500 font-mono hover:text-terracotta transition-colors block py-0.5 break-all"
            >
              hello.newakromind@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-[#E5E0D5]/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500 text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} New Akromind. All rights reserved.</p>
        <p className="font-serif italic text-stone-400 text-xs">
          Crafting multidimensional human growth with precision
        </p>
      </div>
    </footer>
  );
}
