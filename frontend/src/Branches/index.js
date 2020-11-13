import React from "react";
import { data } from "../lib/page/branches";
import Main from "../Main";
import Card from "../Card";
import Header from "../Header";
import Section from "../Section";
import styled from "styled-components";
import CardSet from "../CardSet";
import CardHeader from "../CardHeader";

const BranchesCardSet = styled(CardSet)`
  grid-template-columns: 50% 50%;
`;

const BranchesCard = styled(Card)`
  margin: calc(var(--ds) * 1px);
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
        <BranchesCardSet>
          {data.map((data, i) => {
            return (
              <BranchesCard
                key={i}
                title={data.name}
                href={data.href}
                zoom={false}
                image={data.map}
              >
                <CardHeader
                  backdrop={true}
                  primary={data.name}
                  secondary={data.local}
                  icon={"local"}
                />
              </BranchesCard>
            );
          })}
        </BranchesCardSet>
      </Section>
    </Main>
  );
}
