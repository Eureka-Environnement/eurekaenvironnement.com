import React, { useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';
import {
  Collapse,
  Navbar,
  Nav,
  Container
} from 'reactstrap';
import HeaderLogo from './HeaderLogo';
import HeaderItem from './HeaderItem';

const Header = () => {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbarCollapse = useCallback(() => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  }, [navbarCollapse, setNavbarCollapse]);

  const setColor = () => {
    const width = window.innerWidth / 5.5;
    if (
      document.documentElement.scrollTop > width - 1
      || document.body.scrollTop > width - 1
    ) {
      setNavbarColor('');
    } else if (
      (document.documentElement.scrollTop < width
      || document.body.scrollTop < width)
    ) {
      setNavbarColor('navbar-transparent');
    }
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      setColor();
    };
    setColor();
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  }, [setNavbarColor]);

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
      className={classnames('fixed-top', navbarColor)}
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
              toggleNavbar={toggleNavbarCollapse}
            />
            <HeaderItem
              title="Nos clients"
              toggleNavbar={toggleNavbarCollapse}
            />
            <HeaderItem
              title="Nos services"
              toggleNavbar={toggleNavbarCollapse}
            />
            <HeaderItem
              title="Nous joindre"
              toggleNavbar={toggleNavbarCollapse}
            />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;