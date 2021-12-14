/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `your_space_id`,
    // Learn about environment variables: https://gatsby.dev/env-vars
    // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
  ],
}
