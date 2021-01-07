import React, { useRef } from "react";
import AccueilSection from "./AccueilSection";
import AProposSection from "./AProposSection";
import NosServicesSection from "./NosServicesSection";
import ContactSection from "./ContactSection";
import { HomePageData } from "utils/constants";
import { mapHomePageData } from "utils/functions";

interface HomePage {
  data: HomePageData;
}

const HomePage = ({
  data
}: HomePage) => {
  const homePageData = mapHomePageData(data);
  const contactRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <AccueilSection contactRef={contactRef} title={homePageData.title} />
      <div className="main">
        <AProposSection
          aPropos={homePageData.aPropos}
        />
        <NosServicesSection
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
