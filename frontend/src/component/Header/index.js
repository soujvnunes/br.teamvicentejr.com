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
        { [`Header--noImage`]: !image },
        className
      )
    ]
  };

  return (
    <header
      className={classes.root}
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
    </header>
  );
}
