import React from "react";
import { navigate } from 'gatsby';
import { Col, Row } from "reactstrap";
import {
  CubeTitles,
  EAU_PAGE,
  EAU_ID,
  GENIE_PAGE,
  GENIE_ID,
  MATIERES_PAGE,
  MATIERES_ID,
  RECHERCHE_ID,
  RECHERCHE_PAGE,
  RESIDENTIEL_PAGE,
  RESIDENTIEL_ID,
  SOL_PAGE,
  SOL_ID
} from "utils/constants";

interface CubeSection {
  cubeTitles: CubeTitles;
}

const CubeSection = ({
  cubeTitles
}: CubeSection) => {
  return (
    <div className="cube-section">
      <Row>
        <Col className="col-12 col-sm-12 col-md-3 offset-md-6 rd" onClick={() => { navigate(RECHERCHE_PAGE) }}>
          {cubeTitles[RECHERCHE_ID]}
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-sm-12 col-md-3 eau" onClick={() => { navigate(EAU_PAGE) }}>
          {cubeTitles[EAU_ID]}
        </Col>
        <Col className="col-12 col-sm-12 col-md-3 genie-civil" onClick={() => { navigate(GENIE_PAGE) }}>
          {cubeTitles[GENIE_ID]}
        </Col>
        <Col className="col-12 col-sm-12 col-md-3 sol"  onClick={() => { navigate(SOL_PAGE) }}>
          {cubeTitles[SOL_ID]}
        </Col>
        <Col className="col-12 col-sm-12 col-md-3 matieres-residuelles"  onClick={() => { navigate(MATIERES_PAGE) }}>
          {cubeTitles[MATIERES_ID]}
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-sm-12 col-md-3 offset-md-3 residentiel" onClick={() => { navigate(RESIDENTIEL_PAGE) }}>
          {cubeTitles[RESIDENTIEL_ID]}
        </Col>
      </Row>
    </div>
  );
};

export default CubeSection;
