import React from "react";
import { Button, Container } from "reactstrap";

interface AccueilSection {
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
  title: string;
}

const AccueilSection = ({
  contactRef,
  title
}: AccueilSection) => {

  const scrollToContact = () => {
    window.scrollTo({
      top: contactRef.current ? contactRef?.current?.offsetTop : 0,
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
            onClick={scrollToContact}
          >
            Demandez une consultation!
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AccueilSection;
