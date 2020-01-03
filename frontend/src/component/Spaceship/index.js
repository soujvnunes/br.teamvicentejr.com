import React from "react";
import classNames from "classnames";
import Modal from "@material-ui/core/Modal";
import Wrapper from "../Wrapper";

export default function Spaceship(props) {
  let { open, close, children, className } = props;

  const classes = {
    root: [classNames("Spaceship", /*{ [``]: !noHover },*/ className)]
  };

  let { root } = classes;

  return (
    <Modal
      aria-labelledby="simple-modal"
      aria-describedby="simple-modal"
      open={open}
      onClose={close}
      className={root}
    >
      <Wrapper>{children}</Wrapper>
    </Modal>
  );
}
