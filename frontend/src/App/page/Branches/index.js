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

const BranchesCard = styled(Card)`
  margin: calc(var(--ds) * 1px);

  ${down("md")} {
    margin: 0 0 calc(var(--ds) * 2px) 0;

    &:last-child {
      margin-bottom: 0;
    }
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
        <CardSet>
          {data.map((data, i) => {
            return (
              <BranchesCard
                key={i}
                title={data.name}
                image={data.map}
                href={data.href}
                zoom={false}
              >
                <CardHeader
                  primary={data.name}
                  secondary={data.local}
                  icon={"local"}
                />
              </BranchesCard>
            );
          })}
        </CardSet>
      </Section>
    </Main>
  );
}
