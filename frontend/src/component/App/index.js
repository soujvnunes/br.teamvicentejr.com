import React, { useState, useEffect } from "react";
import { data } from "../../utility/data";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Nav from "../Nav";
import Typography from "../Typography";
import Icon from "../Icon";
import Home from "../../page/Home";
import Teachers from "../../page/Teachers";
import Branches from "../../page/Branches";
import classNames from "classnames";
import About from "../../page/About";
import Highlight from "../Highlight";

export default props => {
  const [state, setState] = useState({
    active: window.location.pathname.substring(1)
  });

  let { active } = state;

  useEffect(() => setState({ active: "home" }), []);

  const classes = {
    Highlight: [
      classNames({
        [`Highlight-${active}-page`]: active
      })
    ]
  };

  return (
    <Router>
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
      <Route path="/professores" render={props => <Teachers {...props} />} />
      <Route path="/filiais" render={props => <Branches {...props} />} />
      <Route path="/sobre" render={props => <About {...props} />} />
      <Highlight
        className={classes.Highlight}
        activeCarousel={active === "teachers"}
      />
    </Router>
  );
};
