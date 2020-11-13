import React from "react";
import Main from "../Main";
import panelImage from "./asset/01001.jpg";
import headerImage from "./asset/01002.jpg";
import History from "../History";
import { data } from "./feed";
import Header from "../Header";
import Section from "../Section";
import Panel from "../Panel";
import Typography from "../Typography";
import Icon from "../Icon";
import styled from "styled-components";
import Wrapper from "../Wrapper";

const AboutHistory = styled(History)`
  margin: calc(var(--ds) * 1px) 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function About() {
  return (
    <Main>
      <Header
        title={"Sobre"}
        subject={"Conheça mais a equipe."}
        image={headerImage}
      />
      <Section>
        <Wrapper>
          {data.history.map((data, i) => {
            return (
              <AboutHistory
                key={i}
                image={data.image}
                text={data.text}
                title={data.title}
              />
            );
          })}
        </Wrapper>
      </Section>
      <Panel image={panelImage} href={"https://www.instagram.com/vicentebjj/"}>
        <Typography variant={"title"}>Acompanhe</Typography>
        <div>
          Vicente no <Icon name={"instagram"} /> Instagram
        </div>
      </Panel>
    </Main>
  );
}
