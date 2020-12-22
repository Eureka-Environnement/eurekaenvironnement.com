import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import { NavbarBrand } from 'reactstrap';
import { HOME_PAGE } from 'utils/constants';

interface HeaderLogo {
  navbarCollapse: boolean;
  toggleNavbarCollapse: VoidFunction;
}

const HeaderLogo = ({
  navbarCollapse,
  toggleNavbarCollapse
}: HeaderLogo) => {
  useEffect(() => {
    function scrollOnClick() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
    document.getElementById('logoBtn')?.addEventListener('click', scrollOnClick);

    return function cleanup() {
      document.getElementById('logoBtn')?.removeEventListener('click', scrollOnClick);
    };
  }, []);

  return (
    <div className="navbar-translate">
      <NavbarBrand
        data-placement="bottom"
        className="navbar-logo"
        to={HOME_PAGE}
        tag={Link}
        id="logoBtn"
      />
      <button
        type="button"
        aria-expanded={navbarCollapse}
        className={classnames('navbar-toggler navbar-toggler', {
          toggled: navbarCollapse
        })}
        onClick={toggleNavbarCollapse}
      >
        <span className="navbar-toggler-bar bar1" />
        <span className="navbar-toggler-bar bar2" />
        <span className="navbar-toggler-bar bar3" />
      </button>
    </div>
  );
};

export default HeaderLogo;
