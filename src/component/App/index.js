import React from "react";
import Header from "../Header";
import Description from "../Description";
import Highlight from "../Highlight";
import Footer from "../Footer";
import Content from "../Content";

export default props => (
  <main role={"main"} className={"App"}>
    <Header />
    <Content>
      <Description />
    </Content>
    <Footer />
    <Highlight />
  </main>
);
