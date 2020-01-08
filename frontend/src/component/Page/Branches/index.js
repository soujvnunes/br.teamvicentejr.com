import React from "react";
import { data } from "../../../library/branches";
import Main from "../../../component/Main";
import { Card, CardAction, CardHeader, CardMedia } from "../../Card";
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
              <CardHeader primary={data.name} secondary={data.local} />
              <CardMedia image={data.map} title={data.name} />
              <CardAction>
                <Button
                  variant={"contained"}
                  label={"Localização"}
                  icon={"local"}
                  type={"normal"}
                  url={data.url}
                  skew
                />
              </CardAction>
            </Card>
          );
        })}
      </Section>
    </Main>
  );
};
