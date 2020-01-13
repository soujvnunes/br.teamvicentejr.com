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
import styled from "styled-components";
import { down } from "styled-breakpoints";

const HomeRoot = styled(Main)`
  background-color: rgba(var(--color-secondary-base), 1);
`;

const HomeHeader = styled(Header)`
  background-size: 40%;
  background-position-y: calc(var(--spacing) * 14px);

  ${down("md")} {
    background-size: 100%;
    background-position-y: calc(var(--spacing) * 10px);
  }
`;

const HomeEventsFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${down("md")} {
    flex-direction: column;
  }
`;

const HomeEventsFilterTitle = styled(Typography)`
  flex: 1;
`;

const HomeEventsFilterSelect = styled(Select)`
  margin: calc(var(--spacing) * 1px);

  ${down("md")} {
    width: 100%;
  }
`;

const HomeEventsListItem = styled(Line)`
  margin: calc(var(--spacing) * 1px) 0;
`;

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
    <HomeRoot>
      <HomeHeader
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={VicenteJuniorImage}
      />
      <Section className={"home-events"}>
        <HomeEventsFilter>
          <HomeEventsFilterTitle variant={"subtitle"}>
            Eventos
          </HomeEventsFilterTitle>
          <HomeEventsFilterSelect
            id={"event-filter-byMonth"}
            option={data.month}
            onChange={filterMonth}
            value={month}
          />
          <HomeEventsFilterSelect
            id={"event-filter-byYear"}
            option={data.year}
            onChange={filterYear}
            value={year}
          />
        </HomeEventsFilter>
        <LineSet>
          {filteredEvents && filteredEvents.length > 0 ? (
            <>
              {filteredEvents.map((data, i) => {
                return (
                  <HomeEventsListItem
                    key={i}
                    primary={data.title}
                    secondary={data.local}
                    icon={"add"}
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
                  </HomeEventsListItem>
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
    </HomeRoot>
  );
};
