import React from "react";
import {
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
    <div className="section text-center section-full-viewport" ref={nosServicesRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Water />
            <h2 className="title">Nos Services</h2>
            <h3 className="title sub-section">Nos experts sont la pour répondre à toutes vos questions!</h3>
            <p className="description left">
              <ul>
                <li>Eaux pluviales</li>
                <li>Gestion (rétention) et plans de drainage</li>
                <li>Aménagement de parcs et places publiques</li>
                <li>Plans de stationnements et puisards</li>
                <li>Bassins de rétention et jardins de pluie</li>
                <li>Eau potable, Suivi et test de qualité, Eaux usées</li>
                <li>Installations sceptiques</li>
                <li>Résidentielles autonomes et commerces (q-2, r.22), Municipales (suivi, analyse et assistance), Industrielles (lqe, article 22)</li>
                <li>Sols et eaux souterraines</li>
                <li>Évaluation environnementale de site (ées phase i)</li>
                <li>Caractérisation environnementale de site (ées phase ii)</li>
                <li>Contrôle de l’érosion (stabilisation, aménagement des berges)</li>
                <li>Échantillonnage et analyse</li>
                <li>Démantèlement de réservoir souterrains</li>
                <li>Certificat d’autorisation</li>
                <li>Article 32 de la loi sur la qualité de l’environnement (lqe))</li>
                <li>Plans et devis</li>
                <li>Différentes formations spécialisées et personnalisées par nos experts</li>
                <li>Recherche et développement</li>
                <li>Gestion décentralisée des eaux usées</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosServicesSection;
