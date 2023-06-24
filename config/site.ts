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
    resume: "/resume.pdf",
    linkedin: "https://www.linkedin.com/in/ulysses-kee/",
  },
  projects: [
    {
      title: "Octoplorer",
      description: "A natural language query tool for the Ethereum blockchain.",
      repository:
        "https://ethglobal.com/showcase/octoplorer-block-query-made-easy-pdgmt",
      useTitle: true,
    },
    {
      title: "ukcw.io",
      description: "My personal website and digital garden.",
      repository: "https://github.com/ukcw/ukcw.io",
      useTitle: false,
    },
    {
      title:
        "Master's Thesis: Algorithmic Trading with Case Based Reasoning and Multi-Agent Systems",
      description:
        "Forecasting Bitcoin price movements using a Case Based Reasoning system and LightGBM.",
      repository: "/CP5105_Ulysses.pdf",
      useTitle: false,
    },
    {
      title: "FlareTools",
      description:
        "An interactive website used to analyze configuration settings across different Cloudflare hosted websites.",
      repository: "https://github.com/ukcw/flaretools",
      useTitle: false,
    },
    {
      title: "Definitional Interpreter for Scilla",
      description:
        "Built an evaluator for the Scilla language that runs in the browser.",
      repository: "https://github.com/tramhnt99/scilla_parse",
      useTitle: false,
    },
  ],
}
