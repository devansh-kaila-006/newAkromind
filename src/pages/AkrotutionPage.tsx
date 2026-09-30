import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FaqAccordion from '../components/FaqAccordion';
import { BookOpen, Shield, User, Users, CheckCircle } from 'lucide-react';

const faqs = [
  { q: 'What subjects and classes does AkroTution cover?', a: 'We cover all major subjects from Class 6 to Class 12, including Mathematics, Science, English, Social Studies, and specialized coaching for competitive exams like JEE, NEET, and others.' },
  { q: 'What is the batch size for AkroTution classes?', a: 'We maintain small batch sizes of 8-12 students for personalized attention. We also offer one-on-one sessions for focused preparation.' },
  { q: 'Do you offer online classes?', a: 'Yes, all our classes are available online with live interactive sessions, recorded lectures for revision, and digital study materials.' },
  { q: 'How do you track student progress?', a: 'We use regular assessments, mock tests, and progress reports. Parents receive monthly updates and can schedule meetings with tutors.' },
  { q: 'How are customized study plans structured?', a: 'Study plans are structured specifically based on the selected program stream, learning environment (Group/Private), and number of subjects to match the child\'s optimal learning pace.' },
  { q: 'Do you offer trial classes?', a: 'Yes, we offer 2 free trial classes for new students to experience our teaching methodology.' },
  { q: 'How do you handle doubt clearing?', a: 'We have dedicated doubt-clearing sessions, WhatsApp groups for quick questions, and one-on-one time scheduled every week.' }
];

export default function AkrotutionPage() {
  const [selectedGrade, setSelectedGrade] = useState('secondary');
  const [format, setFormat] = useState('group'); // group or private
  const [subjectCount, setSubjectCount] = useState(2);

  const getWeeklyHours = () => {
    const hoursPerSubject = format === 'group' ? 3 : 2;
    return subjectCount * hoursPerSubject;
  };

  const currentGradeLabel = {
    foundation: 'Foundation Plus',
    secondary: 'Secondary Boards',
    senior: 'Senior Stream',
    competitive: 'Competitive Exam Prep'
  }[selectedGrade];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
        <header className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">AkroTution</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
              Symmetrical Learning. <span className="font-serif italic font-normal text-terracotta">Structured Growth.</span>
            </h1>
            <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
              Comprehensive educational programs, structured curriculum tracks, and personalized tutoring designed to unlock your full academic and professional potential.
            </p>
        </header>

        {/* Programs Grid */}
        <section className="space-y-16">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Core Curriculum Streams</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal font-normal">Comprehensive Education Programs</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Foundation (Classes 6-8)', items: ['Math Foundation Framework', 'General Science Concepts', 'English Grammar & Syntax', 'Mental Aptitude Ability'] },
                    { title: 'Secondary (Classes 9-10)', items: ['Board Prep (CBSE/ICSE)', 'Symmetrical Core Subject Deep Dives', 'Olympiad & NTSE Primers', 'Time Management & Study Blueprints'] },
                    { title: 'Senior Secondary (Classes 11-12)', items: ['Science / Commerce / Arts Tracks', 'Combined Board + Competitive Timelines', 'University Selection Portfolio Support', 'Algorithmic Thinking Exercises'] }
                ].map(p => (
                    <div key={p.title} className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors duration-300 rounded-sm space-y-5">
                        <h4 className="text-[15px] font-bold text-warm-charcoal font-sans">{p.title}</h4>
                        <ul className="space-y-2.5 text-xs text-stone-600 font-serif italic">
                          {p.items.map(i => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-terracotta/50 font-sans select-none">—</span>
                              <span>{i}</span>
                            </li>
                          ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            {/* Dark callout for Exams */}
            <div className="bg-[#1C1816] text-warm-cream p-8 md:p-12 border border-[#2D2623] rounded-sm grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4"> 
                    <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta">Advanced Coaching</span>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white font-normal">Competitive Exam Mastery</h3>
                    <ul className="space-y-3.5 text-stone-300 text-xs font-sans">
                        <li className="flex items-center gap-2"><span className="text-terracotta font-bold">✓</span> JEE Main & Advanced Intensive Coaching</li>
                        <li className="flex items-center gap-2"><span className="text-terracotta font-bold">✓</span> NEET Biology & Physics Preparation</li>
                        <li className="flex items-center gap-2"><span className="text-terracotta font-bold">✓</span> NATA Aptitude & CLAT Legal Studies Coaching</li>
                        <li className="flex items-center gap-2"><span className="text-terracotta font-bold">✓</span> Top Portfolio Preparation for Premier Design Schools</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[ {num: '95%+', text: 'Avg Performance Growth'}, {num: '80%+', text: 'Competitive Selection Rate'}].map((s, idx) => (
                        <div key={idx} className="bg-[#241F1D] p-6 border border-stone-800 rounded-sm text-center">
                            <div className="text-3xl font-serif italic font-extrabold text-terracotta">{s.num}</div>
                            <div className="text-[9px] text-[#FCFAF7] mt-1.5 uppercase tracking-widest font-bold">{s.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Interactive Tuition Configurator Tool */}
        <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Tool</span>
            <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Build Your Tuitions Package</h2>
            <p className="text-stone-600 text-xs leading-relaxed">Customize grades, select learning models, and choose subject volumes to see recommended weekly study agendas instantly.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Configuration Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Grade */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">Class / Program Stream</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'foundation', label: 'Foundation Plus', details: 'Classes 6 to 8' },
                    { id: 'secondary', label: 'Secondary Boards', details: 'Classes 9 & 10' },
                    { id: 'senior', label: 'Senior Stream', details: 'Classes 11 & 12' },
                    { id: 'competitive', label: 'Competitive Exam', details: 'JEE / NEET Prep' }
                  ].map(g => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGrade(g.id)}
                      className={`p-4 rounded-sm text-left border cursor-pointer transition-colors duration-200 ${
                        selectedGrade === g.id
                          ? 'border-terracotta bg-warm-cream/50 text-[#1C1816]'
                          : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50'
                      }`}
                    >
                      <div className="font-bold text-xs uppercase tracking-wider">{g.label}</div>
                      <div className="text-[11px] text-stone-500 font-serif italic mt-1">{g.details}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Batch format */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">Tutoring Environment</label>
                <div className="grid md:grid-cols-2 gap-3">
                  <button
                    onClick={() => setFormat('group')}
                    className={`p-4 rounded-sm text-left border cursor-pointer flex gap-4 transition-colors duration-200 ${
                      format === 'group'
                        ? 'border-terracotta bg-warm-cream/50 text-[#1C1816]'
                        : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50'
                    }`}
                  >
                    <div className="border border-[#E5E0D5] p-2 rounded-sm text-terracotta bg-[#FCFAF7] self-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider">Blended Group Batch</div>
                      <div className="text-[10px] text-stone-500 font-serif italic mt-0.5">8 to 12 active peers max</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setFormat('private')}
                    className={`p-4 rounded-sm text-left border cursor-pointer flex gap-4 transition-colors duration-200 ${
                      format === 'private'
                        ? 'border-terracotta bg-warm-cream/50 '
                        : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50'
                    }`}
                  >
                    <div className="border border-[#E5E0D5] p-2 rounded-sm text-terracotta bg-[#FCFAF7] self-center">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase tracking-wider">1-on-1 Focused Session</div>
                      <div className="text-[10px] text-stone-500 font-serif italic mt-0.5">Dedicated private mentor</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Subject Volume */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">Number of Core Subjects</label>
                  <span className="text-[10px] bg-warm-cream border border-[#E5E0D5] text-terracotta font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                    {subjectCount === 4 ? 'All Core Subjects' : `${subjectCount} Subjects`}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  {[1, 2, 3, 4].map(num => (
                    <button
                      key={num}
                      onClick={() => setSubjectCount(num)}
                      className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold rounded-sm border cursor-pointer transition ${
                        subjectCount === num
                          ? 'bg-warm-charcoal text-white border-warm-charcoal'
                          : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5]'
                      }`}
                    >
                      {num} {num === 1 ? 'Subject' : 'Subjects'}
                    </button>
                  ))}
                </div>
                {subjectCount >= 3 && (
                  <p className="text-[11px] font-serif italic text-stone-600 flex items-center gap-1.5 pt-1">
                    <CheckCircle className="w-3.5 h-3.5 text-terracotta" /> Full Curriculum Plan Activated. Periodic evaluations included.
                  </p>
                )}
              </div>
            </div>

            {/* Hour Commitment Panel */}
            <div className="lg:col-span-5 bg-[#1C1816] text-warm-cream p-8 border border-[#2D2623] rounded-sm space-y-6">
              <div className="border-b border-stone-800 pb-5 text-center">
                <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta">Weekly Study Volume</span>
                <div className="text-4xl md:text-5xl font-serif italic font-extrabold text-white mt-1.5 tracking-tight">
                  {getWeeklyHours()}<span className="text-lg font-serif"> Hours</span><span className="text-xs font-mono font-medium text-stone-550">/Wk</span>
                </div>
                <p className="text-[10px] text-stone-400 font-serif italic mt-1">Symmetrical allocation for {currentGradeLabel}</p>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                  <span className="text-stone-400">Classroom Agenda:</span>
                  <span className="font-bold text-white font-mono">{getWeeklyHours()} Hrs / Wk</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                  <span className="text-stone-400 font-medium">Format Plan:</span>
                  <span className="font-bold text-terracotta capitalize">{format === 'group' ? 'Blended Group' : '1-on-1 Individual'}</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                  <span className="text-stone-400 font-medium">Syllabus Materials:</span>
                  <span className="font-bold text-white italic font-serif">Fully Dispatched</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-medium">Self-Diagnostics:</span>
                  <span className="font-bold text-white italic font-serif">Weekly Analytics</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/contact"
                  className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Enroll In Plan Alignment &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
            <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal text-center">Our Symmetrical Teaching Methodology</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'Blended Learning', desc: 'Mix of interactive online sessions, custom physical worksheets, and peer learning pools to boost active recall.' },
                    { title: 'Personalized Approaches', desc: 'Diagnostic learning checklists, tailored lesson pacing rates, and detailed monthly progress assessments with tutors.' },
                    { title: 'Tech-Enhanced Feedback', desc: 'AI-enabled progress analysis models, digital break-out whiteboards, and robust offline study templates.' }
                ].map(f => (
                    <div key={f.title} className="bg-warm-cream/30 p-6 rounded-sm border border-[#E5E0D5] hover:border-terracotta transition-colors duration-205 space-y-2">
                        <h4 className="font-bold font-sans text-sm text-warm-charcoal">{f.title}</h4>
                        <p className="text-stone-600 text-xs leading-relaxed font-serif italic">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Growth Electives */}
        <section className="space-y-12">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Electives</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Skill & Professional Growth Electives</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                {[
                    { title: 'Information Technology', desc: 'Introductory pathways into Python Programming, HTML/CSS Web Development, Data structures, and algorithmic logic basics.' },
                    { title: 'Leadership & Soft Skills', desc: 'Dynamic public speaking modules, negotiation workshops, persuasive communication, and collaborative team tasks.' },
                    { title: 'Creative Solutions', desc: 'Introduction to visual branding principles, graphic layouts, scriptwriting, and digital media production formats.' }
                ].map(s => (
                    <div key={s.title} className="p-8 border border-[#E5E0D5] rounded-sm bg-[#FCFAF7] hover:border-terracotta transition-colors duration-250 space-y-3">
                        <h4 className="font-bold text-sm text-warm-charcoal">{s.title}</h4>
                        <p className="text-stone-600 text-xs leading-relaxed font-serif italic">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Lists outcomes */}
        <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
                <h3 className="text-lg font-bold text-warm-charcoal font-sans">Why Learn with AkroTution?</h3>
                <ul className="space-y-4 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Proven IITian and expert mentor faculty resources.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Custom digital doubt rooms with 20-minute SLA help models.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Comprehensive, clean physical worksheets and formula sheets dispatched.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Integrated mindset coaching alignment powered by AkroMind.</li>
                </ul>
            </div>
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
                <h3 className="text-lg font-bold text-warm-charcoal font-sans">Academic Outcomes Target</h3>
                <ul className="space-y-4 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Concrete, high-confidence exam performance improvement inside of 45 days.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Frictionless parental alignment through simple weekly text analytics.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Preparation of world-class, multi-disciplinary portfolios for top admissions.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Equipping students with scalable algorithmic thinking foundations.</li>
                </ul>
            </div>
        </section>

        {/* FAQS */}
        <section className="space-y-12">
            <h2 className="text-2xl md:text-3xl font-serif italic text-center text-warm-charcoal">Frequently Asked Questions</h2>
            <FaqAccordion items={faqs} />
        </section>
    </motion.div>
  );
}
