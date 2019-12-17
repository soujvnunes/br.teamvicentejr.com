import React, { Fragment, useState } from "react";
import Content from "../Content";
import Description from "../Description";
import LineSet from "../LineSet";
import Line from "../Line";
import Input from "../Input";
import Section from "../Section";
import Spaceship from "../Spaceship";
import Typography from "../Typography";
import SpaceshipContent from "../SpaceshipContent";
import SpaceshipTitle from "../SpaceshipTitle";
import Button from "../Button";
import LineHeader from "../LineHeader";
import IconButton from "../IconButton";

export default props => {
  const [state, setState] = useState({
    expandLine: false,
    open: false
  });

  let { expandLine, open } = state;
  let { event, switchContent } = props;

  function handleExpandLine() {
    if (expandLine) setState({ ...state, expandLine: false });
    else setState({ ...state, expandLine: true });
  }

  return (
    <Fragment>
      <Spaceship open={open} close={() => setState({ ...state, open: false })}>
        <SpaceshipTitle>História</SpaceshipTitle>
        <SpaceshipContent>
          <Typography paragraph>
            A equipe de jiu-jítsu Vicente Junior é uma das que mais crescem em
            arte e esporte brasileiro. Cada uma das nossas academias afiliadas,
            crescendo todos os dias com equipes no Brasil e nos Estados Unidos,
            oferece o mais alto nível de treinamento. O professor Vicente Junior
            dá aulas em cada uma delas, fornecendo um nível incomparável de
            instrução pessoal.
          </Typography>
          <Typography paragraph>
            Nascido em São Paulo, o professor Luiz Vicente Junior iniciou sua
            carreira em artes marciais no judô. Quando Vicente tinha apenas
            catorze anos, começou seu treinamento e se comprometeu seis anos com
            o judô, conquistando o posto de faixa-marrom. Mais tarde, Vicente
            foi apresentado à arte do Jiu-Jitsu brasileiro, dedicando-se e
            treinando duas ou três vezes por dia. Seus anos de trabalho duro e
            dedicação à arte lhe renderam o posto de faixa preta de quarto grau
            De La Riva.
          </Typography>
          <Typography paragraph>
            Começou a treinar Jiu-Jitsu com os professores Marcelo (Kimura) e
            Diojone (Grace Barra). Em 1999, ele começou a treinar com o mestre
            Ricardo De La Riva, um dos ícones mais renomados do mundo no
            jiu-jítsu brasileiro até hoje.
          </Typography>
          <Typography paragraph>
            Competiu em torneios estaduais brasileiros desde novo. Mesmo antes
            de ganhar o faixa-preta, estava entre os melhores lutadores de sua
            classe, conquistando vários títulos e permanecendo invicto até hoje
            em seu estado natal. Os primeiros sucessos de Vicente incluem os
            títulos de bicampeão regional do Rio de Janeiro, medalhista de
            bronze na Copa do Mundo de 2005, bicampeão do Rio de Janeiro de
            2006, medalha de ouro no Campeonato Pan-Americano de 2007 e campeão
            mundial de 2008. Também, conquistou várias medalhas da IBJJF,
            enfrentando alguns dos maiores nomes da competição esportiva de
            jiu-jítsu. Vicente Junior não apenas compete regularmente, mas
            também é um árbitro certificado da IBJJF.
          </Typography>
          <Typography paragraph>
            Vicente ainda hoje compete e, por todos os títulos que detém, também
            é um instrutor magnífico. Vicente criou muitos programas em relação
            ao jiu-jítsu, incluindo um curso de atualização em técnicas e
            pedagogias e um curso de Primeiros Socorros na Escola de Educação
            Física do Exército Brasileiro em 1998. Vicente também iniciou um
            projeto social na capital Maceió/AL, Brasil, que ensina o esporte às
            crianças carentes que não podem pagar em uma academia. "Tenho
            certeza de que estou criando um futuro melhor para eles", observa
            Vicente. Vicente ensina jiu-jítsu há dezesseis anos e possui várias
            academias no Nordeste do Brasil e nos Estados Unidos.
          </Typography>
        </SpaceshipContent>
      </Spaceship>
      <Content>
        <Description>
          <Typography title className={"Description-title"}>
            Vicente Júnior
          </Typography>
          <Typography subject className={"Description-subject"}>
            Brazilian Jiu-jítsu
          </Typography>
          <Typography paragraph className={"Description-paragraph"}>
            A equipe de jiu-jítsu Vicente Junior é uma das que mais crescem em
            arte e esporte brasileiro. Cada uma das nossas academias afiliadas,
            crescendo todos os dias com equipes no Brasil e nos Estados Unidos,
            oferece o mais alto nível de treinamento
            <button
              style={{
                padding: 0,
                background: "transparent",
                border: 0,
                color: "currentColor"
              }}
              onClick={() => setState({ ...state, open: true })}
            >
              ...leia mais
            </button>
          </Typography>
          <Button
            className={"Description-button"}
            label={"Eventos"}
            icon={switchContent ? "remove" : "chevronRight"}
            type={"normal"}
            onClick={event}
            state={switchContent && "expanded"}
          />
        </Description>
        <Section show={switchContent} className={"events-list"}>
          <Input
            label={"Pesquisar evento"}
            id={"user"}
            icon={"search"}
            fullWidth
          />
          <LineSet>
            <Line
              primary={"Nome do evento"}
              secondary={"Local"}
              expand={expandLine}
            >
              <LineHeader
                primary={"Nome do evento"}
                secondary={"Local"}
                icon={"local"}
              >
                <IconButton
                  className={"Line-header-button"}
                  type={"large"}
                  icon={expandLine ? "remove" : "add"}
                  onClick={handleExpandLine}
                />
              </LineHeader>
              <Typography paragraph className={"event-description"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Typography>
            </Line>
          </LineSet>
        </Section>
      </Content>
    </Fragment>
  );
};
