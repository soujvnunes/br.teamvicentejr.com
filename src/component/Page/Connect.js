import React from "react";
import Content from "../Content";
import Description from "../Description";
/*
import Footer from "../Footer";
*/
import Input from "../Input";

export default props => {
  return (
    <React.Fragment>
      <Content>
        <Description
          title={"Conectar"}
          subtitle={"Área admninistrativa"}
          actionLabel={"Conectar"}
        >
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
        </Description>
      </Content>
      {/*<Footer />*/}
    </React.Fragment>
  );
};
