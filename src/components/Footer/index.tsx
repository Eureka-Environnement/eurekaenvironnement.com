import React, { useEffect } from 'react';
import {
  Container
} from 'reactstrap';
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    function scrollOnClick() {
      setTimeout(() => window.scroll({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      }), 100);
    }
    document.getElementById('contactBtn')?.addEventListener('click', scrollOnClick);

    return function cleanup() {
      document.getElementById('contactBtn')?.removeEventListener('click', scrollOnClick);
    };
  }, []);
  return (
    <footer className="footer footer-eureka footer-white">
      <Container className="footer-max-width">
        <div className="credits ml-auto center">
          <a
            className="mr-1 btn btn-link btn-facebook"
            title="Suivez nous sur Facebook"
            href="https://www.facebook.com/eurekaenv/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebookSquare size="36" />
          </a>
          <a
            className="mr-1 btn btn-link btn-linkedin"
            title="Suivez nous sur Linkedin"
            href="https://www.linkedin.com/company/eurekaenvironnement"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size="36" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
