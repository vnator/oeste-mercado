import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Oeste supermercado",
  tagline: "rede de mercados super Oeste",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus nec purus ultricies lacinia. Nullam nec nunc nec nunc.",
  description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "https://oestesupermercados.com.br",
  author: "jhserodio",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://supermercadooeste.com.br",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: SITE.title,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: ogImageSrc,
};
