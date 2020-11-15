import React from "react";
import AccueilSection from "./AccueilSection";
import AProposSection from "./AProposSection";
import NosServicesSection from "./NosServicesSection";
import RealisationsSection from "./RealisationsSection";
import ContactSection from "./ContactSection";

interface HomePage {
  aProposRef: React.MutableRefObject<HTMLDivElement | null>;
  nosServicesRef: React.MutableRefObject<HTMLDivElement | null>;
  realisationsRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
}

const HomePage = ({
  aProposRef,
  nosServicesRef,
  realisationsRef,
  contactRef,
}: HomePage) => {
  return (
    <>
      <AccueilSection nousJoindreRef={contactRef} />
      <div className="main">
        <AProposSection aProposRef={aProposRef} />
        <NosServicesSection nosServicesRef={nosServicesRef} />
        <RealisationsSection realisationsRef={realisationsRef} />
        <ContactSection contactRef={contactRef} />
      </div>
    </>
  );
};

export default HomePage;
