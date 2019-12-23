import React from "react";
import SocialButton from "./SocialButton";
import SpaceshipTitle from "../SpaceshipTitle";
import SpaceshipContent from "../SpaceshipContent";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";
import classNames from "classnames";
import Icon from "../Icon";

export default function Header(props) {
  let { className } = props;

  const classes = {
    root: [classNames("Header" /*, { [`class`]: prop }*/, className)]
  };

  let { root } = classes;

  return (
    <header className={root}>
      <a href={"/"} className={"Header-logo"}>
        <Icon name={"logo"} />
      </a>
      <aside className={"Header-social"}>
        <SocialButton icon={"instagram"}>
          <SpaceshipTitle>Instagram</SpaceshipTitle>
          <SpaceshipContent>
            <LineSet>
              <Line noHover={true}>
                <LineHeader primary={"@vicentejuniorteambrasil"}>
                  <IconButton
                    noHover={true}
                    icon={"share"}
                    url={"https://instagr.am/vicentejrteambrasil"}
                  />
                </LineHeader>
              </Line>
              <Line noHover={true}>
                <LineHeader primary={"@vicentebjj"}>
                  <IconButton
                    noHover={true}
                    icon={"share"}
                    url={"https://instagr.am/vicentebjj"}
                  />
                </LineHeader>
              </Line>
            </LineSet>
          </SpaceshipContent>
        </SocialButton>
        <IconButton
          icon={"phone"}
          url={"mailto:vicentejrteam@gmail.com?subject=Contato pelo site"}
        />
        <IconButton icon={"youtube"} url={"https://youtube.com"} />
      </aside>
    </header>
  );
}
