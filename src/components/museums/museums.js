/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import Obras from "../obras/obras";
import Post from "./museum";
import "./style.css";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        setMuseums(museums);
      });
  }, []);

  const deleteMuseums = (id) => {
    let filteredPosts = museums.filter((p) => (p.id === id) & (p.id !== id));
    setMuseums(filteredPosts);

    const titu = document.getElementById("titu");
    filteredPosts = museums.filter((p) => p.id === id);
    titu.innerHTML = "MUSEO " + filteredPosts[0].name + ": Obras pricipales";

    const secret = document.getElementById("secret");
    secret.innerHTML = filteredPosts[0].id;

    const containter = document.getElementById("test");
    const root = ReactDOMClient.createRoot(containter);

    root.render(<Obras />);
  };

  return (
    <div className="div" id="museos">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h1 className="GFG" id="titu">
            Museums
          </h1>
          <hr></hr>
        </div>
        <div className="col-1"></div>
      </div>
      <p id="secret" className="secret"></p>

      <div className="row test" id="test">
        {museums.map((museum) => (
          <Post key={museum.id} post={museum} onDelete={deleteMuseums} />
        ))}
      </div>
    </div>
  );
}

export default Museums;
