import React from "react";
import { data } from "../../../lib/page/branches";
import Main from "../../../component/Main";
import Card from "../../Card";
import Header from "../../Header";
import Section from "../../Section";

export default props => {
  return (
    <Main>
      <Header
        title={"Filiais"}
        subject={
          "Confira a localização e detalhes de nossas principais filiais."
        }
      />
      <Section>
        {data.map((data, i) => {
          return (
            <Card
              key={i}
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
