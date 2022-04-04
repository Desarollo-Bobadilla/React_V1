/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Museums from "../museums/museums";
import Obra from "./obra";

import "./style.css";

function Obras() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        const secret = document.getElementById("secret");
        let id = parseInt(secret.innerHTML);
        setMuseums(museums.filter((p) => p.id === id));
      });
  }, []);

  const createMuseums = () => {
    const containter = document.getElementById("root");
    const root = ReactDOMClient.createRoot(containter);

    root.render(<Museums />);
  };

  const titu = document.getElementById("titu");
  titu.onclick = function () {
    createMuseums();
  };

  return (
    <div className="row test">
      {museums.map((museum) => (
        <Obra key={museum.id} post={museum.artworks} />
      ))}
    </div>
  );
}

export default Obras;
