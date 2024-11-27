import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../store/slice/authSlice";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  console.log(isLoggedIn);
  return (
    <header>
      <div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            LogIn
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(login());;
        // ) : (
        //   <button
        //     onClick={() => {
        //       navigate("/login");
            }}
          >
            LogOut
          </button>
        )}
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="makeknown">게시글</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="makeknown/create">글쓰기</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
