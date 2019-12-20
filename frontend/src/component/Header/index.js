import React from "react";
import Nav from "../Nav";
import Button from "../Button";
import SocialButton from "./SocialButton";
import SpaceshipTitle from "../SpaceshipTitle";
import SpaceshipContent from "../SpaceshipContent";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";

export default props => {
  let { children, social } = props;

  return (
    <header className={"Header"}>
      {children}
      <Nav className={"Header-social"}>
        <Button
          spacing
          label={"Youtube"}
          icon={"youtube"}
          type={"small"}
          url={"https://youtube.com"}
          state={social === "condensed" && "condensed"}
        />
        <SocialButton
          spacing
          label={"Instagram"}
          icon={"instagram"}
          type={"small"}
          state={social === "condensed" && "condensed"}
        >
          <SpaceshipTitle>Instagram</SpaceshipTitle>
          <SpaceshipContent>
            <LineSet>
              <Line noHover={true}>
                <LineHeader
                  primary={"@vicentejuniorteambrasil"}
                  secondary={"Instagram"}
                  icon={"instagram"}
                >
                  <IconButton
                    type={"large"}
                    icon={"share"}
                    url={"https://instagr.am/vicentejrteambrasil"}
                  />
                </LineHeader>
              </Line>
              <Line noHover={true}>
                <LineHeader
                  primary={"@vicentebjj"}
                  secondary={"Instagram do Professor Vicente"}
                  icon={"instagram"}
                >
                  <IconButton
                    type={"large"}
                    icon={"share"}
                    url={"https://instagr.am/vicentebjj"}
                  />
                </LineHeader>
              </Line>
            </LineSet>
          </SpaceshipContent>
        </SocialButton>
        <SocialButton
          spacing
          label={"Contato"}
          icon={"phone"}
          type={"small"}
          state={social === "condensed" && "condensed"}
        >
          <SpaceshipTitle>Contato</SpaceshipTitle>
          <SpaceshipContent>
            <LineSet>
              <Line noHover={true}>
                <LineHeader
                  primary={"vicentejrteam@gmail.com"}
                  secondary={"E-mail"}
                  icon={"local"}
                >
                  <IconButton
                    type={"large"}
                    icon={"share"}
                    url={
                      "mailto:vicentejrteam@gmail.com?subject=Contato pelo site"
                    }
                  />
                </LineHeader>
              </Line>
            </LineSet>
          </SpaceshipContent>
        </SocialButton>
      </Nav>
    </header>
  );
};
