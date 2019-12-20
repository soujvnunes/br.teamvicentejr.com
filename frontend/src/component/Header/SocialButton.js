import React, { useState } from "react";
import Button from "../Button";
import Spaceship from "../Spaceship";

export default function SocialButton(props) {
  const [state, setState] = useState({
    open: false
  });

  let { children } = props;
  let { open } = state;

  return (
    <>
      <Button {...props} onClick={() => setState({ ...state, open: true })} />
      <Spaceship open={open} close={() => setState({ ...state, open: false })}>
        {children}
      </Spaceship>
    </>
  );
}
