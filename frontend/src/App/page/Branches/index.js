import React from "react";
import { data } from "../../lib/page/branches";
import Main from "../../component/Main";
import Card from "../../component/Card";
import Header from "../../component/Header";
import Section from "../../component/Section";
import styled from "styled-components";

const BranchesCard = styled(Card)`
  margin: calc(var(--spacing) * 1px) 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Branches() {
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
            <BranchesCard
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
}
