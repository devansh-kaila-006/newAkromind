import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Library, 
  Feather, 
  X, 
  Layers,
  HeartHandshake,
  Check,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BookItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Psychology & Mind' | 'Education & Academics' | 'Relationships & Life' | 'Career & Management' | 'Self-Mastery' | 'Hindi Edition';
  status: 'Releasing Soon' | 'Editorial Final Polish';
  language: 'English' | 'Hindi';
  format: string;
  authorCredit: string;
  tagline: string;
  synopsis: string;
  keyThemes: string[];
  targetAudience: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  spineColor: string;
}

export const AKROBOOKS_CATALOG: BookItem[] = [
  {
    id: 'the-her-parrent',
    title: 'The Her Parrent',
    subtitle: 'Navigating Maternal Archetypes, Daughterhood & Generational Healing',
    category: 'Relationships & Life',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Hardcover & Digital Atelier Edition',
    authorCredit: 'Akromind Behavioral Research Collective',
    tagline: 'An unflinching inquiry into the unspoken emotional contracts between mothers, daughters, and modern familial expectations.',
    synopsis: 'The Her Parrent unpacks the profound, often paradoxical relationship between maternal authority and daughters evolving in a rapidly modernizing society. Drawing from hundreds of counseling transcripts and family systemic therapy frameworks, this book addresses the tension between inherited domestic paradigms and modern self-actualization, offering compassionate tools for setting respectful boundaries without guilt.',
    keyThemes: ['Generational Boundaries', 'Maternal Archetypes', 'Emotional Autonomy', 'Family Systems Therapy'],
    targetAudience: 'Daughters, mothers, family counselors, and anyone working through intergenerational relationship tensions.',
    accentBg: 'from-[#4A2E2B] to-[#2E1C1A]',
    accentBorder: 'border-[#8C4A42]',
    accentText: 'text-[#E8A598]',
    spineColor: 'bg-[#5C322D]'
  },
  {
    id: 'the-space-between-us',
    title: 'The Space between us',
    subtitle: 'The Anatomy of Modern Intimacy, Digital Distance & Unspoken Boundaries',
    category: 'Relationships & Life',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Paperback & Audio Atelier',
    authorCredit: 'Akromind Human Connection Guild',
    tagline: 'Why hyper-connected people have never felt more isolated, and how conscious vulnerability closes the relational rift.',
    synopsis: 'We exist in an era of unprecedented instant messaging yet unparalleled emotional remoteness. The Space between us examines the psychological micro-distances that develop between partners, lifelong friends, and siblings. Combining attachment theory with sociological field observations, the book provides practical conversational protocols to replace defensive posturing with genuine presence.',
    keyThemes: ['Attachment Styles', 'Digital Communication Fatigue', 'Vulnerability Protocols', 'Rebuilding Lost Closeness'],
    targetAudience: 'Couples, young professionals, and friends seeking deeper emotional resonance beyond surface texting.',
    accentBg: 'from-[#233544] to-[#14202B]',
    accentBorder: 'border-[#486B8A]',
    accentText: 'text-[#96C3EB]',
    spineColor: 'bg-[#2E4559]'
  },
  {
    id: 'the-office-life',
    title: 'The office life',
    subtitle: 'Navigating Corporate Realpolitik, Quiet Burnout & Career Sovereignty',
    category: 'Career & Management',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Deluxe Paperback & Executive Briefing',
    authorCredit: 'AkroPlacement Corporate Advisory Panel',
    tagline: 'The unwritten curriculum of Indian and global workspaces that no business school or induction slide deck prepares you for.',
    synopsis: 'From cubicle politics and performance appraisal illusions to toxic manager management and managing work-life equilibrium, The office life is an insider survival guide for corporate warriors. Synthesizing insights from senior leaders placed through AkroPlacement, it details how to build undeniable executive leverage, protect psychological sanity, and advance deliberately without sacrificing personal dignity.',
    keyThemes: ['Corporate Politics Navigation', 'Leverage vs Compliance', 'Burnout Prevention', 'Strategic Appraisal Negotiation'],
    targetAudience: 'Early to mid-career corporate professionals, software engineers, consultants, and team managers.',
    accentBg: 'from-[#1E293B] to-[#0F172A]',
    accentBorder: 'border-[#475569]',
    accentText: 'text-[#94A3B8]',
    spineColor: 'bg-[#334155]'
  },
  {
    id: 'when-life-changes-the-game',
    title: 'When life changes the game',
    subtitle: 'The Strategy of High-Stakes Pivots, Unplanned Disruption & Resilient Rebirth',
    category: 'Self-Mastery',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Clothbound & E-Book',
    authorCredit: 'New Akromind Strategic Directorate',
    tagline: 'What to do when your ten-year blueprint collapses in thirty seconds and staying the same is no longer an option.',
    synopsis: 'Layoffs, health emergencies, sudden academic failures, and unexpected life turns demand rapid cognitive adaptability. When life changes the game provides a battle-tested roadmap for dismantling old expectations and rapidly architecting second acts. Through real narratives of individuals who engineered monumental turnarounds after complete derailment, readers learn how to navigate the messy middle of major life transitions.',
    keyThemes: ['Crisis Reorientation', 'Radical Adaptability', 'Opportunity Identification', 'Psychological Resilience'],
    targetAudience: 'Anyone traversing a career reset, sudden loss, competitive exam pivot, or foundational identity transition.',
    accentBg: 'from-[#3D2619] to-[#21140D]',
    accentBorder: 'border-[#784D35]',
    accentText: 'text-[#E2A782]',
    spineColor: 'bg-[#543523]'
  },
  {
    id: 'the-sex-compass',
    title: 'The Sex Compass: A Student Handbook for Understanding Body, Mind, Relationships, Consent & Sexual Health',
    subtitle: 'A Frank, Compassionate & Medically Grounded Guide for Young Adults',
    category: 'Relationships & Life',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Illustrated Handbook & Student Field Edition',
    authorCredit: 'Akromind Adolescent Health & Psychology Council',
    tagline: 'Replacing playground myths, internet shame, and silence with clarity, bodily autonomy, and responsible decision-making.',
    synopsis: 'A groundbreaking, non-judgmental manual written specifically for Indian high school and college students. The Sex Compass bridges biology, emotional literacy, consent laws, and peer pressure dynamics. It eliminates taboo while answering crucial questions about physiological maturation, relational boundaries, contraception, sexual wellness, and respect for self and others in digital and physical spheres.',
    keyThemes: ['Consent & Legal Frameworks', 'Adolescent Physiology', 'Emotional Boundaries', 'Digital Safety & Respect'],
    targetAudience: 'High school and college students, parents, school educators, and youth counselors.',
    accentBg: 'from-[#4C1D24] to-[#2B0E12]',
    accentBorder: 'border-[#943B49]',
    accentText: 'text-[#F29CA9]',
    spineColor: 'bg-[#6B2833]'
  },
  {
    id: 'education-the-mind',
    title: 'Education the Mind – Empowering the Future',
    subtitle: 'Rethinking Pedagogical Models, Intellectual Agility & Next-Century Learning',
    category: 'Education & Academics',
    status: 'Editorial Final Polish',
    language: 'English',
    format: 'Academic Hardcover & Institutional Paperback',
    authorCredit: 'AkroTution Academic Standards Board',
    tagline: 'Why memorizing facts produces obsolete minds, and how cultivating first-principles reasoning empowers the coming generation.',
    synopsis: 'Modern curricula too often train students for a world that has already disappeared. Education the Mind offers an institutional manifesto on transitioning from rote regurgitation to conceptual synthesis, critical inquiry, and deep metacognition. Grounded in the pedagogical successes of AkroTution’s flagship learning cohorts, it outlines how mentors and parents can build enduring intellectual vitality in young minds.',
    keyThemes: ['First-Principles Pedagogy', 'Metacognitive Habits', 'Future-Proof Curriculum', 'The Role of Mentorship'],
    targetAudience: 'School administrators, academic tutors, parents, education policymakers, and dedicated teachers.',
    accentBg: 'from-[#1B3831] to-[#0E1E1A]',
    accentBorder: 'border-[#367062]',
    accentText: 'text-[#87D4C1]',
    spineColor: 'bg-[#254F45]'
  },
  {
    id: 'simple-management',
    title: 'Simple Management',
    subtitle: 'Eliminating Jargon, Uncluttering Teams & Delivering Flawless Execution',
    category: 'Career & Management',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Compact Clothbound & Audio Atelier',
    authorCredit: 'New Akromind Operational Leadership Guild',
    tagline: 'The antidote to bloated OKRs, endless Zoom marathons, and bureaucratic paralysis in modern enterprise.',
    synopsis: 'Great leadership is rarely complicated; it is merely difficult to execute consistently. Simple Management deconstructs organizational physics into core, elemental principles: transparent expectations, short feedback loops, uncompromising accountability, and radical simplicity in communication. This volume strips away fashionable business buzzwords to give managers high-impact tools that immediately elevate team output.',
    keyThemes: ['Radical Simplicity', 'Operational Cadence', 'Uncluttered Delegation', 'High-Trust Accountability'],
    targetAudience: 'Startup founders, engineering leads, team heads, and newly promoted first-time managers.',
    accentBg: 'from-[#2A3439] to-[#181E21]',
    accentBorder: 'border-[#51646D]',
    accentText: 'text-[#B8CCD6]',
    spineColor: 'bg-[#3A4950]'
  },
  {
    id: 'improve-your-self',
    title: 'Improve Your Self',
    subtitle: 'Daily Micro-Calibrations for Lifelong Competence, Focus & Inner Mastery',
    category: 'Self-Mastery',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Paperback & Companion Workbook Edition',
    authorCredit: 'Akromind Human Potential Lab',
    tagline: 'Skip the motivational hype. Build systemic, compounding habits that make progress practically inevitable.',
    synopsis: 'Improve Your Self dispenses with hollow mantras in favor of evidence-based behavioral engineering. Examining sleep architecture, cognitive attention reserves, self-talk loops, and environmental cues, this manual presents a modular 60-day protocol for students and professionals seeking dependable personal acceleration without burning out their nervous systems.',
    keyThemes: ['Behavioral Engineering', 'Compounding Habits', 'Attentional Focus', 'Emotional Self-Regulation'],
    targetAudience: 'Students, ambitious career professionals, and anyone feeling stuck in procrastination loops.',
    accentBg: 'from-[#2E2842] to-[#1A1626]',
    accentBorder: 'border-[#5E5186]',
    accentText: 'text-[#C5B9E8]',
    spineColor: 'bg-[#40375C]'
  },
  {
    id: 'mathematic-rules',
    title: 'Mathematic Rules',
    subtitle: 'The Intuitive Philosophy, Structural Beauty & Practical Logic of Numbers',
    category: 'Education & Academics',
    status: 'Editorial Final Polish',
    language: 'English',
    format: 'Illustrated Hardcover & Formula Field Guide',
    authorCredit: 'AkroTution Senior Mathematics Faculty',
    tagline: 'Transforming math from a source of terror into an elegant lens for understanding the underlying architecture of reality.',
    synopsis: 'Written by master educators who have coached top percentiles in competitive examinations, Mathematic Rules demystifies algebra, calculus, geometry, and probability through visual proofs and intuitive analogies. Rather than forcing blind formula recitation, the book reveals the historic logic and real-world mechanical reasons why mathematical rules function as they do.',
    keyThemes: ['Intuitive Proofs', 'Eliminating Math Anxiety', 'Visual Geometric Thinking', 'Foundational Mathematical Logic'],
    targetAudience: 'Classes 9–12 students, JEE/engineering aspirants, educators, and adult learners rediscovering math.',
    accentBg: 'from-[#172E40] to-[#0D1923]',
    accentBorder: 'border-[#325E82]',
    accentText: 'text-[#84BDE8]',
    spineColor: 'bg-[#204059]'
  },
  {
    id: 'done-with-it',
    title: 'Done With It: The Psychology of Leaving Addiction Behind',
    subtitle: 'Rewiring Dopamine Pathways, Reclaiming Agency & Building an Unshakeable Life',
    category: 'Psychology & Mind',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Paperback & Clinical Companion Edition',
    authorCredit: 'Akromind Clinical Psychology & Rehabilitation Council',
    tagline: 'A dignified, neurobiology-backed path for ending behavioral and substance dependencies forever.',
    synopsis: 'Addiction is not a moral failing; it is a learned neurological loop compounded by emotional avoidance and isolation. Done With It synthesizes modern neurobiology with cognitive-behavioral restructuring to present a compassionate, step-by-step framework for leaving substances, screen dependence, nicotine, and compulsive habits behind. It provides practical daily relapse protocols and guides readers in constructing a life so fulfilling that regression loses its appeal.',
    keyThemes: ['Dopamine Loop Reconditioning', 'Identity Reconstruction', 'Relapse Prevention Architecture', 'Emotional Tolerance Training'],
    targetAudience: 'Individuals in recovery, concerned families, addiction counselors, and medical practitioners.',
    accentBg: 'from-[#3B1F2B] to-[#211118]',
    accentBorder: 'border-[#783E58]',
    accentText: 'text-[#E899BD]',
    spineColor: 'bg-[#522B3C]'
  },
  {
    id: 'the-couple-code',
    title: 'The Couple Code',
    subtitle: 'The Blueprint for Enduring Partnerships, Conflict De-Escalation & Mutual Growth',
    category: 'Relationships & Life',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Embossed Hardcover & Audio Atelier',
    authorCredit: 'Akromind Marital & Relational Institute',
    tagline: 'Love sparks relationships, but architectural systems of communication, money, and care are what sustain them for decades.',
    synopsis: 'Every couple develops a silent relational code—some constructive, others quietly corrosive. In The Couple Code, readers discover the foundational communication rituals, conflict resolution frameworks, and financial alignment strategies observed in resilient multi-decade partnerships. The book guides couples through crucial conversations on intimacy, in-law dynamics, and joint career aspirations with warmth and practical rigor.',
    keyThemes: ['Conflict De-Escalation Scripts', 'Financial Synchrony', 'Shared Values Architecture', 'Long-Term Romance Maintenance'],
    targetAudience: 'Engaged couples, newlyweds, and long-term partners desiring intentional emotional renewal.',
    accentBg: 'from-[#42221D] to-[#251310]',
    accentBorder: 'border-[#82443A]',
    accentText: 'text-[#E8A599]',
    spineColor: 'bg-[#592F28]'
  },
  {
    id: 'the-psychology-of-becoming',
    title: 'The Psychology of Becoming',
    subtitle: 'The Archeology of the Self, Shedding Conditioned Identities & Authentic Becoming',
    category: 'Psychology & Mind',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Hardcover Atelier Edition & E-Book',
    authorCredit: 'Akromind Depth Psychology Guild',
    tagline: 'Who were you before the world told you who you were supposed to be?',
    synopsis: 'Most individuals spend their first three decades adopting identities handed down by parents, peer groups, and cultural pressures. The Psychology of Becoming is an intellectual and spiritual expedition into conscious individuation. Drawing from Carl Jung, stoic philosophy, and contemporary somatic psychology, the text provides a reflective path toward uncovering one’s authentic nature and living with unyielding personal alignment.',
    keyThemes: ['Conscious Individuation', 'Shadow Work', 'Deconditioning False Expectations', 'Existential Purpose'],
    targetAudience: 'Reflective thinkers, mid-life seekers, psychology enthusiasts, and creative professionals.',
    accentBg: 'from-[#2B1B38] to-[#180F20]',
    accentBorder: 'border-[#5F3D7C]',
    accentText: 'text-[#D0B2ED]',
    spineColor: 'bg-[#3D2750]'
  },
  {
    id: 'fear-to-freedom',
    title: 'Fear to Freedom',
    subtitle: 'Dismantling Anxiety, Unmasking Social Insecurity & Stepping Into Courage',
    category: 'Psychology & Mind',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Paperback & Guided Journal Companion',
    authorCredit: 'Akromind Cognitive Behavioral Faculty',
    tagline: 'You do not conquer fear by waiting to feel fearless; you conquer it by learning how fear works in your physiology.',
    synopsis: 'Social phobia, stage fright, catastrophic overthinking, and persistent worry can imprison high-potential individuals. Fear to Freedom demystifies the biological amygdala trigger and teaches somatic grounding, cognitive reframing, and graduated exposure techniques. Readers learn how to transform nervous energy into focused creative performance and step into rooms with centered composure.',
    keyThemes: ['Amygdala De-escalation', 'Somatic Grounding Practices', 'Exposure Protocol Design', 'Public Courage'],
    targetAudience: 'Students facing viva/interviews, public speakers, professionals struggling with impostor syndrome and social anxiety.',
    accentBg: 'from-[#3B2D1B] to-[#21190F]',
    accentBorder: 'border-[#755936]',
    accentText: 'text-[#E3C398]',
    spineColor: 'bg-[#523E26]'
  },
  {
    id: 'stay-before-tomorrow-comes',
    title: 'Stay Before Tomorrow Comes',
    subtitle: 'A Lifeline for the Darkest Nights, Surviving Grief & Choosing Tomorrow',
    category: 'Psychology & Mind',
    status: 'Editorial Final Polish',
    language: 'English',
    format: 'Pocket Clothbound Edition (Outreach Supported)',
    authorCredit: 'Akromind Crisis Support & Mental Health Initiative',
    tagline: 'A gentle, steady hand extended into the deepest emotional storms. You do not have to carry everything tonight.',
    synopsis: 'Written with profound reverence and tenderness, Stay Before Tomorrow Comes is a quiet companion for anyone overwhelmed by despair, heartbreak, academic collapse, or existential emptiness. Free of toxic positivity or cheap advice, it offers ground-level anchors, sensory survival techniques for acute emotional crises, and reasons to hold on until the morning light breaks.',
    keyThemes: ['Acute Emotional First-Aid', 'Grief Processing', 'Combating Isolation', 'The Courage to Stay'],
    targetAudience: 'Individuals enduring intense emotional pain, caregivers, friends supporting those in crisis, and educators.',
    accentBg: 'from-[#1A2633] to-[#0E151C]',
    accentBorder: 'border-[#395370]',
    accentText: 'text-[#96BCDE]',
    spineColor: 'bg-[#243547]'
  },
  {
    id: 'the-mind-within',
    title: 'The Mind Within',
    subtitle: 'Mapping Mental Architecture, Emotional Schemas & Inner Solitude',
    category: 'Psychology & Mind',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Deluxe Hardcover & Mindset Audio Book',
    authorCredit: 'Akromind Neuro-Counseling Research Group',
    tagline: 'An anatomical tour of human thought, metacognitive vigilance, and emotional equilibrium.',
    synopsis: 'The Mind Within illuminates the internal theatre where thoughts, biases, somatic feelings, and memory scripts interact. By showing readers how to observe their own mental processes without immediate identification or panic, this book cultivates a sanctuary of inner quiet even amidst chaotic outer circumstances.',
    keyThemes: ['Metacognitive Observation', 'Neural Schema Restructuring', 'Internal Dialogue Hygiene', 'Cultivating Inner Peace'],
    targetAudience: 'Counselors, meditators, philosophy readers, and anyone seeking mastery over their interior thought world.',
    accentBg: 'from-[#1B3238] to-[#0E1C1F]',
    accentBorder: 'border-[#386470]',
    accentText: 'text-[#94D0DE]',
    spineColor: 'bg-[#25454E]'
  },
  {
    id: 'happy-life',
    title: 'Happy Life: The Psychology of Becoming Well, Not Just Feeling Good',
    subtitle: 'Beyond Fleeting Hedonism: Building Eudaimonic Fulfillment, Purpose & Vitality',
    category: 'Psychology & Mind',
    status: 'Releasing Soon',
    language: 'English',
    format: 'Hardcover & Digital Atelier',
    authorCredit: 'Akromind Positive Psychology Research Center',
    tagline: 'Modern society chases temporary dopamine spikes and wonders why it is anxious. Real happiness is an acquired discipline of wellness.',
    synopsis: 'Contrasting short-lived sensory pleasure with authentic psychological wellness (Eudaimonia), this volume provides a rigorous roadmap to lasting life satisfaction. It examines purposeful work, meaningful service, deep relational bonds, physical vitality, and philosophical acceptance of life’s inherent friction to build a life of enduring peace and joy.',
    keyThemes: ['Eudaimonic Psychology', 'Dopamine vs Serotonin Realities', 'The Science of Purpose', 'Resilient Joy'],
    targetAudience: 'Adults seeking genuine long-term fulfillment beyond superficial consumer culture and self-help clichés.',
    accentBg: 'from-[#3A2D16] to-[#1F180B]',
    accentBorder: 'border-[#735A2D]',
    accentText: 'text-[#E5C98E]',
    spineColor: 'bg-[#4F3E1F]'
  },
  {
    id: 'ek-vidyarthi',
    title: 'एक विद्यार्थी',
    subtitle: 'सपनों, संघर्षों, एकांत और संकल्प की अनकही दास्तान',
    category: 'Hindi Edition',
    status: 'Editorial Final Polish',
    language: 'Hindi',
    format: 'सुंदर पेपरबैक एवं डिजिटल संस्करण',
    authorCredit: 'अक्रोमाइंड साहित्यिक एवं छात्र शोध प्रकोष्ठ',
    tagline: 'कोटा, दिल्ली और लुधियाना के कमरों में जागते हुए हर भारतीय छात्र के दिल की सच्ची धड़कन और विजय का दस्तावेज।',
    synopsis: '‘एक विद्यार्थी’ केवल एक किताब नहीं, बल्कि भारत के लाखों प्रतियोगी और बोर्ड छात्रों की उस मौन यात्रा का जीवंत दर्पण है, जिसे दुनिया केवल परीक्षा परिणाम के दिन देखती है। घर से दूर छोटे कमरों में अकेले रहना, माता-पिता की उम्मीदों का दबाव, असफलता का डर और भीतर छिपी असीम संभावनाओं को यह पुस्तक गहरी संवेदनशीलता और प्रामाणिक भाषा में प्रस्तुत करती है। यह हर उस युवा के लिए एक साथी है जो किताबों के बीच अपना भविष्य गढ़ रहा है।',
    keyThemes: ['छात्र जीवन का यथार्थ', 'अकेलेपन से मुकाबला', 'पारिवारिक अपेक्षाएं', 'संकल्प और आत्म-विश्वास'],
    targetAudience: 'प्रतियोगी परीक्षाओं (JEE, NEET, UPSC, CA) एवं बोर्ड्स की तैयारी कर रहे छात्र, उनके अभिभावक और शिक्षक।',
    accentBg: 'from-[#421D18] to-[#240F0C]',
    accentBorder: 'border-[#823A30]',
    accentText: 'text-[#EAA298]',
    spineColor: 'bg-[#592620]'
  }
];

export default function AkrobooksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const categories = [
    'All',
    'Psychology & Mind',
    'Education & Academics',
    'Relationships & Life',
    'Career & Management',
    'Self-Mastery',
    'Hindi Edition'
  ];

  const filteredBooks = useMemo(() => {
    return AKROBOOKS_CATALOG.filter(book => {
      const matchesCat = selectedCategory === 'All' 
        ? true 
        : selectedCategory === 'Hindi Edition' 
          ? book.language === 'Hindi' || book.category === 'Hindi Edition'
          : book.category === selectedCategory;

      const matchesSearch = searchQuery.trim() === '' 
        ? true 
        : book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.keyThemes.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 font-sans text-stone-800">
      
      {/* Editorial Hero Header */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#FAF6F0] border border-[#E5E0D5] text-terracotta text-xs font-mono uppercase tracking-widest font-bold rounded-xs shadow-xs">
          <Library className="w-3.5 h-3.5" />
          <span>New Akromind Vertical 05 · Publishing Atelier</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-normal text-warm-charcoal tracking-tight leading-tight">
          Literature Born from Real Lives, <br />
          <span className="italic text-terracotta">Not Theory or Clichés.</span>
        </h1>

        <p className="text-stone-600 text-base sm:text-lg font-serif italic max-w-2xl mx-auto leading-relaxed">
          Welcome to <strong className="font-bold text-warm-charcoal not-italic font-sans">AKROBOOKS</strong>—the publishing wing of New Akromind. 
          Every book in our catalogue emerges directly from our clinical counseling rooms, academic classrooms, corporate placement boards, and mountain expeditions.
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
          <div className="p-4 bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs text-center">
            <span className="block text-2xl font-serif font-bold text-warm-charcoal">17</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Upcoming Titles</span>
          </div>
          <div className="p-4 bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs text-center">
            <span className="block text-2xl font-serif font-bold text-terracotta">6</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Psychology Guides</span>
          </div>
          <div className="p-4 bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs text-center">
            <span className="block text-2xl font-serif font-bold text-warm-charcoal">100%</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Evidence-Backed</span>
          </div>
          <div className="p-4 bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs text-center">
            <span className="block text-2xl font-serif font-bold text-terracotta">Original</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Publications</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-[#FCFAF7] p-4 border border-[#E5E0D5] rounded-xs shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-terracotta text-white font-bold shadow-xs'
                    : 'bg-white text-stone-600 border border-[#E5E0D5] hover:border-terracotta/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by title, theme, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E5E0D5] rounded-xs focus:outline-none focus:border-terracotta text-warm-charcoal font-sans"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs font-mono text-stone-500 px-1">
          <span>Showing {filteredBooks.length} of {AKROBOOKS_CATALOG.length} Books</span>
          {selectedCategory !== 'All' && (
            <button 
              onClick={() => setSelectedCategory('All')} 
              className="text-terracotta underline hover:text-warm-charcoal cursor-pointer"
            >
              Reset filter
            </button>
          )}
        </div>
      </section>

      {/* Book Catalog Grid - Bespoke Book Spine & Jacket Presentation */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="group relative bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs flex flex-col justify-between overflow-hidden hover:border-terracotta hover:shadow-md transition-all duration-300"
          >
            {/* Top Book Jacket Visual Header */}
            <div className={`relative p-6 bg-gradient-to-br ${book.accentBg} text-white flex flex-col justify-between min-h-[200px] border-b ${book.accentBorder}`}>
              {/* Spine Accent Strip */}
              <div className={`absolute top-0 bottom-0 left-0 w-3 ${book.spineColor} shadow-inner opacity-80`} />
              
              <div className="pl-2 space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded-2xs bg-white/10 ${book.accentText}`}>
                    {book.category}
                  </span>
                  <span className="text-[10px] font-mono text-stone-300 bg-black/40 px-2 py-0.5 rounded-2xs">
                    {book.status}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug pt-1 group-hover:text-terracotta/90 transition-colors">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="text-xs text-stone-300 font-serif italic line-clamp-2 leading-relaxed">
                    {book.subtitle}
                  </p>
                )}
              </div>

              <div className="pl-2 pt-3 flex items-center justify-between text-[11px] font-mono text-stone-300 border-t border-white/10">
                <span className="truncate max-w-[200px]">{book.format}</span>
                <span className="text-stone-300 font-bold shrink-0">{book.language}</span>
              </div>
            </div>

            {/* Book Body Info */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-stone-700 text-xs leading-relaxed font-serif italic line-clamp-3">
                  "{book.tagline}"
                </p>

                {/* Key Themes Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {book.keyThemes.slice(0, 3).map((theme, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2 py-0.5 bg-stone-100 text-stone-600 rounded-2xs border border-stone-200"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5E0D5]">
                <button
                  onClick={() => setSelectedBook(book)}
                  className="w-full px-4 py-2.5 bg-white hover:bg-stone-50 text-warm-charcoal border border-[#E5E0D5] hover:border-terracotta text-xs font-mono uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:border-terracotta/80"
                >
                  <BookOpen className="w-3.5 h-3.5 text-terracotta" />
                  <span>View Details & Excerpt</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Literary Manifesto & The New Akromind Flywheel Integration */}
      <section className="p-8 sm:p-12 bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta font-bold">
            The Philosophy of AKROBOOKS
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif italic text-warm-charcoal">
            Why We Publish: Real Field Evidence Over Generic Self-Help
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed font-sans">
            Most self-help and educational literature is produced in an ivory tower—repeating tired aphorisms without grappling with the harsh realities of Indian competitive exams, corporate hierarchies, family obligations, and mental health taboos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white border border-[#E5E0D5] rounded-xs space-y-3">
            <div className="w-10 h-10 rounded-xs bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-warm-charcoal text-base">Clinically Grounded</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Our mental health titles (such as <em>Done With It</em> and <em>Stay Before Tomorrow Comes</em>) are verified against clinical psychotherapy and cognitive neuroscience standards.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E5E0D5] rounded-xs space-y-3">
            <div className="w-10 h-10 rounded-xs bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-warm-charcoal text-base">Ecosystem Synergy</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Enrolled students in <strong>AKROTUTION</strong> receive companion study guides, while <strong>AKROMIND</strong> clients receive curated reading assignments between therapy sessions.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E5E0D5] rounded-xs space-y-3">
            <div className="w-10 h-10 rounded-xs bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-warm-charcoal text-base">Accessible & Honest</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              From bilingual editions like <em>एक विद्यार्थी</em> to open-hearted guides like <em>The Sex Compass</em>, we address subjects others shy away from with maturity, respect, and actionable wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Author Manuscript Query / Publishing Inquiry */}
      <section className="bg-warm-charcoal text-stone-200 p-8 sm:p-12 rounded-xs space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8A598] font-bold">
              Submissions & Editorial Board
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-white">
              Have a Manuscript Aligned with Our Ethos?
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              AKROBOOKS actively considers nonfiction proposals in psychology, student pedagogy, high-impact career management, and transformative life memoirs.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white text-xs font-mono uppercase tracking-wider font-bold rounded-xs transition-colors shrink-0 flex items-center gap-2 shadow-xs"
          >
            <span>Query Our Editors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* BOOK DETAIL MODAL */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FCFAF7] border border-[#E5E0D5] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-br ${selectedBook.accentBg} text-white relative`}>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 text-stone-300 hover:text-white p-1 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded-2xs bg-white/10 ${selectedBook.accentText}`}>
                  {selectedBook.category}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-2">
                  {selectedBook.title}
                </h3>
                {selectedBook.subtitle && (
                  <p className="text-xs sm:text-sm text-stone-300 font-serif italic mt-1">
                    {selectedBook.subtitle}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 mt-4 text-[11px] font-mono text-stone-300 border-t border-white/10 pt-3">
                  <span>Format: <strong className="text-white">{selectedBook.format}</strong></span>
                  <span>Language: <strong className="text-white">{selectedBook.language}</strong></span>
                  <span>Editorial: <strong className="text-white">{selectedBook.authorCredit}</strong></span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 text-stone-800">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-terracotta font-bold">
                    Executive Synopsis
                  </h4>
                  <p className="text-sm font-serif italic text-stone-700 leading-relaxed bg-[#FAF6F0] p-4 border-l-2 border-terracotta">
                    "{selectedBook.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans pt-2">
                    {selectedBook.synopsis}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-terracotta font-bold">
                    Core Themes & Chapters
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedBook.keyThemes.map((theme, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-white border border-[#E5E0D5] rounded-xs text-xs">
                        <Check className="w-3.5 h-3.5 text-terracotta shrink-0" />
                        <span className="font-semibold text-warm-charcoal">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-mono uppercase tracking-wider text-stone-500 block">Ideal Audience:</span>
                  <p className="text-stone-700 font-sans">{selectedBook.targetAudience}</p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D5] flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 py-3 bg-terracotta hover:bg-terracotta/90 text-white text-xs font-mono uppercase tracking-wider font-bold rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire / Request Reading Circle Access</span>
                  </Link>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono uppercase tracking-wider rounded-xs cursor-pointer text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
