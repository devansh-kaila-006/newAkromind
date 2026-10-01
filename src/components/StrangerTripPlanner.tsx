import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, ShieldCheck, MapPin, Sparkles, Check, 
  HeartHandshake, Coffee, Mountain, Compass, ArrowRight, MessageSquare
} from 'lucide-react';

export interface ProspectIdea {
  id: string;
  title: string;
  region: 'Himachal Pradesh' | 'Uttarakhand';
  state: 'Himachal' | 'Uttarakhand';
  concept: string;
  idealFor: string;
  highlights: string[];
  vibe: string;
}

export const prospectIdeasData: ProspectIdea[] = [
  {
    id: 'spiti-valley',
    title: 'Spiti Valley & Trans-Himalayan Stargazing',
    region: 'Himachal Pradesh',
    state: 'Himachal',
    concept: 'Traversing trans-Himalayan high passes, visiting historic cliffside monasteries, and camping beneath clear, dark skies by Chandratal Lake.',
    idealFor: 'Astro-photographers, road-trippers, and travelers drawn to stark, high-altitude landscapes.',
    highlights: [
      'Scenic drive through Kinnaur, Tabo, and Kaza',
      'Cliffside Buddhist monasteries: Key and Dhankar',
      'Astro-camping and starry night skies near Chandratal Lake',
      'Warm local homestays and regional Himachali cuisine'
    ],
    vibe: 'High-Altitude Wonder & Starry Nights'
  },
  {
    id: 'tirthan-parvati',
    title: 'Tirthan & Parvati Valley Riverine Trails',
    region: 'Himachal Pradesh',
    state: 'Himachal',
    concept: 'Unwinding amidst dense pine forests on the edge of the Great Himalayan National Park, with riverside wooden lodges, unhurried day hikes, and bonfire gatherings.',
    idealFor: 'Slow travelers, nature lovers, and professionals seeking peaceful mountain downtime.',
    highlights: [
      'Rustic riverside wooden cottages along the Tirthan river',
      'Day trek up to Jalori Pass (10,800 ft) and serene Serolsar Lake',
      'Gentle forest walks and hidden Himalayan waterfall trails',
      'Relaxed cafe culture, evening music, and riverside bonfires'
    ],
    vibe: 'Riverside Calm & Pine-Scented Walks'
  },
  {
    id: 'chopta-tungnath',
    title: 'Chopta, Tungnath & Garhwal Alpine Meadows',
    region: 'Uttarakhand',
    state: 'Uttarakhand',
    concept: 'Trekking through rhododendron forests to high alpine meadows, camping by reflection lakes, and taking in 360° panoramic vistas of the Garhwal Himalayas.',
    idealFor: 'Trek enthusiasts, early-morning sunrise watchers, and mountain solitude seekers.',
    highlights: [
      'Scenic climb to historic Tungnath and Chandrashila Peak',
      'Camping near the reflective alpine waters of Deoriatal',
      'Expansive panoramas of Chaukhamba, Nanda Devi, and Trishul peaks',
      'Clean eco-campsites with home-style mountain meals'
    ],
    vibe: 'Alpine Ridges & 360° Mountain Panoramas'
  },
  {
    id: 'rishikesh-wilderness',
    title: 'Rishikesh & Upper Ganges River Adventure',
    region: 'Uttarakhand',
    state: 'Uttarakhand',
    concept: 'Combining exhilarating white-water rapids on the upper Ganges with quiet riverside glamping, cliff jumps, and sunset conversations by the riverbank.',
    idealFor: 'Active weekenders, water enthusiasts, and solo explorers looking for energy and community.',
    highlights: [
      'Exciting white-water river rafting through upper Ganges rapids',
      'Peaceful riverside tented camps with starry bonfire nights',
      'Neer Garh waterfall hikes and Tapovan cafe exploration',
      'Evening riverbank serenity and sunset Aarti'
    ],
    vibe: 'Active River Trails & Campfire Camaraderie'
  }
];

interface Props {
  condensed?: boolean;
}

export default function StrangerTripPlanner({ condensed = false }: Props) {
  const [selectedState, setSelectedState] = useState<'all' | 'Himachal' | 'Uttarakhand'>('all');

  const filteredProspects = prospectIdeasData.filter(item => {
    return selectedState === 'all' || item.state === selectedState;
  });

  return (
    <section className="space-y-12 font-sans">
      {/* Concept Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-terracotta" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-terracotta uppercase">
            Community Travel Concepts · Himachal Pradesh &amp; Uttarakhand
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-warm-charcoal tracking-tight">
          Stranger Trips: <span className="font-serif italic font-normal text-terracotta">Travel Solo, Never Alone.</span>
        </h2>
        <p className="text-stone-600 font-serif text-sm md:text-base leading-relaxed">
          Craving the mountains but tired of coordinating friends’ schedules? We curate small, prospective community trips mainly focused towards Himachal Pradesh and Uttarakhand — uniting like-minded solo travelers with verified stays, dependable transit, and zero forced agendas.
        </p>
      </div>

      {/* Foundational Pillars */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: ShieldCheck,
            title: '100% ID-Vetted Co-Travelers',
            desc: 'Every prospective applicant undergoes government identity check and mutual compatibility screening before joining any group.'
          },
          {
            icon: Mountain,
            title: 'Himachal & Uttarakhand Focused',
            desc: 'Specialized mountain circuits across Spiti, Parvati, Tirthan, Chopta, and Rishikesh with verified local transit and experienced drivers.'
          },
          {
            icon: HeartHandshake,
            title: 'Solo-Female Friendly Pods',
            desc: 'Dedicated women-only pods with guaranteed same-gender rooming allocations and verified boutique stays.'
          },
          {
            icon: Coffee,
            title: 'Zero Forced Agendas',
            desc: 'Balance vibrant group campfires and shared meals with quiet personal time whenever you need space to work, read, or recharge.'
          }
        ].map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div key={idx} className="bg-[#FCFAF7] border border-[#E5E0D5] p-5 rounded-sm space-y-3 hover:border-terracotta transition-colors">
              <div className="w-8 h-8 rounded-xs bg-warm-cream border border-[#E5E0D5] flex items-center justify-center text-terracotta">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-warm-charcoal">{pillar.title}</h4>
              <p className="text-[11px] text-stone-600 font-serif leading-relaxed">{pillar.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Prospective Circuit Filter Bar */}
      <div className="bg-[#FAF6EE] p-5 rounded-sm border border-[#E5E0D5] space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-terracotta">
            Prospect Ideas by Region
          </span>
          <div className="text-xs text-stone-600 font-serif italic">
            Explore prospective mountain travel concepts across Himachal Pradesh and Uttarakhand.
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E5E0D5]">
          {[
            { id: 'all', label: 'All Prospect Circuits', icon: Sparkles },
            { id: 'Himachal', label: 'Himachal Pradesh Ideas', icon: Mountain },
            { id: 'Uttarakhand', label: 'Uttarakhand Ideas', icon: Compass }
          ].map(tab => {
            const Icon = tab.icon;
            const isSel = selectedState === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedState(tab.id as any)}
                className={`px-4 py-2.5 text-[11px] font-bold rounded-xs cursor-pointer inline-flex items-center gap-1.5 transition-all ${
                  isSel 
                    ? 'bg-warm-charcoal text-white shadow-xs' 
                    : 'bg-[#FCFAF7] border border-[#E5E0D5] text-stone-700 hover:border-terracotta/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSel ? 'text-terracotta' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Prospect Idea Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProspects.map(idea => (
          <div 
            key={idea.id}
            className="bg-[#FCFAF7] border border-[#E5E0D5] hover:border-terracotta transition-all duration-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              {/* Region Tag */}
              <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-3">
                <span className="text-xs text-stone-600 font-mono font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta" />
                  {idea.region}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-terracotta font-semibold">
                  {idea.vibe}
                </span>
              </div>

              {/* Title & Concept */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-warm-charcoal group-hover:text-terracotta transition-colors">
                  {idea.title}
                </h3>
                <p className="text-xs text-stone-600 font-serif italic leading-relaxed">
                  {idea.concept}
                </p>
              </div>

              {/* Ideal For */}
              <div className="text-xs text-stone-700 bg-warm-cream/60 p-3 rounded-xs border border-[#E5E0D5]/70">
                <span className="font-bold text-warm-charcoal font-sans text-[11px] block uppercase tracking-wider mb-1">
                  Ideal For:
                </span>
                <p className="font-serif italic text-stone-600 text-[11px]">{idea.idealFor}</p>
              </div>

              {/* Prospective Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#E5E0D5]/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 font-bold block">
                  Prospective Experience Highlights:
                </span>
                <ul className="text-xs text-stone-600 space-y-1.5 font-serif">
                  {idea.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-terracotta font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="pt-4 border-t border-[#E5E0D5]">
              <Link
                to="/contact"
                className="w-full py-3 px-4 bg-warm-charcoal hover:bg-terracotta text-white text-[11px] font-bold uppercase tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Express Interest in this Circuit &rarr;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* How Prospective Cohorts Form */}
      <div className="bg-[#1C1816] text-warm-cream p-8 md:p-10 rounded-sm border border-[#2D2623] space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-terracotta font-bold tracking-widest uppercase">
            Collaborative Community Process
          </span>
          <h3 className="text-2xl md:text-3xl font-serif italic text-white">
            How Prospective Stranger Trips Work
          </h3>
          <p className="text-xs text-stone-400 font-sans max-w-2xl leading-relaxed">
            We don’t run rigid cookie-cutter bus tours. Here is how our collaborative mountain cohorts take shape:
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 pt-2">
          <div className="border border-stone-800 p-4 rounded-xs bg-[#241F1C] space-y-2">
            <span className="text-terracotta font-mono font-bold text-sm">01.</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Register Interest</h4>
            <p className="text-xs text-stone-400 font-serif leading-relaxed">
              Tell us which circuit excites you (Himachal or Uttarakhand), your ideal season, and your preferred travel style.
            </p>
          </div>

          <div className="border border-stone-800 p-4 rounded-xs bg-[#241F1C] space-y-2">
            <span className="text-terracotta font-mono font-bold text-sm">02.</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Cohort Matching</h4>
            <p className="text-xs text-stone-400 font-serif leading-relaxed">
              When a small group of verified travelers shares the same target dates and vibe, we reach out to coordinate mutual preferences.
            </p>
          </div>

          <div className="border border-stone-800 p-4 rounded-xs bg-[#241F1C] space-y-2">
            <span className="text-terracotta font-mono font-bold text-sm">03.</span>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Finalize Details</h4>
            <p className="text-xs text-stone-400 font-serif leading-relaxed">
              Once you review the finalized boutique stays, sanitized transit, and route schedule with our travel team, pack your bags and head to the hills.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
          <span className="text-xs text-stone-400 font-serif italic">
            Have a custom mountain route or dates in mind? Talk with our travel desk.
          </span>
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-terracotta hover:bg-terracotta/90 text-white text-[11px] font-bold uppercase tracking-widest rounded-xs transition-colors shrink-0"
          >
            Contact Travel Desk &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
