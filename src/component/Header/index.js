import React from "react";
import Nav from "../Nav";
import Button from "../Button";
import Typography from "../Typography";
import Icon from "../Icon";

export default props => {
  return (
    <header className={"Header"}>
      <Typography
        url={"/home"}
        subject={<Icon name={"logo"} />}
        className={"Header-logo"}
      />
      {props.children}
      <Nav className={"Header-social"}>
        <Button
          spacing
          label={"Facebook"}
          icon={"facebook"}
          type={"small"}
          url={"https://fb.me"}
        />
        <Button
          spacing
          label={"Instagram"}
          icon={"instagram"}
          type={"small"}
          url={"https://instagr.am"}
        />
        <Button
          spacing
          label={"Youtube"}
          icon={"youtube"}
          type={"small"}
          url={"https://youtu.be"}
        />
      </Nav>
    </header>
  );
};
