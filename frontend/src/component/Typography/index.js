import React from "react";
import classNames from "classnames";

export default props => {
  const { title, subject, url, paragraph, className } = props;

  const classes = classNames(
    { [`Typography-title`]: title },
    { [`Typography-subject`]: subject },
    { [`Typography-link`]: url },
    { [`Typography-paragraph`]: paragraph },
    className
  );

  if (title) return <h1 className={classes}>{title}</h1>;
  if (subject)
    if (url)
      return (
        <a
          href={url}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {subject}
        </a>
      );
    else return <h6 className={classes}>{subject}</h6>;
  if (paragraph) return <p className={classes}>{paragraph}</p>;

  return null;
};
