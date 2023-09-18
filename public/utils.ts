import {
  Feature,
  Plan,
  MenuItem,
  TableHandler,
  RecordsTableRow,
  RecordsTrackTableRow,
  RecordsTrackCarTableRow,
  FaqItem,
} from "~/types";
import { useSecondsToReadableTime } from "~/composables/timeFormatting";

export const navigation: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/features" },
  { name: "Track Records", link: "/track-records" },
  { name: "FAQ", link: "/faq" },
  { name: "About", link: "/about" },
];
export const features: Feature[] = [
  {
    title: "Sim support: rFactor 2",
    image: "sessions.png",
    text: `<p class="pb-4">Sim support is done through the installation of Fidgrove’s DataLogger. No configuration is required, and Fidgrove will automatically detect the supported sims.</p>
    <p class="pb-4">Fidgrove supports <a href="https://www.studio-397.com/" target="_blank" class="text-blue">rFactor 2 </a> esports platform, and all its content. Fidgrove keeps track of all version numbers of the cars & tracks, using file hashes. This makes it possible to validate if the content is different from previous versions, or if it has been tampered with (e.g., car physics). Different versions will be marked as such. In some cases, Fidgrove uses “sub-versions”, which means content with same version but slightly different (e.g., car impacted by Balance of Performance).</p>
  <p class="pb-4">rFactor 2 allows for community mods, creating a possibility of multiple packages attempting to recreate the same car or track, with possible different characteristics. When navigating through Fidgrove’s Engineering Station, you will see this as different content altogether</p>`,
  },
  {
    title: "Effortless Data Management",
    image: "r_factor.png",
    text: `<p class="pb-4">In order to have proper telemetry analysis, we need to have a good understanding and structure of the data. Fidgrove automated and integrated this process from the beginning. Real-time computing is used on the detailed telemetry logged, in order to create the right data stack. This has several benefits, including enabling Fidgrove to more easily add features that are usable on previously logged data. </p><p class="pb-4">From a user’s point of view, effortless data management can be seen with the fact that:</p>`,
    list: [
      "All telemetry data is streamed to the cloud, using an efficient data flow process, with minimum local compute, and taking advantage of real-time scalable computing",
      "Engineering Station is accessible anywhere through a browser, providing easy data navigation with metadata (e.g., linking unique setups to all sessions using them), high performance search showing relevant results, etc",
      "Data results with integrated performance indicators, with multiple computed variables in real time and stored for later referral (e.g., track records with 1 lap vs 10 laps race pace, dry vs wet laps)",
    ],
  },
  {
    title: "Eng. Station: the place to analyze your data",
    image: "analysis.png",
    text: `<p class="pb-4">Engineering Station is where the core data analysis tool is accessible to users. It’s accessible through a browser. This makes it easy to access from anywhere, and it’s also easier to maintain and make improvements. The idea is that this is the place you can use for different analysis on your data, augmented with multiple computed variables and presented in an easy to see way.</p><p class="pb-4">The home page presents a top navigation bar on top to go to other sections of the platform, a blue stripe with data, and a list of sessions. The blue stripe is available throughout the Eng. Station. On this page, it has a search box, it’s automatically highlighted, so you can just start typing, and will start to show filtered list of sessions after you start typing. On the right side of the blue stripe, you have total laps you’ve done, total km, and total number of hours logged. If you have a filtered list of sessions, these stats also appear for this filtered data, in blue.</p><p class="pb-4">The list of sessions is a good place to start analyze your data, as you can easily navigate and find what sessions you’re looking for. From here you can just click through in any of the sessions, which will take you to a session details page. The session details page has a lot of information regarding the session context, info on each stint including header/bottom info. If you want to see further information about a lap, you can click through and get over ~20 performance indicators regarding that lap, including time performance, traction info, tires and fuel, operating window data, etc. On the other hand, if you’d like to analyze the sessions or stints with run charts, or maybe compare this with other sessions, you can just click the run charts button on the header section of the session details page. Run charts page provides ~30 automated relevant charts to analyze data trends, including info on general performance indicators, fuel or energy management, tires, operating window, track state and weather.</p><p class="pb-4">The Engineering Station has a lot more to it than we’re explaining here. Do navigate through it to see other features, such as usage stats, personal track records, community track records, list of setups per car and respective sessions info, event workflow and data  pools sharable with teammates, etc.</p>`,
  },
  {
    title: "Trackside Station: real-time data",
    image: "community.png",
    text: `<p class="pb-4">Fidgrove’s Trackside Station is the best place to follow the action in real time. This is similar to the Engineering Station in the sense that you’re accessing it through the browser, but it’s focused on seeing your live data or your teammate’s. You can track live performance through a cockpit data page, a timetables page, leaderboard, and real-time telemetry analyzer. </p><p class="pb-4">The cockpit data page shows a dashboard with information you could see in modern steering wheels. This includes speed, gear, RPM, fuel info, tire info, lap/sector times, etc. </p><p class="pb-4">The timetables page is a good place to follow lap performance as it happens. You can choose which type of performance indicator you’d like to focus on (e.g., time, min/avg/max speeds), and you’ll see this displayed for sectors and laps as they happen. </p><p class="pb-4">The leaderboard page is self-explanatory, but it does include sidebars with a map tracker on the left, and a performance analyzer on the right side. The latter is useful to check what are the paces of everyone in the field, as well as compare gaps to direct competitors. </p><p class="pb-4">The telemetry page aims to be an easy way to check if all key telemetry channels show expected performance, or if there are outliers. By easily having a time rolling window shown or a full lap time in view, and by having a comparable lap as well as current one, a team can easily spot issues and take proper measures immediately. </p><p class="pb-4">Additional pages are planned for the future, including strategy related pages.</p>`,
  },
  {
    title: "Fidgrove Community: shared lap performance",
    image: "community.png",
    text: `<p class="pb-4">We’ve all been there, when we want to check what’s a reasonable lap time for a specific car-track combo. Sometimes we also just want to practice and see if we can hit track records. Also, wouldn't it be great if we could see race pace instead of just hot lap times, or compare lap times on a wet track?</p><p class="pb-4">Fidgrove community track records has the solution for all of this. By joining the community, you can compete with others for lap time performance. You can then leverage an innovative way to navigate through track records, by first seeing a list of tracks with absolute track records, and drill down in one track to see best lap performance per car. If you click through in one of the cars, you’ll get the leaderboard page for that specific combo.</p><p class="pb-4">There are two toggles in the blue stripe of the communities track records page, enabling you to see different leaderboard pages. You can see hot lap times or best 10-laps average pace. You can also see dry laps or wet laps. </p><p class="pb-4">In addition to the above, you can also see a list of the track records you logged, with information on how you stack up against others (e.g., ranking, diff to best time). You can click through to get to the respective detailed community track records.</p><p class="pb-4">Fidgrove Communities is opt-in. We understand that some people want to analyze their own data without sharing their performance. Data privacy is important and is on by default. Maybe you’re preparing for an important event and don’t want to give your cards away. Either way, you need to specifically join the community to start sharing lap times, and you can mute the community to temporarily stop sharing this info until you unmute.</p>`,
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

export const faq: FaqItem[] = [
  {
    question: "What is Fidgrove about?",
    answer: `<p class="pb-4">Fidgrove aims to improve sim racing performance through data. To that end, it uses the latest technology to deliver a cloud-based user-friendly data platform. </p>
    <p class="pb-4">Fidgrove has 3 main components:</p>`,
    list: {
      type: "mark",
      items: [
        " DataLogger app: Easily log your data ",
        "Engineering Station: navigate and analyze your private data, compare lap times with others, share with teammates",
        "Trackside Station: track live data & analyze team’s live data streams",
      ],
    },
  },
  {
    question: "What data sources are supported?",
    answer: `<p class="pb-4">Fidgrove currently supports rFactor 2. Other data sources to be supported in the future. </p>`,
  },
  {
    question: "How does Fidgrove get the telemetry? ",
    answer: `<p class="pb-4">Fidgrove has a DataLogger Windows app that has to be installed in the sim PC. This application manages to get the data from the sim, and streams it to our private servers.  </p>`,
  },
  {
    question: "Is Fidgrove’s DataLogger resource intensive?",
    answer: `<p class="pb-4">No, it is not. Fidgrove minimizes all local computing precisely so there’s no impact on the sim’s PC (e.g., no file writing/reading to store telemetry). It essentially packages and steers information to compressed data streams. </p>`,
  },
  {
    question: "Where can I see my data analyses? ",
    answer: `<p class="pb-4">You can easily access your data through Fidgrove’s Engineering Station, which is accessible through any browser on <a href="https://station.fidgrove.com/" target="_blank" class="text-blue">Fidgrove </a>.  </p>`,
  },
  {
    question: "Does Fidgrove support viewing of live telemetry? ",
    answer: `<p class="pb-4">Yes, Fidgrove Trackside Station shows cockpit data info, performance metrics (times, speeds), leaderboards and race analysis info, and real-time telemetry. It’s accessible on any browser, by you and your teammates.</p>`,
  },
  {
    question: "What are Fidgrove’s main features? ",
    answer: ` <p class="pb-4">List of features is big, but here are examples: </p>`,
    list: {
      type: "mark",
      items: [
        "Leverage rich metadata for quick and easy logged data searches",
        "Check detailed info on sessions, stints, laps, personal track records, etc",
        "Analyze auto-generated run charts & correlation charts to understand trends",
        "Get customized insights on electric cars(e.g., power mode, regen mode, frontier performance plot)",
        "Join/create a community to have friendly hot lap competitions(e.g., dry/wet, 1 lap/race pace)",
        "Join/create a team to share data and manage events ",
        "Prepare for event, leveraging on a specific workflow tool enabling easy analysis (incl. innovative data highlights with data slicing) ",
        "Plan your race strategy by leveraging your data and getting AI-powered suggestions ",
        "Use Fidgrove’s Trackside Station to see live data / performance metrics from you or your team",
      ],
    },
    addText: ` <p class="pb-4">Please see features section for further details on specific features. </p>`,
  },
  {
    question: "In which way is Fidgrove innovating?",
    answer: `<p class="pb-4">We believe the path should be to have real-time computing on all data available, delivering insights on how to improve performance immediately. That’s not the easy path, but it should be the right path to the solution that drivers and teams need. </p>
<p class="pb-4">As such, we have implemented the latest data stack technology that enables real-time computing with very low latency, making Fidgrove’s Trackside Station a great platform for future features. Furthermore, we are also creating our own path through research  in the field. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>`,
  },
  {
    question: "How much do I have to pay to use Fidgrove? ",
    answer: `<p class="pb-4">You can use most of Fidgrove’s features for free, including no cap on logging and analyzing data. Please see information on premium membership to see additional features that are paid. </p>`,
  },
  {
    question: "What do I have to do to start using it? ",
    answer: `<p class="pb-4">You’re only 3 steps away from using Fidgrove:</p>`,
    list: {
      type: "letter",
      items: [
        `Register at Fidgrove’s webpage <a href="https://station.fidgrove.com/" target="_blank" class="text-blue">Fidgrove </a>`,
        "Login and download Fidgrove’s DataLogger  ",
        "Install Fidgrove’s DataLogger",
      ],
    },
  },
  {
    question: "What are the core principles Fidgrove adheres to? ",
    answer: `<p class="pb-4">Here are our core principles: </p>`,
    list: {
      type: "letter",
      items: [
        "do the heavy lifting: minimize use of local resources, maximize workflow efficiency",
        "be there for the user: ensure reliability, secure privacy",
        "make experience pleasant: make it easy, make it beautiful, amaze with support ",
      ],
    },
  },
  {
    question: "What’s the best way to keep updated? ",
    answer: `<p class="pb-4">The DataLogger app and Engineering Station are automatically updated. If you’d like to follow up Fidgrove’s news and updates, join our <a href="https://discord.gg/PcuaKYMs8Y" rel="noopener noreferrer" target="_blank" class="text-blue">Discord </a> server or follow us on <a href="https://x.com/fidgrove" rel="noopener noreferrer" target="_blank" class="text-blue">Twitter </a></p>`,
  },
];
export const trackRecords: TableHandler = {
  wetSession: false,
  racePaces: false,
  table: {
    tooltip: {
      render(row: RecordsTableRow) {
        const { trackTemperature, avgPathWetness } = row;
        const waterOnTrackTooltip = `<b class="pr-1 font-medium tabular-nums lining-nums">Water on Track:</b> ${avgPathWetness}<br />`;
        return `
					<b class="pr-1 font-medium tabular-nums lining-nums">Track Temperature:</b> ${trackTemperature}<br />
					${trackRecords.wetSession ? waterOnTrackTooltip : ""}
				`;
      },
    },
    header: [
      {
        name: "Track",
        class: "justify-start",
        sortable: true,
        property: "trackName",
        prependIcon: ({ isOfficialTrack }) => isOfficialTrack,
      },
      {
        name: "Car",
        class: "justify-start",
        sortable: true,
        property: "carName",
        prependIcon: ({ isOfficialCar }) => isOfficialCar,
      },
      {
        name: "Lap Time",
        class: "justify-start",
        sortable: true,
        property: "lapTime",
        get hidden() {
          return trackRecords.racePaces;
        },
      },
      {
        name: "Avg Lap Time",
        class: "justify-start",
        sortable: true,
        property: "avgLapTime",
        get hidden() {
          return !trackRecords.racePaces;
        },
      },
      {
        name: "Date",
        class: "justify-end",
        sortable: true,
        property: "createdDate",
      },
      {
        name: "Driver",
        class: "justify-start",
        sortable: true,
        property: "username",
      },
      { name: "umbrellaTrackId", hidden: true },
      {
        name: "trackTemperature",
        hidden: true,
      },
      {
        name: "avgPathWetness",
        hidden: true,
      },
      {
        name: "avgLapTime",
        hidden: true,
      },
      { name: "isOfficialCar", hidden: true },
      { name: "isOfficialTrack", hidden: true },
    ],
  },
  mapResult: ({
    trackName,
    carName,
    lapTime,
    avgLapTime,
    createdDate,
    username,
    umbrellaTrackId,
    trackTemperature,
    avgPathWetness,
    isOfficialCar,
    isOfficialTrack,
  }: RecordsTableRow): { [key: string]: string } => {
    return {
      trackName: trackName || "-",
      carName: carName || "-",
      lapTime: lapTime && lapTime > 0 ? useSecondsToReadableTime(lapTime) : "-",
      avgLapTime:
        avgLapTime && avgLapTime > 0
          ? useSecondsToReadableTime(avgLapTime)
          : "-",
      createdDate: createdDate || "-",
      username: username || "-",
      umbrellaTrackId: umbrellaTrackId.toString() || "-",
      trackTemperature:
        trackTemperature && trackTemperature
          ? `${trackTemperature.toFixed(1)} ºC`
          : "-",
      avgPathWetness: avgPathWetness
        ? `${(avgPathWetness * 100).toFixed(1)} %`
        : "-",
      isOfficialCar: isOfficialCar ? "rF2.png" : "",
      isOfficialTrack: isOfficialTrack ? "rF2.png" : "",
    };
  },
};
export const trackRecordsTrack: TableHandler = {
  wetSession: false,
  racePaces: false,
  table: {
    tooltip: {
      render(row: RecordsTrackTableRow) {
        const { trackTemperature, avgPathWetness, trackVersion } = row;
        const waterOnTrackTooltip = `<b class="pr-1 font-medium tabular-nums lining-nums"">Water on Track:</b> ${avgPathWetness}<br />`;
        return `
					<b class="pr-1 font-medium tabular-nums lining-nums"">Track Temperature:</b> ${trackTemperature}<br />
					${trackRecordsTrack.wetSession ? waterOnTrackTooltip : ""}
					<b class="pr-1 font-medium tabular-nums lining-nums"">Track Version:</b> ${trackVersion}
				`;
      },
    },
    header: [
      {
        name: "Car",
        class: "justify-start",
        sortable: true,
        property: "carName",
        prependIcon: ({ isOfficialCar }) => isOfficialCar,
      },
      {
        name: "Class",
        class: "justify-start",
        sortable: true,
        property: "className",
      },
      {
        name: "Lap Time",
        class: "justify-end",
        sortable: true,
        property: "lapTime",
        get hidden() {
          return trackRecordsTrack.racePaces;
        },
      },
      {
        name: "Avg Lap Time",
        class: "justify-end",
        sortable: true,
        property: "avgLapTime",
        get hidden() {
          return !trackRecordsTrack.racePaces;
        },
      },
      {
        name: "S1",
        class: "justify-end",
        sortable: true,
        property: "sectorOne",
        get hidden() {
          return trackRecordsTrack.racePaces;
        },
      },
      {
        name: "S2",
        class: "justify-end",
        sortable: true,
        property: "sectorTwo",
        get hidden() {
          return trackRecordsTrack.racePaces;
        },
      },
      {
        name: "S3",
        class: "justify-end",
        sortable: true,
        property: "sectorThree",
        get hidden() {
          return trackRecordsTrack.racePaces;
        },
      },
      {
        name: "Best Lap Time",
        class: "justify-end",
        sortable: true,
        property: "bestLapTime",
        get hidden() {
          return !trackRecordsTrack.racePaces;
        },
      },
      {
        name: "Date",
        class: "justify-start",
        sortable: true,
        property: "createdDate",
      },
      {
        name: "Driver",
        class: "justify-end",
        sortable: true,
        property: "username",
      },
      { name: "trackTemperature", hidden: true },
      { name: "trackVersion", hidden: true },
      { name: "umbrellaCarId", hidden: true },
      { name: "avgPathWetness", hidden: true },
      { name: "isOfficialCar", hidden: true },
    ],
  },
  mapResult: ({
    carName,
    className,
    lapTime,
    avgLapTime,
    sectorOne,
    sectorTwo,
    sectorThree,
    bestLapTime,
    createdDate,
    username,
    trackTemperature,
    trackVersion,
    umbrellaCarId,
    avgPathWetness,
    isOfficialCar,
  }: RecordsTrackTableRow): { [key: string]: string } => {
    return {
      carName: carName || "-",
      className: className || "-",
      lapTime: lapTime && lapTime > 0 ? useSecondsToReadableTime(lapTime) : "-",
      avgLapTime:
        avgLapTime && avgLapTime > 0
          ? useSecondsToReadableTime(avgLapTime)
          : "-",
      sectorOne: sectorOne > 0 ? useSecondsToReadableTime(sectorOne) : "-",
      sectorTwo: sectorTwo > 0 ? useSecondsToReadableTime(sectorTwo) : "-",
      sectorThree:
        sectorThree > 0 ? useSecondsToReadableTime(sectorThree) : "-",
      bestLapTime:
        bestLapTime && bestLapTime > 0
          ? useSecondsToReadableTime(bestLapTime)
          : "-",
      createdDate: createdDate || "-",
      username: username || "-",
      trackVersion: trackVersion || "-",
      umbrellaCarId: umbrellaCarId.toString() || "-",
      trackTemperature:
        trackTemperature && trackTemperature
          ? `${trackTemperature.toFixed(1)} ºC`
          : "-",
      avgPathWetness: avgPathWetness
        ? `${(avgPathWetness * 100).toFixed(1)} %`
        : "-",
      isOfficialCar: isOfficialCar ? "rF2.png" : "",
    };
  },
};
export const trackRecordsTrackCar: TableHandler = {
  wetSession: false,
  racePaces: false,
  table: {
    tooltip: {
      render(row: RecordsTrackCarTableRow) {
        const { trackTemperature, trackVersion, carVersion } = row;
        return `
					<b class="pr-1">Track Temperature:</b> ${trackTemperature}<br />
					<b class="pr-1">Track Version:</b> ${trackVersion} <br />
					<b class="pr-1">Car Version:</b> ${carVersion}
				`;
      },
    },
    header: [
      {
        name: "Rank",
        class: "justify-end",
        sortable: true,
        property: "rank",
      },
      {
        name: "Lap Time",
        class: "justify-end",
        sortable: true,
        property: "lapTime",
        get hidden() {
          return trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "Avg Lap Time",
        class: "justify-end",
        sortable: true,
        property: "avgLapTime",
        get hidden() {
          return !trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "Diff",
        sortable: true,
        property: "diff",
      },
      {
        name: "S1",
        class: "justify-end",
        sortable: true,
        property: "sectorOne",
        get hidden() {
          return trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "S2",
        class: "justify-end",
        sortable: true,
        property: "sectorTwo",
        get hidden() {
          return trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "S3",
        class: "justify-end",
        sortable: true,
        property: "sectorThree",
        get hidden() {
          return trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "Best Lap Time",
        class: "justify-end",
        sortable: true,
        property: "bestLapTime",
        get hidden() {
          return !trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "Best Sectors Lap",
        class: "justify-end",
        sortable: true,
        property: "bestSectorsLap",
        get hidden() {
          return !trackRecordsTrackCar.racePaces;
        },
      },
      {
        name: "Water on Track",
        class: "justify-center",
        sortable: true,
        property: "avgPathWetness",
        get hidden() {
          return !trackRecordsTrackCar.wetSession;
        },
      },
      {
        name: "Date",
        class: "justify-start",
        sortable: true,
        property: "createdDate",
      },
      {
        name: "Driver",
        class: "justify-end",
        sortable: true,
        property: "username",
      },
      { name: "trackTemperature", hidden: true },
      { name: "trackVersion", hidden: true },
      { name: "carVersion", hidden: true },
    ],
  },
  mapResult: ({
    rank,
    lapTime,
    avgLapTime,
    diff,
    sectorOne,
    sectorTwo,
    sectorThree,
    bestLapTime,
    bestSectorsLap,
    avgPathWetness,
    createdDate,
    username,
    trackTemperature,
    trackVersion,
    carVersion,
  }: RecordsTrackCarTableRow): { [key: string]: string | number } => {
    return {
      rank,
      lapTime: lapTime && lapTime > 0 ? useSecondsToReadableTime(lapTime) : "-",
      avgLapTime:
        avgLapTime && avgLapTime > 0
          ? useSecondsToReadableTime(avgLapTime)
          : "-",
      diff: diff ? `+${diff.toFixed(3)}` : "-",
      sectorOne: sectorOne > 0 ? useSecondsToReadableTime(sectorOne) : "-",
      sectorTwo: sectorTwo > 0 ? useSecondsToReadableTime(sectorTwo) : "-",
      sectorThree:
        sectorThree > 0 ? useSecondsToReadableTime(sectorThree) : "-",

      bestLapTime:
        bestLapTime && bestLapTime > 0
          ? useSecondsToReadableTime(bestLapTime)
          : "-",
      bestSectorsLap:
        bestSectorsLap && bestSectorsLap > 0
          ? useSecondsToReadableTime(bestSectorsLap)
          : "-",
      avgPathWetness: avgPathWetness
        ? `${(avgPathWetness * 100).toFixed(1)} %`
        : "-",
      createdDate: createdDate || "-",
      username: username || "-",
      trackVersion: trackVersion || "-",
      carVersion: carVersion || "-",
      trackTemperature:
        trackTemperature && trackTemperature
          ? `${trackTemperature.toFixed(1)} ºC`
          : "-",
    };
  },
};
