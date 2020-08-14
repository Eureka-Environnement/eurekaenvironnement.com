import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import Water from 'components/Icons/Water';

interface NosServicesSection {
  nosServicesRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NosServicesSection = ({
  nosServicesRef
}: NosServicesSection) => {
  return (
    <>
      <div className="section text-center" ref={nosServicesRef}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <Water />
              <h2 className="title">Nos Services</h2>
              <h3 className="title sub-section">Nos experts sont la pour répondre à toutes vos questions!</h3>
            </Col>
            <Col sm="3">
              <Card className="green">
                <CardBody>
                  <CardTitle tag="h4" className="service">Catégorie 1</CardTitle>
                  <CardText tag="div" className="service">
                    <ul>
                      <li>Eaux pluviales</li>
                      <li>Gestion (rétention) et plans de drainage</li>
                      <li>Aménagement de parcs et places publiques</li>
                      <li>Plans de stationnements et puisards</li>
                      <li>Bassins de rétention et jardins de pluie</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card className="blue">
                <CardBody>
                  <CardTitle tag="h4" className="service">Catégorie 1</CardTitle>
                  <CardText tag="div" className="service">
                    <ul>
                      <li>Eau potable, Suivi et test de qualité, Eaux usées</li>
                      <li>Installations sceptiques</li>
                      <li>Résidentielles autonomes et commerces (q-2, r.22), Municipales (suivi, analyse et assistance), Industrielles (lqe, article 22)</li>
                      <li>Sols et eaux souterraines</li>
                      <li>Évaluation environnementale de site (ées phase i)</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card className="purple">
                <CardBody>
                  <CardTitle tag="h4" className="service">Catégorie 1</CardTitle>
                  <CardText tag="div" className="service">
                    <ul>
                      <li>Caractérisation environnementale de site (ées phase ii)</li>
                      <li>Contrôle de l’érosion (stabilisation, aménagement des berges)</li>
                      <li>Échantillonnage et analyse</li>
                      <li>Démantèlement de réservoir souterrains</li>
                      <li>Certificat d’autorisation</li>
                      <li>Article 32 de la loi sur la qualité de l’environnement (lqe))</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="3">
              <Card className="brown">
                <CardBody>
                  <CardTitle tag="h4" className="service">Catégorie 1</CardTitle>
                  <CardText tag="div" className="service">
                    <ul>
                      <li>Plans et devis</li>
                      <li>Différentes formations spécialisées et personnalisées par nos experts</li>
                      <li>Recherche et développement</li>
                      <li>Gestion décentralisée des eaux usées</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NosServicesSection;
