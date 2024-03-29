import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIdea } from "../api";
import Loader from "./Loader";

export default function Idea() {
  const [idea, setIdea] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIdea()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false);
          setIdea(data.activity);
        }, 2000);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  //   useEffect(() => {
  //     getImage(idea).then((data) => {
  //       console.log(data);
  //     });
  //   }, [idea]);

  if (err)
    return (
      <h3>
        {err.response.status}: {err.response.data.msg}
      </h3>
    );

  if (isLoading) return <Loader />;

  return (
    <div>
      <section>
        <h1 className="idea-text">{idea}.</h1>
      </section>
      <section className="main-text">
        <h1>Not for you?</h1>
        <Link to="/">
          <button className="btn">
            <strong>Try again.</strong>
          </button>
        </Link>
      </section>
    </div>
  );
}
