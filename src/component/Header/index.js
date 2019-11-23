import React from "react";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Link from "../Link";

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
      <Link label={"Facebook"} icon={"facebook"} />
      <Link label={"Instagram"} icon={"instagram"} />
      <Link label={"Youtube"} icon={"youtube"} />
    </Nav>
  </header>
);
