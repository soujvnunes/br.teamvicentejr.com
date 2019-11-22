import React from "react";
import Link from "../Link";
import Icon from "../Icon";

export default props => (
  <nav className={"Social"}>
    <Link label={"Facebook"} icon={<Icon name={"facebook"} />} />
    <Link label={"Instagram"} icon={<Icon name={"instagram"} />} />
    <Link label={"Youtube"} icon={<Icon name={"youtube"} />} />
  </nav>
);
