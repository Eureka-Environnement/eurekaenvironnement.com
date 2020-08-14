import React, { useState } from "react";
import { toast } from 'react-toastify';
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  Label,
  Row
} from "reactstrap";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPhone
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ToastConfigs = {
  draggable: false,
  closeOnClick: true,
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 5000
};

interface NousJoindreSection {
  nousJoindreRef: React.MutableRefObject<HTMLDivElement | null>;
}

const NousJoindreSection = ({
  nousJoindreRef
}: NousJoindreSection) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetInputs = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = () => {
    if (name && email && subject && message) {
      toast.success(
        'Courriel envoyé!',
        ToastConfigs
      );
      resetInputs();
    } else {
      toast.error(
        'Veuillez remplir toutes les sections.',
        ToastConfigs
      );
    }
  };

  return (
    <div className="section text-center section-full-viewport" ref={nousJoindreRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title text-center">Pour nous rejoindre</h2>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <FaPhone color="#01184f" />
              </div>
              <div className="description">
                <p className="description">
                  450-300-4045<br />819-415-5535
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <a href="mailto:info@eurekaenvironnement.com">
              <div className="info">
                <div className="icon icon-info">
                  <MdEmail color="#01184f" />
                </div>
                <div className="description">
                  <p className="description">
                    info@eurekaenvironnement.com
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <a
                  className="mr-1 btn btn-link"
                  title="Suivez nous sur Facebook"
                  href="https://www.facebook.com/eurekaenv/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebookSquare size="70" color="#01184f" />
                </a>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <a
                  className="mr-1 btn btn-link"
                  title="Suivez nous sur Linkedin"
                  href="https://www.linkedin.com/company/eurekaenvironnement"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin size="70px" color="#01184f" />
                </a>
              </div>
            </div>
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
