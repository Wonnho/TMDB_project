// // LoginForm.jsx
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "../store/slice/authSlice.js";

// export default function LoginForm() {
//   const [username, setUsername] = useState("teambuck");
//   const [password, setPassword] = useState("1234");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // API 호출 로직 구현
//       dispatch(login());
//       navigate("/");
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         <h2>로그인</h2>
//         <div className="form-group">
//           <label htmlFor="username">아이디:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">비밀번호:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">로그인</button>
//       </form>
//     </div>
//   );
// }
