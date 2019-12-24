import React, { useState, useEffect } from "react";
import { data } from "../../utility/data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Home from "../../page/Home";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default props => {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  let { active } = state;

  useEffect(() => setState({ active: "home" }), []);

  return (
    <Router>
      <Nav indicator={active}>
        {data.navigation.map((data, i) => (
          <NavLink
            smooth
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
    </Router>
  );
};
