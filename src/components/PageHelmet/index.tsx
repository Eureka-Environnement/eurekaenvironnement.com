/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet';

const PageHelmet = () => {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
        rel="stylesheet"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <title>Eurêka Environnement</title>
      <meta
        lang="fr"
        name="description"
        content="Eurêka Environnement est une firme de génie-conseil spécialisée dans la gestion de l’eau et la conception de systèmes de traitement."
      />
      <meta
        lang="fr"
        name="keywords"
        content="Traitement de l’eau, Gestion de l’eau, Tests de sol, Caractérisation environnementale, Phase 1, Phase 2, Gestion des matières résiduelles, Expertise légal, Génie des eaux, Génie environnemental, Certificat d’autorisation, MELCC, Article 22, Article 32"
      />
      
      <meta
        property="og:title"
        content="Eurêka Environnement"
      />
      <meta
        property="og:description"
        content="Eurêka Environnement est une firme de génie-conseil spécialisée dans la gestion de l’eau et la conception de systèmes de traitement."
      />
      <meta
        property="og:url"
        content="https://eurekaenvironnement.com/"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:image" 
        content="https://images.ctfassets.net/hn5iya58lcbz/2NUr6wMhQ7I7eOPcqVI3CN/1d088108845a48fb90cdd7c52daa1b2e/main_background.jpg"
      />
    </Helmet>
  );
};

export default PageHelmet;
