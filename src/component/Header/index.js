import React from "react";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Button from "../Button";

export default props => (
  <header className={"Header"}>
    <Nav className={"Header-nav"}>
      <Typography
        url={"/"}
        subject={<Icon name={"logo"} />}
        className={"Header-nav-logo"}
      />
      <Typography
        url={"/"}
        subject={<Icon name={"home"} />}
        className={"Header-nav-link"}
      />
      <Typography
        url={"/"}
        subject={<Icon name={"people"} />}
        className={"Header-nav-link"}
      />
      <Typography
        url={"/"}
        subject={<Icon name={"local"} />}
        className={"Header-nav-link"}
      />
      <Typography
        url={"/"}
        subject={<Icon name={"user"} />}
        className={"Header-nav-link"}
      />
    </Nav>
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
