const projects = [
  {
    id: 1,
    name: "Dine Ecommerce",
    desc: "Developed a full-stack e-commerce site using Next.js, Redux, Sanity UI & Stripe",
    image: "/dine.svg",
    urll:'https://github.com/faranbutt/Ecommerce-App-Full-Stack'
  },
  {
    id: 2,
    name: "Language Lab",
    desc: "Developed a AI Assistant that helps user learn English Language",
    image: "/languagelab.png",
    urll:'https://github.com/faranbutt/Language-Lab'
  },
  {
    id: 3,
    name: "Music Mood App",
    desc: "Created an application that gauges user’s mood through webcam and curates an ideal musical experience",
    image: "/musicmood.png",
    urll:'https://github.com/faranbutt/AudioCraft'
  },
  {
    id: 4,
    name: "Lec to Learn",
    desc: "Created lec to learn an ultimate learning companion that takes the complexity out of lectures",
    image: "/lectolearn.png",
    urll:"https://github.com/faranbutt/Language-Lab"
  },
];

const reviews = [
  {
    id: 1,
    name: "Zain Ramzan",
    desc: "I had the privilege of collaborating with Faran during a hackathon supported by LABLAB.ai, and he is truly outstanding .....",
    image: "/zain.jpeg",
    desig: "TA @ UET",
  },
  {
    id: 2,
    name: "Dhariya Shah",
    desc: "I met Faran during the Lablab.ai Hackathons and he is just more than a Front-end and Full-Stack Engineer, ....",
    image: "/dshah.jpeg",
    desig: "AI @ Laziy",
  },
  {
    id: 3,
    name: "Homan Mirgolbabaee",
    desc: 'I had the pleasure of meeting Faran during the "Autonomous Agents" virtual hackathon hosted by the lablab.ai team.I was truly impressed ....',
    image: "/hooman.jpeg",
    desig: "SWE @ Accion Labs",
  },
  {
    id: 4,
    name: "Wilon Koo",
    desc: "Faran is one of the most responsible programmers I've ever encountered ....",
    image: "/koo.jpeg",
    desig: "Founder @ Mr Hatch",
  },
];

const hackathons = [
  {
    id: 1,
    name: "Seamless M4T",
    desc: "2nd Position",
    image: "/lang.jpg",
    desig: "Created AI assistant for Language Learning in native language",
    urll:'https://lablab.ai/event/seamlessm4t-24-hours-hackathon/team-translators/language-lab'
  },
  {
    id: 2,
    name: "AudioCraft Hackathon",
    desc: "3rd Position",
    image: "/music.jpg.webp",
    desig: "Created an application that effortlessly gauges user’s mood through their webcam feed and curates an ideal musical experience.",
    urll:'https://lablab.ai/event/audiocraft-24-hours-hackathon/audiophiles/music-mood-app-genz-music-generator'
  },
  {
    id: 3,
    name: "StableCode Hackathon",
    desc: '3rd Position',
    image: "/scrape.png",
    desig: "Created an app thats crape websites by Stablecode generate JavaScript code to parse a part of the HTML and convert it to a CSV",
    urll:'https://lablab.ai/event/stablecode-24-hours-hackathon/visioneers/easy-scrape-seamless-conversion-from-html-to-csv'
  },
  {
    id: 4,
    name: "Llama2 Hackathon",
    desc: "5th Runners up",
    image: "/summ.jpg",
    desig: "Created AI assistant for Intelligent Summarization of Text",
    urll:'https://lablab.ai/event/llama-2-hackathon-with-clarifai/alpacas/intellisum-intelligent-summarizer-for-text'
  },
]

export { projects, reviews, hackathons };
