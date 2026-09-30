import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Layers, Trophy, Lightbulb, Zap, HelpCircle, ArrowRight, ClipboardCheck } from 'lucide-react';

const reasons = [
  { 
    title: 'Trusted Expertise', 
    desc: 'Our team brings years of hands-on experience across education, career consulting, travel, and innovation. We don\'t just advise — we deliver customized, high-impact results for individuals and organizations alike.',
    icon: ShieldCheck,
  },
  { 
    title: 'Customized Design', 
    desc: 'No one-size-fits-all solutions here. Every strategy, program, and recommendation is tailored to your unique goals, background, and specific circumstances to ensure maximum relevance.',
    icon: Layers,
  },
  { 
    title: 'Result-Oriented', 
    desc: 'We obsessively measure success by your tangible outcomes. Whether it\'s grades, job offers, unforgettable trips, or business growth, our initiatives are data-driven and focused on clear goals.',
    icon: Trophy,
  },
  { 
    title: 'Innovative Methods', 
    desc: 'We leverage modern technology, fresh methodologies, and cutting-edge tools to deliver superior experiences across all verticals, ensuring you stay ahead of the curve.',
    icon: Zap,
  },
  { 
    title: 'Quality Assurance', 
    desc: 'Rigorous standards are maintained across all our services and deliverables. We are committed to excellence in every interaction, feedback loop, and final product.',
    icon: Lightbulb,
  }
];

export default function WhyChooseUsPage() {
  const [goalType, setGoalType] = useState('grades'); // grades, salary, stress, tour
  const [urgency, setUrgency] = useState('soon'); // soon, tight, future

  const getAssessmentResult = () => {
    if (goalType === 'grades') {
      return {
        priority: 'AkroTution & AkroMind Synergy Pack',
        reason: 'Improving grades with zero burnout requires matching structured core tutoring with cognitive study remodeling blueprints.',
        timeline: urgency === 'soon' ? 'Weekly diagnostic homework loops' : 'Bi-weekly conceptual baseline checkpoints',
        credits: 'Eligible for free academic profile assessment'
      };
    } else if (goalType === 'salary') {
      return {
        priority: 'AkroPlacement Strategic Accelerator',
        reason: 'Transitioning to senior roles requires deep resume rebuilds, salary negotiation benchmarking, and mock interviews.',
        timeline: urgency === 'soon' ? 'Direct recruiter callbacks in 14 days' : '3-month career matching alignment program',
        credits: 'Eligible for priority recruiter networking highlights'
      };
    } else if (goalType === 'stress') {
      return {
        priority: 'AkroMind Personal Counseling',
        reason: 'Coping with board examinations or high-stakes corporate startups requires direct, confidential mind coaching.',
        timeline: urgency === 'soon' ? 'Immediate 1-on-1 advisor matching' : 'Consistent bi-weekly alignment tracks',
        credits: 'Included 1-on-1 counselor matching and diagnostic review'
      };
    } else {
      return {
        priority: 'AkroHolidays Custom Itinerary Curation',
        reason: 'Relaxing after high-stress semesters or workspace quarters is best done via handpicked, premium domestic or international routes.',
        timeline: urgency === 'soon' ? 'Customized flight-matched draft route in 24 hours' : 'Early bird custom guides allocation',
        credits: 'Earn double premium explorer points on registration'
      };
    }
  };

  const adviceObj = getAssessmentResult();

  const container = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.span variants={item} className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">Why Us</motion.span>
        <motion.h1 variants={item} className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">Built Different. <span className="font-serif italic font-normal text-terracotta">Built Better.</span></motion.h1>
        <motion.p variants={item} className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">We are not just another standard service portal. We are your dedicated growth partners, delivering excellence across counseling, tutoring, placements, and travels as a cohesive whole.</motion.p>
      </header>

      {/* Grid reasons card - Swiss Grid with Hairline separation */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map(reasonItem => {
          const IconComponent = reasonItem.icon;
          return (
            <motion.div 
              variants={item} 
              key={reasonItem.title} 
              className="bg-[#FCFAF7] p-8 border border-[#E5E0D5] hover:border-terracotta transition-all duration-300 space-y-5 rounded-sm"
            >
                <div className="w-10 h-10 border border-[#E5E0D5] flex items-center justify-center text-terracotta bg-warm-cream/50 rounded-sm">
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-warm-charcoal font-sans">{reasonItem.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed font-serif italic">{reasonItem.desc}</p>
                </div>
            </motion.div>
          );
        })}

        {/* Dynamic callout reason to balance grid in Swiss Style */}
        <motion.div 
          variants={item} 
          className="bg-[#1C1816] border border-[#2D2623] p-8 rounded-sm text-warm-cream flex flex-col justify-between"
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-terracotta font-bold tracking-widest uppercase">The Akromind Edge</span>
            <h4 className="text-lg font-serif italic text-white leading-tight">Connecting all dots in one ecosystem.</h4>
            <p className="text-stone-400 text-xs leading-relaxed font-sans mt-2">
              When student mental wellness aligns with tutoring, and career coaching matches corporate hiring, high-value outcomes happen automatically.
            </p>
          </div>
          <a href="/contact" className="text-terracotta hover:text-white font-bold text-xs transition-colors mt-6 inline-flex items-center gap-1.5 uppercase tracking-wider font-sans">
            <span>Book a call to learn more</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Suitability Interactive diagnostic advisor tool */}
      <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold">Interactive Tool</span>
          <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Ecosystem Suitability & Priority Advisor</h2>
          <p className="text-stone-600 text-xs leading-relaxed">Fill in your most critical immediate objective and urgency constraint to dynamically align our multiple verticals for your exact scenario.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form parameters */}
          <div className="bg-warm-cream/40 p-8 border border-[#E5E0D5] space-y-6 rounded-sm">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">My immediate focus goal is to:</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'grades', text: 'Boost School Grades' },
                  { id: 'salary', text: 'Accelerate My Placement' },
                  { id: 'stress', text: 'Resolve Stress & Seek Guide' },
                  { id: 'tour', text: 'Plan a Customized holiday' }
                ].map(g => (
                  <button
                    key={g.id}
                    onClick={() => setGoalType(g.id)}
                    className={`p-3 text-xs font-bold text-left rounded-sm border cursor-pointer transition leading-tight ${
                      goalType === g.id
                        ? 'border-terracotta bg-[#FCFAF7] text-terracotta ring-1 ring-terracotta/20 font-bold'
                        : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/40 text-stone-600 font-medium'
                    }`}
                  >
                    {g.text}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">Timeline Urgency Bracket:</label>
              <div className="flex gap-2">
                {[
                  { id: 'soon', text: 'Immediate (<15 Days)' },
                  { id: 'tight', text: 'Mid-term (<2 Months)' },
                  { id: 'future', text: 'Planning (<6 Months)' }
                ].map(u => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className={`flex-1 py-3 px-1 text-[11px] font-bold rounded-sm border cursor-pointer transition leading-tight text-center ${
                      urgency === u.id
                        ? 'bg-warm-charcoal text-white border-warm-charcoal'
                        : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5] text-stone-600'
                    }`}
                  >
                    {u.text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Advice Output Board */}
          <div className="bg-[#1C1816] text-warm-cream p-8 md:p-10 border border-[#2D2623] space-y-6 rounded-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ClipboardCheck className="w-36 h-36 text-white rotate-12" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold block">Tailored Alignment Profile</span>

            <div className="space-y-1 z-10">
              <span className="text-[9px] text-[#FCFAF7] bg-terracotta font-semibold px-2 py-0.5 rounded-sm uppercase tracking-wider">Top Priority Area</span>
              <h3 className="text-xl font-bold mt-1 text-white font-sans">{adviceObj.priority}</h3>
            </div>

            <div className="space-y-4 text-xs text-stone-300 pt-4 border-t border-stone-800 z-10">
              <p className="leading-relaxed font-serif italic text-sm">
                "{adviceObj.reason}"
              </p>
              <div className="bg-stone-900 border border-stone-800 p-4 rounded-sm space-y-3 font-sans">
                <div>
                  <span className="text-stone-500 block text-[9px] uppercase font-bold tracking-wider">Suggested Milestone cadence</span>
                  <span className="font-semibold text-white">{adviceObj.timeline}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[9px] uppercase font-bold tracking-wider">Vertical Incentive eligibility</span>
                  <span className="font-semibold text-terracotta">{adviceObj.credits}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 z-10">
              <a
                href="/contact"
                className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Claim Roadmap Priority Alignment &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
