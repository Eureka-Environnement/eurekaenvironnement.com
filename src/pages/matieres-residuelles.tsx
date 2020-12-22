import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ThemePage from 'components/ThemePage';
import PageHelmet from 'components/PageHelmet';
import { ThemeData } from 'utils/constants';
import { mapSubThemes } from 'utils/functions';
// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

interface Matieres {
  data: ThemeData;
}

function Matieres({data}: Matieres) {
  const aProposRef = useRef<null | HTMLDivElement>(null);
  const nosServicesRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const subThemes = mapSubThemes(data);
  return (
    <>
      <PageHelmet />
      <Header
        aProposRef={aProposRef}
        nosServicesRef={nosServicesRef}
        contactRef={contactRef}
      />
      <ThemePage subThemes={subThemes} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query MatieresSubThemeQuery {
    contentfulTheme(titre: {eq: "Matières résiduelles"}) {
      sousThemes {
        contentful_id
        image {
          fixed {
            src
          }
        }
        services
        titre
      }
    }
  }
`;

export default Matieres;
