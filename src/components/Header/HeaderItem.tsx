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
}

const HeaderItem = ({
  title,
  refId,
}: HeaderItem) => {
  return (
    <NavItem>
      <NavLink
        tag={AnchorLink}
        to={`${HOME_PAGE}#${refId}`}
      >
        {title}
      </NavLink>
    </NavItem>
  );
};

export default HeaderItem;
