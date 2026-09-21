import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import StudentPortal from './components/StudentPortal.jsx';
import AuthModule from './components/AuthModule.jsx';
import FacultyPortal from './components/FacultyPortal.jsx';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isStudentRoute = location.pathname.startsWith('/student');
  const isFacultyRoute = location.pathname.startsWith('/faculty');

  const handleBackToHome = () => {
    navigate('/');
    window.location.hash = '';
  };

  const siteContent = document.getElementById('site-content');
  if (siteContent) siteContent.style.display = isStudentRoute ? 'none' : 'block';
  if (siteContent) siteContent.style.display = isStudentRoute || isFacultyRoute ? 'none' : 'block';

  return (
    <Routes>
      <Route path="/login" element={<AuthModule initialMode="login" />} />
      <Route path="/register" element={<AuthModule initialMode="register" />} />
      <Route path="/student/*" element={<StudentPortal onBackToHome={handleBackToHome} />} />
      <Route path="/faculty/*" element={<FacultyPortal onBackToHome={handleBackToHome} />} />
      <Route path="*" element={null} />
    </Routes>
  );
}