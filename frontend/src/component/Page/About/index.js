import React from "react";
import Main from "../../../component/Main";
import Typography from "../../Typography";
import { ReactComponent as AboutTitle } from "../../../asset/br/titles/sobre.svg";
import Wrapper from "../../Wrapper";
import Panel from "../../Panel";
import imgPanel1 from "../../../asset/panel/01001.jpg";
import History from "../../History";
import { data } from "../../../library/data";

export default props => {
  return (
    <Main className={"about"}>
      <Panel image={imgPanel1}>
        <Wrapper>
          <div className={"page-title about-title"}>
            <Typography title className={"page-title-label"}>
              <AboutTitle className={"page-title-label-svg"} />
            </Typography>
          </div>
        </Wrapper>
      </Panel>
      <Wrapper>
        {data.about.map((data, i) => {
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
      </Wrapper>
    </Main>
  );
};
