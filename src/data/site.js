/* Central content model for the NAAD Infinity corporate site.
   Contact particulars are placeholders marked to-be-confirmed. */

export const DIVISIONS = [
  {
    id: 'event-production',
    name: 'Event Production & Shows',
    nic: 'NIC 90005 / 90009',
    short: 'Concerts, festivals and live spectacles, produced end to end.',
    description:
      'The flagship operating division of NAAD Infinity. From intimate showcases to stadium-scale festivals, the division owns the full production lifecycle — creative direction, stage, sound and light design, show calling, artist logistics and on-ground operations — delivering world-class live experiences under one accountable roof.',
    offers: [
      'Concert & festival production, concept to curtain',
      'Stage, sound, lighting and visual design',
      'Artist contracting, hospitality and tour logistics',
      'Show calling, safety and crowd operations',
    ],
    image: 'hero-arena',
  },
  {
    id: 'equipment-rental',
    name: 'Equipment Rental',
    nic: 'NIC 77309 / 77290',
    short: 'Professional AV & event gear, rented with logistics.',
    description:
      'A rental and logistics network for professional audio-visual and event hardware. Touring acts, production houses and broadcasters draw on maintained, show-ready inventory with insured transport, on-site technicians and rapid turnaround between cities.',
    offers: [
      'Line arrays, PA systems and monitoring',
      'LED walls, staging and truss structures',
      'Broadcast cameras and live-production kits',
      'Backline instruments and DJ equipment',
      'Insured intercity logistics and crew',
    ],
    image: 'backstage-production',
  },
  {
    id: 'artist-management',
    name: 'Artist Management & Curation',
    nic: 'NIC 74909 / 90001',
    short: '360° management for independent and mainstream artists.',
    description:
      'A holistic management and curation practice built to scale artists in a crowded marketplace. Strategic career planning, brand partnerships, digital distribution and creative curation are handled together — protecting intellectual property and long-term market value while opening the right commercial doors.',
    offers: [
      'Strategic career planning and release calendars',
      'Brand partnerships and sync licensing',
      'Digital distribution and audience strategy',
      'Creative curation for events and properties',
    ],
    image: 'studio-console',
  },
  {
    id: 'production-post',
    name: 'Production & Post-Production',
    nic: 'NIC 59201 / 59112',
    short: 'Studios for audio and video, tracking to final master.',
    description:
      'State-of-the-art facilities offering an end-to-end sandbox for audio and video production. Tracking, mixing and mastering sit alongside video editing, colour grading and virtual production — elite engineering talent and cutting-edge infrastructure under a single, efficient roof.',
    offers: [
      'Recording studios and live rooms',
      'Mixing and mastering suites',
      'Video editing and colour grading',
      'Virtual production stages',
    ],
    image: 'studio-console',
  },
  {
    id: 'ott',
    name: 'Music & Events OTT',
    nic: 'NIC 60100 / 60200',
    short: 'A streaming home for music and live-event programming.',
    description:
      'A dedicated over-the-top platform delivering a premium digital venue for music enthusiasts and industry insiders. Front-row access to live-event coverage, exclusive releases, artist programming, panel discussions and investigative music journalism — built for both audio and video delivery.',
    offers: [
      'Live-event streaming and coverage',
      'Exclusive music video releases',
      'Artist interviews and panel programming',
      'Music journalism and documentaries',
    ],
    image: 'conference-stage',
  },
  {
    id: 'trade-conference',
    name: 'Trade Shows & Leadership Conferences',
    nic: 'NIC 82300',
    short: 'The industry\'s exhibition floor and its boardroom.',
    description:
      'Two flagship convening properties. The interactive industry exhibition brings manufacturers, creators, tech platforms and consumers onto one tactile marketplace floor. The annual leadership conference gathers the brightest minds in entertainment to set the agenda on policy, technology and the economics of music.',
    offers: [
      'Industry exhibition with hardware and software showcases',
      'Distribution and commerce workshops',
      'Keynote addresses and data-driven panels',
      'Policy roundtables: royalties, AI, copyright',
    ],
    image: 'tradeshow-floor',
  },
  {
    id: 'academy',
    name: 'Education Academy',
    nic: 'NIC 85499 / 85500',
    short: 'Hybrid training for performers and AV technicians.',
    description:
      'A hybrid academy — online and physical classrooms — training the next generation of the industry. Performing-arts programmes for musicians sit alongside technical certification for AV engineers in production, post-production and live production, feeding talent directly into the ecosystem.',
    offers: [
      'Performing-arts and musicianship programmes',
      'AV technician certification tracks',
      'Live-production and broadcast workshops',
      'Industry mentorship and placement pathways',
    ],
    image: 'conference-stage',
  },
]

export const VENTURES = [
  {
    id: 'strings',
    name: 'STRINGS',
    tagline: 'The professional network of the music industry',
    nic: 'NIC 63120',
    status: 'live',
    url: 'https://tanmayayay.github.io/strings-web/',
    description:
      'A B2B professional networking portal and web directory for the music and live-event industry — verified portfolios, real-time collaboration, gigs and opportunities, and a multi-format newsroom across text, audio and video.',
  },
  {
    id: 'soundkart',
    name: 'SOUNDKART',
    tagline: 'Everything you need to make music',
    nic: 'NIC 47910',
    status: 'live',
    url: 'https://tanmayayay.github.io/SoundKart/',
    description:
      'Omnichannel e-commerce for professional audio and video hardware — instruments, studio equipment and pro-audio gear with genuine products, GST invoicing and pan-India fulfilment. A NAAD Infinity venture.',
  },
  {
    id: 'ticketing',
    name: 'NAAD Tickets',
    tagline: 'Live-show ticketing, engineered for the on-sale rush',
    nic: 'NIC 79900',
    status: 'development',
    url: null,
    description:
      'A high-performance ticketing e-commerce portal connecting fans to live experiences — reserved seating, secure digital entry and fraud-resistant checkout for festivals, theatre, sport and comedy. Currently in development.',
  },
]

/* 10-activity grid for the home page: 7 divisions + 3 ventures */
export const ACTIVITIES = [
  ...DIVISIONS.map((d) => ({ name: d.name, nic: d.nic, kind: 'division', href: '/businesses' })),
  ...VENTURES.map((v) => ({
    name: v.name,
    nic: v.nic,
    kind: 'venture',
    href: '/ventures',
    status: v.status,
  })),
]

/* Phase-wise rollout from the founder's vision document */
export const PHASES = [
  {
    phase: 'Phase One',
    when: 'Year 1 — Foundation',
    items: [
      'Professional networking portal & web directory (STRINGS)',
      'Basic music events & curated live properties',
      'Artist management and curation practice',
      'Turnkey event management services',
    ],
  },
  {
    phase: 'Phase Two',
    when: 'Year 2 — Scale',
    items: [
      'Music industry leadership conference',
      'Interactive industry exhibition & tradeshow',
      'Live-show ticketing e-commerce portal',
      'Equipment sale & rental e-commerce network',
    ],
  },
  {
    phase: 'Phase Three',
    when: 'Year 3 — Depth',
    items: [
      'Advanced music events & flagship properties',
      'Production & post-production facilities',
      'Music & events OTT streaming platform',
      'Education academy (hybrid AV & performing arts)',
    ],
  },
]

/* Sample newsroom posts — clearly labelled as sample content */
export const NEWS = [
  {
    id: 'ecosystem-unveiled',
    category: 'Corporate',
    date: 'September 2026',
    title: 'NAAD Infinity unveils its 360-degree music & live-entertainment ecosystem',
    excerpt:
      'The company lays out eleven pillars spanning digital media, physical production, commerce, education and live experiences — one infrastructure for the full industry lifecycle.',
  },
  {
    id: 'strings-launch',
    category: 'Ventures',
    date: 'September 2026',
    title: 'STRINGS opens its doors: the networking portal for music professionals',
    excerpt:
      'Verified portfolios, gigs and opportunities, community groups and a live music newsroom — the industry\'s digital town square is now live.',
  },
  {
    id: 'soundkart-launch',
    category: 'Ventures',
    date: 'September 2026',
    title: 'SOUNDKART goes live: e-commerce for professional audio hardware',
    excerpt:
      'Instruments, studio equipment and pro-audio gear with genuine products, GST invoicing and pan-India fulfilment — commerce for the creator economy.',
  },
  {
    id: 'rollout-blueprint',
    category: 'Insights',
    date: 'August 2026',
    title: 'Inside the Y1–Y3 rollout: phasing an ecosystem build',
    excerpt:
      'Why NAAD Infinity sequences networking and live events first, scales through ticketing and rental, then deepens into studios, OTT and education.',
  },
  {
    id: 'supply-chain',
    category: 'Insights',
    date: 'August 2026',
    title: 'The live-entertainment supply chain needs a 360° operator',
    excerpt:
      'Fragmented vendors, idle inventory and unbanked talent — the structural gaps a unified ecosystem is designed to close.',
  },
  {
    id: 'conference-2027',
    category: 'Events',
    date: 'August 2026',
    title: 'Inaugural NAAD leadership conference announced',
    excerpt:
      'Data-driven panels, keynote addresses and policy roundtables on streaming royalties, AI and copyright — dates and venue to be confirmed.',
  },
]

/* Placeholder open roles — illustrative, to be confirmed */
export const ROLES = [
  {
    title: 'Head of Event Production',
    dept: 'Event Production & Shows',
    note: 'Owns concept-to-curtain delivery across concerts and festivals. Role description to follow.',
  },
  {
    title: 'Studio Engineer — Recording & Mix',
    dept: 'Production & Post-Production',
    note: 'Tracking, mixing and mastering across music and broadcast sessions. Role description to follow.',
  },
  {
    title: 'Artist Relations Manager',
    dept: 'Artist Management & Curation',
    note: 'Manages the managed-artist roster and curation pipeline. Role description to follow.',
  },
  {
    title: 'AV Logistics Coordinator',
    dept: 'Equipment Rental',
    note: 'Schedules inventory, crew and intercity transport for rental deployments. Role description to follow.',
  },
  {
    title: 'Full-Stack Engineer',
    dept: 'Digital Ventures',
    note: 'Builds across STRINGS, SOUNDKART and the ticketing platform. Role description to follow.',
  },
]

export const VALUES = [
  {
    title: 'The lifecycle, whole',
    text: 'We operate across the full arc — from a rehearsal room to a stadium stage — because value leaks at every handoff we don\'t own.',
  },
  {
    title: 'Creators first',
    text: 'Artists, technicians and promoters are the industry. Our infrastructure exists to make their work viable and visible.',
  },
  {
    title: 'Professional rigour',
    text: 'Show-ready equipment, insured logistics, verified data. The unglamorous disciplines are the product.',
  },
  {
    title: 'India, then the world',
    text: 'Built for India\'s stages, studios and screens first — with an architecture that travels.',
  },
]

/* Placeholder contact particulars — to be confirmed by the founder */
export const CONTACT = {
  email: 'contact@naadinfinity.in', // placeholder — to be confirmed
  office: 'Registered office — to be announced',
  whatsapp: null, // to be announced
}
