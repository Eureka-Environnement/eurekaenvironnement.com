import React, { useRef } from 'react';
import Header from 'components/Header';
import HomePage from 'HomePage/index';
// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

function App() {

  const aProposRef = useRef<null | HTMLDivElement>(null);

  return (
    <div>
      <Header
        aProposRef={aProposRef}
      />
      <HomePage
        aProposRef={aProposRef}
      />
    </div>
  );
}

export default App;
