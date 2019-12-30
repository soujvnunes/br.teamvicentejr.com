import React from "react";
import { data } from "../../../library/data";
import Main from "../../../component/Main";
import Wrapper from "../../Wrapper";
import Typography from "../../Typography";
import Card from "../../Card";
import CardMedia from "../../CardMedia";
import CardDescription from "../../CardDescription";
import Button from "../../Button";

export default props => {
  return (
    <Main className={"branches"}>
      <Wrapper>
        <div className={"page-title"}>
          <Typography title className={"page-title-label"}>
            Filiais
          </Typography>
          <Typography subject className={"page-title-subject"}>
            Confira a localização e detalhes de
            <br /> nossas principais filiais.
          </Typography>
        </div>
        <div>
          {data.branches.map((data, i) => {
            return (
              <Card key={i} className={"branches-list"}>
                <CardMedia image={data.map} title={data.name} />
                <CardDescription primary={data.name} secondary={data.local}>
                  <Button
                    label={"Visitar"}
                    icon={"local"}
                    type={"normal"}
                    url={data.url}
                  />
                </CardDescription>
              </Card>
            );
          })}
        </div>
      </Wrapper>
    </Main>
  );
};
