// Single source of truth for all Pastry Queen India 2026 content.
// Facts preserved verbatim from the original site.

export const SITE = {
  edition: "5th Edition",
  name: "Pastry Queen India",
  year: "2026",
  theme: "The Dance of Birds",
  tagline: "The national stage for India’s finest women pastry chefs.",
  dates: "05 - 06 August 2026",
  datesShort: "5–6 Aug 2026",
  venue: "India Expo Centre & Mart",
  city: "Greater Noida, NCR, India",
  host: "IHE Expo 2026",
  organisedBy: "Bakery Review",
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
  { value: 120, suffix: " cm", label: "Showpiece minimum" },
  { value: 2, suffix: "", label: "Days, judged live" },
];

// The competition buffet - the heart of the horizontal pinned section.
export const CHALLENGE = [
  {
    no: "01",
    title: "Artistic Showpiece",
    spec: "Minimum 120 cm",
    body: "A towering sculptural centrepiece in sugar and chocolate - the freest expression of this year’s theme, The Dance of Birds.",
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
    body: "A restaurant-calibre plated dessert - temperature, contrast and composition, plated live before the jury.",
    image: "/pqw/6.jpg",
    tone: "pine",
  },
  {
    no: "04",
    title: "Street Food",
    spec: "Innovative packaging",
    body: "Reimagined patisserie for the street - flavour and craft delivered through genuinely original, considered packaging.",
    image: "/pics/DSC_4502.jpg",
    tone: "teal",
  },
  {
    no: "05",
    title: "Leavened Breakfast",
    spec: "Viennoiserie",
    body: "A leavened breakfast product where lamination, proofing and crumb reveal the depth of a chef’s fundamentals.",
    image: "/stock/viennoiserie.jpg",
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
    v: "5 & 6 August 2026 at the India Expo Centre & Mart, Greater Noida - staged within IHE Expo 2026.",
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
    text: "Hammer Publishers publishes Bakery Review, the bi-monthly magazine for professionals in India’s fast-changing Bakery & Confectionery industry. With an emphasis on the latest information and in-depth insight, it explores new growth areas across Commercial, Retail, In-store and Foodservice baking - the only magazine of its kind dedicated to the trade.",
  },
  {
    name: "IHE Expo 2026",
    by: "India International Hospitality Expo · 8th Edition",
    logo: "/images/ihe.png",
    link: "https://www.ihexpo.com/",
    text: "The India International Hospitality Expo brings together luxury hotels, resorts, restaurants, cloud kitchens and F&B professionals. Its 8th edition runs 5-8 August 2026 across Halls 9-12 at the India Expo Centre & Mart, Delhi NCR - built for B2B hospitality and F&B decision-makers, the senior buyers with the purchasing authority and budget to source on the spot.",
    stats: [
      { v: "1,000+", l: "Exhibitor brands" },
      { v: "16+", l: "Countries" },
      { v: "25,000+", l: "Trade visitors" },
    ],
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

// Curated gallery - masonry of showpieces, desserts & the floor. Each image used once.
export const GALLERY = [
  { src: "/pics/DSC_4732.jpg", caption: "Sugar showpiece", aspect: "3 / 4", pos: "center" },
  { src: "/pqw/7.jpg", caption: "A tribute in chocolate", aspect: "4 / 3", pos: "center" },
  { src: "/pics/DSC_4519.jpg", caption: "Plated under glass", aspect: "3 / 4", pos: "center" },
  { src: "/images/538A6838.jpg", caption: "The jury at work", aspect: "3 / 2", pos: "center" },
  { src: "/pqw/8.jpg", caption: "The competitors", aspect: "16 / 10", pos: "center" },
  { src: "/pics/DSC_4669.JPG", caption: "Sugar, scored & set", aspect: "3 / 2", pos: "center" },
  { src: "/pics/1Z0A9357.jpg", caption: "The crowning", aspect: "3 / 4", pos: "top" },
  { src: "/pics/DSC_4730.jpg", caption: "Sugar artistry on the floor", aspect: "3 / 2", pos: "center" },
  { src: "/images/538A6822.jpg", caption: "The competition floor", aspect: "3 / 2", pos: "center" },
];

// Participating chefs - one chef + their institute (logo) each.
export const PARTICIPANTS = [
  {
    name: "Ankita Kashyap",
    team: "Bakingo",
    logo: "/contestants/bakingo.jpg",
    img: "/contestants/ankita.jpg",
    bio: "Sous Chef for Bakery & Pastry with over seven years across luxury hospitality and large-scale bakery production. Currently with Bakingo, she has worked with JW Marriott Chandigarh, Conrad Bengaluru, DoubleTree by Hilton Agra and Taj. A bronze medallist at AAHAR 2026, her strengths span artisan breads, viennoiserie, cakes, plated desserts and quality-focused production.",
  },
  {
    name: "Karuna Banerjee",
    team: "The Oberoi, Gurgaon",
    logo: "/contestants/oberoi.png",
    img: "/contestants/karuna.jpg",
    bio: "A pastry chef with over nine years in luxury hotel bakery and pastry operations. Currently at The Oberoi, Gurgaon, she has worked with The Oberoi Grand Kolkata, Trident Nariman Point Mumbai and Grand Hyatt Mumbai. Her expertise spans refined patisserie, artisanal breads, viennoiserie, plated desserts and banquet production.",
  },
  {
    name: "Khushi Kaushal",
    team: "Academy of Pastry & Culinary Arts",
    logo: "/images/pi/apcalogo.png",
    img: "/contestants/khushi.jpg",
    bio: "An award-winning Assistant Pastry Chef and professional chocolatier at the Academy of Pastry & Culinary Arts, Gurgaon. Winner of the Junior Indian Pastry Cup, she represented India at the Juniores Pastry Cup in Rimini, Italy. Her expertise includes chocolate artistry, sugar displays, entremets and contemporary pastry techniques.",
  },
  {
    name: "Manisha Yadav",
    team: "UTM Delight, Bhopal",
    logo: "/contestants/utm-delight.png",
    img: "/contestants/manisha.jpg",
    bio: "Founder of UTM Delight Baking & Culinary Academy, Bhopal, affiliated with City & Guilds. An internationally certified pastry chef, India Cake Award winner and AAHAR 2026 Silver Medallist, she brings over ten years of experience and has trained 5,000+ students across cakes, breads, pastry art and chocolate art.",
  },
  {
    name: "Praniti Jain",
    team: "Le Cordon Bleu, Gurugram",
    logo: "/images/pi/lcblogo.png",
    img: "/contestants/praniti.jpg",
    bio: "A pastry chef with a strong foundation in French patisserie and modern dessert creation. Trained at the Academy of Pastry & Culinary Arts, she has worked with Le Cordon Bleu Gurugram, La Meilleure and A Sunday in Paris. She was a semi-finalist in the French Pastry Competition 2025 and competed in India Pastry Queen 2024.",
  },
  {
    name: "Tisha Nair",
    team: "Academy of Pastry & Culinary Arts",
    logo: "/images/pi/apcalogo.png",
    img: "/contestants/tisha.jpg",
    bio: "A trained pastry chef with experience in bakery, dessert production, showpieces and competition work. Trained at the Academy of Pastry & Culinary Arts, she has worked with The Sugar Project and the Indian School of Hospitality. A multiple ICC medallist, she won Best Glass Dessert at the Junior Pastry Cup 2025.",
  },
  {
    name: "Akankhya Garabadu",
    team: "JW Marriott, Kolkata",
    logo: "/images/pi/jwlogo.png",
    img: "/contestants/akankhya.jpg",
    bio: "A Demi Chef de Partie with bakery and pastry experience at JW Marriott Kolkata, skilled in artisanal breads, pastries, cakes, cookies and desserts. She works across production, presentation, recipe execution and quality control, with training from IHM Bhubaneswar, The Park Hyderabad and Hotel Mayfair & Convention, Bhubaneswar.",
  },
];

// Partners & sponsors (logos + sites).
export const SPONSORS = [
  { name: "MOD Kitchen Equipment", logo: "/sponsors/1.png", link: "https://www.modequipment.com/", tag: "Commercial kitchen solutions" },
  { name: "RANS Technocrats", logo: "/sponsors/2.png", link: "http://ransindia.com/", tag: "Foodservice equipment" },
  { name: "IBCA", logo: "/sponsors/3.png", link: "https://www.chefibpa.com", tag: "Bakery & culinary institute" },
  { name: "Windsor Chocolatier", logo: "/sponsors/wclogo.jpg", link: "https://www.windsorchocolatier.com", tag: "Artisanal chocolate" },
  { name: "DKG Sales", logo: "/sponsors/dkg.png", link: "https://dkgspl.co/", tag: "Cutlery, crockery & equipment" },
  // --- temporarily hidden (uncomment to restore) ---
  // { name: "Elle & Vire Professionnel", logo: "/pp/elle.png", link: "https://savencia-fd.in", tag: "Premium Normandy dairy" },
  // { name: "Delta Nutritives", logo: "/pp/deltasponsor.png", link: "https://www.deltanutritives.com/", tag: "Dessert ingredients & equipment" },
  // { name: "Euro Foods", logo: "/sponsors/eurofoods.jpg", link: "https://eurofoods.co.in/import/", tag: "Premium ingredient imports" },
  // { name: "Products & Ideas", logo: "/sponsors/5.png", link: "https://www.pi-india.com/", tag: "Kitchen & bakery imports" },
];
