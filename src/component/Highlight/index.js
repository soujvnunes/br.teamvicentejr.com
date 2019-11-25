import React from "react";
import VicenteJunior from "../../asset/vicente.png";
import classNames from "classnames";

export default props => {
  const className = classNames("Highlight", props.className);
  return (
    <section className={className}>
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
    </section>
  );
};
