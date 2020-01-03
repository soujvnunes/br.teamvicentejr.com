import React from "react";
import classNames from "classnames";
import Wrapper from "../Wrapper";
import Typography from "../Typography";

export default function Header(props) {
  let { className, image, title, subject, align, noBackdrop } = props;

  const classes = {
    root: [
      classNames(
        "Header",
        { [`Header--align-${align}`]: align },
        { [`Header--noBackdrop`]: noBackdrop },
        className
      )
    ]
  };

  let { root } = classes;

  return (
    <header
      className={root}
      style={image ? { backgroundImage: `url(${image})` } : null}
    >
      <Wrapper className={"Header-wrapper"}>
        <Typography title className={"Header-title"}>
          {title}
        </Typography>
        <Typography subject className={"Header-subject"}>
          {subject}
        </Typography>
      </Wrapper>
      {!noBackdrop && <>{image && <div className={"Header-backdrop"} />}</>}
    </header>
  );
}
