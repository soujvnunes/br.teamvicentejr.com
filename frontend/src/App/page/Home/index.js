import React, { useState, useEffect } from "react";
import Typography from "../../component/Typography";
import Main from "../../component/Main";
import Header from "../../component/Header";
import Section from "../../component/Section";
import Select from "../../component/Select";
import { month } from "../../lib/month";
import { year } from "../../lib/year";
import { events } from "../../lib/page/home";
import VicenteJuniorImage from "../../asset/page/home/vicenteJunior.png";
import Chip from "../../component/Chip";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import Skew from "../../component/Skew";
import Wrapper from "../../component/Wrapper";
import CardSet from "../../component/CardSet";
import Card from "../../component/Card";
import CardHeader from "../../component/CardHeader";
import CardContent from "../../component/CardContent";
import CardMedia from "../../component/CardMedia";
import CardAction from "../../component/CardAction";

const HomeHeader = styled(Header)`
  background-size: 40%;
  background-position-y: calc(var(--ds) * 14px);

  ${down("tablet")} {
    background-size: 100%;
    background-position-y: calc(var(--ds) * 10px);
  }
`;

const HomeFilter = styled(Wrapper)`
  z-index: 1;
  display: flex;
  align-items: center;
  position: sticky;
  top: calc(var(--ds) * 14px);
  margin-top: calc(var(--ds) * 2px);
  color: hsla(var(--ctl), 1);

  ${down("tablet")} {
    top: calc(var(--ds) * 11px);
  }
`;

const HomeFilterTitle = styled(Typography)`
  position: relative;
  margin: 0 calc(var(--ds) * 2px);
`;

const HomeFilterSkew = styled(Skew)`
  color: hsla(var(--cpb), 1);
`;

const HomeFilterSelect = styled(Select)`
  margin: 0 calc(var(--ds) * 2px) 0 0;
`;

const HomeEventsCardContentChip = styled(Chip)`
  margin-right: calc(var(--ds) * 1px);
`;

const EventsCard = styled(Card)`
  margin: calc(var(--ds) * 1px);

  ${down("tablet")} {
    margin: 0 0 calc(var(--ds) * 2px) 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function Home() {
  let newDate = new Date();
  let currentMonth = newDate.getMonth() + 1;
  let currentYear = newDate.getFullYear();

  const [state, setState] = useState({
    eventMonth: currentMonth,
    eventYear: currentYear,
    filteredEvents: []
  });

  let { eventMonth, eventYear, filteredEvents } = state;

  useEffect(() => {
    const matchYear = events.filter(
      data => Number(data.year) === Number(eventYear)
    );
    const matchMonth = matchYear.filter(
      data => Number(data.month) === Number(eventMonth)
    );
    if (matchMonth) setState({ ...state, filteredEvents: matchMonth });
    else setState({ ...state, filteredEvents: [] });
  }, [eventMonth, eventYear]);

  function filterMonth() {
    const select = document.getElementById("monthSelect");
    setState({
      ...state,
      eventMonth: select.options[select.selectedIndex].value
    });
  }

  function filterYear() {
    const select = document.getElementById("yearSelect");
    setState({
      ...state,
      eventYear: select.options[select.selectedIndex].value
    });
  }

  return (
    <Main>
      <HomeHeader
        title={"Vicente Júnior"}
        subject={"Brazilian Jiu-jítsu"}
        image={VicenteJuniorImage}
      />
      <HomeFilter>
        <HomeFilterSkew variant={"static"} />
        <HomeFilterTitle variant={"heading"}>Eventos</HomeFilterTitle>
        <HomeFilterSelect
          id={"monthSelect"}
          option={month}
          onChange={filterMonth}
          value={eventMonth}
        />
        <HomeFilterSelect
          id={"yearSelect"}
          option={year}
          onChange={filterYear}
          value={eventYear}
        />
      </HomeFilter>
      <Section>
        <CardSet>
          {filteredEvents && filteredEvents.length > 0 ? (
            <>
              {filteredEvents.map((data, i) => {
                return (
                  <EventsCard key={i} zoom={true}>
                    <CardHeader
                      primary={data.title}
                      secondary={data.local}
                      icon={"local"}
                    />
                    {data.image && <CardMedia image={data.image} />}
                    <CardContent>
                      <Typography variant={"paragraph"}>
                        {data.description}
                      </Typography>
                    </CardContent>
                    <CardAction>
                      {data.day && (
                        <HomeEventsCardContentChip
                          icon={"calendar"}
                          primary={data.day}
                          variant={"contained"}
                        />
                      )}
                      {data.time && (
                        <HomeEventsCardContentChip
                          icon={"clock"}
                          primary={data.time}
                        />
                      )}
                      {data.teacher && (
                        <HomeEventsCardContentChip
                          icon={"people"}
                          primary={data.teacher}
                        />
                      )}
                      {data.price && (
                        <HomeEventsCardContentChip
                          icon={"cents"}
                          primary={data.price}
                        />
                      )}
                    </CardAction>
                  </EventsCard>
                );
              })}
            </>
          ) : (
            <Typography variant={"paragraph"}>
              Nenhum evento encontrado.
            </Typography>
          )}
        </CardSet>
      </Section>
    </Main>
  );
}
