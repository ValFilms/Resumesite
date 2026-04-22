import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Camera,
  TrendingUp,
  Car,
  UtensilsCrossed,
  Building2,
  Sandwich,
  BadgeDollarSign,
} from "lucide-react";
import "./index.css";

type TimelineItem = {
  year: string;
  age: string;
  title: string;
  subtitle: string;
  description: string;
  visual:
    | "office"
    | "food-dual"
    | "jersey-mikes"
    | "camera-start"
    | "detail-media"
    | "dealership-lot"
    | "reselling"
    | "ecommerce"
    | "digital-store"
    | "studio-pm"
    | "auto-sales"
    | "graduation"
    | "val-films"
    | "agency"
    | "college-next";
  accent: string;
};

type PanelConfig = {
  icon: React.ReactNode;
  kicker: string;
  line1: string;
  line2: string;
  chips: string[];
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function VisualPanel({ item }: { item: TimelineItem }) {
  const iconProps = { size: 56, className: "visual-icon-svg" };

  const configs: Record<TimelineItem["visual"], PanelConfig> = {
    office: {
      icon: <Building2 {...iconProps} />,
      kicker: "Aurora Home Care",
      line1: "Assistant to the CEO",
      line2: "Office support and admin tasks",
      chips: ["Boxes", "Paperwork", "Errands"],
    },
    "food-dual": {
      icon: <UtensilsCrossed {...iconProps} />,
      kicker: "Smoothie King + Panera Bread",
      line1: "Two jobs at once",
      line2: "Customer service while in high school",
      chips: ["Food Prep", "Rushes", "Time Management"],
    },
    "jersey-mikes": {
      icon: <Sandwich {...iconProps} />,
      kicker: "Jersey Mike’s",
      line1: "Crew Member",
      line2: "Sandwich line, teamwork, busy shifts",
      chips: ["Orders", "Teamwork", "Consistency"],
    },
    "camera-start": {
      icon: <Camera {...iconProps} />,
      kicker: "Freelance Media Begins",
      line1: "Detail shops and automotive content",
      line2: "First serious creative work",
      chips: ["Filming", "Editing", "Content"],
    },
    "detail-media": {
      icon: <Camera {...iconProps} />,
      kicker: "Relentless Perfection",
      line1: "Freelance Videographer",
      line2: "Automotive detailing content",
      chips: ["Cars", "Promotion", "Visuals"],
    },
    "dealership-lot": {
      icon: <Car {...iconProps} />,
      kicker: "CDJR of Doylestown",
      line1: "Lot Attendant",
      line2: "Inventory and presentation",
      chips: ["Vehicles", "Lot", "Sales Floor"],
    },
    reselling: {
      icon: <TrendingUp {...iconProps} />,
      kicker: "Reselling & Flipping",
      line1: "Clothes, items, and cars",
      line2: "Entrepreneurial side income",
      chips: ["Buying", "Selling", "Profit"],
    },
    ecommerce: {
      icon: <Briefcase {...iconProps} />,
      kicker: "Game Gallery",
      line1: "eCommerce Sales Assistant",
      line2: "Listings and online sales",
      chips: ["eBay", "Products", "Commission"],
    },
    "digital-store": {
      icon: <TrendingUp {...iconProps} />,
      kicker: "First Online Business",
      line1: "Digital product store",
      line2: "Lightroom presets and lessons learned",
      chips: ["Launch", "Testing", "Learning"],
    },
    "studio-pm": {
      icon: <Camera {...iconProps} />,
      kicker: "Bazooka Studios",
      line1: "Content Creator → Project Manager",
      line2: "Clients, editing, fulfillment",
      chips: ["Editing", "Clients", "Delivery"],
    },
    "auto-sales": {
      icon: <BadgeDollarSign {...iconProps} />,
      kicker: "Faulkner Honda of Doylestown",
      line1: "KBB ICO Specialist",
      line2: "Vehicle acquisition and sales process",
      chips: ["Leads", "Valuations", "Sales"],
    },
    graduation: {
      icon: <GraduationCap {...iconProps} />,
      kicker: "June 2024",
      line1: "Council Rock High School South",
      line2: "Graduation milestone",
      chips: ["School", "Work", "Momentum"],
    },
    "val-films": {
      icon: <Camera {...iconProps} />,
      kicker: "Val Films",
      line1: "Freelance content brand",
      line2: "Automotive visual storytelling",
      chips: ["Brand", "Video", "Creative"],
    },
    agency: {
      icon: <TrendingUp {...iconProps} />,
      kicker: "Ignited Content",
      line1: "Founder",
      line2: "Paid ads and lead generation",
      chips: ["Meta Ads", "Google Ads", "Growth"],
    },
    "college-next": {
      icon: <GraduationCap {...iconProps} />,
      kicker: "Now",
      line1: "Bucks County Community College → Penn State",
      line2: "Psychology and clinical research path",
      chips: ["College", "Transfer", "Research"],
    },
  };

  const panel = configs[item.visual];

  return (
    <div className={`visual-panel ${item.accent}`}>
      <div className="visual-glow visual-glow-one" />
      <div className="visual-glow visual-glow-two" />
      <div className="visual-grid" />

      <div className="visual-content">
        <div className="visual-top">
          <div>
            <p className="visual-kicker">{panel.kicker}</p>
            <p className="visual-age">Age {item.age}</p>
          </div>
          <div className="visual-icon-wrap">{panel.icon}</div>
        </div>

        <div className="visual-middle">
          <h2 className="visual-title">{panel.line1}</h2>
          <p className="visual-subtitle">{panel.line2}</p>
        </div>

        <div className="chip-row">
          {panel.chips.map((chip: string) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ValResumeSite() {
  const timeline = useMemo<TimelineItem[]>(
    () => [
      {
        year: "2021",
        age: "15",
        title: "Aurora Home Care",
        subtitle: "Assistant to the CEO",
        description:
          "This was my first job. I helped with office support tasks like carrying boxes, preparing materials, simple paperwork, and day-to-day operational help. It introduced me to professional responsibility early.",
        visual: "office",
        accent: "accent-office",
      },
      {
        year: "2022",
        age: "16",
        title: "Smoothie King + Panera Bread",
        subtitle: "Working two jobs at once",
        description:
          "I worked both jobs at the same time while I was still in high school. That period taught me time management, consistency, and how to keep up in fast-paced customer service environments while balancing school and transportation.",
        visual: "food-dual",
        accent: "accent-food",
      },
      {
        year: "2022–2023",
        age: "16–17",
        title: "Jersey Mike’s",
        subtitle: "Crew Member",
        description:
          "This was one of my more notable early jobs because I stayed there longer. I built consistency in customer service, teamwork, speed, and handling pressure during busy shifts at Jersey Mike’s.",
        visual: "jersey-mikes",
        accent: "accent-jersey",
      },
      {
        year: "2023",
        age: "17",
        title: "Freelance Media Begins",
        subtitle: "Detail shops and automotive content",
        description:
          "Around this time I started filming for detailing businesses and getting serious about content. This was the beginning of me realizing I wanted to pursue filming, marketing, and creative business work.",
        visual: "camera-start",
        accent: "accent-camera",
      },
      {
        year: "2023",
        age: "17",
        title: "Relentless Perfection",
        subtitle: "Freelance Videographer",
        description:
          "I did videography work for an automotive detailing brand, capturing visuals that helped market their services. It gave me more reps, more confidence, and more understanding of how content can drive business.",
        visual: "detail-media",
        accent: "accent-detail",
      },
      {
        year: "2023",
        age: "17",
        title: "CDJR of Doylestown",
        subtitle: "Lot Attendant",
        description:
          "Working at the dealership taught me how inventory, presentation, and the sales environment function behind the scenes. It also kept me close to the automotive world that I was already interested in.",
        visual: "dealership-lot",
        accent: "accent-dealer",
      },
      {
        year: "2023–2024",
        age: "17–18",
        title: "Reselling & Flipping",
        subtitle: "Clothes, items, and helping flip cars",
        description:
          "Outside of regular jobs, I made money through reselling clothes, other items, and helping friends flip cars. That side of my life pushed me further into entrepreneurship and problem-solving.",
        visual: "reselling",
        accent: "accent-resell",
      },
      {
        year: "2023–2024",
        age: "17–18",
        title: "Game Gallery",
        subtitle: "eCommerce Sales Assistant",
        description:
          "At Game Gallery I helped set up eBay listings and supported online sales. It gave me hands-on experience with marketplaces, product positioning, and commission-based work.",
        visual: "ecommerce",
        accent: "accent-ecommerce",
      },
      {
        year: "2024",
        age: "18",
        title: "First Online Business Attempt",
        subtitle: "Digital product store",
        description:
          "I launched a store selling Lightroom presets and digital products. It did not last, but it taught me real lessons about testing ideas, failure, and learning quickly.",
        visual: "digital-store",
        accent: "accent-digital",
      },
      {
        year: "2024–2025",
        age: "18–19",
        title: "Bazooka Studios",
        subtitle: "Content Creator to Project Manager",
        description:
          "I started as a content creator and grew into more responsibility, handling client communication, fulfillment, editing, and project management. This role sharpened both my creative and operational skills.",
        visual: "studio-pm",
        accent: "accent-studio",
      },
      {
        year: "2024",
        age: "18",
        title: "Faulkner Honda of Doylestown",
        subtitle: "KBB ICO Specialist",
        description:
          "This was a sales-focused dealership role where I helped acquire used vehicles and worked with customers through the Kelley Blue Book Instant Cash Offer process.",
        visual: "auto-sales",
        accent: "accent-sales",
      },
      {
        year: "2024",
        age: "18",
        title: "Graduated High School",
        subtitle: "Council Rock High School South",
        description:
          "I graduated in June 2024 while already working, freelancing, and building business experience. That overlap really shaped how I think about work and momentum.",
        visual: "graduation",
        accent: "accent-grad",
      },
      {
        year: "2025",
        age: "19",
        title: "Val Films",
        subtitle: "Freelance content brand",
        description:
          "I expanded freelance creative work with a stronger personal brand around filming, editing, and content production for automotive businesses.",
        visual: "val-films",
        accent: "accent-valfilms",
      },
      {
        year: "2025–Present",
        age: "19–20",
        title: "Ignited Content",
        subtitle: "Founder",
        description:
          "I run a paid advertising agency currently working with 10 local service-based businesses. I help seal coaters, tint shops, ceramic coating companies, roofing crews, tuckpointing companies, and other super-local trades generate leads and grow their revenue. Using Meta (Facebook & Instagram) and Google Ads, my clients typically add $10,000–$30,000 in additional monthly revenue through targeted lead generation campaigns.",
        visual: "agency",
        accent: "accent-agency",
      },
      {
        year: "Now",
        age: "Current",
        title: "College + Next Chapter",
        subtitle: "Bucks County Community College to Penn State",
        description:
          "I am currently studying psychology, preparing to transfer to Penn State, and planning a long-term path into clinical research while continuing to build business experience.",
        visual: "college-next",
        accent: "accent-college",
      },
    ],
    []
  );

  const [progress, setProgress] = useState<number>(timeline.length - 1);
  const total = timeline.length - 1;
  const currentIndex = Math.round(progress);
  const active = timeline[currentIndex];
  const scrubberPercent = total === 0 ? 0 : (progress / total) * 100;

  return (
    <div className="page-shell">
      <div className="page-inner">
        <div className="topbar">
          <div>
            <p className="eyebrow">Interactive Life Timeline</p>
            <h1 className="site-title">Val Igolkin</h1>
          <p className="contact-info">
            <a href="tel:+12679122601">+1 267-912-2601</a>
            {" · "}
            <a href="mailto:Val@IgnitedContent.co">Val@IgnitedContent.co</a>
          </p>
          </div>
          <div className="topbar-meta">
            <p>{active.year}</p>
            <p>Age {active.age}</p>
          </div>
        </div>

        <div className="main-grid">
          <div className="card card-visual">
            <motion.div
              key={`visual-${currentIndex}`}
              initial={{ opacity: 0.98, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12 }}
              className="motion-fill"
            >
              <VisualPanel item={active} />
            </motion.div>
          </div>

          <div className="card card-text">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0.98, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12 }}
              className="text-wrap"
            >
              <div>
                <p className="section-label">{active.subtitle}</p>
                <h2 className="entry-title">{active.title}</h2>
                <p className="entry-description">{active.description}</p>
              </div>

              <div className="scrubber-wrap">
                <div className="scrubber-meta">
                  <span>Drag through time</span>
                  <span>
                    {currentIndex + 1} / {timeline.length}
                  </span>
                </div>

                <div className="scrubber-box">
                  <div
                    className="scrubber-track-wrap"
                    onPointerDown={(e: React.PointerEvent<HTMLDivElement>) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = clamp(e.clientX - rect.left, 0, rect.width);
                      setProgress((x / rect.width) * total);
                      e.currentTarget.setPointerCapture?.(e.pointerId);
                    }}
                    onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => {
                      if (e.buttons !== 1) return;
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = clamp(e.clientX - rect.left, 0, rect.width);
                      setProgress((x / rect.width) * total);
                    }}
                  >
                    <div className="scrubber-track" />
                    <div
                      className="scrubber-progress"
                      style={{ width: `${scrubberPercent}%` }}
                    />
                    {timeline.map((_, index) => {
                      const left = total === 0 ? 0 : (index / total) * 100;
                      const activeDot = index === currentIndex;
                      return (
                        <div
                          key={index}
                          className={`scrubber-dot ${activeDot ? "active" : ""}`}
                          style={{ left: `${left}%` }}
                        />
                      );
                    })}
                    <motion.div
                      className="scrubber-handle"
                      style={{ left: `${scrubberPercent}%` }}
                      transition={{ type: "tween", duration: 0.03 }}
                    />
                  </div>

                  <div className="scrubber-ends">
                    <span>Start</span>
                    <span>Now</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
