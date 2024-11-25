import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slice/authSlice";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  return (
    <header>
      <div>
        {isLoggedIn ? (
          <button onClick={() => {}}>LogIn</button>
        ) : (
          <button onClick={() => {}}>LogOut</button>
        )}
      </div>
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
    </header>
  );
}
