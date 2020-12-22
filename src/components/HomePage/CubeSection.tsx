import React from "react";
import { navigate } from 'gatsby';
import { Col, Row } from "reactstrap";
import {
  EAU_PAGE,
  GENIE_PAGE,
  MATIERES_PAGE,
  RECHERCHE_PAGE,
  RESIDENTIEL_PAGE,
  SOL_PAGE
} from "utils/constants";

const CubeSection = () => {
  return (
    <div className="cube-section">
      <Row>
        <Col className="col-sm-12 col-md-3 offset-md-6 rd" onClick={() => { navigate(RECHERCHE_PAGE) }}>
          R&#38;D
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-3 eau" onClick={() => { navigate(EAU_PAGE) }}>
          EAU
        </Col>
        <Col className="col-sm-12 col-md-3 genie-civil" onClick={() => { navigate(GENIE_PAGE) }}>
          GÉNIE CIVIL
        </Col>
        <Col className="col-sm-12 col-md-3 sol"  onClick={() => { navigate(SOL_PAGE) }}>
          SOL
        </Col>
        <Col className="col-sm-12 col-md-3 matieres-residuelles"  onClick={() => { navigate(MATIERES_PAGE) }}>
          MATIÈRES RÉSIDUELLES
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-3 offset-md-3 residentiel" onClick={() => { navigate(RESIDENTIEL_PAGE) }}>
          RÉSIDENTIEL
        </Col>
      </Row>
    </div>
  );
};

export default CubeSection;
