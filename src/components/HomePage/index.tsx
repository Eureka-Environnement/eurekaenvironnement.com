import React from "react";
import AccueilSection from "./AccueilSection";
import AProposSection from "./AProposSection";
import NosServicesSection from "./NosServicesSection";
import ContactSection from "./ContactSection";
import { HomePageData } from "utils/constants";
import { mapHomePageData } from "utils/functions";

interface HomePage {
  aProposRef: React.MutableRefObject<HTMLDivElement | null>;
  nosServicesRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
  data: HomePageData;
}

const HomePage = ({
  aProposRef,
  nosServicesRef,
  contactRef,
  data
}: HomePage) => {
  const homePageData = mapHomePageData(data);
  console.log(homePageData)
  return (
    <>
      <AccueilSection nousJoindreRef={contactRef} title={homePageData.title} />
      <div className="main">
        <AProposSection
          aProposRef={aProposRef}
          aPropos={homePageData.aPropos}
        />
        <NosServicesSection
          nosServicesRef={nosServicesRef}
          subTitle={homePageData.subTitleServices}
          cubeTitles={homePageData.cubeTitles}
        />
        <ContactSection
          contactRef={contactRef}
          phone={homePageData.phone}
          email={homePageData.email}
        />
      </div>
    </>
  );
};

export default HomePage;
