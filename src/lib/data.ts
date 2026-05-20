export interface Social {
  label: string;
  url: string;
  handle: string;
}

export interface FeaturedProjectDetails {
  overview: string;
  responsibilities?: string[];
  impact?: string[];
  stack?: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  role: string;
  year: string;
  tag: string;
  url?: string;
  img: string;
  imgBg?: string;
  details?: FeaturedProjectDetails;
}

export interface ExperienceDetails {
  overview: string;
  responsibilities: string[];
  impact?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  details: ExperienceDetails;
}

export interface EthPillar {
  title: string;
  text: string;
}

export interface Conference {
  id: string;
  event: string;
  city: string;
  country: string;
  year: number;
  dates: string;
  code: string;
  slots: number;
}

export interface StackItem {
  name: string;
  kind: string;
  desc: string;
}

export interface ExpertiseItem {
  n: string;
  title: string;
  body: string;
}

export const PORTFOLIO = {
  name: "Kristjan Bajuk",
  handle: "makoreactor.eth",
  tagline: "Web3 Developer + Consultant",
  location: "Ljubljana, Slovenia",
  status: "Available for freelance",
  bio: "Innovative Web3 developer from Ljubljana. Passionate about blockchain technology and a strong believer in an open, decentralized and transparent future.",

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kristjan-bajuk/", handle: "in/kristjan-bajuk" },
    { label: "Twitter / X", url: "https://x.com/0xMellonCollie", handle: "@0xMellonCollie" },
    { label: "Github / X", url: "https://github.com/KristjanBajuk", handle: "@KristjanBajuk" },
    { label: "Email", url: "mailto:info@makoreactor.io", handle: "info@makoreactor.io" },
  ] as Social[],

  featured: [
    {
      id: "blocksquare", title: "Blocksquare", role: "Development", year: "2024", tag: "RWA", url: "", img: "/imgs/blocksquare.svg", imgBg: "#ffffff",
      details: {
        overview: "Senior Fullstack Web3 Engineer responsible for smart contracts, indexing infrastructure, and the user-facing frontend across Blocksquare's tokenization platform.",
        responsibilities: [
          "Integrated account abstraction into the platform — smart wallets using Alchemy and Privy SDK. Owned the full process from development through meetings with Alchemy and Privy to shipping and testing.",
          "Developed Token Offering v2 smart contract — a ground-up rewrite adding extensibility, flexibility, upgradeability, and feature parity beyond v1. Owned development, testing, and the audit process with Hacken.",
          "Led migration from 0x Protocol to 1inch for the secondary marketplace — responsible for the full scope: smart contract changes, Envio indexer, and frontend integration.",
        ],
        impact: [
          "Brought smart-wallet UX to Blocksquare's investor base, eliminating seed-phrase friction for new users",
          "Token Offering v2 passed Hacken audit and became the foundation for all new property offerings",
          "1inch migration improved secondary market and reduced protocol dependency on a deprecated stack",
        ],
        stack: ["Solidity", "Foundry", "React", "Vite", "Material UI", "Envio", "Alchemy", "Privy"],
      },
    },
    {
      id: "hyperlend", title: "HyperLend", role: "Development", year: "2025", tag: "DeFi", url: "", img: "/imgs/hyperlend.jpg",
      details: {
        overview: "Collaborated with the HyperLend team to ship several protocol features end-to-end — from smart contract design and testing through indexer integration and frontend delivery.",
        responsibilities: [
          "Repay with Collateral — implemented smart contract using ParaSwap protocol to allow users to repay debt directly from their collateral position. Handled contract, testing, and full frontend integration.",
          "Cross-chain bridge — integrated token bridging into the frontend, enabling users to move assets onto HyperLend from other chains.",
          "Analytics page — built historical yield and debt charts. Implemented the Ponder indexer to track on-chain state and integrated the endpoint into the frontend.",
          "Yield-bearing limit orders — designed and shipped a feature letting users set a limit order on when to sell while collateral continues earning yield. Wrote the smart contract, built an Express.js keeper bot that monitors prices and automates collateral usage and order placement, and implemented an Envio indexer for tracking live blockchain state.",
        ],
        impact: [
          "Repay-with-collateral reduced user friction for debt management without requiring additional capital",
          "Cross-chain bridge opened HyperLend to liquidity from outside the Hyperliquid EVM ecosystem",
          "Analytics page gave users and the team visibility into historic protocol performance for the first time",
          "Yield-bearing limit orders introduced a novel DeFi primitive combining passive yield with automated exit strategies",
        ],
        stack: ["Solidity", "Foundry", "Ponder", "Express.js", "React", "TypeScript"],
      },
    },
    { id: "navh", title: "Consensys NAV Hackathon", role: "Mentor", year: "2023", tag: "Mentoring", url: "https://consensys.io/blog/navh-2023-finale-consensys-web3-innovation-collaboration", img: "/imgs/portfolio6.jpeg" },
    {
      id: "csys", title: "Consensys", role: "Ambassador", year: "2023", tag: "Community", img: "/imgs/portfolio8.png",
      details: {
        overview: "Nomination-based, the Vanguard Program creates an intimate container for the most innovative and creative minds in web3.\n\nThrough conversation, exclusive events, and speaking opportunities, Vanguards collaborate at the highest level to co-create a future where mass adoption of decentralization and economic freedom is a reality.",
      },
    },
    {
      id: "ethslo", title: "Ethereum Slovenia", role: "Community", year: "2023", tag: "Community", img: "/imgs/portfolio10.png",
      details: {
        overview: "Local community for all things onchain. Bringing together enthusiasts to explore real-world applications, address limitations, and deepen understanding of blockchain challenges.\n\nOne of the core team members, organising monthly meetups in Ljubljana. These gatherings create opportunities for like-minded individuals to collaborate, form business deals, exchange ideas, and build valuable relationships.",
      },
    },
    {
      id: "qvrse", title: "Qvrse.io", role: "Development", year: "2022", tag: "NFTs", url: "https://qvrse.io/", img: "/imgs/portfolio11.png",
      details: {
        overview: "Building a platform for creators to leverage NFTs. Responsible for smart contracts and frontend — built the frontend from the ground up and implemented smart wallets with Alchemy.",
        responsibilities: [
          "Built the frontend application from scratch — creator dashboards, NFT mint flows, ticketing.",
          "Developed and deployed smart contracts for NFT passes, drops, and payment flows.",
          "Implemented smart account payments using Alchemy, enabling gasless and batched transactions for creators and their audiences.",
        ],
        stack: ["React", "Vite", "Material UI", "Alchemy", "Solidity", "Hardhat"],
      },
    },
    {
      id: "wsg", title: "WSG NFT Marketplace", role: "Development", year: "2024", tag: "Marketplace", img: "/imgs/portfolio12.png",
      details: {
        overview: "Hired to build the NFT marketplace for Wall Street Games — a crypto game where players earn and collect cards as NFTs. Responsible for the entire marketplace where players could trade their cards.",
        responsibilities: [
          "Built the full frontend from scratch — marketplace UI, card listings, trading flows, and player-facing dashboards.",
          "Implemented the smart contracts for marketplace trading in Solidity with Hardhat.",
          "Built a The Graph subgraph to index on-chain marketplace activity and power real-time frontend data.",
          "Integrated Orbis decentralized database for user profiles.",
        ],
        impact: [
          "Took full ownership of development and testing end-to-end — shipped on time with a happy client",
          "Delivered a live, production marketplace that players use to trade game cards today",
        ],
        stack: ["React", "Vite", "Material UI", "Solidity", "Hardhat", "The Graph", "Alchemy", "Orbis"],
      },
    },
    {
      id: "otc", title: "OTC Marketplace", role: "Development", year: "2023", tag: "Marketplace", img: "/imgs/portfolio9.png",
      details: {
        overview: "Hired to build an OTC marketplace where users could swap tokens directly peer-to-peer — listing tokens and fulfilling orders without an intermediary. Built the entire application from the ground up.",
        responsibilities: [
          "Built the full frontend from scratch — token listing flows, order book UI, and order fulfillment.",
          "Developed and deployed the smart contracts handling OTC order creation, matching, and settlement in Solidity with Hardhat.",
          "Implemented a The Graph subgraph to index on-chain order activity and keep the frontend in sync with live state.",
          "Met with The Graph team in Istanbul and secured a grant for using their services on this marketplace.",
        ],
        impact: [
          "Took full end-to-end ownership across frontend, indexing, and smart contracts — shipped on time with a happy client",
        ],
        stack: ["React", "Vite", "Material UI", "Solidity", "Hardhat", "The Graph"],
      },
    },



  ] as FeaturedProject[],

  experiences: [
    {
      id: "blocksquare", company: "Blocksquare", role: "Senior Fullstack Web3 Engineer",
      period: "2024 — Present", location: "Ljubljana · Remote",
      summary: "Blocksquare is an award-winning team developing the world’s leading blockchain-based real estate tokenization system.",
      highlights: ["Lead frontend for tokenization marketplace", "Smart-contract integration · Solidity + Viem", "Award-winning RWA infrastructure"],
      stack: ["Solidity", "Foundry", "React", "Vite", "Material UI", "Envio", "Alchemy", "Privy"],
      details: {
        overview: "Senior Fullstack Web3 Engineer responsible for smart contracts, indexing infrastructure, and the user-facing frontend across Blocksquare's tokenization platform.",
        responsibilities: [
          "Integrated account abstraction into the platform — smart wallets using Alchemy and Privy SDK. Owned the full process from development through meetings with Alchemy and Privy to shipping and testing.",
          "Developed Token Offering v2 smart contract — a ground-up rewrite adding extensibility, flexibility, upgradeability, and feature parity beyond v1. Owned development, testing, and the audit process with Hacken.",
          "Led migration from 0x Protocol to 1inch for the secondary marketplace — responsible for the full scope: smart contract changes, Envio indexer, and frontend integration.",
        ],
        impact: [
          "Brought smart-wallet UX to Blocksquare's investor base, eliminating seed-phrase friction for new users",
          "Token Offering v2 passed Hacken audit and became the foundation for all new property offerings",
          "1inch migration improved secondary market and reduced protocol dependency on a deprecated stack",
        ],
      },
    },
    {
      id: "makoreactor", company: "Makoreactor", role: "Web3 Developer · Self-employed",
      period: "2022 — Present", location: "Ljubljana",
      summary: "Freelancing across different projects — helping teams ship features, build dApps, and move faster with hands-on Web3 engineering.",
      highlights: ["DeFi protocol features end-to-end", "Smart-contract audits & development", "Helping teams ship faster"],
      stack: ["React", "Vite", "Next.js", "Envio", "Solidity", "Foundry", "Alchemy"],
      details: {
        overview: "Running Makoreactor as my independent freelance practice — taking on focused engagements with crypto teams and helping them ship features end-to-end. Bringing experience across the full stack to move fast without handoffs.",
        responsibilities: [
          "HyperLend — shipped several protocol features including repay with collateral (ParaSwap), cross-chain bridge integration, analytics page with Ponder indexer, and yield-bearing limit orders with an Express.js keeper bot and Envio indexer.",
          "WSG NFT Marketplace — built the full marketplace for Wall Street Games end-to-end: frontend, Solidity contracts, The Graph subgraph, and Orbis decentralised user profiles.",
          "OTC Marketplace — built a peer-to-peer token swap marketplace from scratch: frontend, smart contracts, and The Graph indexing. Secured a grant from The Graph team in Istanbul.",
          "MetaCourt DAO — performed a smart contract audit, reviewing contract logic, access controls, and potential vulnerabilities before deployment.",
        ],
        impact: [
          "Broad experience across DeFi, NFT, and DAO projects enables fast onboarding and delivery on new engagements",
          "End-to-end ownership across frontend, contracts, and indexing means teams avoid slow handoffs and ship faster",
        ],
      },
    },
    {
      id: "hazellabs", company: "HazelLabs", role: "Web3 Developer",
      period: "2022 — 2024", location: "Ljubljana",
      summary: "Built Qvrse.io — a creator-economy platform combining NFTs, ticketing, loyalty and community engagement",
      highlights: ["Owned Qvrse.io frontend end-to-end", "Wrote and deployed Solidity contracts", "deployed on Polygon"],
      stack: ["React", "Solidity", "Polygon", "Material UI", "The Graph"],
      details: {
        overview: "HazelLabs is the studio behind Qvrse.io. I joined as one of the first engineers and helped take it from idea to a live, multi-feature creator platform.",
        responsibilities: ["Built the entire Qvrse.io frontend (creator dashboards, NFT mint flows, ticketing)", "Wrote, tested and deployed the contracts behind passes, drops and royalties", "Implemented smart wallets for retail users — abstracting away seed phrases and crypto complexity so anyone could onboard without prior web3 knowledge", "Helped develop contracts for DAOs, integrating OpenZeppelin Governor contracts for on-chain governance and voting"],
        impact: ["Onboarded the first cohort of Slovenian creators to web3", "Shipped a fully gas-optimized mint + claim flow on Polygon", "Enabled non-web3 users to buy their first NFT without knowing they were using blockchain — no seed phrase, no crypto wallet setup required"],
      },
    },
    {
      id: "ineor", company: "Ineor", role: "Frontend Developer",
      period: "2020 — 2022", location: "Ljubljana",
      summary: "Creating digital solutions for global leaders in online gaming, FinTech, risk management, and e-governance.",
      highlights: ["Gaming & betting platforms for major EU clients", "FinTech & e-governance products", "Enterprise React at scale"],
      stack: ["React", "Vite", "Material UI", "TypeScript"],
      details: {
        overview: "Creating digital solutions for global leaders in online gaming, FinTech, risk management, and e-governance. Responsible for frontend engineering across multiple projects in the gaming and betting space for major European clients.",
        responsibilities: [
          "Built frontend applications for gaming and betting platforms serving major European clients — complex UIs with real-time data, user account management, and regulated flows.",
          "Worked across FinTech and e-governance projects with strict accessibility, audit trail, and compliance requirements.",
          "Contributed to shared component libraries used across multiple client projects.",
        ],
        impact: [
          "Delivered production frontend for multiple gaming platforms used by large European player bases",
          "Gained deep experience in regulated, high-stakes product environments with demanding quality standards",
        ],
      },
    },
    {
      id: "mikrocop", company: "Mikrocop", role: "Frontend Developer",
      period: "2018 — 2020", location: "Ljubljana",
      summary: "Helped build InDocEdge — a unified DMS + BPM + RMS platform for document and process management.",
      highlights: ["InDocEdge platform from zero", "Complex document workflows", "Enterprise-grade compliance UI"],
      stack: ["Angular", "TypeScript", "RxJS"],
      details: {
        overview: "Mikrocop is one of Slovenia's biggest providers of digital archiving and document management. I joined the InDocEdge product team during its first major rebuild.",
        responsibilities: ["Implementing complex document workflow UIs (drag-drop, multi-pane review)", "Working closely with backend engineers on real-time state syncing", "Building compliance-critical interfaces for government and bank clients"],
        impact: ["Co-shipped the v1 release of InDocEdge to enterprise customers"],
      },
    },
    {
      id: "optikaclarus", company: "Optika Clarus", role: "Web Developer",
      period: "2017 — 2018", location: "Ljubljana",
      summary: "Website maintenance and development plus social-media management for a local optical brand.",
      highlights: ["Full-stack site ownership", "Social media operations", "First taste of client work"],
      stack: ["WordPress", "PHP", "JavaScript"],
      details: {
        overview: "A small but formative role — I was responsible for the company's entire web presence.",
        responsibilities: ["Maintaining and extending the company website", "Running Facebook, Instagram and Twitter content", "Light photography and content production"],
      },
    },
    {
      id: "napovednik", company: "Napovednik", role: "Fullstack Developer",
      period: "2016 — 2017", location: "Ljubljana",
      summary: "Development and maintenance of an events platform and its companion mobile app.",
      highlights: ["Fullstack JS across web + mobile", "Events platform at national scale", "API design + maintenance"],
      stack: ["JavaScript", "Node", "React Native", "MongoDB"],
      details: {
        overview: "Napovednik is one of Slovenia's most-used events platforms. I worked across the stack on both the public web and the mobile companion app.",
        responsibilities: ["Feature work on the public web platform", "Maintenance and feature work on the React Native mobile app", "API design and database modelling"],
      },
    },
    {
      id: "artisiti", company: "Artisiti", role: "Unity 3D Developer",
      period: "2012 — 2013", location: "Slovenia",
      summary: "Built a desktop adventure game — 'Issac the Adventurer' — for PC and Mac.",
      highlights: ["Shipped game on PC + Mac", "Gameplay + tools programming", "Where it all started"],
      stack: ["Unity 3D", "C#"],
      details: {
        overview: "My first developer role. We were a small team shipping an indie adventure title.",
        responsibilities: ["Gameplay scripting and tools work in Unity", "Cross-platform builds for Windows + Mac"],
      },
    },
  ] as Experience[],

  ethSlovenia: {
    body: "We run regular meetups in Ljubljana, organize workshops and dev-jams, and represent Slovenia at international Ethereum events. The mission is simple: make it easy for any Slovenian builder, student or skeptic to plug into the wider Ethereum ecosystem.",
    pillars: [
      { title: "Local meetups", text: "Monthly community gatherings in Ljubljana — talks, demos, and a lot of hallway-track." },
      { title: "Conferences", text: "Representing Slovenia at Devcon, EthCC, ETHGlobal and across the European builder circuit." },
      { title: "Workshops", text: "Hands-on Solidity, security and tooling sessions for new builders entering the space." },
    ] as EthPillar[],
    galleryImgs: [
      "/imgs/eth1.jpg", "/imgs/eth2.jpg", "/imgs/eth3.jpg", "/imgs/eth4.jpg",
      "/imgs/eth5.jpg", "/imgs/eth6.jpg", "/imgs/eth7.jpg", "/imgs/eth8.jpg",
      "/imgs/eth9.jpg", "/imgs/eth10.jpg", "/imgs/eth11.jpg", "/imgs/eth12.jpg",
    ],
  },

  conferences: [
    { id: "ethcc-paris", event: "ETH·CC", city: "Paris", country: "FR", year: 2024, dates: "Jul 9 – 11", code: "CDG", slots: 3 },
    { id: "ethcc-paris", event: "ETH·CC", city: "Brussels", country: "BE", year: 2024, dates: "Jul 9 – 11", code: "CDG", slots: 3 },
    { id: "devcon-bkk", event: "Devcon", city: "Bangkok", country: "TH", year: 2024, dates: "Nov 12 – 15", code: "BKK", slots: 3 },
    { id: "devconnect-ist", event: "Devconnect", city: "Istanbul", country: "TR", year: 2023, dates: "Nov 13 – 19", code: "IST", slots: 3 },
    { id: "devconnect-ar", event: "Devconnect", city: "Buenos Aires", country: "AR", year: 2025, dates: "Nov 17 – 22", code: "EZE", slots: 3 },
    { id: "token-2049", event: "Token2049", city: "Dubai", country: "UAE", year: 2024, dates: "Jul 9 – 11", code: "CDG", slots: 3 },
    { id: "ethglobal", event: "ETHGlobal", city: "London", country: "UK", year: 2024, dates: "Oct · 2023", code: "FCO", slots: 2 },
  ] as Conference[],

  stack: [
    { name: "Solidity", kind: "Smart contracts", desc: "Curly-brace language for EVM smart contracts." },
    { name: "Foundry / Hardhat", kind: "Tooling", desc: "Modern Ethereum development environments." },
    { name: "Viem + Wagmi", kind: "Client libs", desc: "Typesafe Ethereum interaction in the browser." },
    { name: "React + Vite or Next.js", kind: "Frontend", desc: "Production frontends for production dApps." },
    { name: "Envio", kind: "Indexing", desc: "Indexing protocol — query chain data with GraphQL." },
    { name: "Alchemy, Privy", kind: "Infra", desc: "RPC, AA, webhooks and SDKs to scale web3 apps." },
  ] as StackItem[],

  expertise: [
    { n: "01", title: "Frontend Engineering", body: "Production-grade interfaces that make on-chain interactions feel inevitable." },
    { n: "02", title: "Smart Contract Development", body: "Solidity contracts designed for security, gas-efficiency and clean upgrade paths." },
    { n: "03", title: "Consulting", body: "Pre-launch reviews, token design and engineering support for early-stage teams." },
  ] as ExpertiseItem[],

  confPhotos: [
    "/imgs/img1.jpg", "/imgs/img6.jpeg", "/imgs/img13.jpg", "/imgs/img3.jpeg",
    "/imgs/img9.jpeg", "/imgs/img16.JPG", "/imgs/img25.jpg", "/imgs/img2.jpeg", "/imgs/img7.jpeg",
    "/imgs/img14.JPG", "/imgs/img27.jpg", "/imgs/img28i 2.jpg", "/imgs/img4.jpg", "/imgs/img26.jpg", "/imgs/img10.jpeg", "/imgs/img18.JPG",
    "/imgs/conf-ethcc-paris-1.jpg", "/imgs/img8.jpeg", "/imgs/img5.jpeg",
    "/imgs/img19.PNG", "/imgs/img20.jpg", "/imgs/img21.jpg", "/imgs/img22.jpg", "/imgs/img23.jpg"
  ],
};
