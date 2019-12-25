import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { data } from "../../library/data";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import { Home, Teachers, Branches, About } from "../Page";
import Header from "../Header";

export default props => {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  useEffect(() => setState({ active: "home" }), []);

  let { active } = state;

  return (
    <Router>
      <Header />
      <Nav indicator={active}>
        {data.navigation.map((data, i) => (
          <NavLink
            key={i}
            to={data.to}
            isActive={() => active === data.name}
            className={data.className}
            onClick={() => setState({ ...state, active: `${data.name}` })}
          >
            <Icon name={data.icon} />
            <Typography subject>{data.primary}</Typography>
          </NavLink>
        ))}
      </Nav>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route
        exact
        path="/professores"
        render={props => <Teachers {...props} />}
      />
      <Route exact path="/filiais" render={props => <Branches {...props} />} />
      <Route exact path="/sobre" render={props => <About {...props} />} />
    </Router>
  );
};
