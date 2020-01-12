import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { data } from "../../lib/data";
import Nav from "../Nav";
import { Home, Teachers, Branches, About } from "../Page";
import NavItem from "../NavItem";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../../util/globalStyle";
import { theme } from "../../util/theme";

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  let { active } = state;

  useEffect(() => setState({ active: "home" }), []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppWrapper>
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
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}
