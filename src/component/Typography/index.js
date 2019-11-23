import React from "react";

export default props => (
  <React.Fragment>
    {props.title && (
      <h1
        className={`Typography-title ${props.className}`}
        children={props.title}
      />
    )}
    {props.subject && (
      <React.Fragment>
        {props.url ? (
          <a
            href={props.url}
            className={`Typography-subject Typography-link ${props.className}`}
            children={props.subject}
          />
        ) : (
          <h6
            className={`Typography-subject ${props.className}`}
            children={props.subject}
          />
        )}
      </React.Fragment>
    )}
    {props.paragraph && (
      <p
        className={`Typography-paragraph ${props.className}`}
        children={props.paragraph}
      />
    )}
  </React.Fragment>
);
