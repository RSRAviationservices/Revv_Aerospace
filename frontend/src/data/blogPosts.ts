export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  keywords?: string[];
  metaDescription?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
      id: '1',
      title: 'CNC Precision Engineering & Additive Manufacturing',
      slug: 'precision-manufacturing-and-cnc-machining',
      excerpt:
        'Revv Aerospace leads in high-precision manufacturing for aerospace and UAV systems — delivering mission-grade metal and polymer components with micron-level accuracy.',
      date: 'June 15, 2025',
      author: 'Revv Aerospace',
      category: 'Manufacturing',
      imageUrl: '/lovable-uploads/revv-precision-cnc.png',
      keywords: [
        'CNC machining',
        'aerospace precision manufacturing',
        'Revv Aerospace components',
        'metal fabrication',
        '3-axis CNC',
        '5-axis CNC',
        'aerospace parts India',
        'defense manufacturing',
        'UAV structure machining',
      ],
      metaDescription:
        'Explore Revv Aerospace’s advanced CNC machining and precision manufacturing capabilities for UAV and aerospace applications.',
      content: [
        {
          type: 'paragraph',
          content:
            'Revv Aerospace’s precision engineering division manufactures high-tolerance components that meet the rigorous standards of aerospace and defense industries. Every part we produce is tested for perfection, ensuring reliability in flight-critical conditions.'
        },
        { type: 'heading', content: 'Manufacturing Capabilities' },
        {
          type: 'icon-list',
          items: [
            '3-axis, 4-axis, and 5-axis CNC machining centers',
            'High-speed milling and turning for metals and polymers',
            'CMM-based dimensional verification and tolerance mapping',
            'End-to-end prototyping to production scalability'
          ]
        },
        { type: 'heading', content: 'Materials Expertise' },
        {
          type: 'table',
          tableData: {
            headers: ['Material', 'Application', 'Processing'],
            rows: [
              ['Aluminium 7075 / 6061', 'UAV frames and housings', 'CNC milling'],
              ['Titanium', 'High-stress airframe parts', 'Multi-axis machining'],
              ['Engineering Plastics', 'Lightweight payload housings', 'Precision cutting'],
              ['Carbon Steel / Inconel', 'Engine components', 'Turning & boring']
            ]
          }
        },
        { type: 'heading', content: 'Quality Assurance' },
        {
          type: 'list',
          items: [
            'In-house metrology lab for tolerance validation',
            'ISO 9001 and AS9100 process alignment',
            'Digital inspection reports for traceability',
            'Batch-level control and documentation'
          ]
        },
        { type: 'quote', content: 'Every micron matters — precision is our signature at Revv Aerospace.' }
      ]
    },
  
    // 2️⃣ Composite Materials & Lightweight Structures
    {
      id: '2',
      title: 'Composite Materials & Lightweight Structures',
      slug: 'composite-materials-and-lightweight-structures',
      excerpt:
        'Revv Aerospace pioneers composite manufacturing for UAVs and aerospace systems, combining strength, endurance, and minimal weight through advanced material engineering.',
      date: 'June 16, 2025',
      author: 'Revv Aerospace',
      category: 'Composites',
      imageUrl: '/lovable-uploads/revv-composites.png',
      keywords: [
        'aerospace composites',
        'carbon fiber UAV',
        'lightweight materials',
        'vacuum infusion',
        'resin transfer molding',
        'Revv Aerospace composites',
        'defense UAV materials',
      ],
      metaDescription:
        'Discover how Revv Aerospace designs and manufactures composite materials optimized for UAVs, defense, and aerospace performance.',
      content: [
        {
          type: 'paragraph',
          content:
            'At Revv Aerospace, we develop next-generation composite structures designed to achieve the perfect balance of lightness, rigidity, and durability. Our in-house facilities craft aerospace-grade carbon fiber components that elevate performance across all UAV platforms.'
        },
        { type: 'heading', content: 'Core Composite Capabilities' },
        {
          type: 'icon-list',
          items: [
            'Carbon and glass fiber layup under vacuum infusion',
            'Autoclave curing for maximum strength and surface finish',
            'Tooling and mold development with precision alignment',
            'Hybrid composites combining carbon and aramid fibers'
          ]
        },
        { type: 'heading', content: 'Manufacturing Methods' },
        {
          type: 'table',
          tableData: {
            headers: ['Process', 'Advantage', 'Application'],
            rows: [
              ['Vacuum Bagging', 'Consistent laminate quality', 'Wings and fuselage shells'],
              ['Resin Infusion', 'High fiber volume ratio', 'Aerodynamic panels'],
              ['Compression Molding', 'High production speed', 'Structural UAV components']
            ]
          }
        },
        { type: 'heading', content: 'Applications in Aerospace' },
        {
          type: 'list',
          items: [
            'Lightweight UAV wings, tails, and fuselages',
            'Payload housings with vibration isolation',
            'Composite arms and linkages for multirotor systems',
            'Protective radomes and enclosures'
          ]
        },
        { type: 'quote', content: 'The future of aerospace is light, strong, and smart — powered by composites engineered by Revv.' }
      ]
    },
  
    // 3️⃣ Avionics & Autonomous Flight Systems
    {
      id: '3',
      title: 'Avionics & Autonomous Flight Systems',
      slug: 'avionics-and-autonomous-flight-systems',
      excerpt:
        'Revv Aerospace designs indigenous avionics, control systems, and autonomy solutions that enable reliable, intelligent, and adaptive UAV operations.',
      date: 'June 17, 2025',
      author: 'Revv Aerospace',
      category: 'Avionics',
      imageUrl: '/lovable-uploads/revv-avionics.png',
      keywords: [
        'avionics systems',
        'flight controller',
        'autonomous UAV',
        'Revv Aerospace avionics',
        'AI navigation',
        'secure telemetry',
        'NavIC navigation',
        'redundant control systems'
      ],
      metaDescription:
        'Learn how Revv Aerospace builds next-gen avionics and flight control systems for AI-powered autonomy and secure UAV operations.',
      content: [
        {
          type: 'paragraph',
          content:
            'Our avionics division focuses on creating indigenous systems that deliver autonomy, reliability, and security. These systems are the nerve center of every UAV built by Revv Aerospace.'
        },
        { type: 'heading', content: 'Core Avionics Capabilities' },
        {
          type: 'icon-list',
          items: [
            'Redundant flight control architectures',
            'NavIC and GNSS hybrid navigation systems',
            'Encrypted telemetry beyond 70 km range',
            'Fail-safe return and geofencing features'
          ]
        },
        { type: 'heading', content: 'Autonomy Features' },
        {
          type: 'list',
          items: [
            'AI-based route planning and obstacle avoidance',
            'Dynamic mission adaptation and smart decision-making',
            'Swarm coordination for multiple UAV operations',
            'In-flight diagnostics and predictive safety systems'
          ]
        },
        { type: 'quote', content: 'At Revv, avionics aren’t just electronics — they’re intelligence in motion.' }
      ]
    },
  
    // 4️⃣ AI, Software & Mission Control
    {
      id: '4',
      title: 'AI, Software & Mission Control Systems',
      slug: 'ai-software-and-mission-control-systems',
      excerpt:
        'Revv Aerospace integrates advanced AI-driven software and mission control systems, enabling intelligent, real-time UAV operation and analysis.',
      date: 'June 18, 2025',
      author: 'Revv Aerospace',
      category: 'Software',
      imageUrl: '/lovable-uploads/revv-ai-mission-control.png',
      keywords: [
        'AI in UAVs',
        'UAV mission control',
        'Revv Aerospace AI systems',
        'autonomous flight software',
        'real-time UAV analytics',
        'UAV data processing',
      ],
      metaDescription:
        'Explore how Revv Aerospace applies artificial intelligence and software innovation to control, analyze, and optimize UAV operations.',
      content: [
        {
          type: 'paragraph',
          content:
            'From mission planning to post-flight analytics, Revv Aerospace develops comprehensive AI-powered software ecosystems that transform UAV operation into a data-driven experience.'
        },
        { type: 'heading', content: 'Mission Software Ecosystem' },
        {
          type: 'icon-list',
          items: [
            'Mission Planning Interface for autonomous routing',
            'AI-assisted flight path optimization',
            'Real-time UAV monitoring dashboard',
            'Automated flight log generation'
          ]
        },
        { type: 'heading', content: 'AI & Data Intelligence' },
        {
          type: 'list',
          items: [
            'Object detection and tracking via onboard AI',
            'Anomaly prediction through flight data analysis',
            'Image recognition for defense and mapping use cases',
            'Swarm AI for coordinated fleet missions'
          ]
        },
        { type: 'quote', content: 'Our mission software is not just control — it’s cognitive intelligence for aerial operations.' }
      ]
    },
  
    // 5️⃣ Defense & Dual-Use UAV Applications
    {
      id: '5',
      title: 'Defense & Dual-Use UAV Applications',
      slug: 'defense-and-dual-use-uav-applications',
      excerpt:
        'Revv Aerospace’s UAVs are engineered for defense and industrial missions — from reconnaissance and logistics to emergency response and mapping.',
      date: 'June 19, 2025',
      author: 'Revv Aerospace',
      category: 'Defense',
      imageUrl: '/lovable-uploads/revv-defense-uav.png',
      keywords: [
        'defense UAV',
        'dual-use drones',
        'ISR missions',
        'logistics drones',
        'aerial surveillance',
        'emergency response UAV',
        'industrial UAV India'
      ],
      metaDescription:
        'Discover how Revv Aerospace develops defense and dual-use UAV platforms for ISR, logistics, mapping, and strategic operations.',
      content: [
        {
          type: 'paragraph',
          content:
            'Our UAV systems are designed for multi-domain defense and civilian missions — delivering intelligence, mobility, and reliability in challenging terrains.'
        },
        { type: 'heading', content: 'Defense-Grade Applications' },
        {
          type: 'list',
          items: [
            'Intelligence, Surveillance, and Reconnaissance (ISR)',
            'Target detection and battlefield awareness',
            'Payload delivery in tactical environments',
            'Electronic intelligence and communication relay'
          ]
        },
        { type: 'heading', content: 'Civil & Industrial Uses' },
        {
          type: 'icon-list',
          items: [
            'Aerial mapping for infrastructure and agriculture',
            'Disaster management and relief supply missions',
            'Logistics transport for remote and high-risk areas',
            'Inspection of critical industrial assets'
          ]
        },
        { type: 'quote', content: 'Revv Aerospace UAVs empower defense and civil operations with precision, endurance, and intelligence.' }
      ]
    },
  
    // 6️⃣ Unmanned Aerial Systems (UAS) Development
    {
      id: '6',
      title: 'Unmanned Aerial Systems (UAS) Development',
      slug: 'unmanned-aerial-systems-uas-development',
      excerpt:
        'Revv Aerospace is pioneering next-generation UAV platforms and aerospace systems — from endurance-focused drones to Urban Air Mobility solutions — engineered for defense, industry, and humanitarian applications.',
      date: 'June 20, 2025',
      author: 'Revv Aerospace',
      category: 'Aerospace',
      imageUrl: '/lovable-uploads/revv-uas-development.png',
      keywords: [
        'UAV development',
        'Revv Aerospace drones',
        'Urban Air Mobility',
        'precision aerospace components',
        'Indian drone manufacturer',
        'autonomous UAV systems',
        'payload integration',
        'aerospace composites',
        'defense UAVs',
        'unmanned aerial systems'
      ],
      metaDescription:
        'Explore how Revv Aerospace designs and manufactures advanced UAV platforms, composites, avionics, and AI-driven mission systems for defense, logistics, and urban air mobility.',
      content: [
        {
          type: 'paragraph',
          content:
            'Revv Aerospace is redefining the boundaries of unmanned aerial systems (UAS) through indigenous innovation, precision engineering, and AI-enabled autonomy. From fixed-wing endurance drones to futuristic Urban Air Mobility platforms, our portfolio demonstrates India’s next era of aerospace innovation.'
        },
        { type: 'heading', content: 'Next-Generation UAV Platforms' },
        {
          type: 'icon-list',
          items: [
            'Fixed-Wing MALE UAVs (Revv 1) – Long-range reconnaissance and surveillance drones with optimized aerodynamics, high endurance, and stealth features.',
            'UAV GEV (Revv 2) – Ground Effect Vehicle UAV for high-payload, long-range marine and land operations, built with advanced composites and AI control.',
            'Flying Wing HALE UAV (Revv 3) – High-altitude, long-endurance platform for strategic defense and persistent intelligence.',
            'Custom-Built UAVs – Tailored aerial systems designed for ISR, mapping, logistics, or specialized missions.'
          ]
        },
        { type: 'heading', content: 'Urban Air Mobility (UAM)' },
        {
          type: 'paragraph',
          content:
            'Revv Aerospace is pioneering UAM platforms that will revolutionize passenger and cargo transport. These next-gen vehicles enable safe, efficient, and sustainable air mobility within cities and across regions.'
        },
        { type: 'heading', content: 'Payload & Mission Integration' },
        {
          type: 'list',
          items: [
            'Electro-Optical/Infrared Systems (EO/IR): Long-range zoom, infrared night vision, and thermal imaging.',
            'AI-Powered Target Recognition: Automated detection, tracking, and real-time analytics.',
            'Tactical Payloads: Smart ammunition delivery and defense payload systems.',
            'Logistics Payloads: Cargo hold and tether-drop systems for humanitarian and defense resupply missions.'
          ]
        },
        { type: 'heading', content: 'Advanced Composites Manufacturing' },
        {
          type: 'paragraph',
          content:
            'With in-house composite manufacturing, Revv delivers aerospace-grade lightweight structures optimized for performance and durability.'
        },
        {
          type: 'table',
          tableData: {
            headers: ['Capability', 'Process', 'Application'],
            rows: [
              ['Carbon & Glass Fiber Fabrication', 'Lightweight composite layups', 'UAV structures, aerodynamic surfaces'],
              ['Vacuum Bagging & Resin Infusion', 'High strength-to-weight ratios', 'Defense-grade aerospace panels'],
              ['Molds & Tooling', 'Precision epoxy/polyester tooling', 'Custom UAV component production']
            ]
          }
        },
        { type: 'heading', content: 'Precision Engineering & Additive Manufacturing' },
        {
          type: 'icon-list',
          items: [
            'CNC Machining – Aerospace-tolerance parts in metals and polymers.',
            'Additive Manufacturing – Lightweight, topology-optimized UAV structures.',
            'Hybrid Structures – Combining CNC and composites for mission-critical performance.',
            'On-Demand Production – Agile support for defense and aerospace industries.'
          ]
        },
        { type: 'heading', content: 'Avionics, Autonomy & Control Systems' },
        {
          type: 'list',
          items: [
            'Advanced Flight Controllers – Endurance, stability, and redundancy built in.',
            'Encrypted Long-Range Telemetry – Secure communication beyond 70 km.',
            'Indigenous Navigation – NavIC/IRNSS-based systems for strategic independence.',
            'AI-Enabled Autonomy – Swarm intelligence, smart routing, and real-time decision making.'
          ]
        },
        { type: 'heading', content: 'AI, Data & Software Solutions' },
        {
          type: 'paragraph',
          content:
            'Our UAVs come equipped with advanced mission software and onboard intelligence for data-driven operations.'
        },
        {
          type: 'list',
          items: [
            'Mission Planning Software – Smart route optimization and auto-navigation.',
            'Onboard Data Processing – Real-time analytics, mapping, and surveillance.',
            'Data Security – End-to-end encryption for sensitive operations.'
          ]
        },
        { type: 'heading', content: 'Operational Services' },
        {
          type: 'icon-list',
          items: [
            'Defense ISR missions with EO/IR and AI integration.',
            'Logistics & cargo UAVs for resupply and disaster relief.',
            'Surveying & Mapping – Precision data for infrastructure, agriculture, and geospatial industries.',
            'Meteorological UAVs – Climate and environmental monitoring with atmospheric payloads.'
          ]
        },
        { type: 'heading', content: 'Research, Development & Future Technologies' },
        {
          type: 'paragraph',
          content:
            'Revv Aerospace invests heavily in emerging aerospace technologies, building the foundation for tomorrow’s air defense and mobility.'
        },
        {
          type: 'list',
          items: [
            'Stealth UAVs – Low-observable platforms for next-generation defense.',
            'Swarm Intelligence – Coordinated UAV fleets for battlefield superiority.',
            'Urban Air Mobility – Passenger and cargo platforms for city transport.',
            'Full Indigenous Development – 100% Made-in-India aerospace systems.'
          ]
        },
        { type: 'quote', content: '⚡ Revv Aerospace is more than a UAV manufacturer — we are building the future of aerial defense, logistics, and mobility for India and the world.' }
      ]
    }
  ];

