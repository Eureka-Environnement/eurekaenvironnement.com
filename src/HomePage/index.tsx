import React from 'react';
import AccueilSection from './AccueilSection';
import AProposSection from './AProposSection';
import NosClientsSection from './NosClientsSection';
import NosServicesSection from './NosServicesSection';
import NousJoindreSection from './NousJoindreSection';

interface HomePage {
  aProposRef: React.MutableRefObject<HTMLDivElement | null>;
  nosClientsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const HomePage = ({
  aProposRef,
  nosClientsRef
}: HomePage) => {
  return (
    <>
      <AccueilSection />
      <div className="main">
        <AProposSection aProposRef={aProposRef} />
        <NosClientsSection nosClientsRef={nosClientsRef} />
        <NosServicesSection />
        <NousJoindreSection />
      </div>
    </>
  );
};

export default HomePage;
