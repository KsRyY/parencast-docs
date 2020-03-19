module.exports = {
  siteMetadata: {
    siteTitle: `ParenCast Docs`,
    defaultTitle: `ParenCast Docs`,
    siteTitleShort: `parencast-docs`,
    siteDescription: `The document for ParenCast, a JavaScript flavored LISP dialect.`,
    siteUrl: `https://ksryy.github.io/parencast-docs`,
    siteAuthor: `KsRyY`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    footer: `Website Theme by Rocketseat`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ParenCast Docs`,
        short_name: `ParenCast Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ksryy.github.io/parencast-docs`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
