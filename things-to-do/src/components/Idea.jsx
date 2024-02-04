import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdea } from "../api";

export default function Idea() {
  const [idea, setIdea] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    getIdea()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setIdea(data.activity);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  useEffect(() => {
    console.log(idea); // This will log the updated value
  }, [idea]);

  if (err)
    return (
      <h3>
        {err.response.status}: {err.response.data.msg}
      </h3>
    );

  return (
    <div>
      <section>
        <h1>{idea}.</h1>
      </section>
      <section className="main-text">
        <h1>Not for you?</h1>
        <button>
          <Link to="/">Try again.</Link>
        </button>
      </section>
    </div>
  );
}
