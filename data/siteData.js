export const siteData = {
  company: {
    name: "CONSTRUCTION",
    tagline: "WordPress Theme",
    phone: "+1 (818) 23 45 678",
    email: "info@construction-demo.com",
    address: "123 Construction Ave, Building 4, Suite 100",
    workingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
    socials: [
      { name: "Facebook", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Linkedin", href: "#" },
    ],
    footerAbout:
      "A company is any entity that engages in business. Companies can be structured in different ways. For example, your company can be a sole proprietorship, a partnership, or a corporation.",
    copyright: "© 2026 XTRA, Powered by WordPress",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/#process" },
    { label: "Projects", href: "/#projects" },
    {
      label: "Pages",
      href: "#",
      children: [
        { label: "Shop", href: "/shop" },
        { label: "Cart", href: "/cart" },
        { label: "My account", href: "/my-account" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  heroSlides: [
    {
      id: 1,
      tag: "Why choose us?",
      title: "START NEW PROJECTS",
      subtitle:
        "Don’t get framed by the competition, trust our solid reputation.",
      bgImage: "/assets/service-1.jpg",
      primaryCta: { label: "Free Consultation", href: "#quote" },
      secondaryCta: { label: "Learn More", href: "#about" },
    },
    {
      id: 2,
      tag: "Committed to Excellence",
      title: "WE'LL GET IT DONE, LIKE US THERE ARE NONE",
      subtitle:
        "Committed to superior quality and results on every residential and industrial build.",
      bgImage: "/assets/service-3.jpg",
      primaryCta: { label: "Request a Quote", href: "#quote" },
      secondaryCta: { label: "Our Services", href: "#services" },
    },
  ],

  featureCards: [
    {
      id: "feature-1",
      title: "Building Engineering",
      description:
        "Comprehensive structural engineering, precision planning, and architectural guidance tailored to commercial and domestic developments.",
      icon: "Building2",
      badge: "01",
    },
    {
      id: "feature-2",
      title: "Safety First",
      description:
        "Zero-compromise compliance with international safety benchmarks, rigorous hazard assessments, and modern protective protocols.",
      icon: "ShieldCheck",
      badge: "02",
    },
    {
      id: "feature-3",
      title: "Road Construction",
      description:
        "Heavy-duty asphalt paving, soil stabilization, highway expansion, and municipal infrastructure built for longevity and durability.",
      icon: "HardHat",
      badge: "03",
    },
  ],

  about: {
    tag: "ABOUT",
    subtitle: "ABOUT OUR COMPANY",
    title: "Always dedicated and devoted",
    description:
      "Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored. We provide world-class construction and engineering services rooted in over 25 years of excellence and client satisfaction.",
    points: [
      "Certified licensed engineers and master tradesmen on site",
      "Strict adherence to environmental and local municipal building codes",
      "Transparent project timelines with real-time milestone tracking",
      "Turnkey solutions from initial soil test to final structural handover",
    ],
    experienceYears: "25+",
    experienceText: "Years of Master Construction & Development",
    image: "/assets/about-company.jpg",
    ctaText: "Read More",
  },

  services: {
    tag: "SERVICES",
    subtitle: "WHAT WE CAN DO FOR YOU",
    title: "Our construction services",
    items: [
      {
        id: "serv-1",
        title: "Building",
        description:
          "A building, or edifice, is a structure with a roof and walls standing. We specialize in residential homes, modern office towers, and industrial facilities.",
        icon: "/assets/s1.png",
        bgImage: "/assets/service-1.jpg",
        linkText: "Learn More ...",
      },
      {
        id: "serv-2",
        title: "Road Construction",
        description:
          "Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving, and durable pavement markings.",
        icon: "/assets/s2.png",
        bgImage: "/assets/service-2.jpg",
        linkText: "Learn More ...",
      },
      {
        id: "serv-3",
        title: "Maintenance",
        description:
          "All assigned responsibilities related to preventative maintenance mode, restorative structural repairs, retrofitting, and facility upkeep.",
        icon: "/assets/s3.png",
        bgImage: "/assets/service-3.jpg",
        linkText: "Learn More ...",
      },
    ],
    banner: {
      headline: "Building a dream shouldn’t be a nightmare!",
      buttonText: "Free Consultation",
      link: "#quote",
    },
  },

  process: {
    tag: "HOW?",
    subtitle: "PROCESS OF CONSTRUCTION",
    title: "How it works in construction?",
    description:
      "Slogan creation for your construction company is crucial for the overall branding. Here is our proven 3-phase execution framework guaranteeing timely delivery.",
    image: "/assets/process.jpg",
    steps: [
      {
        number: "01",
        title: "Agency / Bidding",
        text: "Ensure design documents and estimation accuracy through detailed feasibility and pre-construction audits.",
      },
      {
        number: "02",
        title: "Construction",
        text: "Groundwork, heavy equipment deployment, and foundational build adhering to stringent engineering standards.",
      },
      {
        number: "03",
        title: "Project Execution",
        text: "Structural inspection, interior finishing, electrical/plumbing testing, and on-time client handover.",
      },
    ],
  },

  projects: {
    tag: "SERVICES",
    subtitle: "WE ARE PROFESSIONAL",
    title: "Our latest projects",
    categories: ["All", "Building", "Construction", "Renovation", "Road Construction"],
    items: [
      {
        id: 1,
        title: "Riverview Green Building",
        categories: ["Building", "Road Construction"],
        image: "/assets/personal_gift-1-600x600.jpg",
      },
      {
        id: 2,
        title: "The Langham Hotel",
        categories: ["Building", "Construction"],
        image: "/assets/tick_tock-1-1-600x600.jpg",
      },
      {
        id: 3,
        title: "Villa Rustica Renovation",
        categories: ["Construction", "Renovation"],
        image: "/assets/portfolio7-1-600x600.jpg",
      },
      {
        id: 4,
        title: "Land Rustica Renovation",
        categories: ["Renovation", "Road Construction"],
        image: "/assets/portfolio10-1-600x600.jpg",
      },
      {
        id: 5,
        title: "Kitchen And Living Room",
        categories: ["Building"],
        image: "/assets/portfolio3-1-600x600.jpg",
      },
      {
        id: 6,
        title: "House Under The Palms",
        categories: ["Renovation"],
        image: "/assets/portfolio6-1-600x600.jpg",
      },
      {
        id: 7,
        title: "Green House",
        categories: ["Construction"],
        image: "/assets/portfolio9-1-600x600.jpg",
      },
      {
        id: 8,
        title: "Inside renovation",
        categories: ["Building", "Renovation"],
        image: "/assets/portfolio2-1-600x600.jpg",
      },
    ],
  },

  quote: {
    tag: "QUOTE",
    subtitle: "INTERESTED IN CONSTRUCTION?",
    title: "Request a free and fair quote",
    description:
      "Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored. Fill out the form below to receive a personalized estimate within 24 hours.",
    bgImage: "/assets/row-bg.jpg",
    departments: [
      "Business Department",
      "Personal Department",
      "Support Department",
      "Others",
    ],
  },

  testimonials: {
    tag: "TESTIMONIALS",
    subtitle: "SEE WHAT SAYS OUR HAPPY CLIENTS",
    title: "Our happy customers",
    items: [
      {
        id: 1,
        quote:
          "Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.",
        author: "Richard Dowson",
        role: "Commercial Property Developer",
        avatar: "/assets/team1.jpg",
      },
      {
        id: 2,
        quote:
          "The team demonstrated exceptional engineering skill throughout our commercial warehouse build. They finished two weeks ahead of schedule with zero safety incidents. Their transparent quoting saved us 15% on procurement.",
        author: "Sarah Jenkins",
        role: "Operations Director, Metro Logistics",
        avatar: "/assets/team2.jpg",
      },
      {
        id: 3,
        quote:
          "From structural engineering assessments to final interior touches, their dedication was unmatched. Truly the most reliable construction partner we have worked with across our multi-family residential portfolios.",
        author: "David Miller",
        role: "Architectural Lead, Skyline Ventures",
        avatar: "/assets/team3.jpg",
      },
    ],
  },

  partners: [
    {
      id: 1,
      name: "Partner 1",
      logo: "/assets/logo-1.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/assets/logo-2.png",
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/assets/logo-3.png",
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "/assets/logo-4.png",
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "/assets/logo-5.png",
    },
  ],

  footer: {
    logo: "/assets/footer-logo-construction.png",
    brandLogo: "/assets/logo-construction.png",
    copyright: "© 2026 XTRA, Powered by WordPress",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "FAQ", href: "/faq" },
      { label: "Shop", href: "/shop" },
    ],
  },
};
