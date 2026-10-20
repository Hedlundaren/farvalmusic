export const site = {
  name: "Far väl",
  tagline: "Nordic folk, and then some",
  description:
    "Far väl plays Nordic folk music and tunes from across the world. Ankita on song, Peter on guitar, Kevin on mandolin, Daniel on clarinette, and Kerstin and Simon on violin.",
  contact: {
    name: "Kevin Karlsson",
    email: "farvalmusic@gmail.com",
    phone: "+46 72-350 44 01",
    phoneHref: "tel:+46723504401",
  },
}

export type Show = {
  date: string
  city: string
  place: string
  note?: string
}

/** Add gigs here. An empty list shows the poster-wall empty state. */
export const shows: Show[] = [
  {
    date: "8–14 Feb 2027",
    city: "Madrid",
    place: "Week 6",
  },
]

export type Social = {
  label: string
  href: string
}

export const socials: Social[] = []

export type Member = {
  name: string
  role: string
  portrait: string
}

export const members: Member[] = [
  { name: "Ankita", role: "Song", portrait: "/members/ankita.webp" },
  { name: "Peter", role: "Guitar", portrait: "/members/peter.webp" },
  { name: "Kevin", role: "Mandolin", portrait: "/members/kevin.webp" },
  { name: "Daniel", role: "Clarinette", portrait: "/members/daniel.webp" },
  { name: "Kerstin", role: "Violin", portrait: "/members/kerstin.webp" },
  { name: "Simon", role: "Violin", portrait: "/members/simon.webp" },
]

export type Place = {
  title: string
  text: string
  image: string
  alt: string
}

export const places: Place[] = [
  {
    title: "Swedish",
    text: "Polska and gånglåt. The tunes we start from, and the ones we can still play half asleep.",
    image: "/nature/forest-mist.jpg",
    alt: "Sunlight cutting through a dark spruce forest",
  },
  {
    title: "Norwegian",
    text: "Springar and halling. The beat leans on purpose, and the bow follows the dance.",
    image: "/nature/peaks.jpg",
    alt: "Snowy peaks above a forested valley",
  },
  {
    title: "Danish",
    text: "Hopsa and sønderhoning. Light on their feet, and a little sly about the rhythm.",
    image: "/nature/birch.jpg",
    alt: "Fog resting on a forested hillside",
  },
  {
    title: "Indian",
    text: "Song with a long line. The melody turns back on itself before it agrees to land.",
    image: "/nature/wildflowers.jpg",
    alt: "Orange poppies against a clear blue sky",
  },
  {
    title: "Irish",
    text: "Reels and jigs. Once a set is moving, stopping feels like bad manners.",
    image: "/nature/valley-sun.jpg",
    alt: "Sunlit green ridges and rock towers",
  },
  {
    title: "American",
    text: "Old-time fiddle tunes. Same family as the Nordic ones, on a different dirt road.",
    image: "/nature/meadow.jpg",
    alt: "A desert highway running toward a rocky mountain",
  },
]

export const marquee = [
  "Song",
  "Guitar",
  "Mandolin",
  "Clarinette",
  "Violin",
  "Violin",
  "Nordic folk",
  "And then some",
]
