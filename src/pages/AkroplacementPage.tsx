import { useState } from 'react';
import { motion } from 'motion/react';
import FaqAccordion from '../components/FaqAccordion';
import { Briefcase, TrendingUp, CheckSquare, Shield, DollarSign, Award, Laptop, Palette, Cpu } from 'lucide-react';

const faqs = [
  { q: 'What industries do you cover for placements?', a: 'We cover all major industries including Technology, Consulting, Finance, Manufacturing, Healthcare, Education, E-commerce, and more. We have 500+ hiring partners across sectors.' },
  { q: 'Who is eligible for career guidance and placement assistance?', a: 'Fresh graduates, current students, and experienced professionals looking to transition to new/higher bands can enroll in our career acceleration and placement tracks.' },
  { q: 'What is your placement success rate?', a: 'Our placement success rate is 78% for eligible candidates who complete our preparation program.' },
  { q: 'Do you guarantee placements?', a: 'While we don\'t guarantee placements, we provide comprehensive preparation, connect you with opportunities, and support you throughout the process. Our high success rate reflects our quality.' },
  { q: 'How long does the placement process take?', a: 'Typically 2-6 months from engagement to offer, depending on market conditions, candidate readiness, and target roles.' },
  { q: 'Do you help with international placements?', a: 'Yes, we offer international career guidance, resume optimization for global markets, and networking strategies. However, visa and immigration are handled by candidates.' }
];

export default function AkroplacementPage() {
  const [selectedDomain, setSelectedDomain] = useState('tech');
  const [experience, setExperience] = useState('fresh'); // fresh, junior, senior

  const domainData = {
    tech: {
      title: 'Technology & Cloud Solutions',
      salary: { fresh: '₹5.5 - ₹8 LPA', junior: '₹9 - ₹18 LPA', senior: '₹20 - ₹42+ LPA' },
      industries: ['SaaS Platforms', 'FinTech Engines', 'AI/ML Startups', 'E-commerce Giants'],
      checklist: [
        'Advanced DSA & System Design mocks',
        'Direct LinkedIn optimization with recruiter crawls',
        'Interactive mock system architect coding sessions',
        'Continuous support till final offers signed'
      ]
    },
    business: {
      title: 'Business Operations & Management',
      salary: { fresh: '₹4.5 - ₹7 LPA', junior: '₹8 - ₹15 LPA', senior: '₹16 - ₹32 LPA' },
      industries: ['Management Consultancies', 'EdTech Systems', 'Logistics & Supply', 'FMCG Enterprises'],
      checklist: [
        'Strategic business model case-study drills',
        'SaaS B2B cold outreach & strategy training',
        'Cross-cultural mock negotiation simulation tests',
        'Onboarding leadership coaching sessions'
      ]
    },
    creative: {
      title: 'UI/UX & Creative Strategy',
      salary: { fresh: '₹4 - ₹6 LPA', junior: '₹7 - ₹13 LPA', senior: '₹15 - ₹28 LPA' },
      industries: ['Ad Agencies', 'Product Design Curations', 'Gaming Studios', 'Branding Consultancies'],
      checklist: [
        'Figma UI/UX high-density case portfolio review',
        'Pitch deck & customer feedback storytelling sessions',
        'Direct interface design mock feedback',
        'Recruiter resume spotlight targeting senior creative leads'
      ]
    },
    core: {
      title: 'Core Hardware & Aerospace',
      salary: { fresh: '₹4 - ₹6.5 LPA', junior: '₹7.5 - ₹12 LPA', senior: '₹14 - ₹25 LPA' },
      industries: ['Electric Mobility', 'Robotics Systems', 'Renewable Infrastructure', 'Heavy Engineering'],
      checklist: [
        'CAD/Simulation design verification mock tests',
        'IoT microcontroller interfacing review sessions',
        'Standard hardware debugging challenge preps',
        'Direct connection into core manufacturing enterprises'
      ]
    }
  }[selectedDomain] || {
    title: 'Technology & Cloud Solutions',
    salary: { fresh: '₹5.5 - ₹8 LPA', junior: '₹9 - ₹18 LPA', senior: '₹20 - ₹42+ LPA' },
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
                Expert career guidance, strategic job placement pipelines, high-stakes peer mentorship, and professional resume architecture designed to transition you into elite corporate bands.
              </p>
          </header>
  
          {/* Specialties */}
          <section className="space-y-16">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Global Domains</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal font-normal">Industry-Specific Specializations</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { name: 'Technology', desc: 'Software engineering, QA automation, DevOps pipelines, Cloud architecture, Data Science, and Systems development.' },
                    { name: 'Business Operations', desc: 'Enterprise SaaS sales modeling, global Business development, Human Resource systems, and Management Consulting.' },
                    { name: 'Creative Design', desc: 'Symmetrical UI/UX interface design, storytelling decks, Brand strategies, and high-impact digital illustration.' },
                    { name: 'Core Hardware', desc: 'Aerospace structural design, Electric Vehicle powertrains, Robotics IoT, and industrial manufacturing engineering.' }
                ].map(s => (
                    <div 
                      key={s.name} 
                      className="p-6 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors duration-300 rounded-sm text-center space-y-3"
                    >
                        <div className="font-bold text-xs uppercase tracking-wider text-warm-charcoal font-sans">{s.name}</div>
                        <p className="text-stone-600 text-xs font-serif italic leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
          </section>

          {/* Dynamic Benchmark Tool */}
          <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Tool</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Placement Benchmark & Checklist Planner</h2>
              <p className="text-stone-600 text-xs leading-relaxed">Customize domain specs and experience seniority to view estimated salary tiers, target hiring systems, and suggested preparation targets instantly.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Selector Configs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">1/ Select Target Strategic Domain</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'tech', label: 'Tech & Cloud', icon: Laptop },
                      { id: 'business', label: 'Operations & SaaS', icon: Briefcase },
                      { id: 'creative', label: 'Design & UI/UX', icon: Palette },
                      { id: 'core', label: 'EV & Hardware Core', icon: Cpu }
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
                        <span className="mb-1.5 block">
                          <d.icon className={`w-5 h-5 ${selectedDomain === d.id ? 'text-[#1C1816]' : 'text-terracotta'}`} />
                        </span>
                        <div className="font-bold text-xs uppercase tracking-wider">{d.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">2/ Select Standing Experience Brackets</label>
                  <div className="flex gap-3">
                    {[
                      { id: 'fresh', label: 'Fresh Graduate' },
                      { id: 'junior', label: '1 - 5 Yrs Experience' },
                      { id: 'senior', label: '5+ Yrs Leadership' }
                    ].map(e => (
                      <button
                        key={e.id}
                        onClick={() => setExperience(e.id)}
                        className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold rounded-sm border cursor-pointer transition ${
                          experience === e.id
                            ? 'bg-warm-charcoal text-white border-warm-charcoal'
                            : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5] text-stone-600'
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Output Card */}
              <div className="lg:col-span-6 bg-[#1C1816] text-warm-cream p-8 border border-[#2D2623] space-y-6 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 font-mono text-white text-9xl italic tracking-tighter select-none">B/</div>

                <div className="border-b border-stone-800 pb-5">
                  <span className="text-[9px] font-mono uppercase text-terracotta font-bold">Domain Pipeline Profile</span>
                  <h3 className="text-xl font-serif italic mt-1 text-white leading-tight">{domainData.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 font-sans">
                  <div className="bg-stone-900 border border-stone-850 p-4 rounded-sm">
                    <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-widest font-bold">
                      <DollarSign className="w-3.5 h-3.5 text-terracotta" />
                      <span>Salary Range</span>
                    </div>
                    <div className="text-base font-bold mt-1.5 text-white font-mono">
                      {domainData.salary[experience as 'fresh' | 'junior' | 'senior']}
                    </div>
                  </div>

                  <div className="bg-stone-900 border border-stone-850 p-4 rounded-sm">
                    <div className="flex items-center gap-1.5 text-stone-400 text-[10px] uppercase tracking-widest font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-terracotta" />
                      <span>Hiring Rate</span>
                    </div>
                    <div className="text-base font-bold mt-1.5 text-white font-mono">
                      Top Velocity
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-terracotta font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 font-sans">
                    <CheckSquare className="w-3.5 h-3.5" /> Core Prep Targets
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-300 font-serif italic">
                    {domainData.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start leading-relaxed">
                        <span className="text-terracotta font-bold font-sans mr-2">{idx + 1}/</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-800">
                  <div className="text-[10px] text-stone-400 font-sans tracking-tight uppercase">
                    <strong>Hiring Enterprises:</strong> {domainData.industries.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Support Track */}
          <section className="space-y-16">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Candidate Tracks</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal text-center font-normal">Our Specialized Support Programs</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: 'Campus-to-Corporate',
                        forWho: 'Fresh Graduates',
                        features: ['Aptitude test reasoning drills', 'Group discussion mock trials', 'Direct mock HR interviews', 'Offer assessment & onboarding']
                    },
                    {
                        title: 'Career Acceleration',
                        forWho: 'Professionals (0-5 Years)',
                        features: ['Comprehensive skill gap analysis', 'LinkedIn optimization & reach development', 'Salary benchmarking metrics', 'Strategic industry switch advisory']
                    },
                    {
                        title: 'Career Return Track',
                        forWho: 'Returning Professionals',
                        features: ['Confidence transition workshops', 'Rapid tech skill refreshing', 'Career gap framing advisories', 'Flexible contract placement access']
                    }
                ].map(p => (
                    <div 
                      key={p.title} 
                      className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors duration-300 rounded-sm space-y-6 flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <span className="text-[9px] bg-warm-cream border border-[#E5E0D5] text-terracotta px-2.5 py-0.5 rounded-sm font-semibold uppercase tracking-wider">{p.forWho}</span>
                            <h4 className="text-lg font-bold font-sans text-warm-charcoal">{p.title}</h4>
                        </div>
                        <ul className="space-y-2.5 text-xs text-stone-600 font-serif italic pt-4 border-t border-[#E5E0D5]">
                            {p.features.map(f => (
                              <li key={f} className="flex items-center gap-1.5">
                                <span className="text-terracotta">✓</span>
                                <span>{f}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </section>

          {/* Six Step Blueprint */}
          <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-8">
              <h3 className="text-2xl font-serif italic text-center text-warm-charcoal">The Placement Pipeline Roadmap</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {['Discovery', 'Resume Design', 'Skill Refresh', 'Mock Trials', 'Job Matchmaking', 'Compensation Negotiation'].map((s, idx) => (
                      <div 
                        key={s} 
                        className="p-5 bg-[#FCFAF7] border border-[#E5E0D5] text-center flex flex-col justify-between min-h-[140px] rounded-sm hover:border-terracotta transition-colors duration-200"
                      >
                          <div className="font-bold text-terracotta text-[10px] font-mono uppercase tracking-wider">Step 0{idx + 1}</div>
                          <div className="text-[11px] font-bold text-warm-charcoal uppercase tracking-tighter leading-snug">{s}</div>
                      </div>
                  ))}
              </div>
          </section>
  
          {/* Symmetrical Lists */}
          <section className="grid md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
                <h3 className="text-lg font-bold text-warm-charcoal font-sans">Strategic Advantages</h3>
                <ul className="space-y-3.5 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Direct, priority fast-track placement pipeline inside 500+ corporate groups.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Salary negotiation training delivering up to 25% higher median offset results.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Industry-pacing mentorship led by veterans and product guides.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Seamless personal branding on LinkedIn and portfolio registries.</li>
                </ul>
            </div>
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
                <h3 className="text-lg font-bold text-warm-charcoal font-sans">Corporate Alignment Targets</h3>
                <ul className="space-y-3.5 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> High-paying software developer and cloud architecture roles.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Interactive UI/UX design and strategic creative directors.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> B2B SaaS Business development and enterprise account leaderships.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Core aerospace hardware and EV mechanical engineers.</li>
                </ul>
            </div>
          </section>

          {/* FAQS */}
          <section className="space-y-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-serif italic text-center text-warm-charcoal">Frequently Asked Questions</h2>
              <FaqAccordion items={faqs} />
          </section>
      </motion.div>
  );
}
