export const site = {
  name: "Far väl",
  tagline: "Nordic folk, and then some",
  description:
    "Far väl plays Nordic folk music and tunes from across the world. Simon and Kerstin on violin, Peter on guitar, Ankita on song, Kevin on mandolin, and Daniel on clarinette.",
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
export const shows: Show[] = []

export type Social = {
  label: string
  href: string
}

export const socials: Social[] = []

export type Member = {
  name: string
  role: string
  /**
   * Portrait path, once you have photos.
   * Example: "/band/simon.jpg"
   * Until then, the scene image is used as a title-card backdrop.
   */
  portrait?: string
  scene: string
  sceneAlt: string
}

export const members: Member[] = [
  {
    name: "Simon",
    role: "Violin",
    scene: "/nature/forest-mist.jpg",
    sceneAlt: "Sunlight cutting through a dark spruce forest",
  },
  {
    name: "Kerstin",
    role: "Violin",
    scene: "/nature/autumn.jpg",
    sceneAlt: "A still alpine lake between pine trees",
  },
  {
    name: "Peter",
    role: "Guitar",
    scene: "/nature/pine-dark.jpg",
    sceneAlt: "Pine trees at sunset, with rock in the foreground",
  },
  {
    name: "Ankita",
    role: "Song",
    scene: "/nature/wildflowers.jpg",
    sceneAlt: "Orange poppies against a clear blue sky",
  },
  {
    name: "Kevin",
    role: "Mandolin",
    scene: "/nature/canopy.jpg",
    sceneAlt: "Looking straight up into tall tree trunks",
  },
  {
    name: "Daniel",
    role: "Clarinette",
    scene: "/nature/birch.jpg",
    sceneAlt: "Fog resting on a forested hillside",
  },
]

export type Place = {
  title: string
  text: string
  image: string
  alt: string
}

export const places: Place[] = [
  {
    title: "The north",
    text: "Home ground. Nordic folk, played from the inside.",
    image: "/nature/peaks.jpg",
    alt: "Snowy peaks above a forested valley",
  },
  {
    title: "Across",
    text: "Tunes that crossed water to get here, and sounded like they meant to stay.",
    image: "/nature/lake.jpg",
    alt: "A wooden dock on a calm blue lake",
  },
  {
    title: "High air",
    text: "Melodies with weather in them. Long views, long phrases.",
    image: "/nature/mountain-lake.jpg",
    alt: "Mountain peaks rising over a sea of clouds at sunset",
  },
  {
    title: "The road",
    text: "Well outside the north. If a tune travels well, it is welcome.",
    image: "/nature/meadow.jpg",
    alt: "A desert highway running toward a rocky mountain",
  },
  {
    title: "The ridge",
    text: "A longer way around. Still folk music. Still this band.",
    image: "/nature/valley-sun.jpg",
    alt: "Sunlit green ridges and rock towers",
  },
  {
    title: "Back under",
    text: "Then a tune we know by heart, a little changed from the trip.",
    image: "/nature/river.jpg",
    alt: "A mossy canyon with a river at the bottom",
  },
]

export const marquee = [
  "Violin",
  "Violin",
  "Guitar",
  "Song",
  "Mandolin",
  "Clarinette",
  "Nordic folk",
  "And then some",
]
