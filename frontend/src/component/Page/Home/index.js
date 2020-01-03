import React, { useState, useEffect } from "react";
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
import Chip from "../../Chip";

export default props => {
  const [state, setState] = useState({
    month: undefined,
    year: undefined
  });

  let { month, year } = state;

  useEffect(() => {
    let newDate = new Date();
    let currentMonth = newDate.getMonth() + 1;
    let currentYear = newDate.getFullYear();
    const undefinedDate = month === undefined || year === undefined;
    if (undefinedDate) setState({ month: currentMonth, year: currentYear });
  }, [month, year]);

  const filterMonth = () => {
    const select = document.getElementById("event-filter-byMonth");
    setState({ ...state, month: select.options[select.selectedIndex].value });
  };

  const filterYear = () => {
    const select = document.getElementById("event-filter-byYear");
    setState({ ...state, year: select.options[select.selectedIndex].value });
  };

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
          <Select
            id={"event-filter-byMonth"}
            option={data.month}
            onChange={() => filterMonth()}
            value={month}
          />
          <Select
            id={"event-filter-byYear"}
            option={data.year}
            onChange={() => filterYear()}
            value={year}
            className={"home-events-filter-select--year"}
          />
        </div>
        <LineSet className={"home-events-list"}>
          {events.map((data, i) => {
            const matchMonth = data.month == month;
            const matchYear = data.year == year;
            const showError = !matchMonth && !matchYear;

            if (showError) return "Nenhum evento encontrado.";
            else
              return (
                <Line
                  hidden={!matchMonth || !matchYear}
                  key={i}
                  primary={data.title}
                  secondary={data.local}
                  icon={"add"}
                  className={"home-events-list-item"}
                >
                  <Typography paragraph>{data.description}</Typography>
                  <div>
                    {data.day && <Chip icon={"calendar"} primary={data.day} />}
                    {data.time && <Chip icon={"clock"} primary={data.time} />}
                    {data.teacher && (
                      <Chip icon={"user"} primary={data.teacher} />
                    )}
                    {data.price && <Chip icon={"cents"} primary={data.price} />}
                  </div>
                </Line>
              );
          })}
        </LineSet>
      </Section>
    </Main>
  );
};
