import { motion } from 'motion/react';
import { Target, Heart, Lightbulb, Layers, Activity, Award, Shield, Compass, BookOpen } from 'lucide-react';

const coreValuesList = [
  { 
    name: 'Excellence', 
    desc: 'Delivering only our absolute best effort in every single counseling session, class syllabus, and vacation itinerary.',
    icon: Award,
  },
  { 
    name: 'Empathy-Led', 
    desc: 'Prioritizing genuine human comfort because healthy minds form the base of outstanding careers, travels, and grades.',
    icon: Heart,
  },
  { 
    name: 'Transparent Operations', 
    desc: 'Outlining honest program structures and realistic probability benchmarks across placements and college tracks.',
    icon: Shield,
  },
  { 
    name: 'Dynamic Innovations', 
    desc: 'Constantly deploying diagnostic analytics platforms, feedback trackers, and lateral thinking tools.',
    icon: Lightbulb,
  },
  { 
    name: 'Collaborations', 
    desc: 'Fostering bridges between parents and students, mentoring candidates and corporations to rise as one.',
    icon: Layers,
  },
  { 
    name: 'Real Impact', 
    desc: 'Measuring success through verified client outcomes: higher scores, high-band salaries, and memorable travel logs.',
    icon: Activity,
  }
];

const milestones = [
  {
    year: '2023',
    title: 'Intellectual Seed & Genesis',
    desc: 'Founded as a specialized mental health & diagnostic stream consultancy for students.',
    icon: Target
  },
  {
    year: '2024',
    title: 'AkroTution & AkroPlacement',
    desc: 'Launched core tutoring with top academic resources, followed by direct corporate placement pipelines.',
    icon: BookOpen
  },
  {
    year: '2025',
    title: 'Authentic Tours & Holidays',
    desc: 'Expanded into custom-crafted domestic and international tours and seasonal reward wallets.',
    icon: Compass
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
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">Our Story</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          One vision. <span className="font-serif italic font-normal text-terracotta">Multiple dimensions.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          New Akromind is a cohesive, multi-vertical ecosystem designed to empower individuals and families across structured education, high-band careers, customized travel, and counseling.
        </p>
      </header>

      {/* Mission & Vision - Symmetric Box layout */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#FCFAF7] p-8 md:p-12 border border-[#E5E0D5] space-y-4">
          <div className="text-[10px] uppercase font-bold text-terracotta tracking-widest">Our Mandate</div>
          <h3 className="text-2xl font-serif italic text-warm-charcoal">The Mission</h3>
          <p className="text-stone-600 text-sm leading-relaxed font-sans">
            To deliver exceptional diagnostic consultation guides and world-class resources across education, job placements, travel curations, and mental alignment, enabling every individual to design their optimal life path with total focus.
          </p>
        </div>
        <div className="bg-[#FCFAF7] p-8 md:p-12 border border-[#E5E0D5] space-y-4">
          <div className="text-[10px] uppercase font-bold text-terracotta tracking-widest">Our Legacy</div>
          <h3 className="text-2xl font-serif italic text-warm-charcoal">The Vision</h3>
          <p className="text-stone-600 text-sm leading-relaxed font-sans">
            To excel as India’s premier, trustworthy multi-vertical growth architecture, continuously bridging aspirations with verified cognitive strengths and professional outcomes for millions of users.
          </p>
        </div>
      </section>

      {/* Corporate pillars of craft */}
      <section className="space-y-16">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest text-[#7D7067] uppercase">Values & Integrity</span>
          <h2 className="text-3xl font-serif italic text-warm-charcoal">Our Pillars of Craft</h2>
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
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta">Evolutionary Steps</span>
          <h2 className="text-3xl font-serif italic text-warm-cream">The Akromind Milestones</h2>
          <p className="text-stone-400 text-xs leading-relaxed">Witness our strategic build cycle since inception, growing from a regional startup consultation into a multi-vertical force of excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {milestones.map((mil, idx) => {
            const IconC = mil.icon;
            return (
              <div 
                key={mil.year} 
                className="bg-[#241F1D] p-8 border border-stone-850 space-y-6 relative rounded-sm"
              >
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-stone-700/50 z-10" />
                )}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif italic font-bold text-terracotta">{mil.year}</span>
                  <div className="border border-stone-700/40 p-2.5 rounded-sm text-stone-300 bg-[#1C1816]">
                    <IconC className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm tracking-tight text-white font-sans">{mil.title}</h4>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-serif italic">{mil.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
