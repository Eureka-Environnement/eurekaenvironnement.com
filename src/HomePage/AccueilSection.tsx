import React from "react";
import { Container } from "reactstrap";

const AccueilSection = () => {
  return (
    <div className="page-header">
      <div className="filter" />
      <Container>
        <div className="motto text-center">
          <h1>Experts-conseil en environnement</h1>
          <h1>
            <small className="text-white">
              Eaux, Sols, Matières résiduelles
            </small>
          </h1>
          <br />
        </div>
      </Container>
    </div>
  );
};

export default AccueilSection;
