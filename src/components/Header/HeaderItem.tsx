import React from 'react';
import {
  NavItem,
  NavLink
} from 'reactstrap';

interface HeaderItem {
  title: string;
  toggleNavbar: VoidFunction;
  sectionRef: React.MutableRefObject<HTMLDivElement | null>;
}

const HeaderItem = ({
  title,
  toggleNavbar,
  sectionRef
}: HeaderItem) => {
  return (
    <NavItem>
      <NavLink
        onClick={() => {
          window.innerWidth < 992 && toggleNavbar();
          window.scroll({
            top: sectionRef.current ? sectionRef?.current?.offsetTop - 70 : 0,
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
