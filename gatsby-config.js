module.exports = {
  siteMetadata: {
    title: `MC2`,
    content: `MC2 - Hollywood Musicals DataViz Platform`
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Mc3`,
        fieldName: `mc3`,
        url: `http://127.0.0.1:8000/api/graphql`,
      },
    },
  ],
}