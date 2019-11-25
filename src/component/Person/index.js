import React from "react";
import classNames from "classnames";

export default props => {
  const className = classNames("Person", props.className);
  const alt = `Imagem de ${props.name}`;

  return (
    <figure className={className}>
      <img className={"Person-image"} src={props.image} alt={alt} />
      <figcaption
        className={"Person-caption"}
        children={props.caption ? props.caption : alt}
      />
    </figure>
  );
};
