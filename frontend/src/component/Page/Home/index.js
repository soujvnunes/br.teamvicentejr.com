import React from "react";
import LineSet from "../../LineSet";
import Line from "../../Line";
import Typography from "../../Typography";
import Main from "../../../component/Main";
import Header from "../../Header";
import HeaderImage from "../../../asset/br/home/header.jpg";
import Section from "../../Section";
import Select from "../../Select";
import { data } from "../../../library/data";

export default props => {
  return (
    <Main className={"home"}>
      <Header
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={HeaderImage}
      />
      <Section>
        <div className={"home-events-filter"}>
          <Typography subject className={"home-events-filter-title"}>
            Eventos
          </Typography>
          <Select id={"event-filter-byMonth"} option={data.month} />
          <Select id={"event-filter-byYear"} option={data.year} />
        </div>
      </Section>
      <Section>
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
    </Main>
  );
};
