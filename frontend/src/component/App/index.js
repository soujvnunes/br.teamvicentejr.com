import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { data } from "../../library/data";
import Nav from "../Nav";
import { Home, Teachers, Branches, About } from "../Page";
import NavItem from "../NavItem";

export default props => {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  useEffect(() => setState({ active: "home" }), []);

  let { active } = state;

  return (
    <Router>
      <div className={"App"}>
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
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/professores"
          render={props => <Teachers {...props} />}
        />
        <Route
          exact
          path="/filiais"
          render={props => <Branches {...props} />}
        />
        <Route exact path="/sobre" render={props => <About {...props} />} />
      </div>
    </Router>
  );
};
