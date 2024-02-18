import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-text">
      <h1 className="img-container">
        Bored{"    "}
        <img
          className="q-mark"
          src="../../black-question-mark-icon-clip-art-10.png"
          alt="black question mark"
        />
      </h1>
      <h3>Let me help you with that.</h3>
      <button>
        <Link to="/idea/">
          <strong>Hit me with it</strong>
        </Link>
      </button>
    </div>
  );
}
