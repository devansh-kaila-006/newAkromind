import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle } from 'lucide-react';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';

const contactFaqs: FAQItem[] = [
  {
    category: 'Consultation & Scheduling',
    q: 'How does the initial Discovery Consultation work?',
    a: 'When you reach out via email or phone, our coordinator responds within 2 hours to confirm your current focus area (AKROTUTION, AKROPLACEMENT, AKROHOLIDAYS, or AKROMIND). We then schedule a 30-minute one-on-one session with the relevant vertical director to evaluate your targets and build a preliminary milestone roadmap.'
  },
  {
    category: 'Consultation & Scheduling',
    q: 'Is the Discovery Consultation completely free of charge?',
    a: 'Yes, our initial 30-minute consultation is 100% complimentary with zero obligation. We believe that choosing an academic tutor, career coach, counselor, or travel curator requires mutual trust and pedagogical alignment.'
  },
  {
    category: 'Operations & Hours',
    q: 'Can I visit the New Akromind physical headquarters in Ludhiana?',
    a: 'Yes, we warmly welcome parents, students, and corporate partners to visit our physical atelier at 18, Kapoor Niwas, Dugri, Ludhiana, Punjab. We recommend giving our reception a quick phone call before visiting so that the relevant vertical director is available to host you.'
  },
  {
    category: 'Support & Response',
    q: 'What are your standard response times for phone and email inquiries?',
    a: 'Phone inquiries are answered immediately during standard business hours (Monday to Friday, 9:00 AM - 6:00 PM IST; Saturday, 10:00 AM - 4:00 PM IST). Electronic email requests sent to hello.newakromind@gmail.com receive a comprehensive written reply within 2 to 4 business hours.'
  },
  {
    category: 'Emergency & Urgent Queries',
    q: 'How do you handle urgent travel support or emergency counseling needs?',
    a: 'For travelers currently on an active AKROHOLIDAYS tour or students requiring urgent counseling de-escalation, our 24/7 Emergency Response Line is active around the clock with a guaranteed under-15-minute coordinator callback.'
  }
];

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 py-20 space-y-20 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">
          Direct Channels
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Let’s start a <span className="font-serif italic font-normal text-terracotta">conversation.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          Whether you’re seeking structured tutoring, an elite career transition, a bespoke journey, or empathetic counseling: our directors are active and ready to guide you.
        </p>
      </header>

      {/* Direct Contact Cards */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch font-sans">
        {/* Left Column: Direct channels */}
        <div className="bg-[#FCFAF7] p-8 md:p-10 border border-[#E5E0D5] flex flex-col justify-between rounded-sm space-y-8">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-terracotta uppercase block mb-6">
              Official Headquarters & Channels
            </span>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">Corporate Atelier</h4>
                  <p className="text-stone-600 text-xs font-serif italic leading-relaxed">
                    18, Kapoor Niwas, Dugri,<br />
                    Ludhiana, Punjab, India 141001
                  </p>
                  <p className="text-[10px] text-stone-400 font-mono pt-1">30°54'N · 75°51'E</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">Direct Advisory Lines</h4>
                  <p className="text-stone-800 text-xs font-mono font-bold">+91 771 978 3125</p>
                  <p className="text-stone-800 text-xs font-mono font-bold">+91 771 079 9526</p>
                  <p className="text-[10px] text-stone-500 font-serif italic pt-0.5">Available for WhatsApp & voice consultations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">Electronic Inquiries</h4>
                  <a 
                    href="mailto:hello.newakromind@gmail.com" 
                    className="text-stone-800 text-xs font-mono font-bold hover:text-terracotta transition-colors block"
                  >
                    hello.newakromind@gmail.com
                  </a>
                  <p className="text-[10px] text-stone-500 font-serif italic pt-0.5">Response SLA: &lt;4 hours during business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Business Hours & Consultation Protocol */}
        <div className="bg-[#1C1816] text-warm-cream p-8 md:p-10 border border-[#2D2623] flex flex-col justify-between rounded-sm space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
              <Clock className="w-4 h-4 text-terracotta" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-white">Standard Advisory Hours</h3>
            </div>
            
            <div className="space-y-3.5 text-xs font-sans text-stone-300">
              <div className="flex justify-between border-b border-stone-800 pb-2.5">
                <span>Monday - Friday</span>
                <span className="font-semibold text-white font-mono">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2.5">
                <span>Saturday</span>
                <span className="font-semibold text-white font-mono">10:00 AM - 4:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-terracotta font-serif italic text-xs">Family & Restorative Day</span>
              </div>
            </div>

            <div className="pt-4 space-y-3 border-t border-stone-800">
              <div className="flex items-center gap-2 text-terracotta font-mono text-[10px] uppercase font-bold tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>How to Book Your Free 30-Min Discovery Call</span>
              </div>
              <p className="text-xs text-stone-400 font-serif italic leading-relaxed">
                Send an email or message indicating your primary interest (AKROTUTION, AKROPLACEMENT, AKROHOLIDAYS, or AKROMIND) and your preferred consultation day/time. We match you with the appropriate vertical director within 2 hours.
              </p>
            </div>
          </div>

          <div className="p-4 bg-stone-900 border border-stone-800 rounded-xs space-y-1">
            <div className="text-[10px] text-terracotta font-mono uppercase font-bold">24/7 Traveler & Crisis Hotline</div>
            <p className="text-[11px] text-stone-400 font-serif italic">
              Active clients on tour or with emergency counseling requests are monitored 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Contact FAQ Section */}
      <section className="space-y-8">
        <FaqAccordion 
          items={contactFaqs}
          title="Inquiry & Consultation FAQs"
          subtitle="Everything you need to know about scheduling a consultation and visiting our offices"
        />
      </section>
    </motion.div>
  );
}
