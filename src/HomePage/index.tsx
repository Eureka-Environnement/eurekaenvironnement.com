import React from 'react';
import AccueilSection from './AccueilSection';
import AProposSection from './AProposSection';
import NosClientsSection from './NosClientsSection';
import NosServicesSection from './NosServicesSection';
import NousJoindreSection from './NousJoindreSection';

const HomePage = () => {
  return (
    <>
      <AccueilSection />
      <div className="main">
        <AProposSection />
        <NosClientsSection />
        <NosServicesSection />
        <NousJoindreSection />
      </div>
    </>
  );
};

export default HomePage;
