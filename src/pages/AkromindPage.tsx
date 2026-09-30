import { useState } from 'react';
import { motion } from 'motion/react';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';
import EditorialVisual from '../components/EditorialVisual';
import { GraduationCap, Home, Briefcase, Lightbulb, Shield, Heart, Check, Lock, Sparkles } from 'lucide-react';

const mindFaqs: FAQItem[] = [
  {
    category: 'Confidentiality & Privacy',
    q: 'Is counseling at AkroMind strictly confidential?',
    a: 'Yes, 100%. We adhere to strict ethical standards established by national and international psychological associations. Every conversation, diagnostic note, session recording, and profile detail is encrypted and protected by strict non-disclosure. No information is ever shared with schools, employers, or third parties without explicit written consent.'
  },
  {
    category: 'Counselor Qualifications',
    q: 'What qualifications and certifications do your counselors hold?',
    a: 'Our counseling team consists of licensed psychologists, cognitive behavioral coaches, and master’s-level practitioners with at least 5 to 12 years of specialized clinical or counseling experience. Counselors undergo continuous peer supervision and specialized training in adolescent development, family mediation, and executive leadership psychology.'
  },
  {
    category: 'Students & Stream Selection',
    q: 'How do you help students choose between Science, Commerce, and Humanities?',
    a: 'Rather than relying on superficial multiple-choice quizzes, we utilize our Multi-Dimensional Cognitive & Aptitude Mapping Battery. We analyze logical reasoning patterns, spatial ability, verbal fluency, work personality traits, and long-term career aspirations. We then conduct an in-depth exploratory session with both the student and parents to arrive at a high-confidence decision.'
  },
  {
    category: 'Parent-Student Sessions',
    q: 'How are parent-student alignment sessions conducted?',
    a: 'Familial conflict around marks, phone usage, and career expectations often stems from misaligned communication rather than lack of love. Our sessions provide a neutral, psychologically safe space. The counselor first meets the student and parents individually to understand unvoiced concerns, followed by a structured joint session focused on collaborative goal-setting and non-confrontational boundary agreements.'
  },
  {
    category: 'Therapy vs Counseling',
    q: 'What is the difference between AkroMind counseling and psychiatric treatment?',
    a: 'AkroMind specializes in developmental counseling, stress management, academic performance anxiety, career transitions, and cognitive mindset coaching. We do not prescribe medication. If our counselors identify severe psychiatric conditions (such as severe clinical depression, psychosis, or active self-harm), we maintain a verified network of medical psychiatrists for seamless clinical referral.'
  },
  {
    category: 'Format & Scheduling',
    q: 'Are counseling sessions conducted online, in-person, or in hybrid formats?',
    a: 'We offer both options. Our secure virtual consultation suite provides end-to-end encrypted video sessions with digital exercises, accessible from anywhere globally. For clients located in Punjab and North India, private face-to-face sessions are conducted in our tranquil counseling sanctuary in Ludhiana.'
  },
  {
    category: 'Duration & Frequency',
    q: 'How long does a counseling session last, and how many sessions are recommended?',
    a: 'Standard individual sessions last 50 minutes, while joint family mediation sessions run for 75 minutes. For targeted stream selection or acute exam anxiety, 3 to 5 structured sessions are typically sufficient. For deep personal mindset remodeling or executive transition coaching, clients engage in bi-weekly sessions over 2 to 4 months.'
  },
  {
    category: 'Founders & Professionals',
    q: 'What is the Startup Founder & High-Agency Mindset track?',
    a: 'Founders face chronic uncertainty, extreme decision fatigue, and intense loneliness. Our founder coaching is led by veteran advisors with entrepreneurial backgrounds. We focus on cognitive stamina, decoupling self-worth from startup valuation fluctuations, mastering high-stakes investor pitch posture, and building high-agency team dynamics.'
  },
  {
    category: 'Preparation & First Session',
    q: 'How should I prepare for my first consultation session?',
    a: 'No formal preparation is needed. You simply need a quiet, private space and an open mind. During the first session, your counselor will ask gentle exploratory questions about your current life context, what is causing friction or anxiety, and what success looks like for you.'
  },
  {
    category: 'Ecosystem Synergy',
    q: 'How does AkroMind integrate with AkroTution and AkroPlacement?',
    a: 'Academic performance and career advancement are fundamentally psychological. Students struggling in AkroTution receive targeted memory and test-anxiety support, while job seekers in AkroPlacement receive coaching on imposter syndrome, interview presence, and salary negotiation posture, creating a unified foundation of confidence.'
  }
];

const matchers = [
  {
    role: 'High School Student',
    id: 'student',
    icon: GraduationCap,
    situation: 'Facing stream selection dilemmas (Grade 10/11), acute exam test panic, or chronic academic burnout.',
    questions: [
      'Which stream aligns with my genuine cognitive strengths rather than peer pressure?',
      'How can I eliminate exam room panic and blanking out during board or JEE tests?',
      'How do I build a sustainable study routine without feeling completely overwhelmed?'
    ],
    pathway: 'Academic & Stream Navigation Track',
    description: 'A 4-session diagnostic roadmap incorporating cognitive aptitude tests, stress reduction protocols, and study time-blocking blueprints designed to restore focus and emotional equilibrium.'
  },
  {
    role: 'A Caring Parent',
    id: 'parent',
    icon: Home,
    situation: 'Seeking to support my child through critical academic transitions without creating friction or family stress.',
    questions: [
      'How do we talk about marks, screens, and career choices without arguments?',
      'How can I tell the difference between healthy academic stretching and clinical burnout?',
      'How do we align family ambitions with our child’s unique personal passions?'
    ],
    pathway: 'Parent-Student Alignment Forum',
    description: 'Mediated, compassionate joint consultations that bridge generational perspective gaps and provide parents with actionable communication toolkits.'
  },
  {
    role: 'Working Professional',
    id: 'professional',
    icon: Briefcase,
    situation: 'Experiencing corporate burnout, imposter syndrome in a new role, or feeling stuck at a mid-career plateau.',
    questions: [
      'Why do I feel like an imposter despite my technical accomplishments?',
      'How do I maintain emotional composure and boundaries in a high-stress workplace?',
      'How can I project authoritative executive presence during critical presentations?'
    ],
    pathway: 'Executive Presence & Transition Track',
    description: '1-on-1 strategic coaching focusing on communication poise, cognitive reframing, emotional boundary defense, and career milestone navigation.'
  },
  {
    role: 'Startup Founder',
    id: 'founder',
    icon: Lightbulb,
    situation: 'Navigating intense startup ambiguity, investor pressure, and managing high-stakes team agency.',
    questions: [
      'How do I maintain mental clarity when runway is short and stakes are high?',
      'How can I separate my self-worth from daily startup metrics and investor feedback?',
      'How do I cultivate resilient, high-agency thinking across my founding team?'
    ],
    pathway: 'High-Agency Founder Mindset Track',
    description: 'Confidential mindset advisory for founders, exploring mental stamina, emotional regulation under pressure, and sustainable decision-making frameworks.'
  }
];

export default function AkromindPage() {
  const [selectedId, setSelectedId] = useState('student');
  const selectedMatcher = matchers.find(m => m.id === selectedId) || matchers[0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">AkroMind</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Guide. Inspire. <span className="font-serif italic font-normal text-terracotta">Remodel.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          Empathy-led psychological guidance, cognitive aptitude mapping, parent-student alignment mediation, and high-agency mindset coaching for individuals and founders.
        </p>
      </header>

      {/* Visual Showcase */}
      <EditorialVisual 
        type="akromind"
        aspectRatio="21:9"
        badge="Cognitive Sanctuary"
        title="Harmonious Mental Equilibrium"
        caption="From adolescent academic anxiety reduction to executive leadership mindset coaching"
      />

      {/* Trust Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-[#E5E0D5] divide-x divide-[#E5E0D5] py-8 bg-[#FCFAF7] border-x border-[#E5E0D5]">
        {[
          { num: '100%', label: 'Confidentiality Guaranteed', detail: 'Encrypted & ethical protocol' },
          { num: '5,000+', label: 'Sessions Conducted', detail: 'Students, parents & professionals' },
          { num: '98.2%', label: 'Alignment Success', detail: 'Reported reduced family friction' },
          { num: '1-on-1', label: 'Dedicated Care', detail: 'Licensed psychological specialists' }
        ].map((s, idx) => (
          <div key={idx} className="px-6 space-y-1 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-serif italic font-bold text-terracotta tabular-nums">{s.num}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-warm-charcoal">{s.label}</div>
            <div className="text-[10px] text-stone-500 font-serif italic">{s.detail}</div>
          </div>
        ))}
      </section>

      {/* 4 Core Counseling Divisions */}
      <section className="space-y-16">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Specialized Focus</span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal font-normal">Four Pillars of Mindset Guidance</h2>
          <p className="text-xs text-stone-600 font-serif leading-relaxed">
            Every life stage faces unique cognitive friction. We provide tailored frameworks designed by licensed counselors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Student Academic & Stream Guidance',
              code: 'PILLAR 01',
              desc: 'For students navigating subject choices, board pressure, competitive exam panic, or feelings of academic inadequacy.',
              bullets: [
                'Cognitive aptitude assessments mapping analytical vs creative strengths',
                'Exam stress inoculation & panic desensitization techniques',
                'Memory retention protocols and active recall study scheduling',
                'Healthy self-compassion practices during mock score setbacks'
              ]
            },
            {
              title: 'Parent-Student Alignment Forums',
              code: 'PILLAR 02',
              desc: 'Structured mediation sessions designed to turn academic friction into collaborative family teamwork.',
              bullets: [
                'Empathetic dialogue guidelines eliminating accusatory arguments',
                'Clarifying genuine student aptitudes versus parental expectations',
                'Digital screen-time boundaries and collaborative household contracts',
                'Establishing unified family support systems for board exam years'
              ]
            },
            {
              title: 'Professional Transition & Executive Poise',
              code: 'PILLAR 03',
              desc: 'For mid-career professionals tackling imposter syndrome, toxic workplaces, or promotion roadblocks.',
              bullets: [
                'Deconstructing internal limiting beliefs and imposter narratives',
                'Developing vocal gravitas and structured communication for boardrooms',
                'Cognitive boundary defense preventing chronic corporate burnout',
                'Strategic career milestone alignment paired with AkroPlacement'
              ]
            },
            {
              title: 'High-Agency Founder Mindset',
              code: 'PILLAR 04',
              desc: 'For early-stage entrepreneurs and leaders managing high uncertainty, team dynamics, and severe pressure.',
              bullets: [
                'Mental stamina frameworks for navigating startup volatility',
                'Decoupling self-worth from investor rejections and metrics dips',
                'Decision hygiene under acute cognitive and physical fatigue',
                'Cultivating extreme personal agency and team psychological safety'
              ]
            }
          ].map(p => (
            <div key={p.code} className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
              <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-terracotta font-bold">{p.code}</span>
                  <h4 className="text-xl font-bold text-warm-charcoal">{p.title}</h4>
                </div>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed font-serif">{p.desc}</p>
              <ul className="space-y-2 text-xs text-stone-700 font-sans">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Pathway Matcher Tool */}
      <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Tool</span>
          <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Find Your Recommended Counseling Track</h2>
          <p className="text-stone-600 text-xs leading-relaxed">Select your current role to preview key questions we resolve and explore custom strategic coaching programs immediately.</p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {matchers.map(m => {
            const Icon = m.icon;
            const isSelected = m.id === selectedId;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className={`p-4 rounded-sm border cursor-pointer text-left transition-colors duration-200 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'border-terracotta bg-warm-cream/50 text-[#1C1816]'
                    : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50 text-stone-600'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className={`p-2 rounded-xs border ${isSelected ? 'border-terracotta bg-white text-terracotta' : 'border-[#E5E0D5] bg-warm-cream text-stone-600'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-terracotta font-bold uppercase">
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider">{m.role}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Matcher Output Board */}
        <div className="bg-[#1C1816] text-warm-cream p-8 md:p-10 border border-[#2D2623] rounded-sm space-y-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 border-b lg:border-b-0 lg:border-r border-stone-800 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold">
                Identified Life Context
              </span>
              <h3 className="text-2xl font-serif italic text-white leading-tight">
                {selectedMatcher.pathway}
              </h3>
              <p className="text-stone-300 text-xs leading-relaxed font-serif italic">
                "{selectedMatcher.situation}"
              </p>
              <div className="pt-2 text-stone-400 text-xs leading-relaxed font-sans">
                {selectedMatcher.description}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block">
                Core Questions Addressed in Track:
              </span>
              <div className="space-y-3">
                {selectedMatcher.questions.map((q, idx) => (
                  <div key={idx} className="bg-stone-900 border border-stone-800 p-3.5 rounded-sm flex items-start gap-3">
                    <span className="text-terracotta font-mono text-xs font-bold shrink-0">{idx + 1}/</span>
                    <p className="text-stone-300 text-xs font-sans leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-stone-400 text-xs font-mono">
              <Lock className="w-3.5 h-3.5 text-terracotta" />
              <span>Strict Non-Disclosure Charter Enforced</span>
            </div>
            <a
              href="/contact"
              className="bg-warm-cream text-warm-charcoal hover:bg-terracotta hover:text-white px-6 py-3 rounded-xs font-bold text-[10px] tracking-widest uppercase transition-colors"
            >
              Book 1-on-1 Confidential Consult &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Ethics & Strict Confidentiality Charter */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-terracotta" />
            <h3 className="text-lg font-bold text-warm-charcoal">The AkroMind Ethical Charter</h3>
          </div>
          <ul className="space-y-3.5 text-xs text-stone-700 font-sans">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Absolute Confidentiality:</strong> No diagnostic assessment or counseling conversation is ever shared with schools, colleges, or employers.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Zero Judgment Guarantee:</strong> We provide an empathetic, safe environment where you can voice doubts, fears, and vulnerabilities openly.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Ethical Boundaries:</strong> Clear delineation between counseling support and psychiatric clinical interventions with vetted medical referral loops.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-terracotta" />
            <h3 className="text-lg font-bold text-warm-charcoal">The 4-Phase Consultation Model</h3>
          </div>
          <div className="space-y-3 text-xs text-stone-700 font-sans">
            <div className="p-3 bg-warm-cream/50 border border-[#E5E0D5] rounded-xs">
              <span className="font-bold text-warm-charcoal">Phase 1 (Diagnosis):</span> Discovery dialogue uncovering subconscious belief loops and stress triggers.
            </div>
            <div className="p-3 bg-warm-cream/50 border border-[#E5E0D5] rounded-xs">
              <span className="font-bold text-warm-charcoal">Phase 2 (Cognitive Blueprint):</span> Tailored mental toolkits, breathing routines, and communicative boundaries.
            </div>
            <div className="p-3 bg-warm-cream/50 border border-[#E5E0D5] rounded-xs">
              <span className="font-bold text-warm-charcoal">Phase 3 (Active Simulation):</span> Safe role-playing of exam rooms, difficult family discussions, or high-stakes pitches.
            </div>
            <div className="p-3 bg-warm-cream/50 border border-[#E5E0D5] rounded-xs">
              <span className="font-bold text-warm-charcoal">Phase 4 (Longitudinal Growth):</span> Bi-weekly check-ins ensuring long-term emotional agency and clarity.
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQs for AkroMind */}
      <section className="space-y-8">
        <FaqAccordion 
          items={mindFaqs}
          title="AkroMind Frequently Asked Questions"
          subtitle="Everything you need to know about our counseling philosophy, privacy, and sessions"
        />
      </section>
    </motion.div>
  );
}
