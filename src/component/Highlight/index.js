import React from "react";
import Person from "../Person";
import VicenteJunior from "../../asset/vicente.png";
import classNames from "classnames";

export default props => {
  const className = classNames("Highlight", props.className);
  return (
    <section className={className}>
      <Person
        image={VicenteJunior}
        name={"Vicente Júnior"}
        className={"Highlight-person"}
      />
    </section>
  );
};
