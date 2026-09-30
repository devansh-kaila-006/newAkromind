import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FaqAccordion from '../components/FaqAccordion';
import { GraduationCap, Home, Briefcase, Lightbulb } from 'lucide-react';

const faqs = [
  { q: 'What types of counseling does AkroMind offer?', a: 'We offer comprehensive counseling spanning Academic & Student Guidance, Career & Stream Selection Navigation, Personal Well-being & Stress Management, and Startup Mindset & Innovation Workshops.' },
  { q: 'How do you structure the counseling sessions?', a: 'Our sessions begin with a deep exploration and diagnostic phase where we understand your strengths and challenges. We then build custom roadmap pathways with sequential, milestone-based target objectives.' },
  { q: 'Is counseling at AkroMind strictly confidential?', a: 'Absolutely. We operate under strict ethical guidelines. Every conversational dialogue, feedback record, and profile detail is held in the highest standard of confidence.' },
  { q: 'Do you offer combined parent-student sessions?', a: 'Yes. We specialize in student-parent alignment counseling, offering structured mediation forums to help bridge generational or academic perspective differences.' },
  { q: 'Are sessions available online or in-person?', a: 'We offer both. You can connect with our specialized counselors via high-fidelity digital platforms, or visit us in-person at our operations offices.' },
  { q: 'How can I get prioritized for a counseling consult?', a: 'Simply head over to our Contact section, choose AkroMind, and write a brief outline of the themes you wish to address. Our coordination team will match you with a suitable specialist.' }
];

const matchers = [
  {
    role: 'High School Student',
    id: 'student',
    icon: GraduationCap,
    situation: 'Seeking strategic stream selection (Grade 10/11), examination stress relief, or long-term career planning.',
    questions: [
      'Which academic tracks align best with my natural aptitudes and future careers?',
      'How can I overcome anxiety during intense test weeks and build retention?',
      'What steps should I take now to build a compelling university profile?'
    ],
    pathway: 'Academic & Stream Track',
    description: 'A focused, feedback-driven path utilizing diagnostic assessments and study blueprints to build sustainable student motivation and optimal grades.'
  },
  {
    role: 'A Caring Parent',
    id: 'parent',
    icon: Home,
    situation: 'Aiming to support my child through key transitions with zero friction, building mutual respect and confidence.',
    questions: [
      'How do we discuss academic choices collaboratively without bringing stress home?',
      'What is the best way to distinguish healthy stretching from severe student burnout?',
      'How do we align family ambitions with our child’s genuine cognitive strengths?'
    ],
    pathway: 'Parent-Student Alignment Track',
    description: 'Mediated, comfortable sessions to improve alignment. We create custom toolkits that bridge perspectives and support common growth goals.'
  },
  {
    role: 'Working Professional',
    id: 'professional',
    icon: Briefcase,
    situation: 'Navigating professional transitions, climbing to leadership, or improving public speaking posture.',
    questions: [
      'Which hidden skill gaps are preventing my transition into senior roles?',
      'How do I maintain strong emotional resilience when managing workspace friction?',
      'How can I project immediate confidence and structure in high-stakes meetings?'
    ],
    pathway: 'Leadership & Transition Track',
    description: '1-on-1 coaching focusing on presentation structure, emotional intelligence, career mapping, and active public speaking confidence.'
  },
  {
    role: 'Aspiring Founder',
    id: 'founder',
    icon: Lightbulb,
    situation: 'Building an early startup, defining core workflows, or developing a high-agency team environment.',
    questions: [
      'How do I build personal mental resilience to survive extreme startup pressure?',
      'In what ways can we cultivate active customer empathy mapping systems?',
      'How do we encourage experimental thinking and high confidence across our team?'
    ],
    pathway: 'Startup Mindset Track',
    description: 'Dynamic lateral thinking bootcamps, mindset diagnostic reviews, and stress coaching to assist founders in building high-agency companies.'
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
              <span className="text-[11px] font-bold tracking-widest text-[#B34E36] uppercase border-b border-[#B34E36]/40 pb-1">AkroMind</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
                Guide. Inspire. <span className="font-serif italic font-normal text-terracotta">Remodel.</span>
              </h1>
              <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
                Empathy-led counseling, stream & career decision frameworks, mindset coaching, parent-student alignment programs, and innovative thinking workshops.
              </p>
          </header>

          {/* Interactive Pathway Finder */}
          <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-8">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Tool</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Find Your Recommended Pathway</h2>
              <p className="text-stone-600 text-xs leading-relaxed">Select the statement that matches your current status, and explore custom strategic coaching programs instantly.</p>
            </div>

            {/* Role Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {matchers.map(m => {
                const isSelected = m.id === selectedId;
                const IconComponent = m.icon;
                return (
                  <button
                    key={m.id}
                    id={`btn-role-${m.id}`}
                    onClick={() => setSelectedId(m.id)}
                    className={`p-4 rounded-sm text-left border transition-all duration-200 flex items-center space-x-3 cursor-pointer ${
                      isSelected 
                        ? 'bg-warm-charcoal text-white border-warm-charcoal shadow-sm' 
                        : 'bg-[#FCFAF7] text-stone-700 border-[#E5E0D5] hover:border-terracotta/50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 shrink-0 ${isSelected ? 'text-white' : 'text-terracotta'}`} />
                    <span className="font-bold text-xs uppercase tracking-wider">{m.role}</span>
                  </button>
                );
              })}
            </div>

            {/* Selection Results panel */}
            <div className="bg-warm-cream/40 p-6 md:p-8 border border-[#E5E0D5] rounded-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E0D5] pb-5">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-terracotta border border-terracotta/30 px-2 py-0.5 rounded-sm">Recommended Strategic Path</span>
                      <h3 className="text-2xl font-serif italic text-warm-charcoal mt-1 flex items-center gap-2">
                        {(() => {
                          const IconComp = selectedMatcher.icon;
                          return <IconComp className="w-6 h-6 text-terracotta shrink-0" />;
                        })()}
                        <span>{selectedMatcher.pathway}</span>
                      </h3>
                    </div>
                    <div className="text-[10px] text-stone-500 font-mono">ID: akromind-{selectedMatcher.id}</div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#7D7067] mb-1">Your Context</h4>
                        <p className="text-stone-700 leading-relaxed text-sm font-serif italic">"{selectedMatcher.situation}"</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#7D7067] mb-1">Program Design Specification</h4>
                        <p className="text-stone-600 text-xs leading-relaxed font-sans">{selectedMatcher.description}</p>
                      </div>
                    </div>

                    <div className="bg-[#FCFAF7] p-6 rounded-sm border border-[#E5E0D5] space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-terracotta">Core Exploratory Challenges Addressed:</h4>
                      <ul className="space-y-3 text-xs text-stone-600 font-sans">
                        {selectedMatcher.questions.map((q, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-terracotta font-bold mr-2 text-xs font-mono">{idx + 1}/</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
   
          {/* Core Tracks */}
          <section className="space-y-16">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-widest text-stone-500 font-bold">Comprehensive Services</span>
              <h2 className="text-3xl font-serif italic text-warm-charcoal text-center font-normal">Our Core Counseling Tracks</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Academic & Student Counseling',
                        items: ['Diagnostic learning barrier identification', 'Strategic study habit development', 'Time block scheduling & custom agendas', 'Examination anxiety mitigation models', 'Restorative focus and retention practices']
                    },
                    {
                        title: 'Career & Stream Counseling',
                        items: ['Aesthetic stream mapping (Grade 10-12)', 'Core strength & professional path diagnostic', 'University admission pathway guidance', 'Professional portfolio crafting assistance', 'Interview confidence & posture guidance']
                    },
                    {
                        title: 'Personal & Well-Being Counseling',
                        items: ['Daily routine & sleep wellness advising', 'Emotional resilience building exercises', 'Self-compassion & daily structure templates', 'Stress triggers recognition & reduction', 'Public speaking fear-mitigation programs']
                    },
                    {
                        title: 'Parent-Student Alignment',
                        items: ['Friction-free student-parent dialogue sessions', 'Expectations modeling & compromise pathways', 'Academic progress transparency metrics', 'Constructive goal-setting strategies', 'Generational communication toolkits']
                    },
                    {
                        title: 'Youth Leadership & Communication',
                        items: ['Active listening & persuasive speaking', 'Constructive self-advocacy counseling', 'Conflict resolution framework mentoring', 'Group collaboration dynamics', 'Confidence design for peer validation']
                    },
                    {
                        title: 'Startup Mindset & Innovation',
                        items: ['User empathy mapping labs', 'Design-driven feedback diagnostics', 'Hypothesis testing & mental modeling', 'Overcoming failure aversion exercises', 'Interactive lateral thinking bootcamps']
                    }
                ].map(s => (
                    <div 
                      key={s.title} 
                      className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors duration-300 rounded-sm space-y-4"
                    >
                        <h4 className="text-[15px] font-bold text-warm-charcoal font-sans">{s.title}</h4>
                        <ul className="space-y-2.5 text-xs text-stone-600 font-serif italic">
                            {s.items.map(item => (
                              <li key={item} className="flex items-start">
                                <span className="text-terracotta mr-2 font-sans font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </section>

          {/* Operational Framework */}
          <section className="bg-[#1C1816] text-warm-cream p-8 md:p-16 border border-[#2D2623] rounded-sm space-y-12">
            <h2 className="text-3xl font-serif italic text-white text-center font-normal">Our Empathetic Counseling Framework</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#241F1D] p-8 border border-stone-800 rounded-sm space-y-4">
                    <h3 className="text-xl font-serif italic text-terracotta">1-on-1 Individual Sessions</h3>
                    <p className="text-stone-300 text-xs leading-relaxed font-sans">Dedicated, quiet spaces for deep developmental conversations. Our experts utilize active listening, validation, and scientifically-informed cognitive feedback to discover root challenges, build secure agency, and create self-sustaining strategies.</p>
                    <ul className="space-y-2 text-xs text-stone-400 font-sans pt-2 border-t border-stone-850">
                        <li className="flex items-center"><span className="text-terracotta mr-2">✓</span> Deep diagnostic assessments</li>
                        <li className="flex items-center"><span className="text-terracotta mr-2">✓</span> Structured routine check-ins</li>
                        <li className="flex items-center"><span className="text-terracotta mr-2">✓</span> Personalized wellness roadmaps</li>
                    </ul>
                </div>
                <div className="bg-[#241F1D] p-8 border border-stone-800 rounded-sm space-y-4">
                    <h3 className="text-xl font-serif italic text-terracotta">Mindset Workshops & Bootcamps</h3>
                    <p className="text-stone-300 text-xs leading-relaxed font-sans">Interactive peer forums designed to cultivate critical thinking, creative collaboration, and high-agency problem-solving. These custom experiences empower you to confidently navigate changing life and professional contexts.</p>
                    <ul className="space-y-2 text-xs text-stone-400 font-sans pt-2 border-t border-stone-850">
                        <li className="flex items-center"><span className="text-terracotta mr-2">✓</span> Practical lateral thinking exercises</li>
                        <li className="flex items-center"><span className="text-terracotta mr-2">✓</span> Public communication confidence labs</li>
                        <li className="flex items-center"><span className="text-terracotta mr-2">✓</span> Compassionate feedback strategies</li>
                    </ul>
                </div>
            </div>
          </section>
  
          {/* Benefit lists - Left and Right Balance */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-4">
                <h3 className="text-lg font-bold text-warm-charcoal font-sans">Why Counseling with AkroMind?</h3>
                <ul className="space-y-3 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Certified growth coaches and child psychology expert mentors</li>
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Highly secure, compassionate, and non-judgmental dialogue environments</li>
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Direct alignment with AkroTution and AkroPlacement pathways</li>
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Long-term developmental support aimed at actual personal transformation</li>
                </ul>
            </div>
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-4">
                <h3 className="text-lg font-bold text-warm-charcoal font-sans">Who Can Benefit?</h3>
                <ul className="space-y-3 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Students tackling high academic stress and exam-heavy schedules</li>
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Parents seeking positive tools to support their children's ambitions</li>
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Professionals and graduates undergoing significant industry transitions</li>
                    <li className="flex items-start"><span className="text-terracotta font-sans mr-2 font-bold">—</span> Early-stage entrepreneurs looking to build resilience and high-agency cultures</li>
                </ul>
            </div>
          </section>

          {/* Faqs */}
          <section className="space-y-12">
              <h2 className="text-2xl md:text-3xl font-serif italic text-center text-warm-charcoal">Frequently Asked Questions</h2>
              <FaqAccordion items={faqs} />
          </section>
      </motion.div>
    );
  }
