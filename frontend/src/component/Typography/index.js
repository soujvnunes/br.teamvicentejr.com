import React from "react";
import classNames from "classnames";

export default function Typography(props) {
  let { title, subject, url, paragraph, className, children } = props;

  const classes = classNames(
    { [`Typography-title`]: title },
    { [`Typography-subject`]: subject },
    { [`Typography-link`]: url },
    { [`Typography-paragraph`]: paragraph },
    className
  );

  if (children) {
    if (title) return <h1 className={classes}>{children}</h1>;
    if (subject)
      if (url)
        return (
          <a
            href={url}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      else return <h5 className={classes}>{children}</h5>;
    if (paragraph) return <p className={classes}>{children}</p>;
  } else {
    return null;
  }
}
