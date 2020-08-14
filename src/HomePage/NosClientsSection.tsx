import React from "react";
import { Container, Row } from "reactstrap";
import Handshake from "components/Icons/Handshake";

interface NosClientsSection {
  nosClientsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NosClientsSection = ({ nosClientsRef }: NosClientsSection) => {
  return (
    <div
      className="section text-center section-full-viewport"
      ref={nosClientsRef}
    >
      <Container>
        <Row>
          <div className="ml-auto mr-auto col-md-8">
            <Handshake />
            <h2 className="title">Qui sont nos clients?</h2>
            <h5 className="description">
              Vous! Que vous soyez un particulier, un commerçant, un
              entrepreneur, un gestionnaire d’usine ou opérateurs de station
              d’épuration ou d’assainissement, nous avons des solutions pour
              vous. Nous œuvrons tant dans les secteurs résidentiels,
              commercial, municipal et industriel.
            </h5>
            <br />
          </div>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default NosClientsSection;
