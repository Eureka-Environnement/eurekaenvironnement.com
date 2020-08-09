import React, { useRef } from 'react';
import Header from 'components/Header';
import HomePage from 'HomePage/index';
// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

function App() {

  const aProposRef = useRef<null | HTMLDivElement>(null);
  const nosClientsRef = useRef<null | HTMLDivElement>(null);

  return (
    <div>
      <Header
        aProposRef={aProposRef}
        nosClientsRef={nosClientsRef}
      />
      <HomePage
        aProposRef={aProposRef}
        nosClientsRef={nosClientsRef}
      />
    </div>
  );
}

export default App;
