import React from "react";
import LineSet from "../../LineSet";
import Line from "../../Line";
import TextField from "../../TextField";
import Typography from "../../Typography";
import Main from "../../../component/Main";
import Wrapper from "../../Wrapper";
import VicenteJuniorImage from "../../../asset/br/teachers/vicenteJunior.png";
import Person from "../../Person";

export default props => {
  return (
    <Main className={"home"}>
      <Wrapper>
        <div className={"home-title page-title"}>
          <Typography title className={"home-title-label page-title-label"}>
            Vicente Júnior
          </Typography>
          <Typography
            subject
            className={"home-title-subject page-title-subject"}
          >
            A equipe de jiu-jítsu que mais cresce em arte e esporte.
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
        {/*
        <Person name={"Professor Vicente Júnior"} image={VicenteJuniorImage} />
*/}
      </Wrapper>
    </Main>
  );
};
