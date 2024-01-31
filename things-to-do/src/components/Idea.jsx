import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdea } from "../api";

export default function Idea() {
  const [idea, setIdea] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    getIdea()
      .then((response) => {
        setIdea(response.activity);
        console.log(response.activity);
        console.log(idea);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  return (
    <div className="main-text">
      <section>
        <h1></h1>
      </section>
      <h1>Not for you?</h1>
      <button>
        <Link to="/">Try again.</Link>
      </button>
    </div>
  );
}
