import React from "react";
import classNames from "classnames";
import Skew from "../Skew";
import Icon from "../Icon";

export default function Select(props) {
  let { option, name, className, id, onChange, selected } = props;

  const classes = {
    root: [
      classNames("Select" /*, { [`IconButton--hover`]: !noHover }*/, className)
    ],
    select: [classNames("Select-select")],
    options: [classNames("Select-option")],
    adornment: [classNames("Select-adornment")]
  };

  let { options, root, select, adornment } = classes;

  return (
    <label className={root} htmlFor={id}>
      <Skew outlined />
      <Icon name={"chevronBottom"} className={adornment} />
      <select name={name} className={select} id={id} onChange={onChange}>
        {option.map((option, i) => (
          <option
            className={options}
            key={i}
            label={option.label}
            value={option.value}
            selected={selected}
          />
        ))}
      </select>
    </label>
  );
}
