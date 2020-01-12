import React, { useState, useEffect } from "react";
import LineSet from "../../LineSet";
import Line from "../../Line";
import Typography from "../../Typography";
import Main from "../../../component/Main";
import Header from "../../Header";
import Section from "../../Section";
import Select from "../../Select";
import { data } from "../../../lib/data";
import { events } from "../../../lib/events";
import VicenteJuniorImage from "../../../asset/br/teachers/vicenteJunior.png";
import Chip from "../../Chip";

export default props => {
  let newDate = new Date();
  let currentMonth = newDate.getMonth() + 1;
  let currentYear = newDate.getFullYear();

  const [state, setState] = useState({
    month: currentMonth,
    year: currentYear,
    filteredEvents: []
  });

  let { month, year, filteredEvents } = state;

  useEffect(() => {
    const matchYear = events.filter(data => data.year == year);
    const matchMonth = matchYear.filter(data => data.month == month);
    if (matchMonth) setState({ ...state, filteredEvents: matchMonth });
    else setState({ ...state, filteredEvents: [] });
  }, [month, year]);

  function filterMonth() {
    const select = document.getElementById("event-filter-byMonth");
    setState({
      ...state,
      month: select.options[select.selectedIndex].value
    });
  }

  function filterYear() {
    const select = document.getElementById("event-filter-byYear");
    setState({
      ...state,
      year: select.options[select.selectedIndex].value
    });
  }

  return (
    <Main className={"home"}>
      <Header
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={VicenteJuniorImage}
        className={"home-header"}
      />
      <Section className={"home-events"}>
        <div className={"home-events-filter"}>
          <Typography
            variant={"subtitle"}
            className={"home-events-filter-title"}
          >
            Eventos
          </Typography>
          <Select
            id={"event-filter-byMonth"}
            option={data.month}
            onChange={filterMonth}
            value={month}
          />
          <Select
            id={"event-filter-byYear"}
            option={data.year}
            onChange={filterYear}
            value={year}
            className={"home-events-filter-select--year"}
          />
        </div>
        <LineSet className={"home-events-list"}>
          {filteredEvents && filteredEvents.length > 0 ? (
            <>
              {filteredEvents.map((data, i) => {
                return (
                  <Line
                    key={i}
                    primary={data.title}
                    secondary={data.local}
                    icon={"add"}
                    className={"home-events-list-item"}
                  >
                    <Typography variant={"paragraph"}>
                      {data.description}
                    </Typography>
                    <div>
                      {data.day && (
                        <Chip icon={"calendar"} primary={data.day} />
                      )}
                      {data.time && <Chip icon={"clock"} primary={data.time} />}
                      {data.teacher && (
                        <Chip icon={"people"} primary={data.teacher} />
                      )}
                      {data.price && (
                        <Chip icon={"cents"} primary={data.price} />
                      )}
                    </div>
                  </Line>
                );
              })}
            </>
          ) : (
            <Typography variant={"paragraph"}>
              Nenhum evento encontrado.
            </Typography>
          )}
        </LineSet>
      </Section>
    </Main>
  );
};
