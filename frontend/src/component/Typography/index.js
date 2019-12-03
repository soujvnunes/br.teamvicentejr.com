import React from "react";
import classNames from "classnames";

export default props => {
  const className = classNames(
    { [`Typography-title`]: props.title },
    { [`Typography-subject`]: props.subject },
    { [`Typography-link`]: props.url },
    { [`Typography-paragraph`]: props.paragraph },
    props.className
  );

  return (
    <React.Fragment>
      {props.title && <h1 className={className} children={props.title} />}
      {props.subject && (
        <React.Fragment>
          {props.url ? (
            <a
              href={props.url}
              className={className}
              children={props.subject}
            />
          ) : (
            <h6 className={className} children={props.subject} />
          )}
        </React.Fragment>
      )}
      {props.paragraph && (
        <p className={className} children={props.paragraph} />
      )}
    </React.Fragment>
  );
};
