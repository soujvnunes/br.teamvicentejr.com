import React from "react";
import VicenteJunior from "../../asset/vicente.png";
import classNames from "classnames";

export default props => {
  let { className } = props;
  const classes = classNames("Highlight", className);
  return (
    <aside className={classes}>
      <img
        className={"Highlight-image Highlight-image--1st"}
        src={VicenteJunior}
        alt={`Imagem`}
      />
      <img
        className={"Highlight-image Highlight-image--2nd"}
        src={VicenteJunior}
        alt={`Imagem`}
      />
      <img
        className={"Highlight-image Highlight-image--3rd"}
        src={VicenteJunior}
        alt={`Imagem`}
      />
    </aside>
  );
};
