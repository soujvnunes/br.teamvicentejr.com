import React from "react";
import Nav from "../Nav";
import Button from "../Button";

export default props => {
  return (
    <header className={"Header"}>
      {props.children}
      <Nav className={"Header-social"}>
        <Button
          spacing
          label={"Facebook"}
          icon={"facebook"}
          type={"small"}
          url={"https://fb.me"}
          state={props.social === "condensed" && "condensed"}
        />
        <Button
          spacing
          label={"Instagram"}
          icon={"instagram"}
          type={"small"}
          url={"https://instagr.am"}
          state={props.social === "condensed" && "condensed"}
        />
        <Button
          spacing
          label={"Youtube"}
          icon={"youtube"}
          type={"small"}
          url={"https://youtu.be"}
          state={props.social === "condensed" && "condensed"}
        />
      </Nav>
    </header>
  );
};
