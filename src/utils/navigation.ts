// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Promoções", url: "/services" },
  { name: "Insitucional", url: "/products" },
  { name: "Noticias", url: "/blog" },
  { name: "Contato", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Navegação",
    links: [
      { name: "Home", url: "/" },
      { name: "Promoções", url: "/services" },
      { name: "Conheça nossa historia", url: "/products" },
    ],
  },
  {
    section: "Super Oeste",
    links: [
      { name: "Contatos", url: "#" },
      { name: "Noticias", url: "/blog" },
      { name: "Vagas", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};