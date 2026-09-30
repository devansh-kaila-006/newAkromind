import { motion } from 'motion/react';
import { Target, Heart, Lightbulb, Layers, Activity, Award, Shield, Compass, BookOpen, Check } from 'lucide-react';
import EditorialVisual from '../components/EditorialVisual';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';

const aboutFaqs: FAQItem[] = [
  {
    category: 'Foundations & Governance',
    q: 'Where is New Akromind based, and what is its operational structure?',
    a: 'New Akromind is headquartered at 18, Kapoor Niwas, Dugri, Ludhiana, Punjab (141001), operating as an integrated multi-vertical enterprise. We maintain dedicated physical consulting ateliers in North India alongside an enterprise digital infrastructure serving students, professionals, and travelers across India, the Middle East, Southeast Asia, and Europe.'
  },
  {
    category: 'Foundations & Governance',
    q: 'Why did New Akromind combine education, careers, travel, and mental health counseling?',
    a: 'We observed that traditional coaching institutions treat education in a hyper-stressful vacuum, leading to severe student burnout; corporate placement agencies operate on transactional commissions; and travel providers offer generic, rushed tourist circuits. Human beings are multi-dimensional: sustainable academic excellence requires mental calm, career transitions need emotional confidence, and families need periodic restorative voyages to reconnect.'
  },
  {
    category: 'Quality & Vetting',
    q: 'How does New Akromind vet and audit its faculty, counselors, and tour guides?',
    a: 'We maintain an uncompromising accreditation filter. Academic tutors must have graduation degrees from premier institutions (IITs, NITs, central universities) with a verified minimum of 6 years of subject teaching. Psychological counselors must hold accredited master’s degrees and active ethical licensing. International tour guides must have government tourist board certification and flawless safety track records.'
  },
  {
    category: 'Institutional Ethics',
    q: 'What is your stance on educational commissions and corporate kickbacks?',
    a: 'We operate with strict fiduciary independence. We do not accept covert commissions from universities for pushing specific college admissions, nor do we accept referral kickbacks from low-quality hiring mills. Our recommendations are 100% aligned with the individual student or professional’s verified aptitudes.'
  },
  {
    category: 'Community & CSR',
    q: 'Does New Akromind support students from underprivileged backgrounds?',
    a: 'Yes. Through the Akromind Foundation Initiative, 10% of our academic batch seats in AkroTution and counseling quotas in AkroMind are reserved for deserving candidates from economically challenged backgrounds, provided on a full scholarship basis with all study materials and test access included.'
  },
  {
    category: 'Vision & Roadmaps',
    q: 'What are New Akromind’s expansion plans for the coming years?',
    a: 'Our roadmap includes establishing regional experiential centers across Delhi NCR, Chandigarh, Bangalore, and Mumbai, expanding our corporate hiring partner network beyond 1,000 global enterprises, and launching immersive European and Scandinavian study-travel cultural exchanges.'
  }
];

const coreValuesList = [
  { 
    name: 'Symmetrical Excellence', 
    desc: 'Delivering our absolute highest standard in every single classroom worksheet, code mock interview, psychological session, and travel itinerary without compromise.',
    icon: Award,
  },
  { 
    name: 'Human-First Empathy', 
    desc: 'Recognizing that true human capability flourishes only when supported by genuine psychological safety, empathetic listening, and mutual respect.',
    icon: Heart,
  },
  { 
    name: 'Radical Transparency', 
    desc: 'Clear upfront pricing, honest probability assessments for competitive exams, realistic salary benchmarks, and zero hidden travel expenses.',
    icon: Shield,
  },
  { 
    name: 'Continuous Innovation', 
    desc: 'Deploying rigorous cognitive diagnostic toolkits, real-time performance analytics dashboards, and modernized curriculum architectures.',
    icon: Lightbulb,
  },
  { 
    name: 'Collaborative Synergy', 
    desc: 'Bridging the generational perspectives of parents and students, while aligning the aspirations of candidates with top-tier hiring managers.',
    icon: Layers,
  },
  { 
    name: 'Verified Impact', 
    desc: 'Measuring our institutional success solely through tangible client milestones: board distinctions, IIT admissions, salary leaps, and joyful family memories.',
    icon: Activity,
  }
];

const milestones = [
  {
    year: '2023',
    title: 'Genesis: Diagnostic Mindset Consultancy',
    desc: 'Founded in Ludhiana as an specialized adolescent stream selection and cognitive counseling consultancy, helping 400+ students overcome exam anxiety and choose the right academic tracks.',
    icon: Target
  },
  {
    year: '2024',
    title: 'Launch of AkroTution & AkroPlacement',
    desc: 'Expanded into academic STEM tutoring with IITian mentors, rapidly followed by an enterprise corporate career accelerator with 200+ inaugural hiring partner tie-ups.',
    icon: BookOpen
  },
  {
    year: '2025',
    title: 'AkroHolidays & Explorer Loyalty Engine',
    desc: 'Introduced curated domestic and international travel circuits across 25+ countries, interconnecting the ecosystem through transferable Explorer reward points.',
    icon: Compass
  },
  {
    year: '2026',
    title: 'Pan-India & International Synthesis',
    desc: 'Operating with 10,000+ mentored students, 500+ corporate hiring partners, and unified multi-vertical advisory supporting families across every stage of growth.',
    icon: Award
  }
];

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">Our Manifesto</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          One vision. <span className="font-serif italic font-normal text-terracotta">Multiple dimensions.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          New Akromind is a cohesive, multi-vertical growth architecture engineered in Punjab, serving families and professionals across India and internationally.
        </p>
      </header>

      {/* Visual Artwork */}
      <EditorialVisual 
        type="about"
        aspectRatio="21:9"
        badge="Institutional Heritage"
        title="Evolution of the Multi-Vertical Blueprint"
        caption="From diagnostic stream consultancy to an interconnected national growth ecosystem"
      />

      {/* Mission & Vision - Symmetric Box layout */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#FCFAF7] p-8 md:p-12 border border-[#E5E0D5] space-y-4 rounded-sm">
          <div className="text-[10px] uppercase font-bold text-terracotta tracking-widest font-mono">Our Mandate</div>
          <h3 className="text-2xl font-serif italic text-warm-charcoal">The Mission</h3>
          <p className="text-stone-600 text-sm leading-relaxed font-sans">
            To deliver world-class, integrated resources across academic tutoring, corporate career placement, empathetic counseling, and authentic global voyages, equipping every individual to design their life with total clarity, confidence, and peace of mind.
          </p>
          <div className="pt-2 text-xs text-stone-500 font-serif italic border-t border-[#E5E0D5]/60">
            Unifying high performance with mental serenity across every demographic.
          </div>
        </div>

        <div className="bg-[#FCFAF7] p-8 md:p-12 border border-[#E5E0D5] space-y-4 rounded-sm">
          <div className="text-[10px] uppercase font-bold text-terracotta tracking-widest font-mono">Our Horizon</div>
          <h3 className="text-2xl font-serif italic text-warm-charcoal">The Vision</h3>
          <p className="text-stone-600 text-sm leading-relaxed font-sans">
            To stand as India’s premier, trustworthy multi-vertical institution, continuously bridging personal human aspirations with rigorous scientific training, high-band salaries, and memorable life journeys for millions of learners and families.
          </p>
          <div className="pt-2 text-xs text-stone-500 font-serif italic border-t border-[#E5E0D5]/60">
            Setting the gold standard for integrated human development in the 21st century.
          </div>
        </div>
      </section>

      {/* Corporate pillars of craft */}
      <section className="space-y-16">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-[#7D7067] uppercase">Institutional Standards</span>
          <h2 className="text-3xl font-serif italic text-warm-charcoal">Our Six Pillars of Craft</h2>
          <p className="text-xs text-stone-600 font-serif max-w-xl mx-auto">
            These six non-negotiable principles govern every lesson plan drafted, every career consultation scheduled, and every travel itinerary booked.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValuesList.map(v => {
            const IconComp = v.icon;
            return (
              <div 
                key={v.name} 
                className="bg-[#FCFAF7] p-8 border border-[#E5E0D5] space-y-5 hover:border-terracotta transition-colors duration-300 rounded-sm"
              >
                <div className="w-10 h-10 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm">
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-warm-charcoal font-sans text-[15px]">{v.name}</h4>
                  <p className="text-stone-600 text-xs leading-relaxed font-serif italic">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Swiss Editorial Milestones */}
      <section className="bg-[#1C1816] text-warm-cream p-8 md:p-16 rounded-sm space-y-16 border border-[#2D2623]">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta">Evolutionary Steps</span>
          <h2 className="text-3xl font-serif italic text-warm-cream">The Akromind Historical Trajectory</h2>
          <p className="text-stone-400 text-xs leading-relaxed font-sans">
            Witness our strategic build cycle since inception, growing from a regional Punjab diagnostic stream consultancy into a national multi-vertical force of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {milestones.map((mil, idx) => {
            const IconC = mil.icon;
            return (
              <div 
                key={mil.year} 
                className="bg-[#241F1D] p-6 border border-stone-850 space-y-5 relative rounded-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <span className="text-2xl font-serif italic font-bold text-terracotta">{mil.year}</span>
                    <div className="border border-stone-700/40 p-2 rounded-sm text-stone-300 bg-[#1C1816]">
                      <IconC className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white font-sans">{mil.title}</h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-serif italic">{mil.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Institutional FAQs */}
      <section className="space-y-8">
        <FaqAccordion 
          items={aboutFaqs}
          title="Institutional Frequently Asked Questions"
          subtitle="Learn more about our governance, headquarters, ethics, and future plans"
        />
      </section>
    </motion.div>
  );
}
