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
  ],
}