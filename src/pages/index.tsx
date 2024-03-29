
import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';
import PageHelmet from 'components/PageHelmet';
// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';
import { HomePageData } from 'utils/constants';

interface Home {
  data: HomePageData;
}

function Home({ data }: Home) {

  return (
    <>
      <PageHelmet />
      <Header />
      <HomePage data={data} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query HomePage {
    contentfulPagePrincipale(contentful_id: {eq: "3h8S8XRpdIbiHJ992tdnS5"}) {
      courriel
      telephone
      titre
      aPropos {
        raw
      }
      sousTitreNosServices
    }
    allContentfulTheme {
      nodes {
        contentful_id
        titreDuCube
      }
    }
  }
`;

export default Home;
