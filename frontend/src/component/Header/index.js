import React, { Fragment, useState } from "react";
import Nav from "../Nav";
import Button from "../Button";
import Spaceship from "../Spaceship";
import SpaceshipTitle from "../SpaceshipTitle";
import SpaceshipContent from "../SpaceshipContent";
import branches from "../../utility/branches";
import LineSet from "../LineSet";
import Line from "../Line";
import LineHeader from "../LineHeader";

export default props => {
  const [state, setState] = useState({
    open: false
  });

  let { open } = state;
  let { children, social } = props;

  return (
    <Fragment>
      <header className={"Header"}>
        {children}
        <Nav className={"Header-social"}>
          <Button
            spacing
            label={"Facebook"}
            icon={"facebook"}
            type={"small"}
            url={"https://fb.me"}
            state={social === "condensed" && "condensed"}
          />
          <Button
            spacing
            label={"Instagram"}
            icon={"instagram"}
            type={"small"}
            url={"https://instagr.am"}
            state={social === "condensed" && "condensed"}
          />
          <Button
            spacing
            label={"Contato"}
            icon={"phone"}
            type={"small"}
            state={social === "condensed" && "condensed"}
            onClick={() => setState({ ...state, open: true })}
          />
        </Nav>
      </header>
      <Spaceship open={open} close={() => setState({ ...state, open: false })}>
        <SpaceshipTitle>Contato</SpaceshipTitle>
        <SpaceshipContent>
          <LineSet>
            {branches.br.map((data, i) => {
              return (
                <Line key={i} noHover={true}>
                  <LineHeader
                    primary={data.phone}
                    secondary={data.name}
                    icon={"local"}
                  />
                </Line>
              );
            })}
          </LineSet>
        </SpaceshipContent>
      </Spaceship>
    </Fragment>
  );
};
