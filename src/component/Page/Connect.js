import React from "react";
import Content from "../Content";
import Description from "../Description";
import Footer from "../Footer";
import Highlight from "../Highlight";

export default props => {
  return (
    <React.Fragment>
      <Content>
        <Description title={"Conectar"} subtitle={"Área admninistrativa"} />
      </Content>
      <Footer />
      <Highlight />
    </React.Fragment>
  );
};
