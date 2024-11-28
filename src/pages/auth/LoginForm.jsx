// LoginForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice.js";

export default function LoginForm() {
  const realUsername = "teambuck";
  const realPassword = "4521";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API 호출 로직 구현
      // 내가 입력받은 username, password가 있는데, 걔랑 realusername, 이랑 다르면 에러를 뱉어줘
      if (username == realUsername && password === realPassword) {
        // 로그인 성공
        dispatch(login());
        // dispatch(login(username, password));
      } else {
        // 로그인 실패
        navigate("/");
        // dispatch(login());
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <div className="form-group">
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
