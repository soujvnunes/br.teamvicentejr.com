import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { data } from "../../library/data";
import Nav from "../Nav";
import Icon from "../Icon";
import { Home, Teachers, Branches, About } from "../Page";

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
            <NavLink
              key={i}
              to={data.to}
              isActive={() => active === data.name}
              className={"Nav-links-link"}
              onClick={() => setState({ ...state, active: `${data.name}` })}
            >
              <Icon className={"Nav-links-link-icon"} name={data.icon} />
              <span className={"Nav-links-link-label"}>{data.primary}</span>
            </NavLink>
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
