import React from "react";
import { Col, Row } from "reactstrap";

const CubeSection = () => {
  return (
    <div className="cube-section">
      <Row>
        <Col className="col-sm-12 col-md-3 offset-md-6 rd">R&#38;D</Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-3 eau">EAU</Col>
        <Col className="col-sm-12 col-md-3 genie-civil">GÉNIE CIVIL</Col>
        <Col className="col-sm-12 col-md-3 sol">SOL</Col>
        <Col className="col-sm-12 col-md-3 matieres-residuelles">MATIÈRES RÉSIDUELLES</Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-3 offset-md-3 residentiel">RÉSIDENTIEL</Col>
      </Row>
    </div>
  );
};

export default CubeSection;
