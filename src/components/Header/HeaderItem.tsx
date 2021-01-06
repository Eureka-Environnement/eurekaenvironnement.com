import React from 'react';
import { navigate } from 'gatsby';
import {
  NavItem,
  NavLink
} from 'reactstrap';
import { HOME_PAGE } from 'utils/constants';

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
          navigate(HOME_PAGE);
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
