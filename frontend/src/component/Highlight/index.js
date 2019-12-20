import React from "react";
import main_1 from "../../asset/main_1.png";
import main_2 from "../../asset/main_2.png";
import main_3 from "../../asset/main_3.png";
import classNames from "classnames";

export default props => {
  let { className } = props;
  const classes = classNames("Highlight", className);
  return (
    <aside className={classes}>
      <img
        className={"Highlight-image Highlight-image--1st"}
        src={main_1}
        alt={`Imagem`}
      />
      <img
        className={"Highlight-image Highlight-image--2nd"}
        src={main_2}
        alt={`Imagem`}
      />
      <img
        className={"Highlight-image Highlight-image--3rd"}
        src={main_3}
        alt={`Imagem`}
      />
    </aside>
  );
};
