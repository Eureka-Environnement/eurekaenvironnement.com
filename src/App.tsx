import React, { useRef } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'HomePage/index';
// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

function App() {
  const aProposRef = useRef<null | HTMLDivElement>(null);
  const nosClientsRef = useRef<null | HTMLDivElement>(null);
  const nosServicesRef = useRef<null | HTMLDivElement>(null);
  const nousJoindreRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <div>
        <Header
          aProposRef={aProposRef}
          nosClientsRef={nosClientsRef}
          nosServicesRef={nosServicesRef}
          nousJoindreRef={nousJoindreRef}
        />
        <HomePage
          aProposRef={aProposRef}
          nosClientsRef={nosClientsRef}
          nosServicesRef={nosServicesRef}
          nousJoindreRef={nousJoindreRef}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
