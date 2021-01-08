/* eslint-disable */
require("dotenv").config({
  CMS_SPACE_ID: `.env.${process.env.CMS_SPACE_ID}`,
  CMS_ACCESS_TOKEN: `.env.${process.env.CMS_ACCESS_TOKEN}`,
});

module.exports = {
  pathPrefix: "/eurekaenvironnement.com",
  siteMetadata: {
    title: 'Eurêka Environnement',
    description: 'Eurêka Environnement est une firme de génie-conseil spécialisée dans la gestion de l’eau et la conception de systèmes de traitement.',
    author: 'Eurêka Environnement',
    siteURL: 'https://eurekaenvironnement.com/',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Eurêka Environnement',
        short_name: 'Eurêka Environnement',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/assets/img/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CMS_SPACE_ID,
        accessToken: process.env.CMS_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -30
      }
    }
  ]
};
