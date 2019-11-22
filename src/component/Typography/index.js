import React from "react";

export default props => {
  return (
    <div className={["Typography", props.className].join(" ")}>
      {props.title && (
        <h1 className={"Typography-title"} children={props.title} />
      )}
      {props.subject && (
        <h6 className={"Typography-subject"} children={props.subject} />
      )}
      {props.paragraph && (
        <p className={"Typography-paragraph"} children={props.paragraph} />
      )}
    </div>
  );
};
