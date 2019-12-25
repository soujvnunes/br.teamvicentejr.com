import React from "react";
import { data } from "../../../library/data";
import LineSet from "../../LineSet";
import Line from "../../Line";
import Main from "../../../component/Main";
import Wrapper from "../../Wrapper";

export default props => {
  return (
    <Main className={"branches"}>
      <Wrapper>
        <LineSet className={"branch-list"}>
          {data.branches.map((data, i) => {
            return (
              <Line
                noHover={true}
                key={i}
                className={"Line-map-wrapper"}
                primary={data.name}
                secondary={data.local}
                icon={"share"}
              >
                <img src={data.map} alt={data.name} className={"Line-map"} />
              </Line>
            );
          })}
        </LineSet>
      </Wrapper>
    </Main>
  );
};
