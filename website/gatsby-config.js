module.exports = {
  siteMetadata: {
    siteUrl: "https://notes.davidmyno.rs",
    title: "David's Notes",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "../pages/",
        ignore: ["contents.md"],
      },
      __key: "pages",
    },
  ],
};
