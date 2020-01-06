import React from "react";
import classNames from "classnames";
import Wrapper from "../Wrapper";

export default function Panel(props) {
  let { className, image, children, url } = props;

  const classes = {
    root: [classNames("Panel", className)],
    backdrop: [classNames("Panel-backdrop")]
  };

  const Body = (
    <>
      <div className={classes.backdrop} />
      <Wrapper>{children}</Wrapper>
    </>
  );

  return (
    <>
      {url ? (
        <a
          className={classes.root}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundImage: `url(${image})` }}
        >
          {Body}
        </a>
      ) : (
        <div
          className={classes.root}
          style={{ backgroundImage: `url(${image})` }}
        >
          {Body}
        </div>
      )}
    </>
  );
}
