import img1 from "@/assets/ascend-1.webp.asset.json";
import img2 from "@/assets/ascend-2.webp.asset.json";
import img3 from "@/assets/ascend-3.webp.asset.json";
import img4 from "@/assets/ascend-4.webp.asset.json";
import img5 from "@/assets/ascend-5.webp.asset.json";
import logo from "@/assets/logo.webp.asset.json";

export const BIZ = {
  name: "Ascend Fitness",
  phone: "063612 69494",
  phoneIntl: "+916361269494",
  whatsapp: "https://wa.me/916361269494",
  rating: 5.0,
  reviews: 12,
  addressLine: "2nd Floor, 46, 10th Cross Rd, off West of Chord Road, above Tata Motors",
  area: "West of Chord Road, Stage 2, Rajajinagar",
  city: "Bengaluru",
  state: "Karnataka",
  postal: "560086",
  country: "IN",
  hours: "Mon–Sun · Closes 10:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ascend+Fitness+Rajajinagar+Bengaluru",
  mapsEmbed:
    "https://www.google.com/maps?q=Ascend+Fitness+10th+Cross+Rd+Rajajinagar+Bengaluru&output=embed",
};

export const IMG = {
  hero: img1.url,
  floor: img2.url,
  // Use images from the public/ folder (place files there as gym-cardio2.png and gym-cardio.png)
  // First image (cardio 1) -> gym-cardio2.png, Second image (cardio 2) -> gym-cardio.png
  cardio: img3.url,
  mural: img4.url,
  weights: img5.url,
  logo: logo.url,
};

export const GALLERY = [
  { src: img1.url, alt: "Ascend Fitness premium gym floor in Rajajinagar, Bengaluru" },
  { src: img2.url, alt: "Strength training area with squat racks at Ascend Fitness Rajajinagar" },
  { src: img3.url, alt: "Cardio zone with treadmills at Ascend Fitness Bengaluru" },
  { src: IMG.cardio, alt: "Ascend Fitness brand wall inside the Rajajinagar gym" },
  { src: img5.url, alt: "Free weights and dumbbell rack at Ascend Fitness gym" },
];

export const SERVICES = [
  {
    slug: "personal-training",
    title: "Personal Training",
    blurb: "1-on-1 coaching tailored to your goals — fat loss, strength, mobility.",
    benefit: "Faster, safer results with expert supervision every session.",
  },
  {
    slug: "crossfit",
    title: "CrossFit",
    blurb: "High-intensity functional workouts in a coached group setting.",
    benefit: "Build conditioning, power and athletic capacity.",
  },
  {
    slug: "hiit",
    title: "HIIT Classes",
    blurb: "Time-efficient interval sessions that torch calories.",
    benefit: "Maximum burn in 30–45 minutes, designed for busy schedules.",
  },
  {
    slug: "weight-training",
    title: "Weight Training",
    blurb: "Premium racks, plates and dumbbells in a focused strength floor.",
    benefit: "Build real muscle with proven progressive overload.",
  },
  {
    slug: "nutrition",
    title: "Nutrition Consulting",
    blurb: "Personalised meal plans built around your routine and goals.",
    benefit: "Train hard, eat smart — recover and transform faster.",
  },
];

export const FAQ = [
  {
    q: "Where is Ascend Fitness located in Rajajinagar?",
    a: "We're on the 2nd floor, 46, 10th Cross Road, off West of Chord Road, above Tata Motors, Rajajinagar Stage 2, Bengaluru 560086.",
  },
  {
    q: "What are the gym timings?",
    a: "Ascend Fitness is open daily and closes at 10:00 PM. Call 063612 69494 for the current opening hour.",
  },
  {
    q: "Do you offer a free trial session?",
    a: "Yes — first-time visitors can book a trial workout. Call or WhatsApp us to reserve your slot.",
  },
  {
    q: "What services do you offer?",
    a: "Personal Training, CrossFit, HIIT classes, Weight Training and Nutrition Consulting — all under one premium roof in Rajajinagar.",
  },
  {
    q: "Is Ascend Fitness suitable for beginners?",
    a: "Absolutely. Every new member gets a guided onboarding and form coaching before they train solo.",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: BIZ.name,
  image: IMG.hero,
  telephone: BIZ.phoneIntl,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.addressLine,
    addressLocality: "Rajajinagar, Bengaluru",
    addressRegion: BIZ.state,
    postalCode: BIZ.postal,
    addressCountry: BIZ.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9914, longitude: 77.5526 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "05:30", closes: "22:00",
  }],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BIZ.rating,
    reviewCount: BIZ.reviews,
  },
  priceRange: "₹₹",
  areaServed: "Rajajinagar, Bengaluru",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
