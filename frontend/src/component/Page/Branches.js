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
