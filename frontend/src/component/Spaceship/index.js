import React from "react";
import classNames from "classnames";
import Button from "../Button";

export default props => {
  let { open, close, children, className } = props;

  const classes = classNames(
    "Spaceship",
    { [`Spaceship--open`]: open },
    className
  );

  return (
    <div className={classes}>
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
      <div className={"Spaceship-sky"} onClick={close} />
    </div>
  );
};
