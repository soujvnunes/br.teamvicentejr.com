import React from "react";

export default props => {
  const logo = [
    <path
      className={props.primary ? `primary-color` : null}
      d="M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10ZM10,3a7,7,0,1,0,7,7A7,7,0,0,0,10,3Z"
    />,
    <path
      className={props.secondary ? `secondary-color` : null}
      d="M16.9354,9.0442A7.0484,7.0484,0,0,1,17,10.0027a6.9675,6.9675,0,0,1-4.0062,6.3215ZM3,10.0027a6.9931,6.9931,0,0,0,6.0308,6.9246L4.4323,5.76A6.995,6.995,0,0,0,3,10.0027Zm7-7A7.0053,7.0053,0,0,0,5.6385,4.5212l4.8677,8.9276L15.5677,5.76A6.9773,6.9773,0,0,0,10,3.0027Z"
    />
  ];

  return (
    <svg
      viewBox="0 0 20 20"
      width={props.size ? (props.size ? props.size : 20) : null}
      height={props.size ? (props.size ? props.size : 20) : null}
      fill={props.fill}
      className={`icon icon-${props.name}`}
    >
      {props.name === "logo" && logo}
    </svg>
  );
};
