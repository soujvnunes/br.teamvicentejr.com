import React from "react";
import LineSet from "../../LineSet";
import Line from "../../Line";
import Typography from "../../Typography";
import Main from "../../../component/Main";
import Header from "../../Header";
import Section from "../../Section";
import Select from "../../Select";
import { data } from "../../../library/data";
import { events } from "../../../library/events";
import VicenteJuniorImage from "../../../asset/br/teachers/vicenteJunior.png";

export default props => {
  return (
    <Main className={"home"}>
      <Header
        noBackdrop
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={VicenteJuniorImage}
        className={"home-header"}
      />
      <Section className={"home-events"}>
        <div className={"home-events-filter"}>
          <Typography subject className={"home-events-filter-title"}>
            Eventos
          </Typography>
          <Select id={"event-filter-byMonth"} option={data.month} />
          <Select id={"event-filter-byYear"} option={data.year} />
        </div>
        <LineSet className={"home-events-list"}>
          {events.map((data, i) => (
            <Line
              key={i}
              primary={data.title}
              secondary={data.local}
              icon={"add"}
              className={"home-events-list-item"}
            >
              <Typography paragraph>{data.description}</Typography>
            </Line>
          ))}
        </LineSet>
      </Section>
    </Main>
  );
};
