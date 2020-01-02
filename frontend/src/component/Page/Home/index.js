import React from "react";
import LineSet from "../../LineSet";
import Line from "../../Line";
import TextField from "../../TextField";
import Typography from "../../Typography";
import Main from "../../../component/Main";
import VicenteJuniorImage from "../../../asset/br/teachers/vicenteJunior.png";
import Person from "../../Person";
import Header from "../../Header";
import HeaderImage from "../../../asset/br/home/header.jpg";
import Section from "../../Section";

export default props => {
  return (
    <Main className={"home"}>
      <Header
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={HeaderImage}
      />
      <div className={"home-events-sections"}>
        <Section>
          <TextField
            label={"Pesquisar evento"}
            id={"event-search"}
            icon={"search"}
            fullWidth
            className={"home-events-sections-filter"}
          />
        </Section>
        <Section>
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
        </Section>
      </div>
    </Main>
  );
};
