import React from "react";
import classNames from "classnames";

export default function Person(props) {
  let { image, caption, name, className } = props;

  const classes = {
    root: [classNames("Person", className)],
    figure: [classNames("Person-image")],
    figureCaption: [classNames("Person-caption")]
  };

  let { root, figure, figureCaption } = classes;
  let alt = `Imagem de ${name}`;

  return (
    <figure className={root}>
      <img className={figure} src={image} alt={alt} />
      {caption && <figcaption className={figureCaption}>{caption}</figcaption>}
    </figure>
  );
}
