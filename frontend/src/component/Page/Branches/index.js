import React from "react";
import { data } from "../../../library/branches";
import Main from "../../../component/Main";
import Card from "../../Card";
import CardMedia from "../../CardMedia";
import CardDescription from "../../CardDescription";
import Button from "../../Button";
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
            <Card key={i} className={"branches-list"}>
              <CardMedia image={data.map} title={data.local} />
              <CardDescription primary={data.name}>
                <Button
                  label={"Localização"}
                  icon={"local"}
                  type={"normal"}
                  url={data.url}
                  skew
                />
              </CardDescription>
            </Card>
          );
        })}
      </Section>
    </Main>
  );
};
