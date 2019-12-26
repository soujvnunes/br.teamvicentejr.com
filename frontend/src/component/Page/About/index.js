import React from "react";
import Main from "../../../component/Main";
import Typography from "../../Typography";
import { ReactComponent as AboutTitle } from "../../../asset/br/titles/sobre.svg";
import Wrapper from "../../Wrapper";

export default props => {
  return (
    <Main className={"about"}>
      <Wrapper>
        <div className={"page-title"}>
          <Typography title className={"page-title-label"}>
            <AboutTitle className={"page-title-label-svg"} />
          </Typography>
        </div>
      </Wrapper>
    </Main>
  );
};
