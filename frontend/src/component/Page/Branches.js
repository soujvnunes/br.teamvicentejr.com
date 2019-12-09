import React from "react";
import Content from "../Content";
import Description from "../Description";
import Typography from "../Typography";
import Button from "../Button";
import Section from "../Section";

export default props => {
  let { event, switchContent } = props;

  return (
    <React.Fragment>
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
        <Section show={!switchContent}></Section>
        <Section show={switchContent}>
          <Typography paragraph>imagem das filiais</Typography>
        </Section>
      </Content>
    </React.Fragment>
  );
};
