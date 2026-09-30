import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-32 py-16 font-sans bg-warm-cream"
    >
      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-4 text-center space-y-8">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">
            One Intelligent Ecosystem
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-8xl font-black tracking-tight text-warm-charcoal max-w-5xl mx-auto leading-[0.95] font-sans"
        >
          Empowering your <span className="font-serif italic font-normal text-terracotta tracking-normal lowercase">future</span> across every <span className="font-serif italic font-normal text-stone-700 tracking-normal leading-none">dimension.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-serif"
        >
          New Akromind delivers multi-vertical excellence in academic training, career placement pipelines, authentic travel, and empathetic mindset counseling.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center gap-4 pt-4">
          <a
            href="/contact"
            className="bg-warm-charcoal text-white hover:bg-terracotta text-[10px] uppercase tracking-widest font-bold px-8 py-4 transition-colors duration-300 rounded-sm inline-flex items-center gap-2 border border-warm-charcoal hover:border-terracotta"
          >
            Get Started <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="/about"
            className="border border-[#E5E0D5] text-warm-charcoal hover:bg-warm-beige/40 text-[10px] uppercase tracking-widest font-bold px-8 py-4 transition-colors duration-300 rounded-sm"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* Trust Indicators - Beautiful Swiss Hairline Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.div 
          variants={itemVariants} 
          className="grid grid-cols-2 md:grid-cols-4 border-y border-[#E5E0D5] divide-x divide-[#E5E0D5] py-10 bg-[#FCFAF7] border-x border-[#E5E0D5]"
        >
          {[ 
            { num: '10K+', label: 'Students trained', phrase: 'with global curriculum' }, 
            { num: '500+', label: 'Placements pipeline', phrase: 'inside leading industries' }, 
            { num: '50+', label: 'Travel destinations', phrase: 'with customized reward credits' }, 
            { num: '100+', label: 'Active counselors', phrase: 'empowering minds daily' }
          ].map((i, index) => (
            <div key={index} className="px-6 space-y-2 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-serif italic font-medium text-terracotta tracking-tight">{i.num}</div>
              <div>
                <div className="text-xs font-bold text-warm-charcoal uppercase tracking-wider">{i.label}</div>
                <div className="text-[11px] text-stone-500 font-serif italic">{i.phrase}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Verticals section */}
      <section className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="text-center md:text-left md:flex md:items-end md:justify-between border-b border-[#E5E0D5] pb-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta">Operational Verticals</span>
            <h2 className="text-4xl font-serif italic text-warm-charcoal">Four paths. One unified blueprint.</h2>
          </div>
          <p className="text-sm text-stone-500 max-w-sm mt-4 md:mt-0 leading-relaxed">
            We operate through tailored, highly disciplined specialists to bring you custom tutoring, workspace transitions, and curated experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'AkroMind', code: '01', desc: 'Empathy-led counseling, personal steam selection, and high-impact mindset development counseling.', path: '/verticals/akromind' },
            { name: 'AkroTution', code: '02', desc: 'Comprehensive academic tutoring, advanced custom test prep plans, and curriculum guidance.', path: '/verticals/akrotution' },
            { name: 'AkroPlacement', code: '03', desc: 'Premium career transition pipeline, professional resume architecture, and corporate alignment.', path: '/verticals/akroplacement' },
            { name: 'AkroHolidays', code: '04', desc: 'Authentic leisure tours, domestic and international customized tracks, with an integrated reward point engine.', path: '/verticals/akroholidays' }
          ].map(v => (
            <motion.div 
              key={v.name} 
              variants={itemVariants} 
              className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 flex flex-col justify-between h-[300px] hover:border-terracotta transition-colors duration-300 relative group"
            >
              <div className="absolute top-4 right-6 font-serif italic text-stone-300 text-lg">{v.code}/</div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-warm-charcoal tracking-tight font-sans">{v.name}</h3>
                <p className="text-stone-600 text-xs leading-relaxed font-serif">{v.desc}</p>
              </div>
              <a 
                href={v.path} 
                className="text-[11px] font-bold tracking-widest uppercase text-terracotta inline-flex items-center gap-1.5 hover:text-warm-charcoal transition-colors pt-4 border-t border-[#E5E0D5]/60"
              >
                Explore vertical &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Structured Approach Section */}
      <section className="bg-[#FAF6EE] py-20 border-y border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal">The Swiss Blueprint to Personal Success</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: 'I', title: 'Discovery & Context', desc: 'We execute thorough, deeply empathetic consultation periods to gather multi-dimensional understanding of your current status, blocks, and goals.' },
              { num: 'II', title: 'Custom Curated Strategy', desc: 'Our veterans draft a personalized, asymmetric roadmap outline integrated with precise timeline milestones and dedicated support elements.' },
              { num: 'III', title: 'Iterative Reinforcement', desc: 'We maintain recurring structured reviews and continuous feedback loops, ensuring that growth is measurable and sustainable over long spans.' }
            ].map(step => (
              <div key={step.title} className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 space-y-6 hover:border-terracotta transition-colors duration-300">
                <div className="text-lg font-serif italic text-terracotta border-b border-[#E5E0D5] pb-4 flex justify-between items-center">
                  <span>{step.title}</span>
                  <span className="text-stone-300 font-mono text-sm uppercase">{step.num}</span>
                </div>
                <p className="text-stone-600 text-[13px] leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-stone-500">Acosystem Alignment</span>
          <h2 className="text-3xl font-serif italic text-warm-charcoal">Diverse Sectors Active in Our Ecosystem</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#E5E0D5] divide-x divide-[#E5E0D5] pt-12">
          {[
            { title: 'Education System', list: ['Strategic High Schools', 'EdTech Alliances', 'Academic Consultancies', 'Professional Training Centers'] },
            { title: 'Corporate Guilds', list: ['Symmetrical Startups', 'SME Workforces', 'Enterprise Operations', 'Creative Service Fields'] },
            { title: 'Government', list: ['Skill Initiatives', 'Educational Authorities', 'Regional Programs', 'Youth Advancement Campaigns'] },
            { title: 'Civic Sector', list: ['Youth Organizations', 'Impact-Driven NGOs', 'Skill Development Centers', 'Dynamic Support Networks'] }
          ].map((sector, index) => (
            <div key={index} className="px-6 space-y-4">
              <h4 className="text-xs font-bold tracking-wider text-terracotta uppercase">{sector.title}</h4>
              <ul className="space-y-2.5 text-[12px] text-stone-600 font-serif italic">
                {sector.list.map(item => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-terracotta/40 rounded-full shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
