import React from "react";
import { Col, Container, Row } from "reactstrap";
import Water from "components/Icons/Water";
import CubeSection from "./CubeSection"
import { CubeTitles } from "utils/constants";

interface NosServicesSection {
  nosServicesRef: React.MutableRefObject<HTMLDivElement | null>;
  subTitle: string;
  cubeTitles: CubeTitles;
}

const NosServicesSection = ({
  nosServicesRef,
  subTitle,
  cubeTitles
}: NosServicesSection) => {
  return (
    <div className="section text-center" ref={nosServicesRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Water className="water" />
            <h1 className="title eureka">Nos Services</h1>
            <hr />
            <h2 className="title sub-section eureka">
              <small>
                {subTitle}
              </small>
            </h2>
            <CubeSection
              cubeTitles={cubeTitles}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosServicesSection;
