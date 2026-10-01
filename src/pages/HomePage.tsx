import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Compass, BookOpen, Briefcase, Heart, ArrowRight, Library } from 'lucide-react';
import EditorialVisual from '../components/EditorialVisual';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';
import VideoShowcase from '../components/VideoShowcase';
import StrangerTripPlanner from '../components/StrangerTripPlanner';

const homeFaqs: FAQItem[] = [
  {
    category: 'Ecosystem',
    q: 'What is New Akromind, and how do its five verticals work together?',
    a: 'New Akromind is an integrated multi-vertical growth ecosystem based in Ludhiana, Punjab, operating across India and globally. Rather than treating academic tutoring, career placement, mental health counseling, thought leadership publishing, and restorative travel as isolated services, we integrate them into a unified flywheel. A student receives academic mastery through AKROTUTION while maintaining emotional resilience via AKROMIND counseling; deepens self-awareness through AKROBOOKS publications; graduates into high-impact roles via AKROPLACEMENT; and celebrates milestones with curated journeys through AKROHOLIDAYS.'
  },
  {
    category: 'Publishing',
    q: 'What is AKROBOOKS, and what kind of literature do you publish?',
    a: 'AKROBOOKS is our original publishing atelier releasing 17 upcoming titles across psychology, academic pedagogy, corporate career realpolitik, and adolescent emotional health. Every book is grounded in clinical transcripts and classroom pedagogy, including titles like Done With It, The Sex Compass, Education the Mind, The Couple Code, and एक विद्यार्थी.'
  },
  {
    category: 'Ecosystem',
    q: 'Can I enroll in just one vertical, or do I have to use the entire ecosystem?',
    a: 'You are completely free to enroll in any single vertical that meets your current objective. Many of our clients begin with a specific need (such as Class 10 board prep under AKROTUTION, or an executive career switch under AKROPLACEMENT). However, ecosystem members unlock exclusive cross-vertical benefits, including preferential counselor access, bundled diagnostic evaluations, and explorer reward points.'
  },
  {
    category: 'Stranger Trips',
    q: 'What is Stranger Trip Planning, and how does traveling with a curated group work?',
    a: 'Stranger Trip Planning is designed for solo travelers who want to explore high mountain valleys without the frustration of coordinating with busy friends or traveling completely alone. AKROHOLIDAYS organizes small, curated pods of 8 to 12 travelers mainly focused towards Himachal Pradesh and Uttarakhand circuits, managing all transit, verified boutique stays, and on-ground logistics.'
  },
  {
    category: 'Stranger Trips',
    q: 'Is Stranger Trip Planning safe for solo female travelers?',
    a: 'Safety and psychological comfort are our highest operational priorities. All applicants undergo mandatory government ID verification and mutual vetting before joining. We offer dedicated Solo-Female Friendly pods with verified accommodations, guaranteed same-gender twin sharing (or optional private room upgrades), and 24/7 on-ground emergency support.'
  },
  {
    category: 'Stranger Trips',
    q: 'What happens if I am introverted or need solo downtime during a Stranger Trip?',
    a: 'We enforce a strict Zero Forced Agendas rule. While group dinners, bonfires, and guided treks are always scheduled, participation is entirely voluntary. You are encouraged to take a book to a cafe, wander scenic viewpoints alone, or recharge in your room whenever you wish.'
  },
  {
    category: 'Admissions & Enrollment',
    q: 'What is the intake process, and how quickly can we begin?',
    a: 'Our onboarding begins with a structured 30-minute Discovery Consultation where we assess baseline strengths, academic or career targets, and personal timelines. Following this, our academic directors or domain leads construct a bespoke milestone roadmap within 48 hours. Classes, coaching sessions, or placement tracks can commence within 3 to 5 business days.'
  },
  {
    category: 'Quality & Faculty',
    q: 'What qualifications do your tutors, counselors, and career coaches possess?',
    a: 'Every vertical is led by vetted specialists. AKROTUTION faculty members include IIT, NIT, and premier university alumni with at least 6 years of subject teaching experience. AKROMIND counselors hold accredited postgraduate degrees in psychology, behavioral science, or executive coaching. AKROPLACEMENT advisors are active industry directors, former talent leads, and engineering managers from Tier-1 tech and consulting firms.'
  },
  {
    category: 'Ecosystem',
    q: 'How does the AKROHOLIDAYS Explorer Points Engine connect to other services?',
    a: 'Every engagement across New Akromind earns Explorer Loyalty Credits. Enrolling in semester tuition tracks, completing career accelerator bootcamps, or booking counseling retainers credits your central account. These points can be redeemed directly against domestic and international travel packages, villa upgrades, or private sightseeing tours through AKROHOLIDAYS.'
  },
  {
    category: 'Admissions & Enrollment',
    q: 'Are programs conducted online, in-person, or in hybrid formats?',
    a: 'We offer flexible delivery modes tailored to the client. Our digital atelier provides interactive live video classrooms, digital whiteboards, and real-time doubt clearing for students and professionals across India and abroad. For regional clients in Punjab and North India, in-person consultations, weekend workshops, and one-on-one sessions are conducted at our Ludhiana headquarters.'
  },
  {
    category: 'Corporate & Institutions',
    q: 'Do you partner with schools, universities, and corporate enterprises?',
    a: 'Yes. We run institutional partnerships with high schools for integrated competitive exam coaching (JEE/NEET/CLAT), partner with colleges for campus placement training drives, and collaborate with corporate enterprises to provide employee wellness workshops and executive retreat coordination.'
  },
  {
    category: 'Admissions & Enrollment',
    q: 'What is your fee structure and refund or rescheduling policy?',
    a: 'We maintain total transparency with no hidden administrative costs. All quotes clearly state tuition hours, study materials, mock interview counts, or travel inclusions upfront. We offer free initial consultations and trial sessions for academic programs. Should your circumstances change, rescheduling is available with zero penalty when requested in advance.'
  }
];

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-20 md:space-y-32 py-10 md:py-16 font-sans bg-warm-cream"
    >
      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-4 text-center space-y-6 sm:space-y-8">
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">
            One Intelligent Growth Ecosystem
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tight text-warm-charcoal max-w-5xl mx-auto leading-[1.05] sm:leading-[0.95] font-sans"
        >
          Empowering your <span className="font-serif italic font-normal text-terracotta tracking-normal lowercase">future</span> across every <span className="font-serif italic font-normal text-stone-700 tracking-normal leading-none">dimension.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-serif"
        >
          New Akromind unifies academic excellence, elite corporate career transitions, restorative global travel, and empathetic mindset counseling into a single, cohesive human growth blueprint.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-3 pt-2 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto">
          <Link
            to="/contact"
            className="bg-warm-charcoal text-white hover:bg-terracotta text-[10px] uppercase tracking-widest font-bold px-6 py-3.5 sm:px-8 sm:py-4 transition-colors duration-300 rounded-xs inline-flex items-center justify-center gap-2 border border-warm-charcoal hover:border-terracotta w-full sm:w-auto"
          >
            Schedule Discovery Consultation <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/about"
            className="border border-[#E5E0D5] text-warm-charcoal hover:bg-warm-beige/40 text-[10px] uppercase tracking-widest font-bold px-6 py-3.5 sm:px-8 sm:py-4 transition-colors duration-300 rounded-xs inline-flex items-center justify-center w-full sm:w-auto"
          >
            Read Our Ecosystem Manifesto
          </Link>
        </motion.div>

        {/* Hero Architectural Visual Artwork */}
        <motion.div variants={itemVariants} className="pt-6 sm:pt-8">
          <EditorialVisual 
            type="hero" 
            aspectRatio="16:9"
            badge="Institutional Atelier · Ludhiana"
            title="The Multi-Vertical Synthesis"
            caption="Synthesizing academic discipline, professional placement, mental clarity, and restorative discovery"
          />
        </motion.div>
      </section>

      {/* Trust Indicators - Swiss Hairline Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.div 
          variants={itemVariants} 
          className="grid grid-cols-2 md:grid-cols-4 border-y border-[#E5E0D5] py-6 sm:py-10 bg-[#FCFAF7] border-x border-[#E5E0D5] divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D5]"
        >
          {[ 
            { num: '10,000+', label: 'Students Mentored', phrase: 'across CBSE, ICSE, JEE & NEET boards' }, 
            { num: '500+', label: 'Hiring Partners', phrase: 'tier-1 tech, consulting & manufacturing' }, 
            { num: '50+', label: 'Curated Routes', phrase: 'custom domestic & international itineraries' }, 
            { num: '100+', label: 'Certified Mentors', phrase: 'IITians, psychologists & domain architects' }
          ].map((i, index) => (
            <div key={index} className="p-4 sm:px-6 space-y-1 sm:space-y-2 text-center md:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-medium text-terracotta tracking-tight tabular-nums">{i.num}</div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-warm-charcoal uppercase tracking-wider">{i.label}</div>
                <div className="text-[10px] sm:text-[11px] text-stone-500 font-serif italic">{i.phrase}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Cinematic Ecosystem Video Showcase */}
      <VideoShowcase />

      {/* Ecosystem Philosophy: The Flywheel */}
      <section className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta">
              The Architecture of Wholeness
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal leading-tight">
              Why isolated services fail, and how our flywheel delivers compound growth.
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed font-sans">
              Traditional coaching companies isolate education from mental well-being, while recruitment agencies treat job placement as a transactional exchange. In contrast, New Akromind operates on a foundational truth: sustainable high performance requires intellectual grounding, psychological resilience, career alignment, and periodic sensory restoration.
            </p>
            <div className="space-y-3 pt-2">
              {[
                { title: 'Cognitive Balance (AKROMIND)', desc: 'Stress reduction and aptitude discovery unlock natural student learning speed.' },
                { title: 'Academic Rigor (AKROTUTION)', desc: 'Systematic concept grounding turns test anxieties into predictable board results.' },
                { title: 'Intellectual Artifacts (AKROBOOKS)', desc: '17 clinical psychology and educational volumes bridging theory with daily reality.' },
                { title: 'Career Trajectory (AKROPLACEMENT)', desc: 'Translating academic aptitude into senior job offers with high CTC packages.' },
                { title: 'Restorative Perspective (AKROHOLIDAYS)', desc: 'Conscious travel rejuvenates the spirit and deepens familial bonds.' }
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3 text-xs">
                  <div className="w-5 h-5 rounded-xs bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold text-warm-charcoal">{item.title}: </span>
                    <span className="text-stone-600 font-serif italic">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <EditorialVisual 
              type="whyus"
              aspectRatio="4:3"
              badge="Flywheel Model"
              title="The Symmetrical Five-Pillar Engine"
              caption="Harmonizing mental, academic, literary, professional, and exploratory pursuits"
            />
          </div>
        </div>
      </section>

      {/* Five Operational Verticals Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="text-center md:text-left md:flex md:items-end md:justify-between border-b border-[#E5E0D5] pb-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta">Operational Verticals</span>
            <h2 className="text-4xl font-serif italic text-warm-charcoal">Five paths. One unified blueprint.</h2>
          </div>
          <p className="text-sm text-stone-500 max-w-md mt-4 md:mt-0 leading-relaxed">
            Each branch operates with uncompromising professional depth while sharing data, insights, and reward credits seamlessly across the New Akromind network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Vertical 01: AKROMIND */}
          <div className="bg-[#FCFAF7] border border-[#E5E0D5] p-5 sm:p-8 flex flex-col justify-between hover:border-terracotta transition-colors duration-300 rounded-xs space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[#E5E0D5] bg-warm-cream flex items-center justify-center text-terracotta rounded-xs">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider font-bold">Vertical 01</span>
                    <h3 className="text-2xl font-bold text-warm-charcoal">AKROMIND</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-stone-400">COUNSELING</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-serif">
                Empathy-first psychological guidance, aptitude stream navigation, student stress alleviation, parent-child mediation, and high-agency mindset coaching for startup founders.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#E5E0D5]/60 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>100% Confidential, certified counselor consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Cognitive aptitude & academic stream mapping for students</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Parent-student collaborative communication toolkits</span>
                </div>
              </div>
            </div>
            <Link 
              to="/verticals/akromind" 
              className="text-[11px] font-bold tracking-widest uppercase text-terracotta inline-flex items-center gap-2 hover:text-warm-charcoal transition-colors pt-4 border-t border-[#E5E0D5]"
            >
              Explore AKROMIND Programs &rarr;
            </Link>
          </div>

          {/* Vertical 02: AKROTUTION */}
          <div className="bg-[#FCFAF7] border border-[#E5E0D5] p-5 sm:p-8 flex flex-col justify-between hover:border-terracotta transition-colors duration-300 rounded-xs space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[#E5E0D5] bg-warm-cream flex items-center justify-center text-terracotta rounded-xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider font-bold">Vertical 02</span>
                    <h3 className="text-2xl font-bold text-warm-charcoal">AKROTUTION</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-stone-400">ACADEMICS</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-serif">
                Systematic curriculum mastery across Classes 6 to 12 (CBSE/ICSE) and high-yield competitive entrance preparation for JEE Main/Advanced, NEET-UG, CUET, and CLAT.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#E5E0D5]/60 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Ultra-small batches (8-12 students) or private 1-on-1 mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Guaranteed &lt;20 minute digital doubt clearance desk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Diagnostic progress analytics sent weekly to parents</span>
                </div>
              </div>
            </div>
            <Link 
              to="/verticals/akrotution" 
              className="text-[11px] font-bold tracking-widest uppercase text-terracotta inline-flex items-center gap-2 hover:text-warm-charcoal transition-colors pt-4 border-t border-[#E5E0D5]"
            >
              Explore AKROTUTION Programs &rarr;
            </Link>
          </div>

          {/* Vertical 03: AKROPLACEMENT */}
          <div className="bg-[#FCFAF7] border border-[#E5E0D5] p-5 sm:p-8 flex flex-col justify-between hover:border-terracotta transition-colors duration-300 rounded-xs space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[#E5E0D5] bg-warm-cream flex items-center justify-center text-terracotta rounded-xs">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider font-bold">Vertical 03</span>
                    <h3 className="text-2xl font-bold text-warm-charcoal">AKROPLACEMENT</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-stone-400">CAREERS</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-serif">
                Elite career acceleration pipeline connecting college graduates and mid-career professionals with 500+ corporate hiring partners in tech, design, business operations, and engineering.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#E5E0D5]/60 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>78% placement success rate inside 90 days of program completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Resume re-architecture, portfolio critique & system design mock drills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Dedicated corporate recruiter referrals and salary negotiation strategy</span>
                </div>
              </div>
            </div>
            <Link 
              to="/verticals/akroplacement" 
              className="text-[11px] font-bold tracking-widest uppercase text-terracotta inline-flex items-center gap-2 hover:text-warm-charcoal transition-colors pt-4 border-t border-[#E5E0D5]"
            >
              Explore AKROPLACEMENT Pathways &rarr;
            </Link>
          </div>

          {/* Vertical 04: AKROHOLIDAYS */}
          <div className="bg-[#FCFAF7] border border-[#E5E0D5] p-5 sm:p-8 flex flex-col justify-between hover:border-terracotta transition-colors duration-300 rounded-xs space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-[#E5E0D5] bg-warm-cream flex items-center justify-center text-terracotta rounded-xs">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider font-bold">Vertical 04</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-warm-charcoal">AKROHOLIDAYS</h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-stone-400">VOYAGES</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-serif">
                Bespoke domestic and international holiday curations, family wellness retreats, adventure safaris, and an integrated Explorer Loyalty Point reward engine.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#E5E0D5]/60 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>50+ verified destinations across India, Southeast Asia, Europe & UAE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>24/7 dedicated trip concierge and verified boutique luxury stays</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  <span>Earn travel credits automatically through academic and career milestones</span>
                </div>
              </div>
            </div>
            <Link 
              to="/verticals/akroholidays" 
              className="text-[11px] font-bold tracking-widest uppercase text-terracotta inline-flex items-center gap-2 hover:text-warm-charcoal transition-colors pt-4 border-t border-[#E5E0D5]"
            >
              Explore AKROHOLIDAYS Itineraries &rarr;
            </Link>
          </div>

          {/* Vertical 05: AKROBOOKS */}
          <div className="md:col-span-2 bg-[#FCFAF7] border border-[#E5E0D5] p-5 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-terracotta transition-colors duration-300 rounded-xs gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-[#E5E0D5] bg-warm-cream flex items-center justify-center text-terracotta rounded-xs">
                  <Library className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider font-bold">Vertical 05 · New Vertical</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-warm-charcoal">AKROBOOKS</h3>
                </div>
                <span className="text-xs font-mono text-stone-400 ml-auto hidden sm:inline">PUBLISHING ATELIER</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed font-serif">
                Original literature, evidence-based psychology, career blueprints, and student guides born from our counseling and academic cohorts. Releasing 17 landmark titles including <em>Done With It</em>, <em>The Sex Compass</em>, <em>Education the Mind</em>, <em>The Couple Code</em>, and <em>एक विद्यार्थी</em>.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-stone-600">
                <span className="px-2.5 py-1 bg-white border border-[#E5E0D5] rounded-xs font-mono text-[11px]">17 Upcoming Titles</span>
                <span className="px-2.5 py-1 bg-white border border-[#E5E0D5] rounded-xs font-mono text-[11px]">Clinical Evidence Grounded</span>
                <span className="px-2.5 py-1 bg-white border border-[#E5E0D5] rounded-xs font-mono text-[11px]">Original Literature Atelier</span>
              </div>
            </div>
            <Link 
              to="/verticals/akrobooks" 
              className="w-full md:w-auto justify-center px-6 py-3.5 bg-terracotta hover:bg-terracotta/90 text-white text-xs font-mono uppercase tracking-wider font-bold rounded-xs transition-colors shrink-0 inline-flex items-center gap-2 shadow-xs text-center"
            >
              <span>Explore AKROBOOKS Catalogue &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stranger Trip Planning Feature Showcase */}
      <section className="max-w-6xl mx-auto px-4">
        <StrangerTripPlanner />
      </section>

      {/* Structured Methodology */}
      <section className="bg-[#FAF6EE] py-20 border-y border-[#E5E0D5]">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal">The Five-Stage Blueprint to Measurable Success</h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto font-serif">
              Our proprietary operational cycle ensures that whether you are mastering advanced physics, preparing for a Senior VP interview, or planning an alpine trek, your trajectory is grounded in data and guided by human care.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Diagnostic Audit', desc: 'Comprehensive cognitive, academic, or professional skill audit to identify exact baseline competencies and hidden bottlenecks.' },
              { num: '02', title: 'Bespoke Blueprint', desc: 'Custom milestone roadmaps built by veteran domain leads, establishing clear deadlines and verifiable weekly checkpoints.' },
              { num: '03', title: 'Deliberate Practice', desc: 'Rigorous 1-on-1 tutoring, mock interview simulations, or personalized travel arrangements executed with zero fluff.' },
              { num: '04', title: 'Real-Time Telemetry', desc: 'Weekly diagnostic feedback loops, performance dashboards, and proactive curriculum calibrations based on measurable progress.' },
              { num: '05', title: 'Sustainable Mastery', desc: 'Translating achievements into permanent life confidence, elite salaries, university admissions, and lasting memories.' }
            ].map(step => (
              <div key={step.title} className="bg-[#FCFAF7] border border-[#E5E0D5] p-6 space-y-4 hover:border-terracotta transition-colors duration-300 rounded-sm">
                <div className="text-xs font-mono font-bold text-terracotta border-b border-[#E5E0D5] pb-2 flex justify-between items-center">
                  <span>PHASE {step.num}</span>
                  <span className="text-stone-300">/</span>
                </div>
                <h4 className="font-bold text-sm text-warm-charcoal">{step.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Attributable Impact & Proof */}
      <section className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#7D7067]">Verified Outcomes</span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal">Voices from Inside Our Ecosystem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "Preparing for JEE Advanced while managing Class 12 board pressure was breaking my confidence. AKROTUTION fixed my organic chemistry fundamentals within 6 weeks, while my AKROMIND counselor taught me how to eliminate exam panic. I scored 99.2 percentile and secured admission at IIT Delhi.",
              author: "Aarav Sharma",
              role: "B.Tech Computer Science Candidate",
              org: "IIT Delhi · Former AKROTUTION & AKROMIND Student",
              metrics: "99.2%ile JEE · 96.4% CBSE Boards"
            },
            {
              quote: "I was stuck at a service company with a ₹6 LPA salary for three years. AKROPLACEMENT reconstructed my entire portfolio, put me through 8 brutal system design mocks, and directly referred me to two unicorn startups. I accepted an offer at ₹22 LPA with stock grants.",
              author: "Pooja Malhotra",
              role: "Senior Frontend Architect",
              org: "Series-B FinTech Unicorn · AKROPLACEMENT Graduate",
              metrics: "₹22 LPA Package (+266% CTC Growth)"
            },
            {
              quote: "We wanted a multi-generational trip to Switzerland and Austria for 8 family members ranging from my 7-year-old son to my 72-year-old mother. AKROHOLIDAYS arranged private alpine vans, vegetarian meals everywhere, and wheelchair access without a single hiccup.",
              author: "Harpreet Singh & Family",
              role: "Family Vacation Cohort",
              org: "10-Day Swiss Alpine & Lake Lucerne Tour",
              metrics: "100% On-Time Execution · 8 Pax Group"
            }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 rounded-sm flex flex-col justify-between space-y-6 hover:border-terracotta transition-colors">
              <div className="space-y-4">
                <div className="text-terracotta text-2xl font-serif">“</div>
                <p className="text-stone-700 text-xs leading-relaxed font-serif italic">
                  {t.quote}
                </p>
                <div className="p-3 bg-warm-cream border border-[#E5E0D5] rounded-xs text-[11px] font-mono text-terracotta font-semibold">
                  Outcome: {t.metrics}
                </div>
              </div>
              <div className="pt-4 border-t border-[#E5E0D5] space-y-1">
                <div className="font-bold text-xs text-warm-charcoal font-sans">{t.author}</div>
                <div className="text-[11px] text-stone-500 font-sans">{t.role}</div>
                <div className="text-[10px] text-stone-400 font-serif italic">{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <FaqAccordion 
          items={homeFaqs} 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about the New Akromind ecosystem"
        />
      </section>
    </motion.div>
  );
}
