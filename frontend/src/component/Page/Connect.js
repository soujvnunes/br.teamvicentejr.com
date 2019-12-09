import React from "react";
import Content from "../Content";
import Description from "../Description";
import Input from "../Input";
import Typography from "../Typography";
import Button from "../Button";

export default props => {
  return (
    <React.Fragment>
      <Content>
        <Description title={""} subtitle={""} actionLabel={"Conectar"}>
          <Typography title className={"Description-title"}>
            Conectar
          </Typography>
          <Typography subject className={"Description-subject"}>
            Área administrativa
          </Typography>
          <div
            className={"Content-admin"}
            style={{
              margin: "16px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Input label={"Usuário"} id={"user"} icon={"user"} />
            <Input label={"Senha"} id={"password"} icon={"locker"} />
          </div>
          <Button
            className={"Description-button"}
            label={"Entrar"}
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
