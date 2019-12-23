import React from "react";
import classNames from "classnames";
import Skew from "../Skew";

export default function InputBase(props) {
  let { label, id, onFocus, onBlur, className } = props;

  const classes = {
    root: [classNames("InputBase" /*, { [`class`]: prop }*/, className)],
    input: [classNames("InputBase-input")],
    skew: [classNames("InputBase-skew")]
  };

  let { root, input, skew } = classes;

  return (
    <div className={root}>
      <input
        className={input}
        placeholder={label}
        id={id}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Skew className={skew} />
    </div>
  );
}
