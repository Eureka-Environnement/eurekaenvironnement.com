import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
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
                  popoverHeader="blah"
                  popoverBody="sada"
                  popoverPlacement="left-end"
                />
                <MenuCirculaireSection
                  buttonTitle="Eau"
                  popoverId="UncontrolledPopover-Eau"
                  popoverHeader="blah"
                  popoverBody="sada"
                  popoverPlacement="left"
                />

                <MenuCirculaireSection
                  buttonTitle="Sol"
                  popoverId="UncontrolledPopover-Sol"
                  popoverHeader="blah"
                  popoverBody="sada"
                  popoverPlacement="top"
                />
                <MenuCirculaireSection
                  buttonTitle="Tests residentiels"
                  popoverId="UncontrolledPopover-residentiels"
                  popoverHeader="blah"
                  popoverBody="sada"
                  popoverPlacement="right"
                />
                <MenuCirculaireSection
                  buttonTitle="Projets speciaux"
                  popoverId="UncontrolledPopover-Speciaux"
                  popoverHeader="blah"
                  popoverBody="sada"
                  popoverPlacement="right-end"
                />
              </Planet>
            </Container>

            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosServicesSection;
