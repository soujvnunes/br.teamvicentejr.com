import React from "react";
import Content from "../Content";
import Description from "../Description";
import Typography from "../Typography";
import Button from "../Button";

export default props => {
  return (
    <React.Fragment>
      <Content>
        <Description>
          <Typography title className={"Description-title"}>
            Professores
          </Typography>
          <Typography paragraph className={"Description-paragraph"}>
            Vicente começou a treinar Jiu-Jitsu com os professores Marcelo
            (Kimura) e Diojone (Grace Barra). A qualidade no treinamento
            prevalece até hoje.
          </Typography>
          <Button
            className={"Description-button"}
            label={"Conheça"}
            icon={"chevronRight"}
            type={"normal"}
            /*
            onClick={event}
            state={switchContent && "expanded"}
*/
          />
        </Description>
      </Content>
    </React.Fragment>
  );
};
