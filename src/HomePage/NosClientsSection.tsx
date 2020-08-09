import React from "react";
import { Container, Row } from "reactstrap";

const NosClientsSection = () => {
  return (
    <div className="section text-center">
      <Container>
        <Row>
          <div className="ml-auto mr-auto col-md-8">
            <h2 className="title">Nos clients</h2>
            <h5 className="description">
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
            <br />
            <a href="#pablo" className="btn-round btn btn-info">
              See Details
            </a>
          </div>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default NosClientsSection;
