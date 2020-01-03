import React from "react";
/*
import { useMediaQuery } from "react-responsive";
*/
import classNames from "classnames";
import IconButton from "../IconButton";
import Skew from "../Skew";
import Mark from "../../asset/mark.png";

export default props => {
  /*  const isPhone = useMediaQuery({ maxDeviceWidth: 600 });*/
  let { children, indicator } = props;

  const classes = {
    root: [classNames("Nav")],
    runner: [
      classNames("Nav-links-indicator", {
        [`Nav-${indicator}-indicator`]: indicator
      })
    ]
  };

  let { root, runner } = classes;

  return (
    <nav className={root}>
      <Skew contained className={"Nav-skew"} />
      <div className={"Nav-links"}>
        <Skew contained className={runner} />
        {children}
      </div>
      <a href={"/"} className={"Nav-logo"}>
        <img src={Mark} alt={"marca da aplicação"} />
      </a>
      <aside className={"Nav-footer"}>
        <IconButton
          icon={"instagram"}
          url={"https://instagr.am/vicentejrteambrasil"}
          noHover={true}
          className={"Nav-footer-link"}
        />
        <IconButton
          icon={"phone"}
          url={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
          noHover={true}
          className={"Nav-footer-link"}
        />
        <IconButton
          icon={"youtube"}
          url={"https://youtube.com"}
          className={"Nav-footer-link"}
          noHover={true}
        />
      </aside>
    </nav>
  );
};
