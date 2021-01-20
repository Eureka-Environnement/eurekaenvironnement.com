import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import { CONTACT_ID } from "utils/constants";

interface ContactSection {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
  phone: string;
  email: string;
}

const ContactSection = ({ contactRef, phone, email }: ContactSection) => {
  return (
    <div className="section text-center" id={CONTACT_ID} ref={contactRef}>
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
              {phone}
            </p>
          </Col>
          <Col md="6">
            <h3 style={{ textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Courriel</h3>
            <p className="description center-horizontal">
              <a className="email" href={`mailto:${email}`}>{email}</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 style={{textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Joliette</h3>
            <iframe
              title="adress"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.370820046384!2d-73.4349149837938!3d46.023749203951745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8bd522ee87e55%3A0x29736fd2d165e550!2sEur%C3%AAka%20Environnement!5e0!3m2!1sfr!2sca!4v1609965206347!5m2!1sfr!2sca"
              width="100%"
              height="375"
              frameBorder="0"
              style={{float: 'left', border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </Col>
          <Col md="6">
          <h3 style={{textAlign: 'left', color: '#01184f', fontWeight: 'initial' }}>Trois-Rivières</h3>
            <iframe
              title="adress"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.404773397074!2d-72.56661770152608!3d46.32165754171248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc7cfa333877951%3A0xd04cc16fbeda7788!2sEur%C3%AAka%20Environnement!5e0!3m2!1sfr!2sca!4v1604973324074!5m2!1sfr!2sca"
              width="100%"
              height="375"
              frameBorder="0"
              style={{float: 'left', border: 0 }}
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

export default ContactSection;
