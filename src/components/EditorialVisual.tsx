import React, { useState } from 'react';

export type VisualType = 
  | 'hero' 
  | 'akrotution' 
  | 'akroplacement' 
  | 'akroholidays' 
  | 'akromind' 
  | 'about' 
  | 'whyus'
  | 'map';

interface EditorialVisualProps {
  type: VisualType;
  title?: string;
  caption?: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '21:9';
  className?: string;
  badge?: string;
}

export default function EditorialVisual({
  type,
  title,
  caption,
  aspectRatio = '16:9',
  className = '',
  badge
}: EditorialVisualProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const aspectClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
    '21:9': 'aspect-[21/9]'
  }[aspectRatio];

  const renderIllustration = () => {
    switch (type) {
      case 'hero':
        return (
          <svg viewBox="0 0 1200 600" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF4EB" />
                <stop offset="50%" stopColor="#F2E9DE" />
                <stop offset="100%" stopColor="#E9DDD0" />
              </linearGradient>
              <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B84E34" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#B84E34" stopOpacity="0" />
              </linearGradient>
              <pattern id="swissGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D9D0C3" strokeWidth="0.75" strokeOpacity="0.6" />
              </pattern>
            </defs>
            {/* Background Canvas */}
            <rect width="1200" height="600" fill="url(#heroBg)" />
            <rect width="1200" height="600" fill="url(#swissGrid)" />
            
            {/* Ambient Sun Circle */}
            <circle cx="880" cy="220" r="280" fill="url(#sunGlow)" />
            <circle cx="880" cy="220" r="140" stroke="#B84E34" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.35" />

            {/* Architectural Grid Lines & Horizon */}
            <line x1="80" y1="420" x2="1120" y2="420" stroke="#1C1816" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="80" y1="422" x2="1120" y2="422" stroke="#B84E34" strokeWidth="0.5" strokeOpacity="0.4" />
            <line x1="420" y1="80" x2="420" y2="520" stroke="#1C1816" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.3" />
            <line x1="820" y1="80" x2="820" y2="520" stroke="#1C1816" strokeWidth="0.75" strokeDasharray="4 6" strokeOpacity="0.3" />

            {/* Architectural Study Pavilion Geometry */}
            <g transform="translate(180, 160)">
              {/* Floor Plane Perspective */}
              <polygon points="120,260 580,260 520,340 40,340" fill="#E8DECة" fillOpacity="0.6" stroke="#C4B8A6" strokeWidth="1" />
              {/* Table / Desk Top */}
              <polygon points="180,210 520,210 460,260 140,260" fill="#FCFAF7" stroke="#1C1816" strokeWidth="1.2" />
              {/* Desk Legs */}
              <line x1="140" y1="260" x2="140" y2="330" stroke="#1C1816" strokeWidth="1.5" />
              <line x1="460" y1="260" x2="460" y2="330" stroke="#1C1816" strokeWidth="1.5" />
              <line x1="520" y1="210" x2="520" y2="280" stroke="#1C1816" strokeWidth="1.2" strokeOpacity="0.5" />

              {/* Minimalist Books & Blueprint Scrolls */}
              <rect x="220" y="222" width="70" height="24" rx="1" fill="#B84E34" fillOpacity="0.85" stroke="#9E3E26" strokeWidth="0.8" />
              <rect x="226" y="217" width="62" height="6" rx="0.5" fill="#FAF6EE" stroke="#1C1816" strokeWidth="0.6" />
              <line x1="230" y1="234" x2="280" y2="234" stroke="#FAF6EE" strokeWidth="0.8" />
              
              <rect x="330" y="224" width="80" height="18" rx="1" fill="#241F1D" stroke="#1C1816" strokeWidth="0.8" />
              <line x1="340" y1="233" x2="395" y2="233" stroke="#FAF6EE" strokeWidth="0.8" strokeOpacity="0.7" />

              {/* Minimalist Desk Lamp Angle */}
              <path d="M 440 230 L 460 170 L 430 150" fill="none" stroke="#1C1816" strokeWidth="2" strokeLinecap="round" />
              <path d="M 418 142 L 442 158 L 432 170 Z" fill="#B84E34" stroke="#1C1816" strokeWidth="1" />
              <line x1="425" y1="165" x2="390" y2="225" stroke="#FAF6EE" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
            </g>

            {/* Swiss Typography & Latitudinal Coordinate Elements */}
            <text x="100" y="110" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.25em" fill="#B84E34">
              NEW AKROMIND ARCHITECTURE / 2026
            </text>
            <text x="100" y="130" fontFamily="'Lora', serif" fontStyle="italic" fontSize="18" fill="#1C1816" fillOpacity="0.75">
              The Four Verticals Synthesis
            </text>
            <text x="100" y="470" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#7D7067" letterSpacing="0.1em">
              30°54'N · 75°51'E // LUDHIANA CORE // SYMMETRICAL GROWTH BLUEPRINT
            </text>
            <text x="1020" y="470" textAnchor="end" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#B84E34" letterSpacing="0.1em">
              SEC. 01 : MULTI-DIMENSIONAL
            </text>

            {/* Modern Subtle Concentric Alignment Marks */}
            <circle cx="960" cy="360" r="48" stroke="#1C1816" strokeWidth="0.8" strokeOpacity="0.2" />
            <circle cx="960" cy="360" r="24" stroke="#B84E34" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="960" y1="300" x2="960" y2="420" stroke="#1C1816" strokeWidth="0.6" strokeOpacity="0.25" />
            <line x1="900" y1="360" x2="1020" y2="360" stroke="#1C1816" strokeWidth="0.6" strokeOpacity="0.25" />
            <circle cx="960" cy="360" r="3" fill="#B84E34" />
          </svg>
        );

      case 'akrotution':
        return (
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tutionBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF7F2" />
                <stop offset="100%" stopColor="#ECE4D8" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#tutionBg)" />
            
            {/* Mathematical Grid & Geometry Canvas */}
            <g stroke="#D4C9BC" strokeWidth="0.75" strokeOpacity="0.6">
              {[...Array(11)].map((_, i) => (
                <line key={`th-${i}`} x1="60" y1={80 + i * 44} x2="740" y2={80 + i * 44} />
              ))}
              {[...Array(16)].map((_, i) => (
                <line key={`tv-${i}`} x1={60 + i * 45} y1="80" x2={60 + i * 45} y2="520" />
              ))}
            </g>

            {/* Geometric Theorem & Calculus Curve Overlay */}
            <path d="M 120 480 Q 260 120 450 360 T 700 160" fill="none" stroke="#B84E34" strokeWidth="2.5" />
            <path d="M 120 480 Q 260 120 450 360 T 700 160 L 700 520 L 120 520 Z" fill="#B84E34" fillOpacity="0.06" />

            {/* Triangle & Geometric Construction */}
            <polygon points="280,180 500,420 180,420" fill="none" stroke="#1C1816" strokeWidth="1.5" />
            <circle cx="280" cy="180" r="4" fill="#B84E34" />
            <circle cx="500" cy="420" r="4" fill="#1C1816" />
            <circle cx="180" cy="420" r="4" fill="#1C1816" />
            
            {/* Compass Arc */}
            <path d="M 280 240 A 60 60 0 0 1 330 215" fill="none" stroke="#B84E34" strokeWidth="1.2" strokeDasharray="3 3" />
            <text x="340" y="210" fontFamily="'Lora', serif" fontStyle="italic" fontSize="13" fill="#B84E34">θ = 54°</text>

            {/* Pedagogical Formula Notes */}
            <g transform="translate(480, 120)" fontFamily="'Lora', serif" fill="#1C1816">
              <rect x="-20" y="-20" width="240" height="130" fill="#FCFAF7" stroke="#E5E0D5" strokeWidth="1" />
              <text x="0" y="15" fontSize="14" fontStyle="italic" fontWeight="600">f(x) = ∫ [2x + sin(x)] dx</text>
              <text x="0" y="45" fontSize="12" fill="#7D7067" fontStyle="normal">E = mc² · ΔS ≥ 0</text>
              <text x="0" y="75" fontSize="11" fontFamily="'JetBrains Mono', monospace" fill="#B84E34">Syllabus: CBSE / JEE Advanced</text>
              <text x="0" y="95" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fill="#7D7067">Mastery SLA: &lt;20 min doubt desk</text>
            </g>

            {/* Editorial Footer Tag */}
            <text x="60" y="555" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.18em" fill="#1C1816">
              AKROTUTION ACADEMIC ATELIER · RIGOROUS STEM & HUMANITIES
            </text>
          </svg>
        );

      case 'akroplacement':
        return (
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="placeBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E1917" />
                <stop offset="100%" stopColor="#141110" />
              </linearGradient>
              <linearGradient id="terracottaBar" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#B84E34" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#B84E34" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#placeBg)" />
            
            {/* Subtle Matrix Blueprint Grid */}
            <g stroke="#2C2420" strokeWidth="0.75">
              {[...Array(12)].map((_, i) => (
                <line key={`ph-${i}`} x1="60" y1={60 + i * 42} x2="740" y2={60 + i * 42} />
              ))}
              {[...Array(16)].map((_, i) => (
                <line key={`pv-${i}`} x1={60 + i * 45} y1="60" x2={60 + i * 45} y2="520" />
              ))}
            </g>

            {/* Ascending Career Velocity Trajectory Histogram */}
            <g transform="translate(100, 200)">
              {/* Pillar 1: Fresh Graduate */}
              <rect x="40" y="180" width="70" height="120" fill="#322B27" stroke="#4A3F3A" strokeWidth="1" />
              <text x="75" y="165" textAnchor="middle" fill="#A89F95" fontFamily="'JetBrains Mono', monospace" fontSize="11">₹6 LPA</text>
              <text x="75" y="325" textAnchor="middle" fill="#7D7067" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.08em">LEVEL 01</text>

              {/* Pillar 2: Core Acceleration */}
              <rect x="180" y="120" width="70" height="180" fill="#443934" stroke="#5E4E47" strokeWidth="1" />
              <text x="215" y="105" textAnchor="middle" fill="#C4B7AA" fontFamily="'JetBrains Mono', monospace" fontSize="11">₹14 LPA</text>
              <text x="215" y="325" textAnchor="middle" fill="#7D7067" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.08em">LEVEL 02</text>

              {/* Pillar 3: Lead Architect */}
              <rect x="320" y="60" width="70" height="240" fill="#5A4740" stroke="#7A6056" strokeWidth="1" />
              <text x="355" y="45" textAnchor="middle" fill="#EADCCF" fontFamily="'JetBrains Mono', monospace" fontSize="11">₹26 LPA</text>
              <text x="355" y="325" textAnchor="middle" fill="#7D7067" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.08em">LEVEL 03</text>

              {/* Pillar 4: Executive Tier */}
              <rect x="460" y="0" width="70" height="300" fill="url(#terracottaBar)" stroke="#B84E34" strokeWidth="1.2" />
              <text x="495" y="-15" textAnchor="middle" fill="#B84E34" fontFamily="'JetBrains Mono', monospace" fontSize="13" fontWeight="bold">₹42+ LPA</text>
              <text x="495" y="325" textAnchor="middle" fill="#B84E34" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em">EXECUTIVE</text>

              {/* Velocity Arc */}
              <path d="M 75 160 Q 260 100 495 -10" fill="none" stroke="#FAF6EE" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.8" />
              <circle cx="495" cy="-10" r="5" fill="#FAF6EE" />
            </g>

            {/* Recruiter Corporate Grid Badge */}
            <g transform="translate(80, 80)">
              <text x="0" y="0" fill="#FAF6EE" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.2em">
                AKROPLACEMENT PIPELINE ENGINE
              </text>
              <text x="0" y="24" fill="#A89F95" fontFamily="'Lora', serif" fontStyle="italic" fontSize="14">
                500+ Hiring Partners · 78% 90-Day Placement Ratio
              </text>
            </g>
          </svg>
        );

      case 'akroholidays':
        return (
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DFD3C3" />
                <stop offset="45%" stopColor="#EDE3D5" />
                <stop offset="100%" stopColor="#F9F5EE" />
              </linearGradient>
              <linearGradient id="peakBack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C8BCAE" />
                <stop offset="100%" stopColor="#AE9F8F" />
              </linearGradient>
              <linearGradient id="peakFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A3F3A" />
                <stop offset="100%" stopColor="#1C1816" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2D7C8" />
                <stop offset="100%" stopColor="#C4B6A3" />
              </linearGradient>
            </defs>
            {/* Sky backdrop */}
            <rect width="800" height="600" fill="url(#skyGrad)" />

            {/* Sun / Solar Disk */}
            <circle cx="560" cy="180" r="90" fill="#B84E34" fillOpacity="0.15" />
            <circle cx="560" cy="180" r="60" fill="#B84E34" fillOpacity="0.25" />

            {/* Distant Mountain Peaks */}
            <polygon points="120,380 280,180 440,380" fill="url(#peakBack)" opacity="0.6" />
            <polygon points="360,380 520,140 680,380" fill="url(#peakBack)" opacity="0.5" />

            {/* Foreground Sharp Alpine Ridge */}
            <polygon points="-40,420 180,240 380,420" fill="url(#peakFront)" />
            <polygon points="280,420 460,200 640,420" fill="#2E2724" />
            <polygon points="520,420 680,280 840,420" fill="url(#peakFront)" />

            {/* Alpine Glacial Snow Accents */}
            <polygon points="180,240 150,280 210,280" fill="#FAF6EE" fillOpacity="0.9" />
            <polygon points="460,200 430,245 490,245" fill="#FAF6EE" fillOpacity="0.9" />
            <polygon points="680,280 655,315 705,315" fill="#FAF6EE" fillOpacity="0.9" />

            {/* Alpine Lake Reflection Plane */}
            <rect y="420" width="800" height="180" fill="url(#waterGrad)" />
            <line x1="0" y1="420" x2="800" y2="420" stroke="#1C1816" strokeWidth="1" />

            {/* Water Ripple Reflections */}
            <ellipse cx="280" cy="460" rx="140" ry="4" fill="#FAF6EE" fillOpacity="0.4" />
            <ellipse cx="480" cy="490" rx="180" ry="5" fill="#FAF6EE" fillOpacity="0.3" />
            <ellipse cx="360" cy="530" rx="110" ry="3" fill="#FAF6EE" fillOpacity="0.2" />

            {/* Topographical Compass & Waypoint Overlay */}
            <g transform="translate(100, 80)">
              <circle cx="40" cy="40" r="32" stroke="#B84E34" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="40,16 46,38 40,34 34,38" fill="#B84E34" />
              <polygon points="40,64 46,42 40,46 34,42" fill="#7D7067" />
              <text x="85" y="36" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.18em" fill="#1C1816">
                AKROHOLIDAYS CURATED EXPEDITIONS
              </text>
              <text x="85" y="56" fontFamily="'Lora', serif" fontStyle="italic" fontSize="13" fill="#7D7067">
                50+ Destinations · Verified Stays · Custom Rewards
              </text>
            </g>
          </svg>
        );

      case 'akromind':
        return (
          <svg viewBox="0 0 800 600" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mindBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF6EE" />
                <stop offset="50%" stopColor="#F5ECE1" />
                <stop offset="100%" stopColor="#EADBCC" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#mindBg)" />

            {/* Concentric Cognitive Harmony Rings */}
            <g transform="translate(400, 300)">
              <circle cx="0" cy="0" r="220" stroke="#C4B8A7" strokeWidth="1" strokeDasharray="4 6" strokeOpacity="0.6" />
              <circle cx="0" cy="0" r="170" stroke="#B84E34" strokeWidth="1.2" strokeOpacity="0.35" />
              <circle cx="0" cy="0" r="120" stroke="#1C1816" strokeWidth="1" strokeOpacity="0.25" />
              <circle cx="0" cy="0" r="70" stroke="#B84E34" strokeWidth="1.5" strokeOpacity="0.7" />
              <circle cx="0" cy="0" r="16" fill="#B84E34" />

              {/* Cardinal Equilibrium Rays */}
              <line x1="-240" y1="0" x2="240" y2="0" stroke="#1C1816" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="0" y1="-240" x2="0" y2="240" stroke="#1C1816" strokeWidth="0.75" strokeOpacity="0.3" />
              <line x1="-160" y1="-160" x2="160" y2="160" stroke="#B84E34" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="-160" y1="160" x2="160" y2="-160" stroke="#B84E34" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="3 3" />

              {/* Core Counseling Tenet Nodes */}
              <circle cx="0" cy="-170" r="5" fill="#1C1816" />
              <text x="14" y="-166" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.1em" fill="#1C1816">CLARITY</text>
              
              <circle cx="170" cy="0" r="5" fill="#B84E34" />
              <text x="180" y="4" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.1em" fill="#B84E34">ALIGNMENT</text>
              
              <circle cx="0" cy="170" r="5" fill="#1C1816" />
              <text x="14" y="174" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.1em" fill="#1C1816">RESILIENCE</text>
              
              <circle cx="-170" cy="0" r="5" fill="#B84E34" />
              <text x="-236" y="4" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.1em" fill="#B84E34">AGENCY</text>
            </g>

            {/* Editorial Title Block */}
            <g transform="translate(60, 60)">
              <text x="0" y="20" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.2em" fill="#B84E34">
                AKROMIND COGNITIVE ATELIER
              </text>
              <text x="0" y="44" fontFamily="'Lora', serif" fontStyle="italic" fontSize="15" fill="#1C1816">
                Empathy-Led Counseling & Behavioral Remodeling
              </text>
            </g>

            <text x="60" y="555" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#7D7067" letterSpacing="0.08em">
              CONFIDENTIAL PROTOCOL · ADOLESCENT & PARENT MEDIATION · FOUNDER COUNSELING
            </text>
          </svg>
        );

      case 'about':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aboutBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCFAF7" />
                <stop offset="100%" stopColor="#F2ECE4" />
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#aboutBg)" />
            
            {/* Timeline Horizon */}
            <line x1="80" y1="250" x2="720" y2="250" stroke="#1C1816" strokeWidth="1.5" />

            {/* Milestones Nodes */}
            {[
              { year: '2023', label: 'GENESIS CONSULTANCY', x: 180, detail: 'Diagnostic Stream Guidance' },
              { year: '2024', label: 'TUTION & PLACEMENT', x: 400, detail: 'Integrated Dual Vertical' },
              { year: '2025', label: 'HOLIDAYS & REWARDS', x: 620, detail: 'Curated World Circuits' }
            ].map(m => (
              <g key={m.year} transform={`translate(${m.x}, 250)`}>
                <circle cx="0" cy="0" r="8" fill="#FCFAF7" stroke="#B84E34" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="3" fill="#B84E34" />
                
                {/* Year tag above */}
                <text x="0" y="-30" textAnchor="middle" fontFamily="'Lora', serif" fontStyle="italic" fontSize="22" fontWeight="600" fill="#1C1816">
                  {m.year}
                </text>
                
                {/* Label and detail below */}
                <text x="0" y="32" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.1em" fill="#B84E34">
                  {m.label}
                </text>
                <text x="0" y="50" textAnchor="middle" fontFamily="'Lora', serif" fontStyle="italic" fontSize="12" fill="#7D7067">
                  {m.detail}
                </text>
              </g>
            ))}

            <text x="80" y="90" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.2em" fill="#7D7067">
              INSTITUTIONAL EVOLUTION BLUEPRINT
            </text>
          </svg>
        );

      case 'whyus':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="whyBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1C1816" />
                <stop offset="100%" stopColor="#251F1D" />
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="url(#whyBg)" />

            {/* Symmetrical Four-Quadrant Cross */}
            <line x1="400" y1="60" x2="400" y2="440" stroke="#3D332E" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="80" y1="250" x2="720" y2="250" stroke="#3D332E" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="400" cy="250" r="120" stroke="#B84E34" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="400" cy="250" r="6" fill="#B84E34" />

            {/* Quadrant 1: Mind */}
            <g transform="translate(240, 150)">
              <text x="0" y="0" textAnchor="middle" fill="#FAF6EE" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.1em">01. AKROMIND</text>
              <text x="0" y="20" textAnchor="middle" fill="#A89F95" fontFamily="'Lora', serif" fontStyle="italic" fontSize="11">Cognitive Foundation</text>
            </g>

            {/* Quadrant 2: Tution */}
            <g transform="translate(560, 150)">
              <text x="0" y="0" textAnchor="middle" fill="#FAF6EE" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.1em">02. AKROTUTION</text>
              <text x="0" y="20" textAnchor="middle" fill="#A89F95" fontFamily="'Lora', serif" fontStyle="italic" fontSize="11">Academic Rigor</text>
            </g>

            {/* Quadrant 3: Placement */}
            <g transform="translate(240, 350)">
              <text x="0" y="0" textAnchor="middle" fill="#FAF6EE" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.1em">03. AKROPLACEMENT</text>
              <text x="0" y="20" textAnchor="middle" fill="#A89F95" fontFamily="'Lora', serif" fontStyle="italic" fontSize="11">Career Transitions</text>
            </g>

            {/* Quadrant 4: Holidays */}
            <g transform="translate(560, 350)">
              <text x="0" y="0" textAnchor="middle" fill="#FAF6EE" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.1em">04. AKROHOLIDAYS</text>
              <text x="0" y="20" textAnchor="middle" fill="#A89F95" fontFamily="'Lora', serif" fontStyle="italic" fontSize="11">Restorative Exploration</text>
            </g>

            {/* Central Unification Motto */}
            <text x="400" y="246" textAnchor="middle" fill="#B84E34" fontFamily="'Lora', serif" fontStyle="italic" fontSize="13">
              One
            </text>
            <text x="400" y="262" textAnchor="middle" fill="#B84E34" fontFamily="'Lora', serif" fontStyle="italic" fontSize="13">
              Ecosystem
            </text>
          </svg>
        );

      case 'map':
      default:
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" fill="#FAF7F2" />
            <line x1="80" y1="250" x2="720" y2="250" stroke="#C4B8A7" strokeWidth="1" />
            <circle cx="400" cy="250" r="100" stroke="#B84E34" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <figure className={`border border-[#E5E0D5] bg-[#FCFAF7] overflow-hidden rounded-sm relative group ${className}`}>
      {/* Visual Canvas Container */}
      <div className={`w-full ${aspectClass} relative overflow-hidden bg-[#FAF6EE]`}>
        {renderIllustration()}

        {/* Minimalist Top Badge if provided */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] font-bold tracking-widest uppercase text-terracotta bg-[#FCFAF7]/95 px-3 py-1 border border-[#E5E0D5] rounded-xs shadow-xs font-sans">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Optional Editorial Title & Caption */}
      {(title || caption) && (
        <figcaption className="p-4 border-t border-[#E5E0D5] bg-[#FCFAF7] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
          {title && (
            <span className="font-bold text-warm-charcoal tracking-tight font-sans uppercase text-[11px]">
              {title}
            </span>
          )}
          {caption && (
            <span className="text-stone-500 font-serif italic text-[12px]">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
