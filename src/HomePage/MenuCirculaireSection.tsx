import React from "react";
import {
  Button,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

interface MenuCirculaireSection {
  buttonTitle: string;
  popoverId: string;
  popoverHeader: string;
  popoverBody: string;
  popoverPlacement:
    | "auto-start"
    | "auto"
    | "auto-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start"
    | undefined;
}

const MenuCirculaireSection = ({
  buttonTitle,
  popoverHeader,
  popoverBody,
  popoverId,
  popoverPlacement,
}: MenuCirculaireSection) => {
  return (
    <Button className="menu-element" id={popoverId} type="button">
      {buttonTitle}
      <UncontrolledPopover placement={popoverPlacement} target={popoverId}>
        <PopoverHeader>{popoverHeader}</PopoverHeader>
        <PopoverBody>{popoverBody}</PopoverBody>
      </UncontrolledPopover>
    </Button>
  );
};

export default MenuCirculaireSection;
