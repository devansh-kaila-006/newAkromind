import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';
import EditorialVisual from '../components/EditorialVisual';
import { BookOpen, Shield, User, Users, CheckCircle, Clock, Award, FileText, Check } from 'lucide-react';

const tutionFaqs: FAQItem[] = [
  {
    category: 'Curriculum & Streams',
    q: 'What classes and academic boards does AKROTUTION cover?',
    a: 'We provide specialized tutoring for students from Class 6 through Class 12 across major national and international examination boards, including CBSE (Central Board of Secondary Education), ICSE/ISC (Indian Certificate of Secondary Education), State Boards, and Cambridge/IGCSE international tracks. Our curriculum is mapped chapter-by-chapter to official board learning outcomes.'
  },
  {
    category: 'Batches & Faculty',
    q: 'What is the student-to-teacher ratio in AKROTUTION batches?',
    a: 'To guarantee meaningful individual attention, our group cohorts are strictly capped at 8 to 12 students per batch. For students requiring targeted catch-up support or hyper-accelerated competitive exam training, we also offer dedicated 1-on-1 private mentorship tracks with custom-tailored scheduling.'
  },
  {
    category: 'Batches & Faculty',
    q: 'Who are the teachers and mentors conducting the classes?',
    a: 'Our teaching faculty consists of seasoned educators, including IIT and NIT alumni, doctoral candidates, and former board examination evaluators with a minimum of 6 years of subject teaching experience. Every tutor undergoes rigorous pedagogical training and background verification before taking classes.'
  },
  {
    category: 'Competitive Exams',
    q: 'How do you balance school board exams with competitive tests like JEE and NEET?',
    a: 'We implement an integrated parallel-track pedagogy. Since board examinations evaluate descriptive conceptual clarity while entrance examinations test speed and pattern recognition, we align chapters synchronously. For example, when Electrostatics is taught for CBSE boards, the corresponding JEE/NEET numerical applications and previous 15-year questions are solved simultaneously.'
  },
  {
    category: 'Learning Support',
    q: 'How does your doubt-clearing desk work, and what is the response time?',
    a: 'Students have access to our digital Doubt Resolution Desk where they can upload questions, equations, or handwritten problems anytime. Our dedicated on-call teaching assistants provide step-by-step video or handwritten explanations within a guaranteed 20-minute SLA. In addition, every student has a mandatory weekly 45-minute 1-on-1 doubt clearing slot.'
  },
  {
    category: 'Assessments & Parents',
    q: 'How are student progress and test scores tracked and reported to parents?',
    a: 'We conduct bi-weekly diagnostic chapter assessments and monthly full-length mock examinations modeled after official board blueprints. Parents receive a detailed Monthly Analytics Report summarizing accuracy rates, time taken per question, topic mastery indices, and homework completion percentages, paired with a monthly virtual Parent-Teacher Conference.'
  },
  {
    category: 'Materials & Delivery',
    q: 'What physical and digital study materials are provided upon enrollment?',
    a: 'Enrolled students receive our comprehensive AKROTUTION Study Vault, which includes spiral-bound theory modules, chapter formula summary sheets, 500+ solved exemplars, past-10-year board paper archives, and high-yield question banks. Digitally, students get lifetime access to recorded classroom sessions, lecture slides, and interactive quizzes.'
  },
  {
    category: 'Admissions & Trials',
    q: 'Do you provide trial classes before committing to a semester plan?',
    a: 'Yes, we offer two full complimentary trial classes with our primary faculty. During this trial period, we also conduct a free 45-minute Academic Diagnostic Assessment to evaluate foundational knowledge gaps and formulate a recommended learning plan for the parents.'
  },
  {
    category: 'Admissions & Trials',
    q: 'What happens if a student misses a scheduled live class?',
    a: 'Every live interactive class is recorded in high definition and automatically archived to the student’s secure portal within 2 hours. If a student misses a session due to illness or school events, their academic mentor schedules a brief 20-minute catch-up briefing to review core concepts before the next session.'
  },
  {
    category: 'Curriculum & Streams',
    q: 'Can a student enroll in single individual subjects, like Mathematics or Physics only?',
    a: 'Absolutely. While many students benefit from our Comprehensive Core Bundles (covering Physics, Chemistry, Mathematics, and Biology), students are free to enroll in standalone modular subjects where they need focused acceleration.'
  },
  {
    category: 'Ecosystem',
    q: 'How does AKROTUTION coordinate with AKROMIND counseling for exam stress?',
    a: 'Academic anxiety is the leading cause of examination underperformance. When an AKROTUTION student exhibits persistent test anxiety, cognitive fatigue, or declining motivation, our tutors immediately flag the profile to our in-house AKROMIND counselors. The student receives personalized stress inoculation sessions and breathing protocols at no additional charge.'
  },
  {
    category: 'Fees & Policies',
    q: 'What are the fee payment structures and refund policies?',
    a: 'Fees can be paid monthly, quarterly, or on a discounted annual semester basis, with flexible zero-interest EMI options. If a student discontinues within the first 14 calendar days after trial classes, unused course fees are refunded on a pro-rata basis with zero lock-in penalty.'
  }
];

export default function AkrotutionPage() {
  const [selectedGrade, setSelectedGrade] = useState('secondary');
  const [format, setFormat] = useState('group');
  const [subjectCount, setSubjectCount] = useState(3);

  const getWeeklyHours = () => {
    const hoursPerSubject = format === 'group' ? 3 : 2;
    return subjectCount * hoursPerSubject;
  };

  const currentGradeLabel = {
    foundation: 'Foundation Plus (Grades 6-8)',
    secondary: 'Secondary Boards (Grades 9-10)',
    senior: 'Senior Secondary (Grades 11-12)',
    competitive: 'Competitive Exam Track (JEE/NEET)'
  }[selectedGrade];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">AKROTUTION</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Symmetrical Learning. <span className="font-serif italic font-normal text-terracotta">Predictable Mastery.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          Comprehensive CBSE, ICSE, and Competitive Exam tutoring engineered by IITian faculty, supported by ultra-small batches, systematic worksheets, and instant 20-minute doubt clearance.
        </p>
      </header>

      {/* Visual Showcase */}
      <EditorialVisual 
        type="akrotution"
        aspectRatio="21:9"
        badge="Academic Atelier"
        title="Rigorous Mathematical & Scientific Pedagogy"
        caption="From foundational Class 6 logic frameworks to Class 12 JEE Advanced calculus"
      />

      {/* Trust Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-[#E5E0D5] divide-x divide-[#E5E0D5] py-8 bg-[#FCFAF7] border-x border-[#E5E0D5]">
        {[
          { num: '8-12', label: 'Max Batch Size', detail: 'Guaranteed individual attention' },
          { num: '<20m', label: 'Doubt Desk SLA', detail: 'On-demand step-by-step guidance' },
          { num: '95.4%', label: 'Board Distinction Rate', detail: 'Scored >85% in CBSE / ICSE' },
          { num: '100%', label: 'IITian & Expert Mentors', detail: 'Vetted minimum 6+ years experience' }
        ].map((s, idx) => (
          <div key={idx} className="px-6 space-y-1 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-serif italic font-bold text-terracotta tabular-nums">{s.num}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-warm-charcoal">{s.label}</div>
            <div className="text-[10px] text-stone-500 font-serif italic">{s.detail}</div>
          </div>
        ))}
      </section>

      {/* Core Academic Curricula Breakdown */}
      <section className="space-y-16">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Curriculum Architecture</span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal font-normal">Four Distinct Academic Divisions</h2>
          <p className="text-xs text-stone-600 font-serif leading-relaxed">
            Every grade stage requires a fundamentally different psychological and cognitive approach. Our curriculum is tailored to match adolescent developmental stages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Foundation */}
          <div className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
            <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta font-bold">DIVISION 01</span>
                <h4 className="text-xl font-bold text-warm-charcoal">Foundation Plus (Classes 6 to 8)</h4>
              </div>
              <span className="text-xs font-mono text-stone-400">CORE LOGIC</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-serif">
              Building curiosity, mathematical intuition, and foundational scientific habits before secondary pressures begin. We replace rote memorization with first-principles reasoning.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Pre-Algebra & Geometry:</strong> Visual geometric proofs, fractions, integers, and real-world word problems.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Integrated Science:</strong> Hands-on physics demonstrations, chemical states, and cellular biology diagrams.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Linguistic Clarity:</strong> English grammar rules, reading comprehension, and structured analytical essay writing.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Mental Aptitude:</strong> Pattern recognition, spatial deduction, and Olympiad/NTSE preliminary primers.</span>
              </li>
            </ul>
          </div>

          {/* Secondary Boards */}
          <div className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
            <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta font-bold">DIVISION 02</span>
                <h4 className="text-xl font-bold text-warm-charcoal">Secondary Boards (Classes 9 & 10)</h4>
              </div>
              <span className="text-xs font-mono text-stone-400">CBSE / ICSE</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-serif">
              Rigorous preparation for official Class 10 board examinations. We deconstruct marking schemes, teach precise point-by-point answer formatting, and eliminate exam stress.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Standard & Basic Mathematics:</strong> Quadratic equations, trigonometry, circles, and coordinate geometry mastery.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Science Dissection:</strong> Physics ray optics/electricity, Chemistry chemical reactions/acids, and Biology genetics/life processes.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>10-Year Board Archives:</strong> Solving every past CBSE & ICSE board question with strict timed conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Stream Selection Consultation:</strong> Integrated alignment with AKROMIND to choose between Science, Commerce, or Arts.</span>
              </li>
            </ul>
          </div>

          {/* Senior Secondary */}
          <div className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
            <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta font-bold">DIVISION 03</span>
                <h4 className="text-xl font-bold text-warm-charcoal">Senior Secondary (Classes 11 & 12)</h4>
              </div>
              <span className="text-xs font-mono text-stone-400">SCIENCE / COMMERCE</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-serif">
              High-intensity, chapter-level specialization designed to conquer the steepest academic learning curve while preparing for university admissions portfolios.
            </p>
            <ul className="space-y-2 text-xs text-stone-700 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Science Stream (PCM/PCB):</strong> Calculus, electromagnetism, wave optics, organic reaction mechanisms, and human physiology.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Commerce Stream:</strong> Double-entry bookkeeping, company accounts, macroeconomics, business finance, and applied math.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>CUET & University Entrance:</strong> Domain-specific entrance drilling for premier central and private universities.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Practical & Viva Coaching:</strong> Laboratory notebook formatting, experimental error calculation, and viva mock drills.</span>
              </li>
            </ul>
          </div>

          {/* Competitive Exam Mastery */}
          <div className="p-8 bg-[#1C1816] text-warm-cream border border-[#2D2623] rounded-sm space-y-5">
            <div className="flex justify-between items-start border-b border-stone-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta font-bold">DIVISION 04</span>
                <h4 className="text-xl font-bold text-white">Competitive Exam Mastery</h4>
              </div>
              <span className="text-xs font-mono text-terracotta font-bold">JEE / NEET</span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed font-serif italic">
              Hyper-focused, algorithmic test-taking strategies crafted by top percentile engineering and medical mentors to achieve rank-securing accuracy.
            </p>
            <ul className="space-y-2 text-xs text-stone-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold">✓</span>
                <span><strong>JEE Main & Advanced:</strong> Multi-concept physics numericals, physical chemistry calculations, and rigorous coordinate calculus.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold">✓</span>
                <span><strong>NEET-UG Medical:</strong> 360/360 biology target blueprints, NCERT line-by-line question mining, and rapid physics calculation techniques.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold">✓</span>
                <span><strong>Full-Length Computer-Based Tests (CBT):</strong> Realistic national percentile benchmarking with granular negative-marking diagnostics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-terracotta font-bold">✓</span>
                <span><strong>NATA & CLAT Law:</strong> Architectural drawing perspective drills, legal reasoning, constitutional law, and current affairs capsules.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Tuition Package Configurator */}
      <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Planner</span>
          <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Design Your Academic Tutoring Schedule</h2>
          <p className="text-stone-600 text-xs leading-relaxed">Customize your grade stream, select preferred batch environment, and adjust subject volumes to calculate recommended study commitments.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Grade Stream */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">1/ Academic Division</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'foundation', label: 'Foundation Plus', details: 'Classes 6 to 8' },
                  { id: 'secondary', label: 'Secondary Boards', details: 'Classes 9 & 10' },
                  { id: 'senior', label: 'Senior Secondary', details: 'Classes 11 & 12' },
                  { id: 'competitive', label: 'Competitive Track', details: 'JEE / NEET Prep' }
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

            {/* Step 2: Format */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">2/ Learning Environment</label>
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
                    <div className="font-bold text-xs uppercase tracking-wider">Cohort Batch</div>
                    <div className="text-[10px] text-stone-500 font-serif italic mt-0.5">8 to 12 active peers max</div>
                  </div>
                </button>

                <button
                  onClick={() => setFormat('private')}
                  className={`p-4 rounded-sm text-left border cursor-pointer flex gap-4 transition-colors duration-200 ${
                    format === 'private'
                      ? 'border-terracotta bg-warm-cream/50 text-[#1C1816]'
                      : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50'
                  }`}
                >
                  <div className="border border-[#E5E0D5] p-2 rounded-sm text-terracotta bg-[#FCFAF7] self-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider">1-on-1 Dedicated</div>
                    <div className="text-[10px] text-stone-500 font-serif italic mt-0.5">Exclusive private mentor</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Subjects */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">3/ Subject Breadth</label>
                <span className="text-[10px] bg-warm-cream border border-[#E5E0D5] text-terracotta font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  {subjectCount === 4 ? 'Complete Core Stream' : `${subjectCount} Core Subjects`}
                </span>
              </div>
              <div className="flex items-center gap-3">
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
            </div>
          </div>

          {/* Hour Commitment Output */}
          <div className="lg:col-span-5 bg-[#1C1816] text-warm-cream p-8 border border-[#2D2623] rounded-sm space-y-6">
            <div className="border-b border-stone-800 pb-5 text-center">
              <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta">Estimated Weekly Study Volume</span>
              <div className="text-4xl md:text-5xl font-serif italic font-extrabold text-white mt-1.5 tracking-tight tabular-nums">
                {getWeeklyHours()}<span className="text-lg font-serif"> Hours</span><span className="text-xs font-mono font-medium text-stone-400">/Wk</span>
              </div>
              <p className="text-[10px] text-stone-400 font-serif italic mt-1">{currentGradeLabel}</p>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                <span className="text-stone-400">Classroom Time:</span>
                <span className="font-bold text-white font-mono">{getWeeklyHours()} Hrs / Week</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                <span className="text-stone-400">Instruction Model:</span>
                <span className="font-bold text-terracotta capitalize">{format === 'group' ? 'Blended Small Batch (8-12)' : '1-on-1 Private Atelier'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                <span className="text-stone-400">Doubt Clearing Desk:</span>
                <span className="font-bold text-white">&lt;20 min SLA Included</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Study Materials Dispatched:</span>
                <span className="font-bold text-white italic font-serif">Spiral Vault & Past 10-Yr Tests</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Book 2 Free Trial Classes &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Symmetrical 5-Stage Teaching Pedagogy */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Methodology</span>
          <h2 className="text-3xl font-serif italic text-warm-charcoal">The 5-Stage Symmetrical Pedagogy</h2>
          <p className="text-xs text-stone-600 font-serif max-w-xl mx-auto">
            We don't teach to simply complete textbook chapters. We guide students through an empirical loop that transforms abstract formulas into lifelong conceptual reflex.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Diagnostic Benchmark', desc: 'Pre-chapter baseline test identifies student preconceptions, calculation habits, and specific gaps.' },
            { step: '02', title: 'First-Principles Grounding', desc: 'Interactive concept lecture with physical metaphors and visual geometry derivations; no blind formulas.' },
            { step: '03', title: 'Scaffolding Worksheets', desc: 'Graded homework packets moving smoothly from direct formula substitution to multi-step analytical problems.' },
            { step: '04', title: 'Timed Board & CBT Mocks', desc: 'Simulated examination environments enforcing strict time allocations and eliminating panic reflexes.' },
            { step: '05', title: 'Error Matrix Feedback', desc: 'Granular post-exam error logs classifying mistakes into calculation slip, conceptual gap, or time mismanagement.' }
          ].map(p => (
            <div key={p.step} className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-3 hover:border-terracotta transition-colors">
              <div className="font-mono text-xs font-bold text-terracotta border-b border-[#E5E0D5] pb-2">
                STAGE {p.step}
              </div>
              <h4 className="font-bold text-sm text-warm-charcoal">{p.title}</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive FAQs for AKROTUTION */}
      <section className="space-y-8">
        <FaqAccordion 
          items={tutionFaqs}
          title="AKROTUTION Frequently Asked Questions"
          subtitle="Clear answers on our curriculum, batches, faculty, tests, and enrollment"
        />
      </section>
    </motion.div>
  );
}
