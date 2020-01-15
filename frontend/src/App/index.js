import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { data } from "./lib/data";
import Nav from "./component/Nav";
import NavItem from "./component/NavItem";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./util/globalStyle";
import { theme } from "./util/theme";
import { ReactComponent as Icon } from "./asset/misc/vis/icon.svg";
import Home from "./page/Home";
import Teachers from "./page/Teachers";
import Branches from "./page/Branches";
import About from "./page/About";

const AppRoot = styled.section`
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
        <AppRoot>
          <Icon />
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
        </AppRoot>
      </Router>
    </ThemeProvider>
  );
}
