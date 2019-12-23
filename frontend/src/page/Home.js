import React, { useState } from "react";
import LineSet from "../component/LineSet";
import Line from "../component/Line";
import TextField from "../component/TextField";
import Section from "../component/Section";
import Typography from "../component/Typography";
import LineHeader from "../component/LineHeader";
import IconButton from "../component/IconButton";
import Content from "../component/Content";
import Header from "../component/Header";
import { ReactComponent as Logo } from "../asset/logo.svg";
import InputBase from "../component/InputBase";

export default props => {
  const [state, setState] = useState({
    expandLine: false,
    open: false
  });

  let { expandLine, open } = state;
  let { event, switchContent } = props;

  function handleExpandLine() {
    if (expandLine) setState({ ...state, expandLine: false });
    else setState({ ...state, expandLine: true });
  }

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
        />
        <LineSet>
          <Line expand={expandLine}>
            <LineHeader
              primary={"Nome do evento"}
              secondary={"Local"}
              icon={"local"}
            >
              <IconButton
                className={"Line-header-button"}
                type={"large"}
                icon={expandLine ? "remove" : "add"}
                onClick={handleExpandLine}
              />
            </LineHeader>
            <Typography paragraph className={"event-description"}>
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
