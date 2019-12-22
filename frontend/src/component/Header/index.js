import React from "react";
import Nav from "../Nav";
import SocialButton from "./SocialButton";
import SpaceshipTitle from "../SpaceshipTitle";
import SpaceshipContent from "../SpaceshipContent";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";

export default props => {
  let { children } = props;

  return (
    <header className={"Header"}>
      {children}
      <Nav className={"Header-social"}>
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
      </Nav>
    </header>
  );
};
