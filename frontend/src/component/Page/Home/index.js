import React from "react";
import LineSet from "../../LineSet";
import Line from "../../Line";
import TextField from "../../TextField";
import Typography from "../../Typography";
import Main from "../../../component/Main";
import { ReactComponent as Mark } from "../../../asset/mark.svg";
import Wrapper from "../../Wrapper";

export default props => {
  return (
    <Main className={"home"}>
      <Wrapper>
        <div className={"home-title"}>
          <Typography title className={"home-label"}>
            <Mark
              title={"Vicente Júnior — Brazilian Jiu-Jitsu"}
              className={"home-title-label-svg"}
            />
          </Typography>
          <Typography subject className={"home-subject"}>
            A equipe de jiu-jítsu que mais cresce em arte e esporte americano.
          </Typography>
        </div>
        <div className={"home-events"}>
          <TextField
            label={"Pesquisar evento"}
            id={"user-event-search"}
            icon={"search"}
            fullWidth
            className={"home-events-input"}
          />
          <LineSet>
            <Line primary={"Nome do evento"} secondary={"Local"} icon={"add"}>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Line>
          </LineSet>
        </div>
      </Wrapper>
    </Main>
  );
};
