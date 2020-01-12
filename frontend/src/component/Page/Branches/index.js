import React from "react";
import { data } from "../../../lib/branches";
import Main from "../../../component/Main";
import Card from "../../Card";
import Header from "../../Header";
import Section from "../../Section";

export default props => {
  return (
    <Main className={"branches"}>
      <Header
        title={"Filiais"}
        subject={
          "Confira a localização e detalhes de nossas principais filiais."
        }
      />
      <Section>
        {data.br.map((data, i) => {
          return (
            <Card
              key={i}
              className={"branches-list"}
              primary={data.name}
              secondary={data.local}
              title={data.name}
              image={data.map}
              href={data.href}
            />
          );
        })}
      </Section>
    </Main>
  );
};
