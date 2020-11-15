import React from "react";
import {
  Col,
  Container,
  Row,
  UncontrolledCarousel
} from "reactstrap";
import Handshake from "components/Icons/Handshake";

interface RealisationsSection {
  realisationsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const images = [
  {
    src: 'https://eureka-environnement.github.io/eurekaenvironnement.com/static/main_background-3fd7eedc2e88390287dff84ec72fc75c.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'https://eureka-environnement.github.io/eurekaenvironnement.com/static/main_background-3fd7eedc2e88390287dff84ec72fc75c.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'https://eureka-environnement.github.io/eurekaenvironnement.com/static/main_background-3fd7eedc2e88390287dff84ec72fc75c.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'https://eureka-environnement.github.io/eurekaenvironnement.com/static/main_background-3fd7eedc2e88390287dff84ec72fc75c.jpg',
    altText: '',
    caption: '',
  },
]


const RealisationsSection = ({ realisationsRef }: RealisationsSection) => {
  return (
    <div className="section text-center" ref={realisationsRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <Handshake className="handshake" />
            <h1 className="title eureka">Nos Réalisations</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <UncontrolledCarousel
              className="img-blog-article"
              items={images}
              interval="5000"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RealisationsSection;
