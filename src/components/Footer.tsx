import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-warm-cream border-t border-[#E5E0D5] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="space-y-4 col-span-2 md:col-span-2">
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
          <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
            One intelligent ecosystem powering education, careers, travel, mindset, and thought leadership publishing.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-terracotta uppercase mb-5">Verticals</h4>
          <ul className="space-y-2.5 text-xs text-stone-600 font-mono uppercase tracking-wider">
            <li><Link to="/verticals/akromind" className="hover:text-terracotta transition-colors">AKROMIND</Link></li>
            <li><Link to="/verticals/akrotution" className="hover:text-terracotta transition-colors">AKROTUTION</Link></li>
            <li><Link to="/verticals/akroplacement" className="hover:text-terracotta transition-colors">AKROPLACEMENT</Link></li>
            <li><Link to="/verticals/akroholidays" className="hover:text-terracotta transition-colors">AKROHOLIDAYS</Link></li>
            <li><Link to="/verticals/akrobooks" className="hover:text-terracotta transition-colors font-bold text-warm-charcoal">AKROBOOKS</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-terracotta uppercase mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-stone-600">
            <li><Link to="/" className="hover:text-terracotta transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-terracotta transition-colors duration-200">About</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-terracotta transition-colors duration-200">Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta transition-colors duration-200">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-terracotta transition-colors duration-200 text-xs text-stone-400">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-terracotta uppercase mb-5">Contact Info</h4>
          <p className="text-sm text-stone-600 leading-relaxed">
            18, Kapoor Niwas, Dugri,<br />
            Ludhiana, Punjab, India 141001
          </p>
          <p className="text-sm text-stone-600 mt-2 font-mono hover:text-terracotta transition-colors">+91 771 978 3125</p>
          <a 
            href="mailto:hello.newakromind@gmail.com" 
            className="text-xs text-stone-500 font-mono mt-1 hover:text-terracotta transition-colors block"
          >
            hello.newakromind@gmail.com
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#E5E0D5]/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} New Akromind. All rights reserved.</p>
        <p className="font-serif italic text-stone-400">Crafting multidimensional journeys with precision</p>
      </div>
    </footer>
  );
}
