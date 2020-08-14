import React from "react";
import { Button, Container } from "reactstrap";

interface AccueilSection {
  nousJoindreRef: React.MutableRefObject<HTMLDivElement | null>;
}

const AccueilSection = ({
  nousJoindreRef
}: AccueilSection) => {

  const scrollToNousJoindre = () => {
    window.scroll({
      top: nousJoindreRef.current ? nousJoindreRef?.current?.offsetTop : 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="page-header">
      <div className="filter" />
      <Container>
        <div className="motto text-center">
          <h1>Experts-conseil en environnement</h1>
          <h1>
            <small className="text-muted">
              Eaux, Sols, Matières résiduelles
            </small>
          </h1>
          <br />
          <Button
            className="btn-round"
            color="primary"
            outline
            onClick={scrollToNousJoindre}
          >
            Demandez une consultation!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AccueilSection;
