
import React, { useRef } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';
import PageHelmet from 'components/PageHelmet';
// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

function App() {
  const aProposRef = useRef<null | HTMLDivElement>(null);
  const nosServicesRef = useRef<null | HTMLDivElement>(null);
  const realisationsRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <PageHelmet />
      <Header
        aProposRef={aProposRef}
        nosServicesRef={nosServicesRef}
        realisationsRef={realisationsRef}
        contactRef={contactRef}
      />
      <HomePage
        aProposRef={aProposRef}
        nosServicesRef={nosServicesRef}
        realisationsRef={realisationsRef}
        contactRef={contactRef}
      />
      <Footer />
    </>
  );
}

export default App;