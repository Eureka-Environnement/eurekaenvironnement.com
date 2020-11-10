/* eslint-disable */
module.exports = {
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
  ]
};
