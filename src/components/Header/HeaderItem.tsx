import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {
  NavItem,
  NavLink
} from 'reactstrap';
import { HOME_PAGE } from 'utils/constants';

interface HeaderItem {
  title: string;
  refId: string;
  toggleNavbarCollapse: VoidFunction;
}

const HeaderItem = ({
  title,
  refId,
  toggleNavbarCollapse
}: HeaderItem) => {
  return (
    <NavItem>
      <NavLink
        tag={AnchorLink}
        onAnchorLinkClick={toggleNavbarCollapse}
        to={`${HOME_PAGE}#${refId}`}
      >
        {title}
      </NavLink>
    </NavItem>
  );
};

export default HeaderItem;
