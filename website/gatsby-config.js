module.exports = {
  siteMetadata: {
    siteUrl: "https://notes.davidmyno.rs",
    title: "David's Notes",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "../pages/",
        ignore: ["contents.md"],
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: "@idmyn/gatsby-remark-wiki-link",
          options: {
            pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
            hrefTemplate: (permalink) => `/${permalink}`
          }
        }],
      }
    },
    {
      resolve: `@idmyn/gatsby-remark-backlinks`,
    },
  ],
};
