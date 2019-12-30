import React from "react";
import IconButton from "../IconButton";
import classNames from "classnames";
import Wrapper from "../Wrapper";
import { ReactComponent as Logo } from "../../asset/logo.svg";

export default function Header(props) {
  let { className } = props;

  const classes = {
    root: [classNames("Header" /*, { [`class`]: prop }*/, className)]
  };

  let { root } = classes;

  return (
    <header className={root}>
      <Wrapper className={"Header-wrapper"}>
        <a href={"/"} className={"Header-logo"}>
          <Logo />
        </a>
        <aside className={"Header-social"}>
          <IconButton
            icon={"instagram"}
            url={"https://instagr.am/vicentejrteambrasil"}
            noHover={true}
          />
          <IconButton
            icon={"phone"}
            url={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
            noHover={true}
          />
          <IconButton
            icon={"youtube"}
            url={"https://youtube.com"}
            noHover={true}
          />
        </aside>
      </Wrapper>
    </header>
  );
}
