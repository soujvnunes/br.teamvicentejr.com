import React, { useState } from "react";
import Line from "../Line";
import Spaceship from "../Spaceship";

export default function ImageExpand(props) {
  const [state, setState] = useState({
    imageOpen: false
  });
  let { img } = props;
  let { imageOpen } = state;

  const handleImageExpand = () => {
    if (imageOpen) setState({ ...state, imageOpen: false });
    else setState({ ...state, imageOpen: true });
  };

  return (
    <>
      <Line
        expanded={true}
        noHover={true}
        onClick={handleImageExpand}
        className={"ImageExpand"}
      >
        <img
          src={img}
          alt={`Imagem para mapa da filial img`}
          className={"ImageExpand-image"}
        />
      </Line>
      <Spaceship
        open={imageOpen}
        close={handleImageExpand}
        className={"ImageExpand-spaceship"}
      >
        <img
          src={img}
          alt={`Imagem para mapa da filial img`}
          className={"ImageExpand-spaceship-image"}
        />
      </Spaceship>
    </>
  );
}
