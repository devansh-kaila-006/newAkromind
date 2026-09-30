import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-20 space-y-16 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">Connect With Us</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Let’s start a <span className="font-serif italic font-normal text-terracotta">conversation</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-base leading-relaxed pt-2">
          Whether you’re seeking structural tutoring, elite job placements, bespoke voyages, or dynamic mindset counseling — our team is active and ready to guide you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-stretch font-sans">
        {/* Left Column: Direct channels */}
        <div className="bg-[#FCFAF7] p-8 border border-[#E5E0D5] flex flex-col justify-between rounded-sm">
          <div>
            <h3 className="text-[11px] font-bold tracking-widest text-[#7D7067] uppercase mb-8">Our Channels</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">Corporate Headquarters</h4>
                  <p className="text-stone-600 text-xs font-serif italic leading-relaxed">
                    18, Kapoor Niwas, Dugri,<br />
                    Ludhiana, Punjab, India 141001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">Direct Lines</h4>
                  <p className="text-stone-700 text-xs font-mono">+91 771 978 3125</p>
                  <p className="text-stone-700 text-xs font-mono">+91 771 079 9526</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">Electronic Support</h4>
                  <p className="text-stone-700 text-xs font-mono hover:text-terracotta transition-colors duration-200">
                    hello.newakromind@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Business Hours */}
        <div className="bg-[#1C1816] text-warm-cream p-8 border border-[#2D2623] flex flex-col justify-between rounded-sm">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-terracotta" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-terracotta">Standard Operations</h3>
            </div>
            
            <div className="space-y-4 text-xs font-sans text-stone-300">
              <div className="flex justify-between border-b border-stone-800 pb-2.5">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2.5">
                <span>Saturday</span>
                <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-terracotta font-serif italic text-sm">Closed / Relaxing</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 leading-relaxed pt-6 border-t border-stone-800 mt-8 font-serif italic">
            * Our support coordinators monitor electronic channels outside regular operations to address outstanding emergencies with maximum agility.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
