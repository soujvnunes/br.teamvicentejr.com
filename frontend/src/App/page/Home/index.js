import React, { useState, useEffect } from "react";
import Line from "../../component/Line";
import Typography from "../../component/Typography";
import Main from "../../component/Main";
import Header from "../../component/Header";
import Section from "../../component/Section";
import Select from "../../component/Select";
import { data } from "../../lib/data";
import { events } from "../../lib/page/events";
import VicenteJuniorImage from "../../asset/page/home/vicenteJunior.png";
import Chip from "../../component/Chip";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import Skew from "../../component/Skew";
import Wrapper from "../../component/Wrapper";

const HomeHeader = styled(Header)`
  background-size: 40%;
  background-position-y: calc(var(--spacing) * 14px);

  ${down("md")} {
    background-size: 100%;
    background-position-y: calc(var(--spacing) * 10px);
  }
`;

const HomeEventsFilter = styled(Wrapper)`
  z-index: 1;
  display: flex;
  align-items: center;
  position: sticky;
  top: calc(var(--spacing) * 14px);
  margin-top: calc(var(--spacing) * 3px);
  color: rgba(var(--color-secondary-base));

  ${down("md")} {
    top: calc(var(--spacing) * 11px);
  }
`;

const HomeEventsFilterTitle = styled(Typography)`
  position: relative;
  margin: 0 calc(var(--spacing) * 2px);
`;

const HomeEventsFilterSkew = styled(Skew)`
  color: rgba(var(--color-tertiary-dark));
`;

const HomeEventsFilterSelect = styled(Select)`
  margin: 0 calc(var(--spacing) * 2px) 0 0;
`;

const HomeEventsListItem = styled(Line)`
  margin: calc(var(--spacing) * 1px) 0;
`;

const HomeEventsListItemParagraph = styled(Typography)`
  margin-top: 1rem;
`;

export default function Home() {
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
    const matchYear = events.filter(data => Number(data.year) === Number(year));
    const matchMonth = matchYear.filter(
      data => Number(data.month) === Number(month)
    );
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
    <Main>
      <HomeHeader
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={VicenteJuniorImage}
      />
      <HomeEventsFilter>
        <HomeEventsFilterSkew variant={"contained"} />
        <HomeEventsFilterTitle variant={"heading"}>
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
      <Section>
        <ul>
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
                    <HomeEventsListItemParagraph variant={"paragraph"}>
                      {data.description}
                    </HomeEventsListItemParagraph>
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
        </ul>
      </Section>
    </Main>
  );
}
