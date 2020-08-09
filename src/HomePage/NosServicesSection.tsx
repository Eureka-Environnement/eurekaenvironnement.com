import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";

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
            <h2 className="title">Nos Services</h2>
            <h5 className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus, purus sit amet iaculis finibus, diam urna consectetur leo, at eleifend sapien nulla eget neque. Aenean fringilla dapibus vulputate. Donec imperdiet erat a magna iaculis efficitur. Fusce egestas risus lobortis erat pulvinar, ac posuere nibh blandit. Praesent faucibus mattis odio et aliquet. Aenean at lacus rutrum, elementum velit pretium, molestie justo. Etiam pharetra tincidunt consequat. Nunc diam arcu, iaculis sed semper posuere, posuere euismod augue.
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NosServicesSection;
