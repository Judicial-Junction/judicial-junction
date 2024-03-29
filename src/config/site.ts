export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Digital Adhivakta",
  description: "All your legal needs in one place.",
  navItems: [],
  navMenuItems: [
    {
      label: "Search Tool for Lawyers",
      href: "/search",
    },
    {
      label: "Search Lawyers by location",
      href: "/map",
    },
  ],
  links: {
    github: "https://github.com/Tejasmadhukar/Pinecone-Frontend",
    auth: "/auth",
    demo: "/chat",
  },
};
