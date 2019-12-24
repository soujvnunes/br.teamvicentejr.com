import React from "react";
import Section from "../component/Section";
import LineSet from "../component/LineSet";
import Line from "../component/Line";
import { data } from "../utility/data";
import Main from "../component/Content";

export default props => {
  let { switchContent } = props;

  return (
    <Main>
      <Section show={!switchContent}>
        <LineSet className={"branch-list"}>
          {data.branches.map((data, i) => {
            return (
              <Line
                expanded={true}
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
      </Section>
    </Main>
  );
};
