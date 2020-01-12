import React from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import Button from "../Button";
import Skew from "../Skew";
import Mark from "../../asset/mark.png";

export default props => {
  const isTablet = useMediaQuery({ maxDeviceWidth: 960 });
  let { children, indicator } = props;

  const classes = {
    root: [classNames("Nav")],
    runner: [
      classNames("Nav-links-indicator", {
        [`Nav-${indicator}-indicator`]: indicator
      })
    ]
  };

  function Body() {
    return (
      <>
        <a href={"/"} className={"Nav-logo"}>
          <img src={Mark} alt={"marca da aplicação"} />
        </a>
        <aside className={"Nav-aside"}>
          <Button
            skew={false}
            variant={"text"}
            icon={"instagram"}
            href={"https://instagr.am/vicentejrteambrasil"}
            className={"Nav-aside-link Nav-link"}
          />
          <Button
            skew={false}
            variant={"text"}
            icon={"phone"}
            href={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
            className={"Nav-aside-link Nav-link"}
          />
          <Button
            skew={false}
            variant={"text"}
            icon={"youtube"}
            href={"https://youtube.com"}
            className={"Nav-aside-link Nav-link"}
          />
        </aside>
      </>
    );
  }

  return (
    <nav className={classes.root}>
      {!isTablet && <Skew variant={"contained"} className={"Nav-skew"} />}
      <div className={"Nav-links"}>
        <Skew variant={"contained"} className={classes.runner} />
        {children}
      </div>
      {isTablet ? (
        <div className={"Nav-social"}>
          <Body />
        </div>
      ) : (
        <Body />
      )}
    </nav>
  );
};
