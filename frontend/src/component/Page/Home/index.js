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
  let newDate = new Date();
  let currentMonth = newDate.getMonth() + 1;
  let currentYear = newDate.getFullYear();

  const [state, setState] = useState({
    month: currentMonth,
    year: currentYear,
    matchDate: false
  });

  let { month, year, matchDate } = state;

  useEffect(() => {
    events.map(data => {
      const matchMonth = data.month == month;
      const matchYear = data.year == year;
      const definedDate = matchMonth && matchYear;

      console.log(data.month, month, "data month");
      console.log(data.year, year, "data year");
      console.log(matchMonth, "data.month === month");
      console.log(matchYear, "data.year === year");
      console.log(matchDate, "matchDate");
      console.log("___________________________________");

      if (definedDate) return setState({ ...state, matchDate: true });
      else return setState({ ...state, matchDate: false });
    });
  }, [month, year, matchDate]);

  function filterMonth() {
    const select = document.getElementById("event-filter-byMonth");
    setState({
      ...state,
      month: select.options[select.selectedIndex].value.replace(/["]+/g, "")
    });
  }

  function filterYear() {
    const select = document.getElementById("event-filter-byYear");
    setState({
      ...state,
      year: select.options[select.selectedIndex].value.replace(/["]+/g, "")
    });
  }

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
          {matchDate ? (
            <>
              {events.map((data, i) => {
                const thisMatchDate = data.month == month && data.year == year;

                return (
                  <Line
                    hidden={!thisMatchDate}
                    key={i}
                    primary={data.title}
                    secondary={data.local}
                    icon={"add"}
                    className={"home-events-list-item"}
                  >
                    <Typography paragraph>{data.description}</Typography>
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
            "Nenhum evento encontrado"
          )}
        </LineSet>
      </Section>
    </Main>
  );
};
