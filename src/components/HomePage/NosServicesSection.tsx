import React from "react";
import { Col, Container, Row } from "reactstrap";
import Water from "components/Icons/Water";
import { Planet } from "react-planet";
import MenuCirculaireSection from "./MenuCirculaireSection";

interface NosServicesSection {
  nosServicesRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NosServicesSection = ({ nosServicesRef }: NosServicesSection) => {
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
                Nos experts sont la pour répondre à toutes vos questions!
              </small>
            </h2>
            <Container className="circular-menu center-menu">
              <Planet open orbitRadius={150} hideOrbit>
                <MenuCirculaireSection
                  buttonTitle="Conseil et gestion de l'eau"
                  popoverId="UncontrolledPopover-Conseil"
                  popoverHeader=""
                  popoverBody={["Accompagnement technologique","Municipalité","Projets d'optimisation","Changement climatique"]}
                  popoverPlacement="left-end"
                />
                <MenuCirculaireSection
                  buttonTitle="Eau"
                  popoverId="UncontrolledPopover-Eau"
                  popoverHeader=""
                  popoverBody={["Eaux pluie","Eaux usées","Eaux potables"]}
                  popoverPlacement="left"
                />

                <MenuCirculaireSection
                  buttonTitle="Sol"
                  popoverId="UncontrolledPopover-Sol"
                  popoverHeader=""
                  popoverBody={["Sol 1; Sol 2","Stabilité des berges"]}
                  popoverPlacement="top"
                />
                <MenuCirculaireSection
                  buttonTitle="Tests residentiels"
                  popoverId="UncontrolledPopover-residentiels"
                  popoverHeader=""
                  popoverBody={["Tests de sol","Puits","Tests eau","Inspection"]}
                  popoverPlacement="right"
                />
                <MenuCirculaireSection
                  buttonTitle="Projets speciaux"
                  popoverId="UncontrolledPopover-Speciaux"
                  popoverHeader=""
                  popoverBody={["Gestion eau","Stratégies de développement"]}
                  popoverPlacement="right-end"
                />
              </Planet>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosServicesSection;
