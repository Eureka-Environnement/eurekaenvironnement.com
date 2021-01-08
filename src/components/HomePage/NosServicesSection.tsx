import React from "react";
import { Col, Container, Row } from "reactstrap";
import Water from "components/Icons/Water";
import CubeSection from "./CubeSection"
import { CubeTitles, SERVICES_ID } from "utils/constants";

interface NosServicesSection {
  subTitle: string;
  cubeTitles: CubeTitles;
}

const NosServicesSection = ({
  subTitle,
  cubeTitles
}: NosServicesSection) => {
  return (
    <div className="section text-center" id={SERVICES_ID}>
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
