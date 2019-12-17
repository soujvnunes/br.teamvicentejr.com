import React from "react";
import Content from "../Content";
import Description from "../Description";
import Typography from "../Typography";
import Button from "../Button";
import Section from "../Section";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";
import branches from "../../utility/branches";

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
          <LineSet className={"branch-list"}>
            {branches.br.map((data, i) => {
              return (
                <Line expanded={true} key={i}>
                  <LineHeader
                    primary={data.name}
                    secondary={data.local}
                    icon={"local"}
                    className={"branch-map-card-header"}
                  >
                    <IconButton
                      className={"Line-header-button"}
                      type={"large"}
                      icon={"share"}
                      url={data.url}
                    />
                  </LineHeader>
                  <img
                    src={require(`../../asset/${data.map}`)}
                    alt={`Imagem para mapa da filial ${data.name}`}
                    className={"Line-map"}
                    style={{ position: "absolute" }}
                  />
                </Line>
              );
            })}
          </LineSet>
        </Section>
        <Section show={switchContent}>
          <Typography paragraph>imagem das filiais</Typography>
        </Section>
      </Content>
    </>
  );
};
