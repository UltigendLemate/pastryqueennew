// Single source of truth for all Pastry Queen India 2026 content.
// Facts preserved verbatim from the original site.

export const SITE = {
  edition: "5th Edition",
  name: "Pastry Queen India",
  year: "2026",
  theme: "The Dance of Birds",
  tagline: "The national stage for India’s finest women pastry chefs.",
  dates: "05 — 06 August 2026",
  datesShort: "5–6 Aug 2026",
  venue: "India Expo Centre & Mart",
  city: "Greater Noida, NCR, India",
  host: "IHE Expo 2026",
  organisedBy: "Bakery Review",
  worldCup: "The Pastry Queen World Cup",
  worldCupVenue: "SIGEP, Italy",
  registerDeadline: "31 May 2026",
  registerEmail: "hammermmservices@gmail.com",
  recapEmbed: "https://www.youtube.com/embed/6qsrNp3FZ8s?si=lp5xqucw3aUcPdQP&rel=0",
  rulesUrl:
    "https://drive.google.com/drive/folders/15Pc6R4wpeylzuwjMGVnVL3nlP7bXsgH0?usp=sharing",
  registerPdf: "/register.pdf",
  visitorUrl: "https://ihexpo.com/visitor-registration/",
} as const;

export const NAV = [
  { label: "The Event", href: "#story" },
  { label: "The Challenge", href: "#challenge" },
  { label: "The Chefs", href: "#participants" },
  { label: "Organisers", href: "#organisers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 5, suffix: "th", label: "Edition" },
  { value: 5, suffix: "", label: "Buffet disciplines" },
  { value: 120, suffix: "cm", label: "Showpiece minimum" },
  { value: 2026, suffix: "", label: "World Cup year" },
];

// The competition buffet — the heart of the horizontal pinned section.
export const CHALLENGE = [
  {
    no: "01",
    title: "Artistic Showpiece",
    spec: "Minimum 120 cm",
    body: "A towering sculptural centrepiece in sugar and chocolate — the freest expression of this year’s theme, The Dance of Birds.",
    image: "/pqw/2.jpg",
    tone: "teal",
  },
  {
    no: "02",
    title: "Chocolate Entremet",
    spec: "Layered & glazed",
    body: "A composed chocolate entremet judged on precision of layering, balance of textures, and the cleanliness of every cut.",
    image: "/pics/DSC_4646.JPG",
    tone: "gold",
  },
  {
    no: "03",
    title: "Plated Dessert",
    spec: "Served à la minute",
    body: "A restaurant-calibre plated dessert — temperature, contrast and composition, plated live before the jury.",
    image: "/pqw/6.jpg",
    tone: "pine",
  },
  {
    no: "04",
    title: "Street Food",
    spec: "Innovative packaging",
    body: "Reimagined patisserie for the street — flavour and craft delivered through genuinely original, considered packaging.",
    image: "/pics/DSC_4502.jpg",
    tone: "teal",
  },
  {
    no: "05",
    title: "Leavened Breakfast",
    spec: "Viennoiserie",
    body: "A leavened breakfast product where lamination, proofing and crumb reveal the depth of a chef’s fundamentals.",
    image: "/pics/DSC_4561.JPG",
    tone: "gold",
  },
];

export const DETAILS = [
  {
    k: "The Brief",
    v: "A complete buffet: an artistic showpiece (min. 120 cm), a chocolate entremet, a plated dessert, a street-food creation with innovative packaging, and a leavened breakfast product.",
  },
  {
    k: "Eligibility",
    v: "Open to female professional pastry chefs of Indian nationality, aged 20 or older, with at least 3 years of professional experience.",
  },
  {
    k: "When & Where",
    v: "5 & 6 August 2026 at the India Expo Centre & Mart, Greater Noida — staged within IHE Expo 2026.",
  },
  {
    k: "How to Enter",
    v: "Submit your complete application by email to hammermmservices@gmail.com by 31 May 2026.",
  },
];

export const ORGANISERS = [
  {
    name: "Bakery Review",
    by: "Hammer Publishers Pvt. Ltd · est. 1999",
    logo: "/images/bakery review.png",
    link: "https://www.hammer.co.in",
    text: "Hammer Publishers publishes Bakery Review, the bi-monthly magazine for professionals in India’s fast-changing Bakery & Confectionery industry. With an emphasis on the latest information and in-depth insight, it explores new growth areas across Commercial, Retail, In-store and Foodservice baking — the only magazine of its kind dedicated to the trade.",
  },
  {
    name: "IHE Expo 2026",
    by: "India International Hospitality Expo · 7th Edition",
    logo: "/images/ihe.png",
    link: "https://www.ihexpo.com/",
    text: "The India International Hospitality Expo brings together luxury hotels, resorts, restaurants, cloud kitchens and F&B professionals. Its 7th edition runs 3–6 August 2026 at the India Expo Centre & Mart, Delhi NCR — 30,000 sqm hosting 1,000+ exhibitors, 20,000+ B2B buyers and 25,000 visitors across masterclasses, conclaves and competitions.",
  },
];

export const CONTACT = {
  org: "Hammer Management & Marketing Services",
  address: "M-68, Guru Harkishan Nagar, New Delhi - 110087",
  phones: ["+91 98111 36837", "+91 98103 15463"],
  emails: ["sanjayhammer@gmail.com", "rajathammer@gmail.com"],
  emailjs: {
    service: "service_8vyys27",
    template: "template_6m9mp0v",
    publicKey: "bIz0Cj4I0MEgua1CU",
  },
};

// Curated gallery — masonry of showpieces, desserts & the floor. Each image used once.
export const GALLERY = [
  { src: "/pics/DSC_4732.jpg", caption: "Sugar showpiece", aspect: "3 / 4", pos: "center" },
  { src: "/pqw/7.jpg", caption: "A tribute in chocolate", aspect: "4 / 3", pos: "center" },
  { src: "/pics/DSC_4519.jpg", caption: "Plated under glass", aspect: "3 / 4", pos: "center" },
  { src: "/images/538A6838.jpg", caption: "The jury at work", aspect: "3 / 2", pos: "center" },
  { src: "/pqw/8.jpg", caption: "The competitors", aspect: "16 / 10", pos: "center" },
  { src: "/pics/DSC_4669.JPG", caption: "Sugar, scored & set", aspect: "3 / 2", pos: "center" },
  { src: "/pics/1Z0A9357.jpg", caption: "The crowning", aspect: "3 / 4", pos: "top" },
  { src: "/pics/DSC_4730.jpg", caption: "Sugar artistry on the floor", aspect: "3 / 2", pos: "center" },
];

// Participating chefs — one chef + their institute (logo) each.
export const PARTICIPANTS = [
  { name: "Deepthi Joji", team: "ITC Grand Chola", logo: "/teams/22.png", img: "/teams/deepthi.png", bio: "Senior Sous Chef for Bakery & Pastry at ITC Grand Chola, Chennai. Deep experience in luxury chocolate boutiques, menu formulation and pre-opening setups — passionate about food safety and innovation." },
  { name: "Vivek Kadam", team: "ITC Grand Chola", logo: "/teams/22.png", img: "/teams/vivek.png", bio: "Executive Pastry Chef at ITC Maratha Mumbai with 25+ years of experience. He has led pastry teams at Grand Hyatt Mumbai and won numerous awards for creative desserts with authentic, globally-appealing flavours." },
  { name: "Sana Khan", team: "Ecole Ducasse ISH, Gurugram", logo: "/teams/20.png", img: "/teams/sana.png", bio: "A dynamic pastry chef known for creativity and precision. With a degree in Hotel Management and a Culinary Arts diploma, her journey spans internships across the UAE and India and multiple competition wins." },
  { name: "Aabhas Jain", team: "Ecole Ducasse ISH, Gurugram", logo: "/teams/20.png", img: "/teams/aabhas.png", bio: "A visionary chef dedicated to elevating Indian pastry on the global stage. Featured in renowned publications and a mentor at prestigious events, with deep experience leading culinary education." },
  { name: "Praniti Jain", team: "La Lavash", logo: "/teams/24.png", img: "/teams/praniti.png", bio: "A dynamic achiever — masterclasses at APCA Singapore and assisting renowned chefs. Her journey is defined by a relentless pursuit of excellence and commitment to pastry craftsmanship." },
  { name: "Sachin Rathor", team: "La Lavash", logo: "/teams/24.png", img: "/teams/sachin.png", bio: "Executive Pastry Chef at JW Marriott Aerocity, New Delhi, with 17+ years of experience including Kempinski Muscat, Hyatt Andaz and ITC Welcom — honing a passion for exceptional desserts." },
  { name: "Juhi Chugh", team: "APCA Gurugram", logo: "/teams/21.png", img: "/teams/juhi.png", bio: "An accomplished pastry chef known for innovative creations and meticulous detail. With advanced diplomas from the Academy of Pastry & Culinary Arts, she loves pushing culinary boundaries." },
  { name: "Sehaj Ghuman", team: "APCA Gurugram", logo: "/teams/21.png", img: "/teams/sehaj.png", bio: "Winner of the India Pastry Cup 2023 and recipient of Best Originality at Mondial des Arts Sucrés 2022, Paris. A strong foundation in kitchen management and a flair for the boundary-pushing." },
  { name: "Kinjal Rathod", team: "The Leela Gurugram", logo: "/teams/leela.jpg", img: "/teams/kinjal.png", bio: "A dedicated culinary professional with extensive high-end hospitality experience. Featured in Meri Sheli magazine; winner of Aroma 2019 and Best Chef of the Year 2024, with G20 and Filmfare 2024 appearances." },
  { name: "Rishabh Anand", team: "The Leela Gurugram", logo: "/teams/leela.jpg", img: "/teams/rishabh.png", bio: "A veteran with 18+ years leading pastry at The Oberoi, Hilton and The Leela. An IHM Pusa alumnus with consecutive Times Food & Nightlife awards and a mentor for Pastry Queen India 2024." },
  { name: "Kareena M Dadlani", team: "APCA Bangalore", logo: "/teams/23.png", img: "/teams/kareena.png", bio: "A dedicated pastry chef instructor — assisting Team India at Mondial des Arts Sucrés and contributing to the victorious Indian selections for Asia Pastry Cup 2023." },
  { name: "Pratyay Keny", team: "APCA Bangalore", logo: "/teams/23.png", img: "/teams/pratyay.png", bio: "An accomplished pastry chef with honours including Best Originality at Mondial des Arts Sucrés 2022, Paris, and winner of the India Pastry Cup 2023 — dedication in every creation." },
  { name: "Kashish Sharma", team: "Le Meilleure, Gurugram", logo: "/teams/18.png", img: "/teams/kashish.png", bio: "Assistant Pastry Chef at the Academy of Pastry & Culinary Arts and a Le Cordon Bleu graduate, specialising in innovative desserts, project management and prestigious pastry competitions." },
  { name: "Yogesh Sharma", team: "Le Meilleure, Gurugram", logo: "/teams/18.png", img: "/teams/yogesh.png", bio: "Head Chef at La Meilleure with 9 years of culinary excellence and a strong pastry background. Known for innovative creations, team leadership and representing India internationally." },
];

// Partners & sponsors (logos + sites).
export const SPONSORS = [
  { name: "Elle & Vire Professionnel", logo: "/pp/elle.png", link: "https://savencia-fd.in", tag: "Premium Normandy dairy" },
  { name: "Delta Nutritives", logo: "/pp/deltasponsor.png", link: "https://www.deltanutritives.com/", tag: "Dessert ingredients & equipment" },
  { name: "MOD Kitchen Equipment", logo: "/sponsors/1.png", link: "https://www.modequipment.com/", tag: "Commercial kitchen solutions" },
  { name: "RANS Technocrats", logo: "/sponsors/2.png", link: "http://ransindia.com/", tag: "Foodservice equipment" },
  { name: "Euro Foods", logo: "/sponsors/eurofoods.jpg", link: "https://eurofoods.co.in/import/", tag: "Premium ingredient imports" },
  { name: "Windsor Chocolatier", logo: "/sponsors/wclogo.jpg", link: "https://www.windsorchocolatier.com", tag: "Artisanal chocolate" },
  { name: "IBCA", logo: "/sponsors/3.png", link: "https://www.chefibpa.com", tag: "Bakery & culinary institute" },
  { name: "DKG Sales", logo: "/sponsors/dkg.png", link: "https://dkgspl.co/", tag: "Cutlery, crockery & equipment" },
  { name: "Products & Ideas", logo: "/sponsors/5.png", link: "https://www.pi-india.com/", tag: "Kitchen & bakery imports" },
];
