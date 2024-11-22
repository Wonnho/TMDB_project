import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="makeknown">MakeKnown</Link>
        </li>
        <li>
          <Link to="makeknown/create">MakeKnownCreate</Link>
        </li>
      </ul>
    </div>
  );
}
