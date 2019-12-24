import React from "react";
import LineSet from "../component/LineSet";
import Line from "../component/Line";
import TextField from "../component/TextField";
import Section from "../component/Section";
import Typography from "../component/Typography";
import Content from "../component/Content";
import Header from "../component/Header";
import { ReactComponent as Logo } from "../asset/logo.svg";
import { data } from "../utility/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default props => {
  return (
    <Content className={"home"}>
      <Section className={"home-intro"} wrap={true} id={"intro"}>
        <Header />
        <div className={"home-intro-title"}>
          <Typography title className={"home-intro-label"}>
            <Logo
              title={"Vicente Júnior — Brazilian Jiu-Jitsu"}
              className={"home-intro-title-label-svg"}
            />
          </Typography>
          <Typography subject className={"home-intro-subject"}>
            A equipe de jiu-jítsu que mais cresce em arte e esporte americano.
          </Typography>
        </div>
        <div className={"home-intro-events"}>
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Line>
          </LineSet>
        </div>
      </Section>
      <Section className={"home-teachers"} id={"professores"}>
        <Carousel
          className={"home-teachers-carousel"}
          centerMode={true}
          centerSlidePercentage={50}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
        >
          {data.teachers.map((data, i) => {
            return (
              <div key={i} className={"home-teachers-carousel-item"}>
                <img
                  src={data.url}
                  alt={data.name}
                  className={"home-teachers-carousel-item-image"}
                />
                <div className={"home-teachers-carousel-item-legend"}>
                  <Typography title>{data.name}</Typography>
                  <Typography subject>{data.title}</Typography>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Section>
      <Section className={"home-branches"} id={"filiais"}>
        oi
      </Section>
    </Content>
  );
};
