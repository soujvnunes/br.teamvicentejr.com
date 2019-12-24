import React from "react";
import LineSet from "../component/LineSet";
import Line from "../component/Line";
import TextField from "../component/TextField";
import Section from "../component/Section";
import Typography from "../component/Typography";
import Content from "../component/Content";
import Header from "../component/Header";
import { ReactComponent as Logo } from "../asset/logo.svg";

export default props => {
  return (
    <Content className={"home"}>
      <Header />
      <Section className={"home-intro"}>
        <Typography title className={"home-intro-title"}>
          <Logo
            title={"Vicente Júnior — Brazilian Jiu-Jitsu"}
            className={"home-intro-title-svg"}
          />
        </Typography>
        <Typography subject className={"home-intro-subject"}>
          A equipe de jiu-jítsu que mais cresce em <br />
          arte e esporte americano.
        </Typography>
      </Section>
      <Section className={"home-events"}>
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Line>
        </LineSet>
      </Section>
    </Content>
  );
};
