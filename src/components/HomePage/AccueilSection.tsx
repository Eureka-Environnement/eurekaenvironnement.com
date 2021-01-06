import React from "react";
import { Button, Container } from "reactstrap";

interface AccueilSection {
  nousJoindreRef: React.MutableRefObject<HTMLDivElement | null>;
  title: string;
}

const AccueilSection = ({
  nousJoindreRef,
  title
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
        <div className="motto text-center landing">
          <h1>{title}</h1>
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
