import React from "react";

export default props => {
  const alt = `Imagem de ${props.name}`;

  return (
    <figure className={"Person"}>
      <img className={"Person-image"} src={props.image} alt={alt} />
      <figcaption
        className={"Person-caption"}
        children={props.caption ? props.caption : alt}
      />
    </figure>
  );
};
