import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-text">
      <h1>Bored?</h1>
      <h3>Let me help you with that.</h3>
      <button>
        <Link to="/idea/">
          <strong>Hit me with it</strong>
        </Link>
      </button>
    </div>
  );
}
