import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { data } from "../../library/data";
import Nav from "../Nav";
import { Home, Teachers, Branches, About } from "../Page";
import NavItem from "../NavItem";
import styled from "styled-components";
import GlobalStyle from "../../util/globalStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @extend %font-family--azo;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $spacing * 2;
  background-color: $common-color--black;
  color: $tertiary-color;
`;

export default function App() {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  useEffect(() => setState({ active: "home" }), []);

  let { active } = state;

  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Nav indicator={active}>
          {data.navigation.map((data, i) => (
            <NavItem
              key={i}
              to={data.to}
              isActive={() => active === data.name}
              onClick={() => setState({ ...state, active: `${data.name}` })}
              primary={data.primary}
              icon={data.icon}
              iconActive={active === data.name}
            />
          ))}
        </Nav>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/professores" render={props => <Teachers />} />
        <Route exact path="/filiais" render={props => <Branches />} />
        <Route exact path="/sobre" render={props => <About />} />
      </Wrapper>
    </Router>
  );
}
