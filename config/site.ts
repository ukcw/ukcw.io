export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ukcw",
  description:
    "Hey there! I'm Ulysses and this is my digital garden where I share about my thoughts and experiences through writing about them. I have a varied range of interests and enjoy learning about crypto, math, trading, programming languages, distributed systems, artificial intelligence and machine learning amongst other things.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/ukcw_",
    github: "https://github.com/ukcw",
    docs: "https://ui.shadcn.com",
    cv: "https://read.cv/ukcw",
  },
  projects: [
    {
      name: "ukcw.io",
      language: "TypeScript",
      // stars: 0,
    },
    {
      name: "flaretools",
      language: "JavaScript",
    },
    {
      name: "scilla_parse",
      language: "JavaScript",
    },
  ],
}
