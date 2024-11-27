import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import PrivateRoute from './components/auth/PrivateRoute';
import MovieDetail from './pages/MovieDetail';

// 주요 기능
// 인증 상태 관리: Redux를 사용하여 전역적으로 로그인 상태를 관리합니다45.
// 보호된 라우트: 인증되지 않은 사용자의 접근을 제한합니다4.
// 토큰 기반 인증: JWT 토큰을 사용하여 사용자 인증을 처리합니다7.
// 로그인 폼: 사용자 이름과 비밀번호를 입력받아 서버에 인증을 요청합니다4.
// 이 구조를 통해 로그인한 사용자만 영화 상세 정보를 볼 수 있도록 구현할 수 있습니다.

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route 
        path="/movie/:id" 
        element={
          <PrivateRoute>
            <MovieDetail />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}