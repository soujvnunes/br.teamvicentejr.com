import React, { useState } from "react";
import Content from "../Content";
import Description from "../Description";
import Typography from "../Typography";
import Button from "../Button";
import Section from "../Section";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";
import branches from "../../utility/branches";
import ImageExpand from "../ImageExpand";
import branch_1 from "../../asset/branches/explore/branch_1.jpg";
import branch_2 from "../../asset/branches/explore/branch_2.JPG";
import branch_3 from "../../asset/branches/explore/branch_3.JPG";
import branch_4 from "../../asset/branches/explore/branch_4.JPG";
import branch_5 from "../../asset/branches/explore/branch_5.JPG";
import branch_6 from "../../asset/branches/explore/branch_6.jpg";
import branch_7 from "../../asset/branches/explore/branch_7.jpg";
import branch_8 from "../../asset/branches/explore/branch_8.jpg";
import branch_9 from "../../asset/branches/explore/branch_9.jpg";

export default props => {
  let { event, switchContent } = props;

  return (
    <>
      <Content>
        <Description>
          <Typography title className={"Description-title"}>
            Filiais
          </Typography>
          <Typography paragraph className={"Description-paragraph"}>
            Cada uma das nossas academias afiliadas, crescendo todos os dias com
            equipes no Brasil e nos Estados Unidos, oferece o mais alto nível de
            treinamento.
          </Typography>
          <Button
            className={"Description-button"}
            label={"Explore"}
            icon={switchContent ? "remove" : "chevronRight"}
            type={"normal"}
            onClick={event}
            state={switchContent && "expanded"}
          />
        </Description>
        <Section show={!switchContent}>
          <LineSet className={"branch-list"}>
            {branches.br.map((data, i) => {
              return (
                <Line
                  expanded={true}
                  noHover={true}
                  key={i}
                  className={"Line-map-wrapper"}
                >
                  <LineHeader
                    primary={data.name}
                    secondary={data.local}
                    icon={"local"}
                    className={"branch-map-card-header"}
                  >
                    <IconButton
                      className={"Line-header-button"}
                      type={"large"}
                      icon={"share"}
                      url={data.url}
                    />
                  </LineHeader>
                  <img
                    src={require(`../../asset/branches/${data.map}`)}
                    alt={`Imagem para mapa da filial ${data.name}`}
                    className={"Line-map"}
                  />
                </Line>
              );
            })}
          </LineSet>
        </Section>
        <Section show={switchContent}>
          <LineSet className={"exploreBranch-list"}>
            <ImageExpand img={branch_1} />
            <ImageExpand img={branch_2} />
            <ImageExpand img={branch_3} />
            <ImageExpand img={branch_4} />
            <ImageExpand img={branch_5} />
            <ImageExpand img={branch_6} />
            <ImageExpand img={branch_7} />
            <ImageExpand img={branch_8} />
            <ImageExpand img={branch_9} />
          </LineSet>
        </Section>
      </Content>
    </>
  );
};
