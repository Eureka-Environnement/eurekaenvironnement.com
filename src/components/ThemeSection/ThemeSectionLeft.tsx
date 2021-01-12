/* eslint-disable max-len */
import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

interface ThemeSectionLeft {
  title: string;
  image: string;
  services: string[];
}

const ThemeSectionLeft = ({title, image, services}: ThemeSectionLeft) => {

  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="6">
          <Card className="card-plain">
            <CardTitle className="pt-0">
              <h2 className="mt-0 text-eureka-color-2">{title}</h2>
            </CardTitle>
            <CardBody>
              <ListGroup flush className="ml-0 text-list">
                {services.map((service) => (<ListGroupItem>{service}</ListGroupItem>))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col className="ml-auto mr-auto" md="6">
          <Card className="card-plain">
            <CardImg src={image} alt="" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ThemeSectionLeft;
