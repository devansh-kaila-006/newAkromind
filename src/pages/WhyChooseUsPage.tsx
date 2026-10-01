import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Layers, Trophy, Lightbulb, Zap, HelpCircle, ArrowRight, ClipboardCheck, Check, X } from 'lucide-react';
import EditorialVisual from '../components/EditorialVisual';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';

const whyUsFaqs: FAQItem[] = [
  {
    category: 'Ecosystem Advantages',
    q: 'How does choosing an integrated ecosystem benefit me over hiring separate agencies?',
    a: 'When you work with isolated providers, your data, progress, and context are fragmented. A tutoring center doesn’t understand your child’s emotional test anxiety; a recruitment portal doesn’t know your educational strengths; and a travel agency treats your family as an anonymous booking number. In New Akromind, your cognitive profile, learning achievements, and career milestones work together seamlessly, eliminating friction and maximizing outcomes.'
  },
  {
    category: 'Ecosystem Advantages',
    q: 'Do I get bundled discounts or financial perks when using multiple verticals?',
    a: 'Yes. Ecosystem members unlock significant cross-vertical benefits: students enrolled in AKROTUTION receive complimentary diagnostic consultations with AKROMIND counselors, career acceleration candidates in AKROPLACEMENT get preferential alumni hiring network access, and all fees earn Explorer Points redeemable for luxury AKROHOLIDAYS vacations.'
  },
  {
    category: 'Accountability & Outcomes',
    q: 'How does New Akromind hold itself accountable for student and client success?',
    a: 'We operate with empirical transparency. Every program begins with a baseline diagnostic assessment and established target metrics. We provide bi-weekly telemetry reports to parents and candidates. If an eligible candidate or student does not make verifiable progress under our guidance, we provide supplemental 1-on-1 mentorship at zero additional charge.'
  },
  {
    category: 'Faculty & Mentors',
    q: 'Can I choose my specific mentor or counselor, or request a switch?',
    a: 'Yes. We carefully match students and professionals based on learning styles and personality during the discovery phase. If at any time you feel the rapport or pedagogical rhythm is not ideal, you can request a mentor adjustment with your dedicated academic advisor with zero awkwardness or disruption.'
  },
  {
    category: 'Geographic Reach',
    q: 'Can non-residents of Punjab or international clients participate fully?',
    a: 'Yes. While our physical headquarters is in Ludhiana, over 60% of our active students and career acceleration candidates reside in Bangalore, Mumbai, Delhi NCR, Hyderabad, Dubai, Singapore, and London. Our digital atelier provides seamless live HD sessions, cloud doubt clearing, and virtual mock interviews across international time zones.'
  },
  {
    category: 'Getting Started',
    q: 'What is the fastest way to get started and evaluate if New Akromind is right for me?',
    a: 'Simply submit a brief consultation request on our Contact page or call our direct advisory lines. We will schedule a complimentary 30-minute Discovery Session with a vertical director to review your situation and recommend a clear, actionable roadmap.'
  }
];

const reasons = [
  { 
    title: 'Cross-Vertical Synergy', 
    desc: 'We are the only growth architecture in India that bridges tutoring, career placement, counseling, and restorative travel into a single, cohesive human growth flywheel.',
    icon: Layers,
  },
  { 
    title: 'Ultra-Vetted Specialists', 
    desc: 'Our academic tutors are IITians and NITians, our counselors are licensed psychologists, and our career coaches are active engineering directors and consulting principals.',
    icon: ShieldCheck,
  },
  { 
    title: 'Data-Driven Telemetry', 
    desc: 'No vague promises. We benchmark every student and professional with diagnostic tests, weekly progress analytics, and transparent milestone tracking.',
    icon: Trophy,
  },
  { 
    title: 'Capped Cohort Sizes', 
    desc: 'We strictly cap our group tuition batches at 8 to 12 students, ensuring that every learner receives real, meaningful individual attention rather than getting lost in a crowd.',
    icon: Zap,
  },
  { 
    title: 'Radical Pricing Integrity', 
    desc: 'Clear, transparent quotes with zero hidden laboratory fees, administrative markups, or commercial travel detours. You always know exactly what you are paying for.',
    icon: Lightbulb,
  }
];

export default function WhyChooseUsPage() {
  const [goalType, setGoalType] = useState('grades');
  const [urgency, setUrgency] = useState('soon');

  const getAssessmentResult = () => {
    if (goalType === 'grades') {
      return {
        priority: 'AKROTUTION & AKROMIND Synergy Pack',
        reason: 'Improving board and competitive exam marks with zero student burnout requires pairing structured concept tutoring with cognitive stress relief protocols.',
        timeline: urgency === 'soon' ? 'Weekly diagnostic homework loops & <20m doubt desk' : 'Bi-weekly conceptual baseline checkpoints',
        credits: 'Eligible for 2 complimentary trial classes & academic audit'
      };
    } else if (goalType === 'salary') {
      return {
        priority: 'AKROPLACEMENT Strategic Accelerator',
        reason: 'Securing Tier-1 corporate roles commands deep ATS resume reconstruction, distributed system design mocks, and direct referrals to 500+ hiring partners.',
        timeline: urgency === 'soon' ? 'Immediate resume rebuild & mock battery in 14 days' : '12-week comprehensive placement track',
        credits: 'Eligible for priority recruiter referrals & negotiation advisory'
      };
    } else if (goalType === 'stress') {
      return {
        priority: 'AKROMIND Personal & Family Counseling',
        reason: 'Navigating academic pressure, career burnout, or adolescent parent-student tension requires confidential, empathetic guidance by licensed psychologists.',
        timeline: urgency === 'soon' ? 'Immediate 1-on-1 advisor matching within 48 hours' : 'Bi-weekly structured alignment sessions',
        credits: 'Includes comprehensive cognitive aptitude mapping assessment'
      };
    } else {
      return {
        priority: 'AKROHOLIDAYS Bespoke Itinerary Curation',
        reason: 'Rejuvenating mind and family after high-pressure quarters is best achieved through verified boutique sanctuaries, private chauffeurs, and zero commercial rush.',
        timeline: urgency === 'soon' ? 'Customized flight-matched draft route in 24 hours' : 'Early-bird luxury villa & private guide allocation',
        credits: 'Earn double Explorer Loyalty Points on confirmed bookings'
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
        <motion.span variants={item} className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">
          Why Choose Us
        </motion.span>
        <motion.h1 variants={item} className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Built Different. <span className="font-serif italic font-normal text-terracotta">Built Better.</span>
        </motion.h1>
        <motion.p variants={item} className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          We are not a fragmented marketplace of anonymous gig workers. We are your unified growth partner, delivering institutional excellence across education, careers, voyages, and counseling.
        </motion.p>
      </header>

      {/* Visual Artwork */}
      <EditorialVisual 
        type="whyus"
        aspectRatio="21:9"
        badge="Institutional Flywheel"
        title="The Unified Ecosystem Flywheel"
        caption="Interconnected excellence delivering compound personal and professional advantage"
      />

      {/* Comparative Analysis: Traditional Single-Vertical vs New Akromind */}
      <section className="space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Comparative Analysis</span>
          <h2 className="text-3xl font-serif italic text-warm-charcoal">The Difference Between Fluff and Foundation</h2>
          <p className="text-xs text-stone-600 font-serif">
            See how our integrated, capped-batch ecosystem contrasts directly against conventional single-purpose coaching mills and transactional agencies.
          </p>
        </div>

        <div className="bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm overflow-hidden">
          <div className="grid grid-cols-12 bg-warm-charcoal text-white text-xs font-bold uppercase tracking-wider py-4 px-6 border-b border-[#2D2623]">
            <div className="col-span-4">Evaluation Dimension</div>
            <div className="col-span-4 text-stone-400">Traditional Single Providers</div>
            <div className="col-span-4 text-terracotta">New Akromind Ecosystem</div>
          </div>

          {[
            {
              dim: 'Academic Class Size',
              trad: 'Crowded mass halls of 60 to 120+ students; zero individual interaction.',
              akro: 'Strictly capped at 8 to 12 students per cohort or dedicated 1-on-1 private atelier.'
            },
            {
              dim: 'Doubt Resolution Support',
              trad: 'Long weekly queues; students wait days for generic textbook answer keys.',
              akro: 'Instant digital doubt desk with guaranteed <20 minute step-by-step video/handwritten SLA.'
            },
            {
              dim: 'Mental Wellness & Stress',
              trad: 'Treated as weakness or ignored entirely until severe exam burnout occurs.',
              akro: 'Integrated in-house AKROMIND counseling desk with stress inoculation protocols included.'
            },
            {
              dim: 'Corporate Job Referrals',
              trad: 'Spamming public LinkedIn job boards with generic ATS-rejected templates.',
              akro: 'Warm, direct introductions to senior hiring directors across 500+ active partner firms.'
            },
            {
              dim: 'Travel & Holiday Curation',
              trad: 'Rigid group bus packages with forced commercial souvenir store detours.',
              akro: '100% bespoke private itineraries, verified boutique stays, and 24/7 on-ground concierge.'
            },
            {
              dim: 'Cross-Vertical Rewards',
              trad: 'Zero reciprocity; every dollar spent is trapped in a siloed transaction.',
              akro: 'Unified Explorer Loyalty Points engine earnable and redeemable across all 4 verticals.'
            }
          ].map((row, idx) => (
            <div 
              key={idx} 
              className={`grid grid-cols-12 py-4 px-6 text-xs items-center gap-4 border-b border-[#E5E0D5] ${
                idx % 2 === 0 ? 'bg-[#FCFAF7]' : 'bg-[#FAF6EE]/50'
              }`}
            >
              <div className="col-span-4 font-bold text-warm-charcoal font-sans">{row.dim}</div>
              <div className="col-span-4 text-stone-500 flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>{row.trad}</span>
              </div>
              <div className="col-span-4 font-medium text-stone-800 flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5 font-bold" />
                <span className="font-semibold text-warm-charcoal">{row.akro}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid Reasons Cards */}
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

        {/* Dynamic Callout Reason */}
        <motion.div 
          variants={item} 
          className="bg-[#1C1816] border border-[#2D2623] p-8 rounded-sm text-warm-cream flex flex-col justify-between"
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-terracotta font-bold tracking-widest uppercase">The Akromind Edge</span>
            <h4 className="text-lg font-serif italic text-white leading-tight">Connecting all dots in one ecosystem.</h4>
            <p className="text-stone-400 text-xs leading-relaxed font-sans mt-2">
              When student mental wellness aligns with academic tutoring, and career coaching connects directly with corporate hiring, high-value outcomes happen predictably.
            </p>
          </div>
          <Link to="/contact" className="text-terracotta hover:text-white font-bold text-xs transition-colors mt-6 inline-flex items-center gap-1.5 uppercase tracking-wider font-sans">
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Suitability Interactive diagnostic advisor tool */}
      <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Tool</span>
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
                  { id: 'grades', text: 'Boost School & Exam Grades' },
                  { id: 'salary', text: 'Accelerate Career Placement' },
                  { id: 'stress', text: 'Resolve Stress & Seek Counseling' },
                  { id: 'tour', text: 'Plan a Customized Holiday' }
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
                  <span className="text-stone-500 block text-[9px] uppercase font-bold tracking-wider">Suggested Milestone Cadence</span>
                  <span className="font-semibold text-white">{adviceObj.timeline}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[9px] uppercase font-bold tracking-wider">Vertical Incentive Eligibility</span>
                  <span className="font-semibold text-terracotta">{adviceObj.credits}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 z-10">
              <Link
                to="/contact"
                className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Claim Roadmap Priority Alignment &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQs for Why Choose Us */}
      <section className="space-y-8">
        <FaqAccordion 
          items={whyUsFaqs}
          title="Why Choose Us: Frequently Asked Questions"
          subtitle="Clear answers on our ecosystem synergy, accountability, and onboarding"
        />
      </section>
    </motion.div>
  );
}
