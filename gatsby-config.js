module.exports = {
  siteMetadata: {
    title: `Test`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    `gatsby-transformer-remark`
  ]
}
