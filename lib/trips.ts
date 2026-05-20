export type Trip = {
  slug: "cruise" | "worldwide" | "flystay" | "mexico" | "sunscape" | "cash";
  tag: string;
  title: string;
  sub: string;
  valueLabel: string;
  valueStrong: string;
  perks: string[];
  cta: string;
  affiliateUrl: string;
  photo: string;
  featured?: boolean;
};

export const TRIPS: Trip[] = [
  {
    slug: "cruise",
    tag: "Cruise · 5 Days / 4 Nights",
    title: "5-Day / 4-Night Caribbean Cruise",
    sub: "Carnival, Royal Caribbean, Norwegian, or Princess. Three itineraries to choose from.",
    valueLabel: "Retail Value",
    valueStrong: "up to $899",
    perks: [
      "Two adults · unlimited buffets & entertainment",
      "Miami → Cozumel · Port Canaveral → Nassau · LA → Ensenada",
      "Just pay taxes & port fees",
      "24 months to travel · live booking support",
    ],
    cta: "Choose This Trip →",
    affiliateUrl:
      "https://www.rewardsandincentives.com/?bcode=524b9529934779379dac68fc962905a7",
    photo: "/trips/cruise.jpg",
    featured: true,
  },
  {
    slug: "worldwide",
    tag: "Worldwide Resort · 7 Nights",
    title: "Seven Nights Luxury Resort",
    sub: "A full week of luxury resort accommodations across more than 3,500 properties worldwide.",
    valueLabel: "Retail Value",
    valueStrong: "up to $1,249",
    perks: [
      "Full week — your destination, your dates",
      "3,500+ luxury resort locations",
      "Based on $178.42 per night value",
      "24 months to travel · live travel-agent booking",
    ],
    cta: "Choose This Trip →",
    affiliateUrl:
      "https://www.rewardsandincentives.com/?bcode=c434bf6e4ee355f93f156e4d3e88f653",
    photo: "/trips/worldwide.jpg",
  },
  {
    slug: "flystay",
    tag: "Fly & Stay · USA",
    title: "Airfare + 2 Nights Hotel for Two",
    sub: "Roundtrip flights for two plus two nights' hotel in 23 of America's most popular destinations.",
    valueLabel: "Retail Value",
    valueStrong: "up to $999",
    perks: [
      "Vegas, Orlando, Miami, NOLA, Nashville, Denver and more",
      "Departures from 80+ U.S. airports",
      "Just pay taxes & fees · book by phone with a live agent",
      "24 months to travel · 30-day advance booking",
    ],
    cta: "Choose This Trip →",
    affiliateUrl:
      "https://www.rewardsandincentives.com/?bcode=d870cec6b0237414cb1bf7e6412d4248",
    photo: "/trips/flystay.jpg",
  },
  {
    slug: "mexico",
    tag: "Mexico · Family-Friendly",
    title: "Four-Night Mexico Resort Getaway",
    sub: "Four nights in Mazatlan, Acapulco, Puerto Vallarta, Nuevo Vallarta, or Cancun (Mayan Riviera).",
    valueLabel: "Retail Value",
    valueStrong: "up to $699",
    perks: [
      "Two adults plus up to two children (11 & under)",
      "Choice of five legendary Mexico resort cities",
      "Just pay taxes & fees ($38 per night)",
      "24 months to travel · 30-day advance booking",
    ],
    cta: "Choose This Trip →",
    affiliateUrl:
      "https://www.rewardsandincentives.com/?bcode=28f6b07b4f379ec1aca3e1e0ccae5699",
    photo: "/trips/mexico.jpg",
  },
  {
    slug: "sunscape",
    tag: "All-Inclusive · Mexico or DR",
    title: "Two-Night All-Inclusive Resort",
    sub: "Sunscape resorts in Cozumel, Puerto Vallarta, Punta Cana, or Puerto Plata. Meals & drinks included.",
    valueLabel: "Retail Value",
    valueStrong: "up to $2,394",
    perks: [
      "Two adults · all-inclusive food & beverage",
      "Five Sunscape properties to choose from",
      "Just pay taxes & fees ($30 per person, per night)",
      "24 months to travel · 30-day advance booking",
    ],
    cta: "Choose This Trip →",
    affiliateUrl:
      "https://www.rewardsandincentives.com/?bcode=8c76cb6ba579300f858febc2d795d501",
    photo: "/trips/sunscape.jpg",
  },
  {
    slug: "cash",
    tag: "Flexible · Travel + Dining Cash",
    title: "$500 Travel + $500 Dining Cash",
    sub: "Prefer to choose your own adventure? $1,000 in stackable cash savings — your hotel, your restaurants, your call.",
    valueLabel: "True Cash Value",
    valueStrong: "$1,000",
    perks: [
      "$500 hotel cash · 400,000+ properties worldwide · up to 50% off",
      "$500 dining cash · twenty $25 credits at 18,000+ U.S. restaurants",
      "No blackout dates · book any dates that work for you",
      "12 months to use after activation",
    ],
    cta: "Choose This Option →",
    affiliateUrl:
      "https://www.rewardsandincentives.com/?bcode=06c6a3452290fc5e562678da253f7b68",
    photo: "/trips/cash.jpg",
  },
];
