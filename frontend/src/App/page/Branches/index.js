import React from "react";
import { data } from "../../lib/page/branches";
import Main from "../../component/Main";
import Card from "../../component/Card";
import Header from "../../component/Header";
import Section from "../../component/Section";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import CardSet from "../../component/CardSet";
import CardHeader from "../../component/CardHeader";

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
