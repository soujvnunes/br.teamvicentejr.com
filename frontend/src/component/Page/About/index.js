import React from "react";
import Main from "../../../component/Main";
import imgPanel1 from "../../../asset/br/about/01001.jpg";
import History from "../../History";
import { data } from "../../../library/about";
import Header from "../../Header";
import Section from "../../Section";

export default props => {
  return (
    <Main className={"about"}>
      <Header title={"Sobre"} image={imgPanel1} />
      <Section>
        {data.map((data, i) => {
          return (
            <History
              key={i}
              image={data.image}
              text={data.text}
              orientation={data.orientation}
              className={"about-history"}
            />
          );
        })}
      </Section>
    </Main>
  );
};
