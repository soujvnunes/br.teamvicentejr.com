import React from "react";
import Content from "../Content";
import Description from "../Description";
import Typography from "../Typography";
import Button from "../Button";
import Section from "../Section";
import Map from "../Map";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default props => {
  let { event, switchContent } = props;

  return (
    <>
      <Content>
        <Description>
          <Typography title className={"Description-title"}>
            Filiais
          </Typography>
          <Typography paragraph className={"Description-paragraph"}>
            Cada uma das nossas academias afiliadas, crescendo todos os dias com
            equipes no Brasil e nos Estados Unidos, oferece o mais alto nível de
            treinamento.
          </Typography>
          <Button
            className={"Description-button"}
            label={"Explore"}
            icon={switchContent ? "remove" : "chevronRight"}
            type={"normal"}
            onClick={event}
            state={switchContent && "expanded"}
          />
        </Description>
        <Section show={!switchContent}>
          <LineSet>
            <Line expanded={true}>
              <LineHeader
                primary={"Nome do evento"}
                secondary={"Local"}
                icon={"local"}
                className={"branch-map-card-header"}
              >
                <IconButton
                  className={"Line-header-button"}
                  type={"large"}
                  icon={"share"}
                />
              </LineHeader>
              <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBOY6UqLwmYbrczni-guS7b0KPnYfG-uPg`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                  <div
                    style={{
                      height: `100%`,
                      width: `100%`,
                      position: `absolute`
                    }}
                  />
                }
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Line>
          </LineSet>
        </Section>
        <Section show={switchContent}>
          <Typography paragraph>imagem das filiais</Typography>
        </Section>
      </Content>
    </>
  );
};
