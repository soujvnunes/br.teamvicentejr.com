import React from "react";
import Content from "../Content";
import Description from "../Description";
import Typography from "../Typography";
import Section from "../Section";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";
import branches from "../../utility/branches";

export default props => {
  let { switchContent } = props;

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
        </Description>
        <Section show={!switchContent}>
          <LineSet className={"branch-list"}>
            {branches.br.map((data, i) => {
              return (
                <Line
                  expanded={true}
                  noHover={true}
                  key={i}
                  className={"Line-map-wrapper"}
                >
                  <LineHeader
                    primary={data.name}
                    secondary={data.local}
                    icon={"local"}
                    className={"branch-map-card-header"}
                  >
                    <IconButton
                      className={"Line-header-button"}
                      noHover={true}
                      icon={"share"}
                      url={data.url}
                    />
                  </LineHeader>
                  <img
                    src={require(`../../asset/branches/${data.map}`)}
                    alt={`Imagem para mapa da filial ${data.name}`}
                    className={"Line-map"}
                  />
                </Line>
              );
            })}
          </LineSet>
        </Section>
        s
      </Content>
    </>
  );
};
