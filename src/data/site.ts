// All site content lives here. Pages read from these lists, so adding a
// service, city, review or blog post is a matter of adding one entry.

// Public URL of the site, used for share links and the sitemap. Set
// NEXT_PUBLIC_SITE_URL once a custom domain is connected; until then Vercel's
// production address is used.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const business = {
  name: "RainKing",
  legalName: "RainKing Irrigation",
  phone: "(515) 277-9801",
  phoneHref: "tel:+15152779801",
  email: "service@rainkingiowa.com",
  address: "4120 NE Industrial Pkwy, Des Moines, IA 50313",
  addressLines: ["4120 NE Industrial Pkwy, Des", "Moines, IA 50313"],
  hours: "Mon–Fri 7am–6pm · Sat 8am–2pm",
  weekdayHours: "Mon–Fri 7am–6pm",
  saturdayHours: "Sat 8am–2pm",
  region: "Greater Des Moines & Central Iowa",
  founded: 1988,
  years: "37+",
};

export type IconName =
  | "drops"
  | "wrench"
  | "sun"
  | "snowflake"
  | "shield-check"
  | "bulb"
  | "sparkles"
  | "award"
  | "map-pin"
  | "users"
  | "star"
  | "truck"
  | "calendar"
  | "check-circle"
  | "bell"
  | "search"
  | "percent"
  | "heart"
  | "phone"
  | "mail"
  | "clock"
  | "shield";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  image: string;
  intro: string;
  included: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "sprinkler-installation",
    name: "Sprinkler Installation",
    short: "Custom irrigation systems designed for long-term efficiency and healthy lawns.",
    icon: "drops",
    image: "/images/sprinkler-head.jpg",
    intro:
      "Professionally designed and installed underground irrigation systems built around your property's layout, soil, and sun exposure. We use commercial-grade components and smart controllers to deliver even coverage, lower water bills, and a lawn that stays green all season.",
    included: [
      "Custom zone design for full coverage",
      "Commercial-grade heads and piping",
      "Smart weather-sensing controllers",
      "Rain & moisture sensors included",
      "Minimal-damage trenching",
      "Full warranty on parts and labor",
    ],
    process: [
      { title: "Site Visit", text: "We measure, map sun exposure, and check water pressure." },
      { title: "Custom Design", text: "Zoned layout engineered for even, efficient coverage." },
      { title: "Professional Install", text: "Clean trenching, precise heads, smart controller setup." },
      { title: "Walkthrough", text: "We test every zone and show you how to run it." },
    ],
    faqs: [
      {
        q: "How long does installation take?",
        a: "Most residential systems are installed in one to two days. Larger or commercial properties can take longer — we'll give you a firm schedule with your quote.",
      },
      {
        q: "Will my yard be torn up?",
        a: "No. We use pulling equipment that slices a narrow line through the turf instead of digging open trenches. Most lines are barely visible within a week or two.",
      },
      {
        q: "Do you offer a warranty?",
        a: "Yes. Every new installation is backed by a warranty on parts and labor. We'll walk you through the details before any work starts.",
      },
    ],
  },
  {
    slug: "sprinkler-repair",
    name: "Sprinkler Repair",
    short: "Fast diagnosis and professional repair for all major irrigation systems.",
    icon: "wrench",
    image: "/images/technician-repair.jpg",
    intro:
      "Broken heads, leaking valves, dead zones, or a controller that won't cooperate — our technicians diagnose the problem quickly and fix it right the first time. We service every major brand, whether we installed the system or not.",
    included: [
      "Broken & clogged head replacement",
      "Leak detection and line repair",
      "Valve and solenoid repair",
      "Controller troubleshooting",
      "Wiring diagnosis and repair",
      "Coverage and pressure adjustments",
    ],
    process: [
      { title: "Diagnose", text: "We run every zone and pinpoint the cause." },
      { title: "Upfront Quote", text: "You approve the price before any work starts." },
      { title: "Repair", text: "Most repairs are completed the same visit." },
      { title: "Test", text: "We re-run the system to confirm everything works." },
    ],
    faqs: [
      {
        q: "Do you repair systems you didn't install?",
        a: "Yes. We service all major irrigation brands, regardless of who installed the system.",
      },
      {
        q: "How fast can you get here?",
        a: "We offer same-day callbacks for urgent repairs and schedule most repair visits within a few days.",
      },
      {
        q: "Will I know the cost before you start?",
        a: "Always. We give you an upfront quote and only start work once you approve it.",
      },
    ],
  },
  {
    slug: "spring-start-up",
    name: "Spring Start-Up",
    short: "Prepare your irrigation system for the growing season.",
    icon: "sun",
    image: "/images/home-lawn.jpg",
    intro:
      "Winter is hard on irrigation systems. Our spring start-up safely re-pressurizes your system, checks every zone for damage, and programs your controller for the season so your lawn gets the water it needs from day one.",
    included: [
      "Slow, safe system re-pressurization",
      "Zone-by-zone inspection",
      "Head adjustment and cleaning",
      "Leak and freeze-damage check",
      "Controller programming for the season",
      "Battery replacement in controller",
    ],
    process: [
      { title: "Turn On", text: "We open the main valve slowly to protect pipes and fittings." },
      { title: "Inspect", text: "Every zone is run and checked for leaks or damage." },
      { title: "Adjust", text: "Heads are cleaned, aligned, and set for proper coverage." },
      { title: "Program", text: "Your controller is set for spring watering." },
    ],
    faqs: [
      {
        q: "When should I schedule my start-up?",
        a: "In Central Iowa, most start-ups happen from mid-April through May, once the risk of a hard freeze has passed.",
      },
      {
        q: "Can I turn my system on myself?",
        a: "You can, but opening the main valve too quickly can crack fittings. A professional start-up also catches winter damage before it wastes water.",
      },
      {
        q: "Is start-up included in maintenance plans?",
        a: "Yes. Spring start-up is included in every RainKing maintenance plan.",
      },
    ],
  },
  {
    slug: "winterization",
    name: "Winterization",
    short: "Protect your investment before winter arrives.",
    icon: "snowflake",
    image: "/images/winterization.jpg",
    intro:
      "Water left in your lines can freeze, expand, and crack pipes, valves, and heads. Our professional compressed-air blowout clears every zone completely, so your system makes it through an Iowa winter without damage.",
    included: [
      "Compressed-air blowout of every zone",
      "Backflow device drain-down",
      "Main shut-off and valve check",
      "Controller set to off / rain mode",
      "Service documented for your records",
      "Notes on any repairs needed in spring",
    ],
    process: [
      { title: "Shut Off", text: "We close the water supply to the system." },
      { title: "Blow Out", text: "Each zone is cleared with commercial compressed air." },
      { title: "Protect", text: "The backflow device is drained and protected." },
      { title: "Document", text: "We record the service and note any issues for spring." },
    ],
    faqs: [
      {
        q: "When should I winterize in Iowa?",
        a: "The safe window in Central Iowa runs from late September through mid-October, before the first hard freeze.",
      },
      {
        q: "What happens if I skip it?",
        a: "Freezing water can crack PVC, split brass fittings, and destroy heads. A single skipped winterization can cost thousands in spring repairs.",
      },
      {
        q: "Is winterization included in maintenance plans?",
        a: "Yes. Every maintenance plan includes annual winterization, and we'll contact you to schedule it.",
      },
    ],
  },
  {
    slug: "backflow-testing",
    name: "Backflow Testing",
    short: "Certified testing and compliance services.",
    icon: "shield-check",
    image: "/images/backflow-testing.jpg",
    intro:
      "Your backflow preventer keeps irrigation water from flowing back into the drinking water supply. Many Central Iowa cities require annual testing. Our certified testers handle the test, any repairs, and the paperwork.",
    included: [
      "Annual certified backflow test",
      "Test report filed with your city",
      "Repair and rebuild if needed",
      "Device replacement options",
      "Reminders before your due date",
      "Residential and commercial devices",
    ],
    process: [
      { title: "Schedule", text: "We book your test ahead of your city's deadline." },
      { title: "Test", text: "A certified tester checks the device with calibrated gauges." },
      { title: "Repair", text: "If it fails, we quote and repair it on the spot when possible." },
      { title: "File", text: "We submit the results to your water utility." },
    ],
    faqs: [
      {
        q: "Is backflow testing required?",
        a: "Many Central Iowa water utilities require annual testing. We can tell you your city's requirements.",
      },
      {
        q: "How long does a test take?",
        a: "Most tests take 20–30 minutes.",
      },
      {
        q: "What if my device fails?",
        a: "We'll explain why, give you an upfront quote, and in most cases repair it the same visit.",
      },
    ],
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    short: "Professionally designed outdoor lighting that enhances your property after sunset.",
    icon: "bulb",
    image: "/images/landscape-lighting.jpg",
    intro:
      "Low-voltage LED landscape lighting adds beauty, safety, and security to your property. We design a lighting plan around your home's architecture and landscape, then install durable fixtures that look great for years.",
    included: [
      "Custom lighting design",
      "Commercial-grade LED fixtures",
      "Path, accent, and up-lighting",
      "Timers and smart controls",
      "Hidden, buried wiring",
      "Warranty on fixtures and labor",
    ],
    process: [
      { title: "Night Consultation", text: "We look at your property after dark to plan the design." },
      { title: "Design", text: "Fixture placement chosen to highlight your home and landscape." },
      { title: "Install", text: "Clean installation with wiring buried out of sight." },
      { title: "Fine-Tune", text: "We adjust angles and timers so everything looks right." },
    ],
    faqs: [
      {
        q: "How much does LED lighting cost to run?",
        a: "Very little. Low-voltage LED fixtures use a fraction of the energy of older halogen systems.",
      },
      {
        q: "Can you add to my existing lighting?",
        a: "Yes. We can expand, repair, or upgrade an existing system.",
      },
      {
        q: "Will the fixtures survive Iowa winters?",
        a: "We use commercial-grade fixtures built for year-round outdoor use.",
      },
    ],
  },
  {
    slug: "holiday-lighting",
    name: "Holiday Lighting",
    short: "Custom seasonal lighting installations for homes and businesses.",
    icon: "sparkles",
    image: "/images/holiday-lighting.jpg",
    intro:
      "Skip the ladder. We design, install, maintain, and take down custom holiday lighting for homes and businesses, so your property shines all season without the hassle.",
    included: [
      "Custom holiday lighting design",
      "Professional-grade LED lights",
      "Rooflines, trees, and landscaping",
      "Timers set for you",
      "Service calls during the season",
      "Take-down after the holidays",
    ],
    process: [
      { title: "Design", text: "We plan a look that fits your home or business." },
      { title: "Install", text: "Our crew hangs everything safely — no ladders for you." },
      { title: "Maintain", text: "If a strand goes out, we fix it." },
      { title: "Take Down", text: "We remove everything after the season." },
    ],
    faqs: [
      {
        q: "When should I book holiday lighting?",
        a: "Book early — fall install slots fill quickly. Most installs happen in late October and November.",
      },
      {
        q: "Do I need to buy the lights?",
        a: "No. We supply professional-grade lights as part of the service.",
      },
      {
        q: "Do you take everything down?",
        a: "Yes. Take-down after the season is included.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type City = { slug: string; name: string; blurb: string };

export const cities: City[] = [
  { slug: "des-moines", name: "Des Moines", blurb: "RainKing's home base and the heart of Central Iowa." },
  { slug: "west-des-moines", name: "West Des Moines", blurb: "Serving West Des Moines homes, HOAs, and businesses for decades." },
  { slug: "waukee", name: "Waukee", blurb: "Keeping one of Iowa's fastest-growing communities green." },
  { slug: "ankeny", name: "Ankeny", blurb: "Trusted irrigation service for Ankeny homeowners and businesses." },
  { slug: "johnston", name: "Johnston", blurb: "Local sprinkler experts serving Johnston neighborhoods." },
  { slug: "clive", name: "Clive", blurb: "Dependable irrigation care for Clive properties." },
  { slug: "urbandale", name: "Urbandale", blurb: "Serving Urbandale lawns and landscapes year-round." },
  { slug: "grimes", name: "Grimes", blurb: "Sprinkler installation and service for Grimes homeowners." },
  { slug: "norwalk", name: "Norwalk", blurb: "Professional irrigation service just south of Des Moines." },
  { slug: "altoona", name: "Altoona", blurb: "Keeping Altoona lawns green, healthy, and easy to maintain." },
  { slug: "pleasant-hill", name: "Pleasant Hill", blurb: "Local irrigation experts serving Pleasant Hill." },
  { slug: "bondurant", name: "Bondurant", blurb: "Sprinkler and lighting services for Bondurant properties." },
  { slug: "indianola", name: "Indianola", blurb: "Serving Indianola homes and businesses." },
  { slug: "ames", name: "Ames", blurb: "Bringing RainKing service north to Ames." },
  { slug: "adel", name: "Adel", blurb: "Irrigation installation and care for Adel properties." },
  { slug: "van-meter", name: "Van Meter", blurb: "Dependable sprinkler service for Van Meter." },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export type Review = { name: string; city: string; service: string; text: string };

export const reviews: Review[] = [
  {
    name: "M. Miller",
    city: "West Des Moines",
    service: "Sprinkler Service",
    text: "Great communication throughout service with a very timely and professional team!",
  },
  {
    name: "W. Reed",
    city: "West Des Moines",
    service: "Sprinkler Maintenance",
    text: "Always take great care of me and my sprinkler system.",
  },
  {
    name: "Dave K.",
    city: "West Des Moines",
    service: "Seasonal Maintenance",
    text: "Rain King has taken care of our irrigation system for years. Always prompt, professional, and reliable on start-ups and winterization.",
  },
  {
    name: "Mark T.",
    city: "Des Moines",
    service: "Sprinkler Repair",
    text: "Outstanding service! The technicians arrived right on time, quickly diagnosed our sprinkler leak, and fixed it same day.",
  },
  {
    name: "Sarah B.",
    city: "Waukee",
    service: "Irrigation Care",
    text: "Super responsive team. They handle our seasonal start-up and blowout every year without fail. Highly recommend Rain King!",
  },
  {
    name: "Chris P.",
    city: "Ankeny",
    service: "Sprinkler Installation",
    text: "The best sprinkler specialists in Central Iowa. Clean work, fair pricing, and great communication from start to finish.",
  },
];

export const cityFaqs = (city: string) => [
  {
    q: "How quickly can you get to my home?",
    a: `We schedule most service visits in ${city} within a few days, and offer same-day callbacks for urgent repairs.`,
  },
  {
    q: "Do you service systems you didn't install?",
    a: "Yes. We service all major irrigation brands, regardless of who installed the system.",
  },
  {
    q: "Is there a service call fee?",
    a: "We'll tell you about any fees upfront, before we schedule the visit. No surprise charges.",
  },
  {
    q: "Do you offer maintenance plans in my area?",
    a: `Yes. All of our maintenance plans are available in ${city}.`,
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "when-to-winterize-your-sprinkler-system-in-iowa",
    title: "When to Winterize Your Sprinkler System in Iowa",
    category: "Seasonal",
    date: "Sep 12, 2025",
    readTime: "5 min read",
    excerpt:
      "Freeze damage is the #1 cause of costly irrigation repairs. Here's exactly when to winterize in Central Iowa and what happens if you wait.",
    image: "/images/home-lawn.jpg",
    featured: true,
    body: [
      "In Central Iowa, the safe window for winterization runs from late September through mid-October. The goal is to complete blowout before the first hard freeze — typically mid-October in the Des Moines metro.",
      "Why does timing matter? Water left inside pipes, valves, and heads expands when it freezes. That expansion cracks PVC, splits brass, and destroys sprinkler heads. A single skipped winterization can cost thousands in spring repairs.",
      "RainKing uses professional compressed-air blowout to clear every zone completely. We document each service for your records and warranty. If you're on a maintenance plan, winterization is included — and we'll call you to schedule it automatically.",
    ],
  },
  {
    slug: "how-much-water-does-my-iowa-lawn-need",
    title: "How Much Water Does My Iowa Lawn Actually Need?",
    category: "Lawn Care",
    date: "Jul 8, 2025",
    readTime: "6 min read",
    excerpt:
      "Overwatering is just as damaging as underwatering. A simple guide to dialing in the right schedule for Central Iowa lawns.",
    image: "/images/sprinkler-head.jpg",
    body: [
      "Most Central Iowa lawns need about one to one and a half inches of water per week during the growing season, including rainfall. In the heat of July and August, that number can climb toward the upper end.",
      "Water deeply and less often. Two or three longer watering sessions per week encourage deep roots that handle heat and drought better than shallow, daily watering.",
      "Water early in the morning, ideally finishing before 9am. Less water is lost to evaporation, and grass dries off during the day, which helps prevent disease.",
      "A smart, weather-sensing controller takes the guesswork out of all of this by adjusting your schedule automatically based on local conditions. RainKing can install or upgrade one on most systems.",
    ],
  },
  {
    slug: "7-signs-your-sprinkler-system-needs-repair",
    title: "7 Signs Your Sprinkler System Needs Repair",
    category: "Maintenance",
    date: "Jun 2, 2025",
    readTime: "4 min read",
    excerpt:
      "Catch small problems before they become big ones. Here's what to watch for between service visits.",
    image: "/images/technician-repair.jpg",
    body: [
      "1. Dry or brown spots in an otherwise green lawn usually mean a clogged, broken, or misaligned head.",
      "2. Soggy areas or standing water can point to a leaking line or a valve that won't fully close.",
      "3. A higher-than-normal water bill is often the first sign of a hidden leak.",
      "4. Heads that won't pop up or retract are typically clogged with dirt or damaged.",
      "5. Low water pressure across a zone can mean a leak, a partially closed valve, or a damaged line.",
      "6. A zone that won't turn on often comes down to a wiring or solenoid problem.",
      "7. Water spraying the driveway, house, or street means heads need adjusting — and you're paying for wasted water.",
      "Spot any of these? Give RainKing a call. We diagnose problems quickly and give you an upfront quote before any work starts.",
    ],
  },
  {
    slug: "how-landscape-lighting-increases-curb-appeal",
    title: "How Landscape Lighting Increases Curb Appeal (and Value)",
    category: "Lighting",
    date: "May 15, 2025",
    readTime: "5 min read",
    excerpt:
      "Thoughtful outdoor lighting does more than look good — it adds safety, security, and real resale value.",
    image: "/images/landscape-lighting.jpg",
    body: [
      "Your home spends half its life in the dark. Well-designed landscape lighting lets people see and enjoy it after sunset, too.",
      "Lighting makes a property safer. Lit paths, steps, and entries reduce trips and falls, and a well-lit yard is far less appealing to intruders.",
      "It also makes a strong first impression. Up-lighting on trees and architecture and soft path lighting create curb appeal that buyers notice.",
      "Modern low-voltage LED systems use very little energy and last for years. RainKing designs each system around your home and installs it with wiring hidden out of sight.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maintenance-plans", label: "Maintenance Plans" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
