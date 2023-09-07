import { Feature, Plan, MenuItem } from "~/types";

export const navigation: MenuItem[] = [
  { name: "Home", link: "/#home" },
  { name: "Features", link: "/#features" },
  { name: "Track Records", link: "/#track-records" },
  { name: "FAQ", link: "/#faq" },
  { name: "Pricing", link: "/#pricing" },
  { name: "About", link: "/#about" },
];
export const features: Feature[] = [
  {
    title: "rFactor 2 Sim Support",
    image: "sessions.png",
    text: `Fidgrove supports all licensed content on <a href="https://www.studio-397.com/" target="_blank" class="text-sky-400">rFactor 2 </a>esports platform, including mods based on them (e.g., league mods, "sub-versions" with BoP). You can browse <a href="https://www.studio-397.com/" target="_blank">rFactor 2's </a> licensed or fictional content in the dynamic tables we created with handy information (e.g., last updated, car engine type, package Steam ID, etc) <a href="https://support.fidgrove.com/" target="_blank">here</a>.<br/><br/>
            No need for configurations. Fidgrove’s DataLogger keeps track of all version numbers of the cars & tracks used, validating if the content has been tampered with (e.g., car physics).`,
  },
  {
    title: "Effortless Data Management",
    image: "r_factor.png",
    list: [
      "All telemetry data run through cloud, using efficient data flow process, with minimum local compute, and taking advantage of real-time scalable computing",
      "Engineering Station accessible anywhere through a browser, providing easy data navigation with metadata (e.g., linking unique setups to all sessions using them), high performance search showing relevant results, etc",
      "Data results with integrated performance indicators, with multiple computed variables in real time and stored for later referral (e.g., track records with 1 lap vs 10 laps race pace, dry vs wet laps)",
    ],
  },
  {
    title: "Integrated key analysis tools",
    image: "analysis.png",
    list: [
      "Fidgrove's Engineering Station is where you can use different analysis features on your data, which has been augmented with multiple computed variables and presented in an easy to see way (e.g., session details with all stints data, detailed page per lap)",
      "Over 30 automated run charts and correlation charts available for any session, including specific operating window charts",
      "Possibility to compare any sessions with same car-track, for better understanding of performance gaps / setup impacts",
    ],
  },
  {
    title: "Communities to compare performance",
    image: "community.png",
    list: [
      "Opt-in communities ensuring data privacy for those that don’t want to share results",
      "Ability to create new private or public communities to share performance with smaller groups",
      "Innovative communities leaderboard flow, with lap times / race pace performance indicators in dry or wet conditions",
      "Easy check of time gap performance to best in community",
    ],
  },
];
export const teamsFeatures: Feature[] = [
  {
    title: "Team rFactor 2 Sim Support",
    image: "sessions.png",
    text: `Fidgrove supports all licensed content on <a href="https://www.studio-397.com/" target="_blank" class="text-sky-400">rFactor 2 </a>esports platform, including mods based on them (e.g., league mods, "sub-versions" with BoP). You can browse <a href="https://www.studio-397.com/" target="_blank">rFactor 2's </a> licensed or fictional content in the dynamic tables we created with handy information (e.g., last updated, car engine type, package Steam ID, etc) <a href="https://support.fidgrove.com/" target="_blank">here</a>.<br/><br/>
            No need for configurations. Fidgrove’s DataLogger keeps track of all version numbers of the cars & tracks used, validating if the content has been tampered with (e.g., car physics).`,
  },
  {
    title: "Team Effortless Data Management",
    image: "r_factor.png",
    list: [
      "All telemetry data run through cloud, using efficient data flow process, with minimum local compute, and taking advantage of real-time scalable computing",
      "Engineering Station accessible anywhere through a browser, providing easy data navigation with metadata (e.g., linking unique setups to all sessions using them), high performance search showing relevant results, etc",
      "Data results with integrated performance indicators, with multiple computed variables in real time and stored for later referral (e.g., track records with 1 lap vs 10 laps race pace, dry vs wet laps)",
    ],
  },
  {
    title: "Team Integrated key analysis tools",
    image: "analysis.png",
    list: [
      "Fidgrove's Engineering Station is where you can use different analysis features on your data, which has been augmented with multiple computed variables and presented in an easy to see way (e.g., session details with all stints data, detailed page per lap)",
      "Over 30 automated run charts and correlation charts available for any session, including specific operating window charts",
      "Possibility to compare any sessions with same car-track, for better understanding of performance gaps / setup impacts",
    ],
  },
  {
    title: "Team Communities to compare performance",
    image: "community.png",
    list: [
      "Opt-in communities ensuring data privacy for those that don’t want to share results",
      "Ability to create new private or public communities to share performance with smaller groups",
      "Innovative communities leaderboard flow, with lap times / race pace performance indicators in dry or wet conditions",
      "Easy check of time gap performance to best in community",
    ],
  },
];
export const membershipPlans: Plan[] = [
  {
    title: "Free Membership",
    items: [
      "Unlimited & automated rFactor 2 data logging (incl. setups)",
      "Effortless Data Management to browse data and performance indicators",
      "Access to Eng. Station: Data Analysis Tool to analyze stints and data patterns",
      "Opt-in Community Track Records (incl. wet & race pace)",
      "Shared telemetry/setups through event data analysis workflow (1 active team event)",
      "Shared live cockpit data and performance tables with 1 team (Trackside Station)",
      "Post-event intra-lap telemetry analyzer (TBD)",
    ],
    price: {
      actual: "Free!",
    },
    cta: {
      text: "Register for Free",
      link: "https://station.fidgrove.com/register",
    },
  },
  {
    title: "Annual Premium Membership (Teams)",
    subtitle: "Free for the first month!",
    accentItem: {
      idx: 0,
      class: "text-sky-400",
    },
    items: [
      "Support Fidgrove dev. & op. expenses",
      "Access to all Free features",
      "Unlimited teams and active events",
      "AI-assisted Race Strategy Planner based on your own race prep team data",
      "Live intra-lap telemetry analyzer (planned to be improved with AI)",
      "Live AI-supported Race Strategy Adjustments (TBD)",
    ],
    price: {
      origin: "12.99 €",
      actual: "9.99 €",
      period: "per month",
    },
    cta: {
      text: "Login to order",
      link: "https://station.fidgrove.com/login",
    },
  },
  {
    title: "Annual Premium Membership <br/>(pay for teammate)",
    subtitle: "Free for the first month!",
    accentItem: {
      idx: 0,
      class: "text-sky-400",
    },
    items: [
      "Support Fidgrove dev. & op. expenses",
      "Purchase Premium Membership for teammate",
      "Gives access to all features listed in the Teams Premium subscription",
    ],
    price: {
      origin: "12.99 €",
      actual: "9.99 €",
      period: "per month",
    },
    cta: {
      text: "Login to pay for teammate",
      link: "https://station.fidgrove.com/login",
    },
  },
];
