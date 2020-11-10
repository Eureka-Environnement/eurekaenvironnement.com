import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";

interface NousJoindreSection {
  nousJoindreRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NousJoindreSection = ({ nousJoindreRef }: NousJoindreSection) => {
  return (
    <div className="section text-center" ref={nousJoindreRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title eureka">Contactez-nous !</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 style={{ textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Téléphone</h3>
            <p className="description center-horizontal">
              450-300-4045 | 819-415-5535
            </p>
          </Col>
          <Col md="6">
            <h3 style={{ textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Courriel</h3>
            <p className="description center-horizontal">
            info@eurekaenvironnement.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 style={{ textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Siège social</h3>
            <iframe
              title="adress"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.404773397074!2d-72.56661770152608!3d46.32165754171248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7cfa333877951%3A0xd04cc16fbeda7788!2sEur%C3%AAka%20Environnement!5e0!3m2!1sfr!2sca!4v1604973324074!5m2!1sfr!2sca"
              width="500"
              height="375"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
          <Col md="6">
          <h3 style={{ textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Trois-Rivières</h3>
            <iframe
              title="adress"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.404773397074!2d-72.56661770152608!3d46.32165754171248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7cfa333877951%3A0xd04cc16fbeda7788!2sEur%C3%AAka%20Environnement!5e0!3m2!1sfr!2sca!4v1604973324074!5m2!1sfr!2sca"
              width="500"
              height="375"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NousJoindreSection;
