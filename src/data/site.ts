export const site = {
  name: "Far väl",
  tagline: "Six members, six traditions. Concerts and workshops.",
  description:
    "Far väl shares folk traditions through concerts and workshops with musicians. The aim is to pass the music on, and to inspire.",
  contact: {
    name: "Kevin Karlsson",
    email: "farvalmusic@gmail.com",
    phone: "+46 72-350 44 01",
    phoneHref: "tel:+46723504401",
  },
};

export type Show = {
  date: string;
  city: string;
  place: string;
  note?: string;
};

/** Add gigs here. An empty list shows the poster-wall empty state. */
export const shows: Show[] = [
  {
    date: "8–14 Feb 2027",
    city: "Madrid",
    place: "Week 6",
  },
];

export type Social = {
  label: string;
  href: string;
};

export const socials: Social[] = [
  { label: "Instagram", href: "https://www.instagram.com/farvalmusic/" },
  { label: "Facebook", href: "https://www.facebook.com/farvalmusic/" },
];

export type Member = {
  name: string;
  role: string;
  portrait: string;
};

export const members: Member[] = [
  { name: "Ankita", role: "Song", portrait: "/members/ankita.webp" },
  { name: "Peter", role: "Guitar", portrait: "/members/peter.webp" },
  { name: "Kevin", role: "Mandolin", portrait: "/members/kevin.webp" },
  { name: "Daniel", role: "Clarinette", portrait: "/members/daniel.webp" },
  { name: "Kerstin", role: "Violin", portrait: "/members/kerstin.webp" },
  { name: "Simon", role: "Violin", portrait: "/members/simon.webp" },
];

export type Place = {
  title: string;
  text: string;
  image: string;
  alt: string;
  /** object-position, so a wide photo still shows the right part of the frame. */
  focus?: string;
};

export const places: Place[] = [
  {
    title: "Swedish",
    text: "Polska and gånglåt. The tunes we start from, and the ones we can still play half asleep.",
    image: "/traditions/swedish.jpg",
    alt: "Red wooden houses in a forest clearing",
    focus: "center 58%",
  },
  {
    title: "Norwegian",
    text: "Springar and halling. The beat leans on purpose, and the bow follows the dance.",
    image: "/traditions/norwegian.jpg",
    alt: "A deep blue fjord between steep green mountains",
    focus: "center 42%",
  },
  {
    title: "Danish",
    text: "Hopsa and sønderhoning. Light on their feet, and a little sly about the rhythm.",
    image: "/traditions/danish.jpg",
    alt: "A wooden dock on a calm lake, with forest along the far shore",
    focus: "center 72%",
  },
  {
    title: "Indian",
    text: "Song with a long line. The melody turns back on itself before it agrees to land.",
    image: "/traditions/indian-hills.jpg",
    alt: "Tea hills under a clouded mountain in the Kannan Devan Hills",
    focus: "center 46%",
  },
  {
    title: "Irish",
    text: "Reels and jigs. Once a set is moving, stopping feels like bad manners.",
    image: "/traditions/irish.jpg",
    alt: "A sea stack beside dark Atlantic cliffs, with wildflowers in the foreground",
    focus: "8% 72%",
  },
  {
    title: "American",
    text: "Old-time fiddle tunes. Same family as the Nordic ones, on a different dirt road.",
    image: "/traditions/american.jpg",
    alt: "Layered autumn ridges in the Great Smoky Mountains",
    focus: "center 68%",
  },
];

export const marquee = [
  "Song",
  "Guitar",
  "Mandolin",
  "Clarinette",
  "Violins",
  "Nordic folk",
  "Concerts",
  "Workshops",
];
