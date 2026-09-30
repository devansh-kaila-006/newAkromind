import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FaqAccordion from '../components/FaqAccordion';
import { Compass, Palmtree, MapPin, Calendar, DollarSign, Award, Plane, Users, Map, Globe } from 'lucide-react';

const faqs = [
  { q: 'What destinations do you cover?', a: 'We cover domestic destinations across all Indian states and union territories. Internationally, we cover 25+ countries across Southeast Asia, Middle East, Europe, and popular Asian destinations.' },
  { q: 'Do you offer customized travel packages?', a: 'Yes, all our packages are customizable based on your preferences, budget, duration, and group size.' },
  { q: 'What is included in your travel packages?', a: 'Our packages typically include accommodation, transportation (flights/trains/ground), specified meals, sightseeing, and local guides. Specific inclusions vary by package.' },
  { q: 'Do you offer travel insurance?', a: 'Yes, we facilitate travel insurance through our partners. It\'s optional for domestic travel and recommended for international trips.' },
  { q: 'What is your cancellation policy?', a: 'Cancellation and reservation details are highly flexible. You can request changes or reschedules to your itineraries up to 15 days before your departure with zero penalty.' },
  { q: 'Do you support large-group custom plans?', a: 'Yes! For groups of 6 or more, we design curated custom group activities, private sightseeing vehicles, and aligned resort blocks.' },
  { q: 'How do you handle emergencies during trips?', a: 'We provide 24/7 support during trips, coordinate with local authorities and services, and facilitate emergency assistance including medical support if needed.' }
];

const destinationsPool = {
  domestic: [
    {
      id: 'manali',
      name: 'Shimla & Himachal Splendid',
      highlightsCount: 8,
      days: {
        '3': ['Day 1: Arrival & Mall Road Stroll', 'Day 2: Solang Valley Paragliding', 'Day 3: Hidimba Temple & Departure'],
        '5': ['Day 1: Arrival in Shimla', 'Day 2: Kufri Snow Viewpoint', 'Day 3: Transfer to Manali', 'Day 4: Solang Adventure Activities', 'Day 5: Local Markets & Departure'],
        '7': ['Day 1: Shimla Arrival', 'Day 2: Toy Train & Mall Road', 'Day 3: Kinnaur Valley Gateway', 'Day 4: Manali Local Explorations', 'Day 5: Rohtang Pass High Altitude', 'Day 6: Kasol Riverside Retreat', 'Day 7: Souvenir shopping & Flight back']
      }
    },
    {
      id: 'ladakh',
      name: 'Leh Ladakh Bike & Car Safari',
      highlightsCount: 12,
      days: {
        '3': ['Day 1: Leh Accclimatisation Walk', 'Day 2: Pangong Tso Lake Sunset', 'Day 3: Shanti Stupa & Departure'],
        '5': ['Day 1: Leh Arrival', 'Day 2: Magnetic Hill & Hall of Fame', 'Day 3: Khardung La High Pass to Nubra', 'Day 4: Nubra Sand Dunes to Pangong', 'Day 5: Return to Leh & Departure'],
        '7': ['Day 1: Leh Arrival & rest', 'Day 2: Confluence of Indus & Zanskar', 'Day 3: Nubra Valley via Khardung La', 'Day 4: Diskit Monastery & Quad biking', 'Day 5: Pangong Lake via Shyok River', 'Day 6: Shanti Stupa & local Ladakhi dinner', 'Day 7: Fly back with souvenirs']
      }
    },
    {
      id: 'goa',
      name: 'Goa Coastal Sundowner',
      highlightsCount: 6,
      days: {
        '3': ['Day 1: North Goa Beaches & Sunset', 'Day 2: Watercraft Sports & Shacks', 'Day 3: Old Goa Churches & Depart'],
        '5': ['Day 1: North Goa Beach stroll', 'Day 2: Calangute Scuba & Jetskiing', 'Day 3: Panaji Mandovi cruise', 'Day 4: South Goa peaceful beaches', 'Day 5: Anjuna local flea markets & Flight out'],
        '7': ['Day 1: Arrival / Resort check-in', 'Day 2: Candolim Water activities', 'Day 3: Salim Ali Bird Sanctuary', 'Day 4: Dudhsagar Waterfalls trek', 'Day 5: South Goa Palolem beaches', 'Day 6: Authentic Portuguese estate lunch', 'Day 7: Spa & Departure']
      }
    }
  ],
  international: [
    {
      id: 'bali',
      name: 'Tropical Bali Paradiso',
      highlightsCount: 14,
      days: {
        '3': ['Day 1: Ubud Monkey Forest & Swing', 'Day 2: Nusa Penida Coast ride', 'Day 3: Tanah Lot Sunset & Departure'],
        '5': ['Day 1: Ubud Art Markets & Temple', 'Day 2: Kintamani Volcano Brunch', 'Day 3: Nusa Penida T-Rex Cliff', 'Day 4: Uluwatu Fire Dance', 'Day 5: Seminyak Beach walk & Depart'],
        '7': ['Day 1: Flight & Seminyak resort check-in', 'Day 2: Ubud Waterfall trails', 'Day 3: Mount Batur Sunrise Trek', 'Day 4: Nusa Penida Island Speedboat tour', 'Day 5: Bedugul Lake Temple scenery', 'Day 6: Beach club lounging & sunset fire dance', 'Day 7: Souvenir market & flight home']
      }
    },
    {
      id: 'switzerland',
      name: 'Swiss Alps & Scenic Lakes',
      highlightsCount: 16,
      days: {
        '3': ['Day 1: Zurich Lake & Old Town', 'Day 2: Lucerne & Mount Pilatus Railway', 'Day 3: Interlaken Paraglide & Flight out'],
        '5': ['Day 1: Zurich Arrival', 'Day 2: Lucerne Chapel Bridge', 'Day 3: Interlaken Lake Thun Cruise', 'Day 4: Jungfraujoch Top of Europe Train', 'Day 5: Swiss Chocolate tasting & Departure'],
        '7': ['Day 1: Zurich Arrival & Lake cruise', 'Day 2: Lucerne Chapel Bridge & Mount Rigi', 'Day 3: Interlaken scenic cogwheel railway', 'Day 4: Jungfraujoch snowy peak adventure', 'Day 5: Zermatt Matterhorn mountain views', 'Day 6: Glacier Express scenic route', 'Day 7: Geneva lakeside departure']
      }
    },
    {
      id: 'dubai',
      name: 'Dubai Luxury Desert Oasis',
      highlightsCount: 10,
      days: {
        '3': ['Day 1: Burj Khalifa & Mall Fountain', 'Day 2: Desert Safari & Dune Quad Bike', 'Day 3: Dubai Frame & departure'],
        '5': ['Day 1: Burj Khalifa & Frame', 'Day 2: Red Sand Desert Safari & bellydance', 'Day 3: Atlantis Waterpark', 'Day 4: Marina Yacht Ride', 'Day 5: Gold Souk Shopping & Airport out'],
        '7': ['Day 1: Dubai Mall & Burj walk', 'Day 2: Desert Dunes Safari & Quad biking', 'Day 3: Palm Jumeirah & Atlantis adventure', 'Day 4: Abu Dhabi Sheikh Zayed Mosque day trip', 'Day 5: Museum of the Future', 'Day 6: Private Yacht evening cruise', 'Day 7: Last-minute souk shopping & departure']
      }
    }
  ]
};

export default function AkroholidaysPage() {
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
    return Math.floor(calculateHighlights() * 15);
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
              <span className="text-[11px] font-bold tracking-widest text-terracotta uppercase border-b border-terracotta/40 pb-1">AkroHolidays</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-warm-charcoal font-sans leading-none">
                Bespoke Journeys. <span className="font-serif italic font-normal text-terracotta">Uncharted Routes.</span>
              </h1>
              <p className="text-[#5C524D] font-serif text-lg leading-relaxed pt-2">
                Curated leisure tours, customized regional holiday packages, loyalty explorer point rewards, and exciting luxury adventure escapes.
              </p>
          </header>
  
          {/* Destination footprint */}
          <section className="space-y-16">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#7D7067]">Exclusive Footprint</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal font-normal">Our Destination Footprint</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 font-sans">
                {[
                    {
                        region: 'Domestic Wonders',
                        destinations: ['North India: Manali, Shimla, Dharamshala, Spiti Valley, Leh Ladakh', 'South India: Munnar, Alleppey (Houseboats), Coorg, Mysore, Ooty', 'West India: Goa Beaches, Gir National Wildlife Reservation, Ranthambore Safari', 'East & Northeast: Gangtok, Darjeeling, Shillong, Cherrapunji Root Bridges']
                    },
                    {
                        region: 'International Getaways',
                        destinations: ['Southeast Asia: Bali (Indonesia), Phuket/Krabi (Thailand), Singapore, Vietnam', 'Middle East: Dubai, Abu Dhabi, Desert Safari Highlights', 'Europe Landmarks: Swiss Alps, Paris Wonders, Venice canals, Amalfi coastal lines', 'Exotic Escapes: Maldives Overwater Villas, Sri Lanka cultural trails, Japan blossoms']
                    }
                ].map(c => (
                    <div 
                      key={c.region} 
                      className="p-8 bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-colors duration-300 rounded-sm space-y-4"
                    >
                        <h4 className="text-lg font-bold text-warm-charcoal font-sans">{c.region}</h4>
                        <ul className="space-y-3.5 text-xs text-stone-605 font-serif italic leading-relaxed">
                            {c.destinations.map(d => (
                              <li key={d} className="flex items-start">
                                <span className="text-terracotta font-sans mr-2 font-bold">—</span>
                                <span>{d}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </section>

          {/* Interactive Holiday Planner & Itinerary Tool */}
          <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto font-sans">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#7D7067] font-bold font-mono">Interactive Tool</span>
              <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal">Interactive Holiday & Itinerary Planner</h2>
              <p className="text-stone-600 text-xs leading-relaxed">Select a travel zone, filter exact destinations, adjust durations, and view simulated Day-by-Day sightseeing routes instantly.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Controls */}
              <div className="lg:col-span-6 space-y-6">
                {/* Region Selector */}
                <div className="space-y-3 font-sans">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">1/ Select Target Travel Zone</label>
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

                {/* Specific Spots */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">2/ Custom Dedicated Spots</label>
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
                </div>

                {/* Duration & Group Size */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">3/ Duration Length</label>
                    <div className="flex gap-2">
                      {['3', '5', '7'].map(d => (
                        <button
                          key={d}
                          onClick={() => setDuration(d as '3' | '5' | '7')}
                          className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold rounded-sm border cursor-pointer transition-colors duration-200 ${
                            duration === d
                              ? 'bg-warm-charcoal text-white border-warm-charcoal font-bold'
                              : 'bg-[#FCFAF7] hover:border-terracotta/40 border-[#E5E0D5] text-stone-600'
                          }`}
                        >
                          {d} Days
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-[#7D7067] uppercase tracking-widest block">4/ Group Size Standing</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setPeople(Math.max(1, people - 1))}
                        className="w-10 h-10 bg-[#FCFAF7] hover:bg-warm-cream border border-[#E5E0D5] rounded-sm font-bold text-stone-700 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="font-bold text-warm-charcoal text-[11px] uppercase tracking-wider shrink-0 w-8 text-center">{people} Pax</span>
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
                <div className="flex justify-between items-start gap-4 border-b border-stone-850 pb-5">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase font-bold text-terracotta tracking-wider">Estimated Sightseeing Stops</span>
                    <div className="text-3xl font-serif italic font-extrabold text-white tracking-tight">
                      {calculateHighlights()}<span className="text-xs text-stone-400 font-sans font-medium"> Points</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase font-bold text-[#BFB7A3] tracking-widest block">Loyalty Points</span>
                    <span className="text-xs font-bold text-[#BFB7A3] flex items-center justify-end gap-1 font-mono mt-1">
                      <Award className="w-3.5 h-3.5 text-terracotta" /> +{getLoyaltyCredits()} pts
                    </span>
                  </div>
                </div>

                {/* Day-by-day sightseeing track */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#7D7067] flex items-center gap-2">
                    <Map className="w-3.5 h-3.5 text-terracotta" /> Planned {duration}-Day Curated Route
                  </h4>
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                    {activeDaysItinerary.map((it, idx) => (
                      <div key={idx} className="flex gap-3 text-xs bg-stone-900 border border-stone-850 p-3.5 rounded-sm">
                        <span className="text-terracotta font-sans font-bold shrink-0">{idx + 1}/</span>
                        <p className="text-stone-300 font-serif italic leading-relaxed">{it}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="/contact"
                    className="w-full bg-warm-charcoal border border-stone-700 text-white text-center py-3 px-4 rounded-sm flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest uppercase cursor-pointer hover:bg-terracotta hover:border-terracotta transition-all"
                  >
                    <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Request Custom Quote &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Curation Types */}
          <section className="space-y-16">
            <h2 className="text-2xl md:text-3xl font-serif italic text-warm-charcoal text-center font-normal">Travel Curation Types</h2>
            <div className="grid md:grid-cols-3 gap-6 font-sans">
                {[
                    { title: 'Leisure & Family Vacations', desc: 'Slower paced, deeply comfortable, family-focused bookings containing kids interactive zones and private sightseeing guides.' },
                    { title: 'High Adventure Safaris', desc: 'For dedicated thrill seekers: white-water rafting, mountaineering guides, deep-sea scuba dive schedules, and off-road safaris.' },
                    { title: 'Cultural & Pilgrimage Circuits', desc: 'Immersive regional heritage pathways, temple exploration loops, local gastronomic pathways, and art workshops.' }
                ].map(t => (
                    <div key={t.title} className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] hover:border-terracotta transition-colors duration-300 rounded-sm space-y-3">
                        <h4 className="font-bold text-sm text-warm-charcoal font-sans">{t.title}</h4>
                        <p className="text-stone-605 text-xs font-serif italic leading-relaxed">{t.desc}</p>
                    </div>
                ))}
            </div>
          </section>

          {/* Seasonal deals */}
          <section className="bg-[#1C1816] text-warm-cream p-8 md:p-12 border border-[#2D2623] rounded-sm space-y-10">
            <div className="space-y-2 text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta">Exclusive Tracks</span>
              <h3 className="text-2xl md:text-3xl font-serif italic text-white font-normal">Seasonal Curation & Travel Rewards</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                    { title: 'Early Bird Curation', detail: 'Secure curated luxury stays and expert local guides by confirming itineraries 90+ days in advance.' },
                    { title: 'Group Reductions', detail: 'Aligned multi-suite private villa bookings and bespoke regional menus for groups of 6+.' },
                    { title: 'Explorer Elevate Perk', detail: 'Enjoy priority lounge transfers and complimentary room level upgrades starting from your second trip.' },
                    { title: 'Referral Credits', detail: 'Earn 10,000 premium loyalty points for each verified friend you refer to our routes.' }
                ].map(p => (
                    <div key={p.title} className="bg-[#241F1D] p-6 border border-stone-800 rounded-sm space-y-3">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-terracotta">{p.title}</h4>
                        <p className="text-stone-300 text-[11px] leading-relaxed font-serif italic">{p.detail}</p>
                    </div>
                ))}
            </div>
          </section>
          
          {/* Full Cycle Service */}
          <section className="bg-[#FCFAF7] border border-[#E5E0D5] p-8 md:p-12 rounded-sm space-y-8 font-sans">
              <h3 className="text-2xl font-serif italic text-center text-warm-charcoal">Symmetrical Service Integration</h3>
              <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Pre-Trip Strategy', desc: 'Secure visa coordination assistance, comprehensive baggage checklist audits, and customized sightseeing pre-meetings.' },
                    { name: 'During-Trip Care', desc: '24/7 active coordinator support, professional regional guides, and local check-in updates.' },
                    { name: 'Post-Trip Feedback', desc: 'Itinerary evaluation logs, explorer loyalty credit allocations, and custom memory photo compilations.' }
                  ].map(s => (
                    <div key={s.name} className="p-6 bg-warm-cream/35 border border-[#E5E0D5] rounded-sm space-y-2">
                      <h4 className="font-bold text-warm-charcoal text-xs uppercase tracking-wider">{s.name}</h4>
                      <p className="text-stone-600 text-xs font-serif italic leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
              </div>
          </section>
  
          {/* Symmetrical assurance */}
          <section className="grid md:grid-cols-2 gap-8 font-sans">
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
                <h3 className="text-lg font-bold text-warm-charcoal">AkroHolidays Guarantee</h3>
                <ul className="space-y-3.5 text-xs text-stone-600 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Access to verified premium properties across 25+ countries and regional routes.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Handpicked veteran local guide guides maintaining outstanding security review ratings.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Dynamic, transparent itinerary options fully custom-tailored to your pacing.</li>
                </ul>
            </div>
            <div className="p-8 border border-[#E5E0D5] bg-[#FCFAF7] rounded-sm space-y-6">
                <h3 className="text-lg font-bold text-warm-charcoal">Target Travelers</h3>
                <ul className="space-y-3.5 text-xs text-stone-650 font-serif italic">
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Multi-generational families seeking slow and comfort-led regional holidays.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Professional cohorts looking to coordinate active mid-season workation getaways.</li>
                    <li className="flex items-start"><span className="text-terracotta mr-2 font-sans font-bold">—</span> Solo travelers aiming for completely self-contained custom schedules.</li>
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
