import React from "react";
import classNames from "classnames";
import Button from "../Button";
import Modal from "@material-ui/core/Modal";

export default function Spaceship(props) {
  let { open, close, children, className } = props;

  const classes = classNames("Spaceship", className);

  return (
    <Modal
      aria-labelledby="simple-modal"
      aria-describedby="simple-modal"
      open={open}
      onClose={close}
      className={classes}
    >
      <div className={"Spaceship-area"}>
        {children}
        <Button
          id={"close-spaceship"}
          className={"Spaceship-area-button"}
          label={"Fechar"}
          icon={"remove"}
          type={"normal"}
          onClick={close}
        />
      </div>
    </Modal>
  );
}
