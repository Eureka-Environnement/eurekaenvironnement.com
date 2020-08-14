import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import { FaFacebookSquare, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ToastConfigs = {
  draggable: false,
  closeOnClick: true,
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 5000,
};

interface NousJoindreSection {
  nousJoindreRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NousJoindreSection = ({ nousJoindreRef }: NousJoindreSection) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetInputs = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const sendEmail = () => {
    if (name && email && subject && message) {
      toast.success("Courriel envoyé!", ToastConfigs);
      resetInputs();
    } else {
      toast.error("Veuillez remplir toutes les sections.", ToastConfigs);
    }
  };

  return (
    <div className="section text-center" ref={nousJoindreRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h1 className="title eureka">Pour nous rejoindre</h1>
          </Col>
        </Row>
        <Row>
          <Col md="3" className="center-horizontal">
            <Row className="icon icon-info center-horizontal">
              <FaPhone
                color="#01184f"
                size="55px"
                className="center-horizontal phone-icon"
              />
            </Row>
            <Row className="center-horizontal">
              <p className="description center-horizontal">
                450-300-4045 | 819-415-5535
              </p>
            </Row>
          </Col>
          <Col md="3" className="center-horizontal">
            <a href="mailto:info@eurekaenvironnement.com">
              <Row className="icon icon-info center-horizontal">
                <MdEmail
                  color="#01184f"
                  size="60px"
                  className="center-horizontal"
                />
              </Row>
              <Row className="center-horizontal">
                <p className="description center-horizontal">
                  info@eurekaenvironnement.com
                </p>
              </Row>
            </a>
          </Col>
          <Col md="3" className="center-horizontal">
            <a
              className="mr-1 btn btn-link"
              title="Suivez nous sur Facebook"
              href="https://www.facebook.com/eurekaenv/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Row className="icon icon-info center-horizontal">
                <FaFacebookSquare
                  color="#01184f"
                  size="60px"
                  className="center-horizontal"
                />
              </Row>
              <Row className="center-horizontal">
                <p className="description center-horizontal lowercase-social">
                  eurekaenv
                </p>
              </Row>
            </a>
          </Col>
          <Col md="3" className="center-horizontal">
            <a
              className="mr-1 btn btn-link"
              title="Suivez nous sur Linkedin"
              href="https://www.linkedin.com/company/eurekaenvironnement"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Row className="icon icon-info center-horizontal">
                <FaLinkedin
                  color="#01184f"
                  size="60px"
                  className="center-horizontal"
                />
              </Row>
              <Row className="center-horizontal">
                <p className="description center-horizontal lowercase-social">
                  eurekaenvironnement
                </p>
              </Row>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <div className="contact-form">
              <Row>
                <Col md="6">
                  <Label>Nom</Label>
                  <InputGroup>
                    <Input
                      placeholder="Nom"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <Label>Courriel</Label>
                  <InputGroup>
                    <Input
                      placeholder="Courriel"
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Label>Sujet</Label>
              <InputGroup>
                <Input
                  placeholder="Sujet"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </InputGroup>
              <Label>Message</Label>
              <Input
                placeholder="Message"
                type="textarea"
                rows="6"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <Row>
                <Col className="ml-auto mr-auto center" md="4">
                  <Button
                    className="btn-fill"
                    color="primary"
                    size="lg"
                    onClick={sendEmail}
                  >
                    Envoyer
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NousJoindreSection;
