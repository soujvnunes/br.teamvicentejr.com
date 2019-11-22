import React from "react";
import Link from "../Link";
import Icon from "../Icon";

export default props => (
  <nav className={"ah-social"}>
    <div className={"ah-s-link-wrapper"}>
      <Link label={"Facebook"} icon={<Icon name={"facebook"} />} />
    </div>
    <div className={"ah-s-link-wrapper"}>
      <Link label={"Instagram"} icon={<Icon name={"instagram"} />} />
    </div>
    <div className={"ah-s-link-wrapper"}>
      <Link label={"Youtube"} icon={<Icon name={"youtube"} />} />
    </div>
  </nav>
);
