import React, { useState } from "react";
import Spaceship from "../Spaceship";
import IconButton from "../IconButton";

export default function SocialButton(props) {
  const [state, setState] = useState({
    open: false
  });

  let { children } = props;
  let { open } = state;

  return (
    <>
      <IconButton
        {...props}
        onClick={() => setState({ ...state, open: true })}
      />
      <Spaceship open={open} close={() => setState({ ...state, open: false })}>
        {children}
      </Spaceship>
    </>
  );
}
