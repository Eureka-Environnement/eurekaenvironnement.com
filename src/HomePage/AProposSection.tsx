import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardText,
} from "reactstrap";

interface AProposSection {
  aProposRef: React.MutableRefObject<HTMLDivElement | null>;
}

const AProposSection = ({ aProposRef }: AProposSection) => {
  return (
    <div className="section text-center section-full-viewport" ref={aProposRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">À Propos</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: '5'}}>
            <Card className="adjust-to-text">
              <CardImg
                top
                src="http://localhost:3000/eurekaenvironnement.com/img/riviere-eaux-traitement.jpg"
                alt="..."
              />
              <CardBody>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={{ size: '5', offset: 2 }}>
            <h4 className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus, purus sit amet iaculis finibus, diam urna consectetur
              leo, at eleifend sapien nulla eget neque. Aenean fringilla dapibus
              vulputate. Donec imperdiet erat a magna iaculis efficitur. Fusce
              egestas risus lobortis erat pulvinar, ac posuere nibh blandit.
              Praesent faucibus mattis odio et aliquet. Aenean at lacus rutrum,
              elementum velit pretium, molestie justo. Etiam pharetra tincidunt
              consequat. Nunc diam arcu, iaculis sed semper posuere, posuere
              euismod augue.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AProposSection;
