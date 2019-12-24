import React from "react";
import Section from "../component/Section";
import LineSet from "../component/LineSet";
import Line from "../component/Line";
import branches from "../utility/branches";
import Main from "../component/Content";

export default props => {
  let { switchContent } = props;

  return (
    <Main>
      <Section show={!switchContent}>
        <LineSet className={"branch-list"}>
          {branches.br.map((data, i) => {
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
                {/*                  <img
                    src={require(`../../asset/branches/${data.map}`)}
                    alt={`Imagem para mapa da filial ${data.name}`}
                    className={"Line-map"}
                  />*/}
              </Line>
            );
          })}
        </LineSet>
      </Section>
    </Main>
  );
};
