import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { navigation } from "../lib/navigation";
import Nav from "../Nav";
import NavItem from "../NavItem";
import styled from "styled-components";
import GlobalStyle from "../util/globalStyle";
import Home from "../Home";
import Teachers from "../Teachers";
import Branches from "../Branches";
import About from "../About";
import { down } from "styled-breakpoints";
import Footer from "../Footer";
import Coloration from "../util/Mixins/Coloration";

const AppRoot = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga";
  ${Coloration("back", "var(--csb)")};

  ${down("tablet")} {
    padding-bottom: calc(var(--ds) * 9px);
  }
`;

export default function App() {
  const [isActive, setIsActive] = useState(
    window.location.pathname.substring(1)
  );
  useEffect(() => setIsActive("home"), []);

  return (
    <Router>
      <GlobalStyle />
      <AppRoot>
        <Nav indicator={isActive}>
          {navigation.map((data, i) => (
            <NavItem
              key={i}
              to={data.to}
              isActive={() => isActive === data.name}
              onClick={() => setIsActive(data.name)}
              primary={data.primary}
              icon={data.icon}
              iconActive={isActive === data.name}
            />
          ))}
        </Nav>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/professores" render={props => <Teachers />} />
        <Route exact path="/filiais" render={props => <Branches />} />
        <Route exact path="/sobre" render={props => <About />} />
        <Footer />
      </AppRoot>
    </Router>
  );
}
