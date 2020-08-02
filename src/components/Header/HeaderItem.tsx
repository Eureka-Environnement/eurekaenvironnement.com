import React from 'react';
import {
  NavItem,
  NavLink
} from 'reactstrap';

interface HeaderItem {
  title: string;
  toggleNavbar: VoidFunction;
}

const HeaderItem = ({
  title,
  toggleNavbar
}: HeaderItem) => {
  return (
    <NavItem>
      <NavLink
        onClick={() => {
          window.innerWidth < 992 && toggleNavbar();
          window.scroll({
            top: 0,
            behavior: 'smooth'
          });
        }}
      >
        {title}
      </NavLink>
    </NavItem>
  );
};

export default HeaderItem;
