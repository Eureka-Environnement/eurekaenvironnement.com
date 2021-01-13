import React, {
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  Container
} from 'reactstrap';
import HeaderLogo from './HeaderLogo';
import HeaderItem from './HeaderItem';
import { APROPOS_ID, CONTACT_ID, SERVICES_ID } from 'utils/constants';

const Header = () => {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbarCollapse = useCallback(() => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  }, [navbarCollapse, setNavbarCollapse]);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (!menuRef.current?.contains(e.target) && navbarCollapse) {
        toggleNavbarCollapse();
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef, navbarCollapse, toggleNavbarCollapse]);

  return (
    <Navbar
      className='fixed-top'
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <HeaderLogo navbarCollapse={navbarCollapse} toggleNavbarCollapse={toggleNavbarCollapse} />
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
          innerRef={menuRef}
        >
          <Nav navbar>
            <HeaderItem
              title="À propos"
              refId={APROPOS_ID}
              toggleNavbarCollapse={toggleNavbarCollapse}
            />
            <HeaderItem
              title="Nos services"
              refId={SERVICES_ID}
              toggleNavbarCollapse={toggleNavbarCollapse}
            />
            <HeaderItem
              title="Contactez-nous"
              refId={CONTACT_ID}
              toggleNavbarCollapse={toggleNavbarCollapse}
            />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
