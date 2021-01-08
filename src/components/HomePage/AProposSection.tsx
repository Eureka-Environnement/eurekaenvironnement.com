import React from "react";
import { Col, Container, Row } from "reactstrap";
import AboutUs from "components/Icons/AboutUs";
import { APROPOS_ID } from "utils/constants";

interface AProposSection {
  aPropos: React.ReactNode;
}


const AProposSection = ({ aPropos }: AProposSection) => {
  return (
    <div className="section text-center" id={APROPOS_ID}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <AboutUs className="icon-about-us" />
            <h1 className="title eureka">À Propos</h1>
            <hr />
          </Col>
        </Row>
        <Row className="section-space-bottom">
          <Col>
            <h4 className="description">
              {aPropos}
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AProposSection;
