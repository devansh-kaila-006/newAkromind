import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FaqAccordion, { FAQItem } from '../components/FaqAccordion';
import EditorialVisual from '../components/EditorialVisual';
import StrangerTripPlanner from '../components/StrangerTripPlanner';
import { Compass, Palmtree, MapPin, Calendar, DollarSign, Award, Plane, Users, Map, Globe, Check, Shield, Sparkles } from 'lucide-react';

const holidayFaqs: FAQItem[] = [
  {
    category: 'Stranger Trips',
    q: 'What is a Stranger Trip, and how does rooming work for solo travelers?',
    a: 'Stranger Trips are curated expeditions created for solo travelers who want to explore extraordinary Himalayan locations with a like-minded group. Cohorts are kept small (8 to 12 travelers), mainly focused towards Himachal Pradesh and Uttarakhand circuits with 24/7 on-ground logistical support. For accommodations, standard bookings include twin-sharing with a verified co-traveler of the same gender. Private single-room upgrades are also available for travelers who want solo space at night.'
  },
  {
    category: 'Stranger Trips',
    q: 'How are travelers vetted before joining a Stranger Trip?',
    a: 'Every participant must submit government-issued identification and complete a short travel chemistry questionnaire before their spot is confirmed. This guarantees high community trust, respect, and mutual safety. We also maintain a strict zero-tolerance code of conduct on every departure.'
  },
  {
    category: 'Stranger Trips',
    q: 'What if a Stranger Trip does not meet the minimum cohort size?',
    a: 'Our scheduled departures have guaranteed departure thresholds (minimum 4 to 6 travelers). In the rare scenario that a cohort does not meet minimum numbers 21 days prior to departure, travelers are offered 100% full refunds or free transfers to any alternative departure date or route with bonus Explorer Loyalty Credits.'
  },
  {
    category: 'Destinations & Planning',
    q: 'What domestic and international destinations does AKROHOLIDAYS cover?',
    a: 'Domestically, we operate across all premier Indian circuits including Himachal Pradesh (Manali, Shimla, Spiti), Leh Ladakh, Goa, Kerala backwaters, Royal Rajasthan (Udaipur, Jaipur, Jaisalmer), Kashmir valley, and Northeast circuits (Sikkim, Meghalaya). Internationally, we curate bespoke tracks across 25+ countries, including Switzerland, Bali, Dubai & UAE, Vietnam, Thailand, Singapore, Maldives, Sri Lanka, and France.'
  },
  {
    category: 'Customization & Groups',
    q: 'Can itineraries be customized for specific family needs, kids, or elderly travelers?',
    a: 'Yes, 100% of our journeys are bespoke. We do not herd travelers onto rigid tour buses. We adapt pacing, ensure wheelchair-accessible vehicles and ground-floor hotel suites for elderly family members, arrange child-friendly activities and resorts with baby amenities, and curate relaxed schedules that allow you to savor each destination without exhausting travel rushes.'
  },
  {
    category: 'Pricing & Inclusions',
    q: 'What is typically included in an AKROHOLIDAYS travel package?',
    a: 'Our quotes are comprehensive and transparent with zero surprise on-ground expenses. Inclusions typically cover handpicked 4-star or luxury boutique hotel accommodations, private air-conditioned vehicles with verified chauffeurs, daily gourmet breakfasts and select curated regional dinners, pre-arranged monument entrance passes, private local guides, and 24/7 on-ground concierge support.'
  },
  {
    category: 'Visas & Documentation',
    q: 'Do you provide visa application assistance and passport guidance?',
    a: 'Yes. Our international travel desk provides end-to-end visa facilitation assistance, including appointment scheduling, documentation auditing, flight itinerary proofs, hotel reservation vouchers, and cover letter templates for Schengen, UAE, Southeast Asian, and UK visas.'
  },
  {
    category: 'Safety & Insurance',
    q: 'How do you handle medical emergencies or unexpected trip interruptions?',
    a: 'Every traveler’s safety is our top priority. We coordinate comprehensive international and domestic travel medical insurance through licensed partners covering emergency medical care, baggage delays, and trip interruptions. On the ground, our 24/7 Emergency Operations Center maintains direct communication with local hospital networks and embassy helplines.'
  },
  {
    category: 'Explorer Loyalty Engine',
    q: 'How does the AKROHOLIDAYS Explorer Loyalty Points system work?',
    a: 'The Explorer Loyalty Engine connects your travel rewards with the entire New Akromind ecosystem. You earn points when booking vacations, but also when enrolling in AKROTUTION semester tracks or completing AKROPLACEMENT programs. Every 1,000 points equals ₹1,000 in direct redemption credits towards hotel upgrades, private yacht charters, or tour discounts.'
  },
  {
    category: 'Food & Dietary Needs',
    q: 'Can you accommodate strict vegetarian, vegan, or Jain dietary requirements?',
    a: 'Yes. Having catered to diverse Indian and international families for years, we coordinate strictly with our partner hotels and regional specialty restaurants to guarantee authentic vegetarian, pure Jain (no root vegetables/onion/garlic), vegan, and halal dining options across both domestic and international destinations.'
  },
  {
    category: 'Cancellations & Rescheduling',
    q: 'What is your cancellation and date rescheduling policy?',
    a: 'We understand that unexpected family or corporate events arise. For most standard itineraries, date modifications requested at least 21 days before departure are processed with minimal administrative airline fees and zero AKROHOLIDAYS penalty. Unused hotel deposits are credited towards future travel bookings valid for 12 months.'
  },
  {
    category: 'Flights & Transit',
    q: 'Are international and domestic flights included in your package quotes?',
    a: 'We offer packages both with flights included (Land + Air) and land-only packages (for travelers who prefer utilizing personal frequent-flyer credit card points). When booking airfare through us, we secure bulk-rate airline tickets and provide live flight monitoring to handle transit delays.'
  },
  {
    category: 'Corporate & Retreats',
    q: 'Do you arrange corporate offsites, executive retreats, and school educational trips?',
    a: 'Yes. We design high-impact corporate offsites, executive leadership retreats, and student educational excursions. These include private villa bookings, conference AV setups, team-building adventure challenges, and curated gala dinners with regional artists.'
  }
];

const destinationsPool = {
  domestic: [
    {
      id: 'manali',
      name: 'Shimla & Himachal Splendid',
      regionTag: 'North India Alpine Circuit',
      highlightsCount: 8,
      days: {
        '3': ['Day 1: Arrival in Shimla & heritage Mall Road sunset stroll', 'Day 2: Kufri snowy pass & cedar forest nature trail', 'Day 3: Viceregal Lodge colonial tour & airport departure'],
        '5': ['Day 1: Arrival in Shimla & colonial town walk', 'Day 2: Kufri nature park & apple orchard drive', 'Day 3: Scenic transfer through Kullu Valley to Manali', 'Day 4: Solang Valley adventure sports & paragliding', 'Day 5: Old Manali cafes, Hidimba Temple & departure transfer'],
        '7': ['Day 1: Arrival in Shimla & check-in at heritage estate', 'Day 2: UNESCO Toy Train ride & Mall Road cafe hopping', 'Day 3: Kinnaur Valley gateway & Jalori Pass scenic route', 'Day 4: Transfer to Manali & riverside sunset tea in Kasol', 'Day 5: Rohtang Pass high altitude glacier adventure', 'Day 6: Naggar Castle heritage visit & artisanal shawl shopping', 'Day 7: Private luxury transfer to Chandigarh airport for flight home']
      }
    },
    {
      id: 'ladakh',
      name: 'Leh Ladakh High Pass Safari',
      regionTag: 'Himalayan Trans-Valley',
      highlightsCount: 12,
      days: {
        '3': ['Day 1: Leh airport arrival & mandatory altitude acclimatization', 'Day 2: Pangong Tso azure lake sunset excursion', 'Day 3: Shanti Stupa morning prayers & airport departure'],
        '5': ['Day 1: Arrival in Leh & restful acclimatization walk', 'Day 2: Hall of Fame, Magnetic Hill & Indus-Zanskar confluence', 'Day 3: Cross Khardung La (17,982 ft) into Nubra Valley dunes', 'Day 4: Double-humped camel safari & Shyok river transfer to Pangong', 'Day 5: Morning lake photography, return to Leh & flight out'],
        '7': ['Day 1: Arrival in Leh & rest in traditional heated boutique suite', 'Day 2: Confluence of Indus & Zanskar rivers & Pathar Sahib Gurudwara', 'Day 3: Khardung La high pass ascent & Diskit Monastery giant Buddha', 'Day 4: Hunder white sand dunes ATV ride & stargazing camp in Nubra', 'Day 5: Dramatic off-road route via Shyok River to Pangong Tso Lake', 'Day 6: Return to Leh via Chang La Pass & traditional Ladakhi dinner', 'Day 7: Souvenir shopping in Leh Tibetan market & airport departure']
      }
    },
    {
      id: 'goa',
      name: 'Goa Coastal & Heritage Trails',
      regionTag: 'Konkan Coastline',
      highlightsCount: 6,
      days: {
        '3': ['Day 1: North Goa beachfront check-in & private sundowner yacht', 'Day 2: Watercraft adventure, scuba diving & sunset shacks', 'Day 3: Old Goa Portuguese cathedrals & airport departure'],
        '5': ['Day 1: Arrival & check-in at South Goa 5-star private beach resort', 'Day 2: Calangute & Baga water sports, parasailing & jet-skiing', 'Day 3: Panaji Latin Quarter (Fontainhas) architectural walking tour', 'Day 4: Palolem & Agonda tranquil beaches with authentic seafood lunch', 'Day 5: Anjuna artisanal flea market, beach spa & airport transfer'],
        '7': ['Day 1: Arrival in Goa & luxury beachfront resort welcome drink', 'Day 2: Private speedboat excursion & dolphin spotting safari', 'Day 3: Salim Ali Bird Sanctuary mangrove kayaking in Chorao Island', 'Day 4: Jeep safari trek to Dudhsagar multi-tiered waterfalls', 'Day 5: Peaceful South Goa beach club day & candlelit coastal dinner', 'Day 6: 400-year-old Portuguese spice plantation tour with organic feast', 'Day 7: Final beach yoga session, souvenir shopping & departure transfer']
      }
    }
  ],
  international: [
    {
      id: 'bali',
      name: 'Tropical Bali Island Paradiso',
      regionTag: 'Indonesia Heritage & Nature',
      highlightsCount: 14,
      days: {
        '3': ['Day 1: Ubud private pool villa check-in & Sacred Monkey Forest', 'Day 2: Nusa Penida speedboat tour & Kelingking T-Rex cliff hike', 'Day 3: Tanah Lot ocean temple sunset & airport departure transfer'],
        '5': ['Day 1: Arrival in Denpasar, transfer to Ubud luxury jungle resort', 'Day 2: Tegalalang rice terraces, jungle swing & Kintamani volcano lunch', 'Day 3: Speedboat day tour to Nusa Penida island & Broken Beach', 'Day 4: Transfer to Seminyak beachfront, Uluwatu Kecak fire dance at sunset', 'Day 5: Beach club lounging, Balinese massage & airport transfer'],
        '7': ['Day 1: Arrival in Bali & private transfer to rainforest pool villa in Ubud', 'Day 2: Tirta Empul holy spring water cleansing & hidden waterfall trek', 'Day 3: Mount Batur sunrise volcanic jeep trek with mountain-view brunch', 'Day 4: Full-day private cruise to Nusa Penida & snorkeling with manta rays', 'Day 5: Ulun Danu Beratan lake temple & Handara iconic gate photo tour', 'Day 6: Luxury day at beach club in Canggu & sunset seafood BBQ in Jimbaran', 'Day 7: Ubud artisanal craft market shopping & private transfer to airport']
      }
    },
    {
      id: 'switzerland',
      name: 'Swiss Alps & Scenic Lake Rails',
      regionTag: 'Central European Alpine',
      highlightsCount: 16,
      days: {
        '3': ['Day 1: Zurich Old Town promenade & Lake Zurich scenic boat cruise', 'Day 2: Lucerne Chapel Bridge & Mount Pilatus world-steepest cogwheel train', 'Day 3: Interlaken paragliding view of Swiss peaks & airport transfer out'],
        '5': ['Day 1: Arrival at Zurich airport & 1st class Swiss Rail transfer to Lucerne', 'Day 2: Mount Rigi panorama & paddle steamer cruise on Lake Lucerne', 'Day 3: Scenic GoldenPass train to Interlaken & Lake Brienz turquoise cruise', 'Day 4: Jungfraujoch Top of Europe glacier train & Ice Palace exploration', 'Day 5: Traditional Swiss fondue tasting in Bern & Zurich departure flight'],
        '7': ['Day 1: Arrival in Zurich, private limousine transfer to Lucerne luxury lake hotel', 'Day 2: Mount Pilatus golden round-trip with panoramic cable cars & boat', 'Day 3: Scenic train to Interlaken, valley of 72 waterfalls in Lauterbrunnen', 'Day 4: Jungfraujoch excursion to Europe’s highest railway station (11,333 ft)', 'Day 5: Scenic rail route to Zermatt & view of the iconic Matterhorn mountain', 'Day 6: Glacier Express panoramic train journey through dramatic Rhine gorge', 'Day 7: Geneva lakeside stroll, luxury Swiss watch shopping & departure flight']
      }
    },
    {
      id: 'dubai',
      name: 'Dubai & Arabian Luxury Desert',
      regionTag: 'UAE Modern Luxury & Desert',
      highlightsCount: 10,
      days: {
        '3': ['Day 1: Downtown Dubai, Burj Khalifa 148th floor & Dubai Fountain show', 'Day 2: Red dunes luxury desert safari with quad biking & Bedouin dinner', 'Day 3: Dubai Frame, Museum of the Future & airport transfer'],
        '5': ['Day 1: Arrival in Dubai & private chauffeur transfer to Marina 5-star hotel', 'Day 2: Burj Khalifa At The Top, Dubai Mall & Dubai Aquarium underwater zoo', 'Day 3: Premium desert safari with dune bashing, camel trek & live fire show', 'Day 4: Palm Jumeirah monorail, Atlantis Aquaventure waterpark & beach club', 'Day 5: Deira Gold & Spice souks cultural abra boat ride & airport transfer'],
        '7': ['Day 1: Arrival & check-in at luxury hotel on Palm Jumeirah', 'Day 2: Burj Khalifa VIP lounge access & Dubai Mall private shopping assistance', 'Day 3: VIP Red Sand desert safari with private sunset majlis & barbecue dinner', 'Day 4: Day trip to Abu Dhabi: Sheikh Zayed Grand Mosque & Louvre Abu Dhabi', 'Day 5: Museum of the Future tour & private sunset yacht cruise from Dubai Marina', 'Day 6: Miracle Garden floral walk & Global Village international pavilions', 'Day 7: Traditional gold souk shopping, Arabic perfumery tour & airport departure']
      }
    }
  ]
};

export default function AkroholidaysPage({ defaultTab = 'all' }: { defaultTab?: 'all' | 'bespoke' | 'stranger-trips' }) {
  const [planningMode, setPlanningMode] = useState<'all' | 'bespoke' | 'stranger-trips'>(defaultTab);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#stranger-trips') {
      const el = document.getElementById('stranger-trips');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  }, []);

  const [regionType, setRegionType] = useState<'domestic' | 'international'>('domestic');
  const [selectedDestId, setSelectedDestId] = useState('goa');
  const [duration, setDuration] = useState<'3' | '5' | '7'>('5');
  const [people, setPeople] = useState(2);

  const handleRegionChange = (type: 'domestic' | 'international') => {
    setRegionType(type);
    if (type === 'domestic') {
      setSelectedDestId('goa');
    } else {
      setSelectedDestId('bali');
    }
  };

  const pool = destinationsPool[regionType];
  const activeDest = pool.find(d => d.id === selectedDestId) || pool[0];

  const calculateHighlights = () => {
    const daysMultiplier = duration === '3' ? 1 : duration === '5' ? 1.5 : 2;
    const baseVal = (activeDest.highlightsCount || 10) * daysMultiplier;
    return Math.floor(baseVal * people);
  };

  const getLoyaltyCredits = () => {
    return Math.floor(calculateHighlights() * 20);
  };

  const activeDaysItinerary = activeDest.days[duration as '3' | '5' | '7'] || [];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 space-y-24 font-sans bg-warm-cream"
    >
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">AKROHOLIDAYS</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
          Bespoke Journeys. <span className="font-serif italic font-normal text-terracotta">Uncharted Routes.</span>
        </h1>
        <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
          Curated domestic expeditions, luxury international circuits, verified boutique properties, and an integrated Explorer Loyalty Point rewards engine.
        </p>
      </header>

      {/* Visual Showcase */}
      <EditorialVisual 
        type="akroholidays"
        aspectRatio="21:9"
        badge="Voyage Atelier"
        title="Curated World Expeditions & Slow Living"
        caption="From pristine Swiss alpine summits to tranquil Konkan coastline sundowners"
      />

      {/* Trust Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-[#E5E0D5] divide-x divide-[#E5E0D5] py-8 bg-[#FCFAF7] border-x border-[#E5E0D5]">
        {[
          { num: '50+', label: 'Curated Destinations', detail: 'Across India & 25+ countries' },
          { num: '100%', label: 'Verified Boutique Stays', detail: 'Audited for safety & hygiene' },
          { num: '24/7', label: 'On-Ground Concierge', detail: 'Dedicated traveler emergency desk' },
          { num: '10K+', label: 'Explorer Points', detail: 'Earnable on every confirmed tour' }
        ].map((s, idx) => (
          <div key={idx} className="p-3.5 sm:px-6 space-y-1 text-center md:text-left">
            <div className="text-3xl md:text-4xl font-serif italic font-bold text-terracotta tabular-nums">{s.num}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-warm-charcoal">{s.label}</div>
            <div className="text-[10px] text-stone-500 font-serif italic">{s.detail}</div>
          </div>
        ))}
      </section>

      {/* Destination Footprint Breakdown */}
      <section className="space-y-16">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Global Footprint</span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-warm-charcoal font-normal">Our Curated Travel Circuits</h2>
          <p className="text-xs text-stone-600 font-serif leading-relaxed">
            Every itinerary is personally surveyed by our team to guarantee authentic encounters, reliable chauffeurs, and zero commercial tourist traps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Domestic Circuit */}
          <div className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
            <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta font-bold">CIRCUIT 01</span>
                <h4 className="text-xl font-bold text-warm-charcoal">Domestic Indian Expeditions</h4>
              </div>
              <span className="text-xs font-mono text-stone-400">INDIA</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-serif">
              From the snow-crowned passes of Himachal and Ladakh to the tranquil emerald backwaters of Kerala and golden dunes of Rajasthan.
            </p>
            <ul className="space-y-3 text-xs text-stone-700 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Himalayan Odysseys:</strong> Manali cedar forests, Solang paragliding, Spiti trans-Himalayan monasteries, and Leh Ladakh high-altitude safaris.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Southern Serenity:</strong> Munnar misty tea gardens, private eco-houseboat cruises on Lake Vembanad, and Coorg coffee plantation stays.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Konkan Coastal Trails:</strong> South Goa tranquil sands, Latin Quarter heritage villas in Fontainhas, and dolphin estuary cruises.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Royal Heritage:</strong> Udaipur lake palace boat rides, Jodhpur Mehrangarh fort walks, and Jaisalmer desert glamping under starry skies.</span>
              </li>
            </ul>
          </div>

          {/* International Circuit */}
          <div className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors rounded-sm space-y-5">
            <div className="flex justify-between items-start border-b border-[#E5E0D5] pb-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta font-bold">CIRCUIT 02</span>
                <h4 className="text-xl font-bold text-warm-charcoal">International Curated Gateways</h4>
              </div>
              <span className="text-xs font-mono text-stone-400">GLOBAL</span>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-serif">
              Bespoke international itineraries connecting you with the finest cultural sanctuaries, alpine railways, and exotic coastal hideaways across the globe.
            </p>
            <ul className="space-y-3 text-xs text-stone-700 font-sans">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Swiss Alpine Splendor:</strong> Glacier Express panoramic trains, Lake Lucerne paddle steamers, and Jungfraujoch Top of Europe summits.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Tropical Bali Paradiso:</strong> Private Ubud rainforest villas, Tegalalang rice terraces, Nusa Penida T-Rex cliffs, and Kecak fire dances.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Arabian Luxury & Desert:</strong> VIP Burj Khalifa 148th-floor access, red sand dune bashing, and Abu Dhabi Sheikh Zayed Mosque visits.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span><strong>Vietnam & Halong Bay:</strong> Luxury overnight cruises through limestone karst towers and lantern boat rides in ancient Hoi An.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Travel Architecture Mode Switcher */}
      <section className="space-y-12">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-terracotta">
            Dual Exploration Engines Inside AKROHOLIDAYS
          </span>
          <div className="bg-[#FAF6EE] p-1.5 rounded-sm border border-[#E5E0D5] inline-flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setPlanningMode('all')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-all ${
                planningMode === 'all'
                  ? 'bg-warm-charcoal text-white shadow-xs'
                  : 'text-stone-600 hover:text-warm-charcoal'
              }`}
            >
              All Travel Modules
            </button>
            <button
              onClick={() => setPlanningMode('bespoke')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-all ${
                planningMode === 'bespoke'
                  ? 'bg-warm-charcoal text-white shadow-xs'
                  : 'text-stone-600 hover:text-warm-charcoal'
              }`}
            >
              Bespoke Family & Group Itineraries
            </button>
            <button
              onClick={() => setPlanningMode('stranger-trips')}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer transition-all flex items-center gap-2 ${
                planningMode === 'stranger-trips'
                  ? 'bg-terracotta text-white shadow-xs'
                  : 'text-stone-600 hover:text-terracotta'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Stranger Trips: Solo Traveler Cohorts</span>
              <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded-xs uppercase">Curated</span>
            </button>
          </div>
        </div>

        {/* Module 1: Interactive Holiday Planner & Itinerary Tool (Bespoke) */}
        {(planningMode === 'all' || planningMode === 'bespoke') && (
          <div className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Module 01</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Simulate Your Custom Holiday Itinerary</h2>
              <p className="text-stone-600 text-xs leading-relaxed">Choose a geographic zone, select your target spot, adjust duration and traveler count to preview your day-by-day sightseeing track and earnable loyalty points.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-6">
                {/* Region Selector */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">1/ Travel Zone</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleRegionChange('domestic')}
                      className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold rounded-sm border cursor-pointer transition-colors duration-200 flex items-center justify-center gap-2 ${
                        regionType === 'domestic'
                          ? 'bg-warm-charcoal text-white border-warm-charcoal'
                          : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5] text-stone-600'
                      }`}
                    >
                      <Map className={`w-4 h-4 ${regionType === 'domestic' ? 'text-white' : 'text-terracotta'}`} />
                      <span>Domestic India</span>
                    </button>
                    <button
                      onClick={() => handleRegionChange('international')}
                      className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold rounded-sm border cursor-pointer transition-colors duration-200 flex items-center justify-center gap-2 ${
                        regionType === 'international'
                          ? 'bg-warm-charcoal text-white border-warm-charcoal'
                          : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5] text-stone-600'
                      }`}
                    >
                      <Globe className={`w-4 h-4 ${regionType === 'international' ? 'text-white' : 'text-terracotta'}`} />
                      <span>International</span>
                    </button>
                  </div>
                </div>

                {/* Destination Selector */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">2/ Target Curated Destination</label>
                  <div className="grid grid-cols-3 gap-2">
                    {pool.map(dest => (
                      <button
                        key={dest.id}
                        onClick={() => setSelectedDestId(dest.id)}
                        className={`p-3 rounded-sm border cursor-pointer text-center text-[10px] font-bold uppercase tracking-wider transition ${
                          selectedDestId === dest.id
                            ? 'border-terracotta bg-warm-cream/50 text-[#1C1816]'
                            : 'border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta/50 text-[#7D7067]'
                        }`}
                      >
                        {dest.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-stone-500 font-serif italic pt-1">{activeDest.name} · {activeDest.regionTag}</p>
                </div>

                {/* Duration & Group Size */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">3/ Tour Duration</label>
                    <div className="flex gap-2">
                      {['3', '5', '7'].map(d => (
                        <button
                          key={d}
                          onClick={() => setDuration(d as '3' | '5' | '7')}
                          className={`flex-1 py-2.5 text-xs uppercase tracking-widest font-bold rounded-sm border cursor-pointer transition-colors duration-200 ${
                            duration === d
                              ? 'bg-warm-charcoal text-white border-warm-charcoal'
                              : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5] text-stone-600'
                          }`}
                        >
                          {d} Days
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">4/ Travel Party Size</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setPeople(Math.max(1, people - 1))}
                        className="w-10 h-10 bg-[#FCFAF7] hover:bg-warm-cream border border-[#E5E0D5] rounded-sm font-bold text-stone-700 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-warm-charcoal text-xs uppercase tracking-wider shrink-0 w-12 text-center font-mono">{people} Pax</span>
                      <button
                        onClick={() => setPeople(people + 1)}
                        className="w-10 h-10 bg-[#FCFAF7] hover:bg-warm-cream border border-[#E5E0D5] rounded-sm font-bold text-stone-700 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day-by-Day View panel */}
              <div className="lg:col-span-6 bg-[#1C1816] text-warm-cream p-8 border border-[#2D2623] rounded-sm space-y-6">
                <div className="flex justify-between items-start gap-4 border-b border-stone-800 pb-5">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-bold text-terracotta tracking-wider">Sightseeing Highlights</span>
                    <div className="text-3xl font-serif italic font-extrabold text-white tracking-tight tabular-nums">
                      {calculateHighlights()}<span className="text-xs text-stone-400 font-sans font-medium"> Stops</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase font-bold text-stone-400 tracking-widest block">Earnable Explorer Points</span>
                    <span className="text-xs font-bold text-terracotta flex items-center justify-end gap-1 font-mono mt-1">
                      <Award className="w-3.5 h-3.5 text-terracotta" /> +{getLoyaltyCredits()} pts
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#7D7067] flex items-center gap-2">
                    <Map className="w-3.5 h-3.5 text-terracotta" /> Simulated {duration}-Day Curated Route
                  </h4>
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                    {activeDaysItinerary.map((it, idx) => (
                      <div key={idx} className="flex gap-3 text-xs bg-stone-900 border border-stone-800 p-3.5 rounded-sm">
                        <span className="text-terracotta font-mono font-bold shrink-0">{idx + 1}/</span>
                        <p className="text-stone-300 font-serif italic leading-relaxed">{it}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Request Custom Quote & Itinerary &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Module 2: Stranger Trip Planning (Solo Traveler Cohorts) */}
        {(planningMode === 'all' || planningMode === 'stranger-trips') && (
          <div id="stranger-trips" className="scroll-mt-28">
            <StrangerTripPlanner />
          </div>
        )}
      </section>

      {/* Symmetrical Assurance & Inclusions */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
          <h3 className="text-lg font-bold text-warm-charcoal">The AKROHOLIDAYS Guarantee</h3>
          <ul className="space-y-3.5 text-xs text-stone-700 font-sans">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Zero Commercial Detours:</strong> We never waste your vacation time dragging you to mandatory commercial souvenir stores or overpriced gem factories.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Verified Chauffeurs & Luxury Vehicles:</strong> Clean, air-conditioned, licensed tourist transport with courteous veteran mountain and city drivers.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Transparent Cost Inclusions:</strong> Tolls, state taxes, parking permits, and driver allowances are always included upfront.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
          <h3 className="text-lg font-bold text-warm-charcoal">Tailored Traveler Profiles</h3>
          <ul className="space-y-3.5 text-xs text-stone-700 font-sans">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Multi-Generational Families:</strong> Relaxed pacing with wheelchair-friendly suites, pure vegetarian/Jain cuisine, and spacious private vans.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Corporate Retreats & Offsites:</strong> Team adventure safaris, private villa takeovers, AV setups, and curated networking dinners.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
              <span><strong>Couples & Honeymooners:</strong> Private pool villas, candlelit coastal dining, sunset catamaran cruises, and luxury spa sessions.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comprehensive FAQs for AKROHOLIDAYS */}
      <section className="space-y-8">
        <FaqAccordion 
          items={holidayFaqs}
          title="AKROHOLIDAYS Frequently Asked Questions"
          subtitle="Everything you need to know about our destinations, bookings, visas, and reward points"
        />
      </section>
    </motion.div>
  );
}
