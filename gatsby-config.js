// to import env var
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

module.exports = {
  siteMetadata: {
    title: `MC2`,
    content: `MC2 - Hollywood Musicals DataViz Platform`,
    algoliaId: process.env.ALGOLIA_ID,
    algoliaPwd: process.env.ALGOLIA_PWD,
    mc3RestUrl: process.env.MC3_REST_URL,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Mc3`,
        fieldName: `mc3`,
        url: process.env.MC3_API_URL,
        refetchInterval: 3600,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mc3-website",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["TisaSansWeb"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
}