import { useState, useEffect } from 'react';
import StudentPortal from './components/StudentPortal.jsx';

export default function App() {

  const studentPortalHashes = [
    '#student',
    '#notices',
    '#assignments',
    '#attendance',
    '#profile'
  ];

  const [showStudentPortal, setShowStudentPortal] = useState(
    studentPortalHashes.includes(window.location.hash)
  );

  useEffect(() => {

    const handleHashChange = () => {
      setShowStudentPortal(
        studentPortalHashes.includes(window.location.hash)
      );
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };

  }, []);

  useEffect(() => {

    const siteContent = document.getElementById('site-content');
    const staticStudentPortal = document.getElementById(
      'static-student-portal'
    );

    if (siteContent) {
      siteContent.style.display = showStudentPortal
        ? 'none'
        : 'block';
    }

    if (staticStudentPortal) {
      staticStudentPortal.style.display = showStudentPortal
        ? 'none'
        : 'block';
    }

  }, [showStudentPortal]);

  const handleBackToHome = () => {
    window.location.hash = '';
  };

  return (
    <>
      {showStudentPortal && (
        <StudentPortal
          onBackToHome={handleBackToHome}
        />
      )}
    </>
  );
}