import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import Water from "components/Icons/Water";

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
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm="3">
            <Card className="service-card">
              <CardBody>
                <CardText tag="div" className="service">
                  <Table borderless className="light-text">
                    <tbody>
                      <tr>
                        <td>Eaux pluviales</td>
                      </tr>
                      <tr>
                        <td>Gestion (rétention) et plans de drainage</td>
                      </tr>
                      <tr>
                        <td>Aménagement de parcs et places publiques</td>
                      </tr>
                      <tr>
                        <td>Plans de stationnements et puisards</td>
                      </tr>
                      <tr>
                        <td>Plans de stationnements et puisards</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card className="service-card">
              <CardBody>
                <CardText tag="div" className="service">
                  <Table borderless className="light-text">
                    <tbody>
                      <tr>
                        <td>
                          Eau potable, Suivi et test de qualité, Eaux usées
                        </td>
                      </tr>
                      <tr>
                        <td>Installations sceptiques</td>
                      </tr>
                      <tr>
                        <td>
                          Résidentielles autonomes et commerces (q-2, r.22),
                          Municipales (suivi, analyse et assistance),
                          Industrielles (lqe, article 22)
                        </td>
                      </tr>
                      <tr>
                        <td>Sols et eaux souterraines</td>
                      </tr>
                      <tr>
                        <td>
                          Évaluation environnementale de site (ées phase i)
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card className="service-card">
              <CardBody>
                <CardText tag="div" className="service">
                  <Table borderless className="light-text">
                    <tbody>
                      <tr>
                        <td>
                          Caractérisation environnementale de site (ées phase
                          ii)
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Contrôle de l’érosion (stabilisation, aménagement des
                          berges)
                        </td>
                      </tr>
                      <tr>
                        <td>Échantillonnage et analyse</td>
                      </tr>
                      <tr>
                        <td>Démantèlement de réservoir souterrains</td>
                      </tr>
                      <tr>
                        <td>Certificat d’autorisation</td>
                      </tr>
                      <tr>
                        <td>
                          Article 32 de la loi sur la qualité de l’environnement
                          (lqe))
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card className="service-card">
              <CardBody>
                <CardText tag="div" className="service">
                  <Table borderless className="light-text">
                    <tbody>
                      <tr>
                        <td>Plans et devis</td>
                      </tr>
                      <tr>
                        <td>
                          Différentes formations spécialisées et personnalisées
                          par nos experts
                        </td>
                      </tr>
                      <tr>
                        <td>Recherche et développement</td>
                      </tr>
                      <tr>
                        <td>Gestion décentralisée des eaux usées</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosServicesSection;
