import { useState } from 'react';
import { motion } from 'motion/react';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';
import EditorialVisual from '../components/EditorialVisual';
import { Briefcase, TrendingUp, CheckSquare, Shield, DollarSign, Award, Laptop, Palette, Cpu, Check, ArrowRight } from 'lucide-react';

const placementFaqs: FAQItem[] = [
  {
    category: 'Eligibility & Intake',
    q: 'Who is eligible to enroll in AkroPlacement career acceleration tracks?',
    a: 'We admit final-year college students, recent university graduates, mid-career professionals looking to jump salary brackets, and individuals executing career transitions (such as moving from service companies to product engineering or non-technical roles to UI/UX/Product Management). Admission requires an initial 45-minute Technical & Aptitude Diagnostic Assessment.'
  },
  {
    category: 'Placement Process',
    q: 'What is your placement success rate and typical placement timeline?',
    a: 'Our placement success rate is 78% within 90 days of program completion, and 92% within 180 days for candidates who complete all prescribed mock batteries and assignments. The acceleration program duration spans 10 to 16 weeks depending on baseline skill readiness, followed by an active 6-month recruiter referral period.'
  },
  {
    category: 'Hiring Partners',
    q: 'What companies and industry sectors hire through your partner network?',
    a: 'We maintain active hiring partnerships with 500+ corporate enterprises across India, Southeast Asia, and the Middle East. Partners include Tier-1 global technology product companies, high-growth Series-A through Series-D startups, premier management consultancies, FinTech unicorns, and multinational automotive engineering manufacturers.'
  },
  {
    category: 'Guarantees & Policies',
    q: 'Do you offer a 100% placement guarantee or money-back assurance?',
    a: 'We do not engage in misleading "100% job guarantee" gimmicks that flood students with low-quality telemarketing or sales roles. Instead, we offer a Performance Accountability Pledge: if an eligible candidate attends 90% of mock interviews, implements resume revisions, and applies to our referred roles without receiving a qualified offer matching their target bracket within 6 months, we extend personalized 1-on-1 mentorship at zero additional charge until an offer is secured.'
  },
  {
    category: 'Salary & Compensation',
    q: 'What compensation packages can candidates realistically expect?',
    a: 'Fresh engineering graduates entering product companies typically secure offers between ₹6 LPA and ₹12 LPA. Experienced candidates (2 to 5 years experience) transitioning from legacy IT service firms to modern product teams regularly achieve CTC jumps of +100% to +250%, securing packages between ₹14 LPA and ₹28 LPA. Senior tech leads and directors command ₹35 LPA to ₹55+ LPA.'
  },
  {
    category: 'Mocks & Mentors',
    q: 'Who conducts the mock technical and behavioral interviews?',
    a: 'All mock interviews are conducted by active Senior Engineers, Engineering Managers, Product Directors, and Consulting Principals working at companies like Google, Microsoft, Amazon, Bain, and top unicorn startups. Each mock session includes a rigorous 45-minute live simulation followed by 15 minutes of granular, actionable rubric feedback.'
  },
  {
    category: 'Career Transitions',
    q: 'Can candidates from non-computer-science backgrounds transition into Tech and UI/UX?',
    a: 'Yes. Over 35% of our successful alumni hold degrees in Mechanical, Civil, Commerce, or Arts. Our bridge curriculums provide intense, foundational training in software architecture, Figma design systems, or data analysis, paired with portfolio-grade capstone projects that prove competence over formal academic credentials.'
  },
  {
    category: 'International Placements',
    q: 'Do you facilitate international job placements in Europe, Dubai, or Singapore?',
    a: 'Yes. We provide dedicated international career modules focusing on remote global hiring practices, international resume formats (EuroPass/US single-page formats), cross-cultural communication protocols, and direct introductions to global remote-first companies and overseas employers. Work visa processing is coordinated through candidate sponsorships.'
  },
  {
    category: 'Salary Negotiation',
    q: 'How does AkroPlacement support candidates during salary offer negotiations?',
    a: 'Most professionals leave 15% to 30% on the table due to discomfort with negotiation. Our senior negotiation coaches review written offer letters, benchmark fixed vs. variable bonuses and ESOP equity grants, and draft strategic counter-offer communications to ensure candidates receive the highest compensation possible.'
  },
  {
    category: 'Post-Placement Support',
    q: 'What support is provided after an offer letter has been accepted?',
    a: 'Our engagement does not end at offer signing. We provide our 90-Day Post-Placement Onboarding Advisory, which includes 30-60-90 day performance planning, tips for managing team expectations during probation, and check-ins with your assigned career mentor to ensure you establish immediate credibility in your new organization.'
  }
];

export default function AkroplacementPage() {
  const [selectedDomain, setSelectedDomain] = useState('tech');
  const [experience, setExperience] = useState('junior');

  const domainData = {
    tech: {
      title: 'Technology & Cloud Solutions',
      salary: { fresh: '₹6.5 - ₹10 LPA', junior: '₹12 - ₹22 LPA', senior: '₹28 - ₹55+ LPA' },
      industries: ['SaaS Platforms', 'FinTech Engines', 'AI/ML Startups', 'E-commerce Giants'],
      checklist: [
        'Advanced Data Structures, Algorithms & LeetCode Hard patterns',
        'Distributed System Design (High-concurrency, microservices, caches)',
        'Live peer-to-peer coding interview simulations with Senior SDEs',
        'Resume re-architecture with ATS optimization and verified impact metrics'
      ]
    },
    business: {
      title: 'Management Consulting & Strategy',
      salary: { fresh: '₹5.5 - ₹8.5 LPA', junior: '₹10 - ₹18 LPA', senior: '₹22 - ₹40 LPA' },
      industries: ['Top Management Consultancies', 'Corporate Strategy', 'High-Growth Tech Startups', 'FMCG Conglomerates'],
      checklist: [
        'Structured case interview frameworks (Profitability, Market Entry, M&A)',
        'Advanced financial valuation models and data storytelling in Excel/PowerBI',
        'High-stakes stakeholder management and presentation simulation',
        'Behavioral leadership interview prep based on the STAR methodology'
      ]
    },
    creative: {
      title: 'Product Design & UI/UX Strategy',
      salary: { fresh: '₹5 - ₹8 LPA', junior: '₹9 - ₹16 LPA', senior: '₹18 - ₹34 LPA' },
      industries: ['Product Unicorns', 'Design Agencies', 'Gaming Studios', 'Digital Innovation Labs'],
      checklist: [
        'End-to-end Figma Design System & user flow architecture',
        'Qualitative user research defense, persona audits, and usability tests',
        'High-density case study portfolio narrative construction',
        'Live whiteboard design challenge coaching with Principal Product Designers'
      ]
    },
    core: {
      title: 'Core Hardware, Robotics & EV',
      salary: { fresh: '₹5 - ₹7.5 LPA', junior: '₹9 - ₹15 LPA', senior: '₹18 - ₹32 LPA' },
      industries: ['Electric Mobility (EV)', 'Industrial Robotics', 'Aerospace Systems', 'Renewable CleanTech'],
      checklist: [
        'CAD 3D modeling, FEA simulation & thermodynamic analysis review',
        'Embedded IoT microcontroller architecture and firmware optimization',
        'Hardware debugging, sensor telemetry & prototype testing drills',
        'Direct connection to senior engineering directors in manufacturing firms'
      ]
    }
  }[selectedDomain] || {
    title: 'Technology & Cloud Solutions',
    salary: { fresh: '₹6.5 - ₹10 LPA', junior: '₹12 - ₹22 LPA', senior: '₹28 - ₹55+ LPA' },
    industries: ['SaaS Platforms'],
    checklist: []
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">AkroPlacement</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Aligning Talents. <span className="font-serif italic font-normal text-terracotta">Securing Destinies.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          Elite career acceleration pipeline connecting college graduates and experienced professionals with 500+ corporate hiring partners in tech, design, business operations, and engineering.
        </p>
      </header>

      {/* Visual Showcase */}
      <EditorialVisual 
        type="akroplacement"
        aspectRatio="21:9"
        badge="Career Acceleration Atelier"
        title="Predictable Career Velocity Engine"
        caption="From foundational technical screening to executive leadership placement"
      />

      {/* Trust Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-[#E5E0D5] divide-x divide-[#E5E0D5] py-8 bg-[#FCFAF7] border-x border-[#E5E0D5]">
        {[
          { num: '78%', label: '90-Day Placement Rate', detail: 'For program completed candidates' },
          { num: '500+', label: 'Active Hiring Partners', detail: 'Tier-1 tech, unicorns & consultancies' },
          { num: '+140%', label: 'Avg CTC Increase', detail: 'Significant career salary multiplier' },
          { num: '₹42 LPA', label: 'Top Domestic Offer', detail: 'Senior software architect role' }
        ].map((s, idx) => (
          <div key={idx} className="px-6 space-y-1 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-serif italic font-bold text-terracotta tabular-nums">{s.num}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-warm-charcoal">{s.label}</div>
            <div className="text-[10px] text-stone-500 font-serif italic">{s.detail}</div>
          </div>
        ))}
      </section>

      {/* 4 Industry Specializations */}
      <section className="space-y-16">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Domain Tracks</span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal font-normal">Four Focused Acceleration Tracks</h2>
          <p className="text-xs text-stone-600 font-serif leading-relaxed">
            We don't offer generic resume advice. Every track is led by active hiring managers with domain-specific rubrics and live mock evaluations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Software Engineering & Cloud Architecture',
              code: 'TRACK 01',
              desc: 'For software engineers, DevOps architects, and QA engineers targeting product startups and global tech giants.',
              focus: [
                'Data Structures, Algorithms & LeetCode Hard optimization',
                'Low-Level Object-Oriented Design (L判) & High-Level System Architecture',
                'Concurrency, distributed caching, database indexing & microservices',
                'Direct recruiter introductions to 250+ tech engineering teams'
              ]
            },
            {
              title: 'Product Design & Creative UI/UX Strategy',
              code: 'TRACK 02',
              desc: 'For digital designers, UX researchers, and product visionaries looking to secure high-paying studio and tech roles.',
              focus: [
                'Figma Design System architecture & component libraries',
                'Case study storytelling with measurable customer metrics',
                'Design defense presentations & live app critique mock rounds',
                'Spotlight referrals to senior creative directors and product leads'
              ]
            },
            {
              title: 'Management Consulting & Strategy',
              code: 'TRACK 03',
              desc: 'For business analysts, operations managers, and consultants targeting high-impact corporate strategy teams.',
              focus: [
                'Rigorous business case study frameworks & market entry modeling',
                'Financial statement analysis and quantitative data storytelling',
                'Cross-cultural client communication and stakeholder alignment',
                'Executive interview prep based on STAR methodology'
              ]
            },
            {
              title: 'Core Hardware, Robotics & Clean Energy',
              code: 'TRACK 04',
              desc: 'For mechanical, electrical, and mechatronics engineers entering Electric Mobility, Robotics, and Aerospace.',
              focus: [
                'CAD 3D modeling, FEA simulation & thermal analysis audits',
                'Embedded IoT microcontroller programming and sensor fusion',
                'Hardware debugging challenge prep and manufacturing constraints',
                'Direct pipeline into premier automotive and aerospace enterprises'
              ]
            }
          ].map(t => (
            <div key={t.code} className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
              <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
                <div>
                  <span className="text-[10px] font-mono text-terracotta font-bold">{t.code}</span>
                  <h4 className="text-xl font-bold text-warm-charcoal">{t.title}</h4>
                </div>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed font-serif">{t.desc}</p>
              <ul className="space-y-2 text-xs text-stone-700 font-sans">
                {t.focus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Career Acceleration & Compensation Estimator */}
      <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Planner</span>
          <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Career Compensation & Readiness Estimator</h2>
          <p className="text-stone-600 text-xs leading-relaxed">Select your target industry domain and experience bracket to benchmark expected market compensation and required interview competencies.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            {/* Domain Selector */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">1/ Select Target Career Domain</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'tech', label: 'Tech & Cloud SDE', subtitle: 'Software & Data' },
                  { id: 'business', label: 'Management & Strategy', subtitle: 'Consulting & Ops' },
                  { id: 'creative', label: 'UI/UX & Product Design', subtitle: 'Design & Research' },
                  { id: 'core', label: 'Core Hardware & EV', subtitle: 'Robotics & Hardware' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDomain(d.id)}
                    className={`p-4 rounded-sm text-left border cursor-pointer transition-colors duration-200 ${
                      selectedDomain === d.id
                        ? 'border-terracotta bg-warm-cream/50 text-[#1C1816]'
                        : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50'
                    }`}
                  >
                    <div className="font-bold text-xs uppercase tracking-wider">{d.label}</div>
                    <div className="text-[11px] text-stone-500 font-serif italic mt-0.5">{d.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">2/ Career Experience Bracket</label>
              <div className="flex gap-2">
                {[
                  { id: 'fresh', label: 'Entry Level', desc: '0 - 2 Years' },
                  { id: 'junior', label: 'Mid-Level', desc: '2 - 5 Years' },
                  { id: 'senior', label: 'Senior Lead', desc: '5+ Years' }
                ].map(exp => (
                  <button
                    key={exp.id}
                    onClick={() => setExperience(exp.id)}
                    className={`flex-1 p-3 text-left rounded-sm border cursor-pointer transition ${
                      experience === exp.id
                        ? 'bg-warm-charcoal text-white border-warm-charcoal'
                        : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5]'
                    }`}
                  >
                    <div className="font-bold text-xs uppercase tracking-wider">{exp.label}</div>
                    <div className={`text-[10px] font-serif italic mt-0.5 ${experience === exp.id ? 'text-stone-300' : 'text-stone-500'}`}>{exp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Domain Deliverables */}
            <div className="space-y-3 pt-2">
              <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">Key Program Deliverables for {domainData.title}:</label>
              <div className="space-y-2 text-xs text-stone-700 bg-warm-cream/40 p-4 border border-[#E5E0D5] rounded-sm">
                {domainData.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Output Card */}
          <div className="lg:col-span-5 bg-[#1C1816] text-warm-cream p-8 border border-[#2D2623] rounded-sm space-y-6">
            <div className="border-b border-stone-800 pb-5 text-center">
              <span className="text-[9px] uppercase tracking-widest font-bold text-terracotta">Benchmarked Market Compensation</span>
              <div className="text-3xl md:text-4xl font-serif italic font-extrabold text-white mt-1.5 tracking-tight tabular-nums">
                {domainData.salary[experience as 'fresh' | 'junior' | 'senior']}
              </div>
              <p className="text-[10px] text-stone-400 font-serif italic mt-1">{domainData.title}</p>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                <span className="text-stone-400">Target Hiring Network:</span>
                <span className="font-bold text-white font-mono">500+ Active Partners</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                <span className="text-stone-400">Mock Interview Battery:</span>
                <span className="font-bold text-terracotta">6 to 10 Live Sessions</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-850 pb-2">
                <span className="text-stone-400">Resume & Portfolio Audit:</span>
                <span className="font-bold text-white">Full Rewrite Included</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Negotiation Advisory:</span>
                <span className="font-bold text-white italic font-serif">1-on-1 Offer Optimization</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/contact"
                className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Apply for Career Acceleration &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Step Placement Acceleration Lifecycle */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Systematic Execution</span>
          <h2 className="text-3xl font-serif italic text-warm-charcoal">The 6-Step Placement Acceleration Lifecycle</h2>
          <p className="text-xs text-stone-600 font-serif max-w-xl mx-auto">
            From technical gap identification to post-joining check-ins, every step is choreographed to maximize hiring manager callbacks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { step: '01', title: 'Diagnostic', desc: '45-minute technical and behavioral audit assessing baseline knowledge and communication.' },
            { step: '02', title: 'Architecture', desc: 'ATS-clearing resume rebuild, LinkedIn optimization, and high-impact GitHub/portfolio polish.' },
            { step: '03', title: 'Drill Battery', desc: 'Weekly live coding, system design, or case study mocks with active industry directors.' },
            { step: '04', title: 'Referral Engine', desc: 'Direct referral pipelines into our 500+ corporate hiring partner network.' },
            { step: '05', title: 'Negotiation', desc: 'Maximizing base compensation, signing bonuses, and equity grants before signing.' },
            { step: '06', title: 'Onboarding', desc: '90-day post-joining transition mentorship ensuring successful probation completion.' }
          ].map(p => (
            <div key={p.step} className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] rounded-sm space-y-3 hover:border-terracotta transition-colors">
              <div className="font-mono text-xs font-bold text-terracotta border-b border-[#E5E0D5] pb-2">
                STEP {p.step}
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-warm-charcoal">{p.title}</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive FAQs for AkroPlacement */}
      <section className="space-y-8">
        <FaqAccordion 
          items={placementFaqs}
          title="AkroPlacement Frequently Asked Questions"
          subtitle="Clear answers on eligibility, partner networks, compensation, and mentorship"
        />
      </section>
    </motion.div>
  );
}
