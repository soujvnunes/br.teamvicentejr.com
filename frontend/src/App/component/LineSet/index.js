import React from "react";

export default function LineSet(props) {
  let { className, children } = props;

  return <ul className={className} children={children} />;
}
