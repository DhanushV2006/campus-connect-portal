import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import profileImage from '../assets/dhanush2.jpg';

export default function StudentPortal({ onBackToHome }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [assignments, setAssignments] = useState([
    { id: 1, subject: 'CS3301 - Full Stack', title: 'Lab Assignment 5', status: 'Pending', dueDate: 'Sept 18, 2026' },
    { id: 2, subject: 'CS2302 - DEEP LEARNING', title: 'CIE - 1 ASSSESMENT', status: 'Submitted', dueDate: 'Sept 10, 2026' }
  ]);

  const notices = [
    { id: 1, title: 'Mid-Term Exam Schedule Released', date: 'Sept 10, 2026', dept: 'SOCSE' },
    { id: 2, title: 'Hackathon Registration Open', date: 'Sept 20, 2026', dept: 'RVU Tech Club' }
  ];

  const student = {
    name: 'Dhanush V',
    id: '1RUA24SCS0031',
    programme: 'B.Sc. (Hons.) Computer Science',
    department: 'School of Computer Science & Engineering',
    university: 'RV University',
    photo: profileImage
  };

  const handleAssignmentSubmit = (id) => {
    setAssignments(currentAssignments =>
      currentAssignments.map(item =>
        item.id === id ? { ...item, status: 'Submitted' } : item
      )
    );
  };

  return (
    <div style={styles.container}>

      <header style={styles.header}>
        <div>
          <h2 style={styles.title}>👨‍🎓 Student Portal View</h2>
          <span style={styles.subtitle}>Welcome, RVU Student</span>
        </div>

        <button onClick={onBackToHome} style={styles.backBtn}>
          ← Back to Main Campus View
        </button>
      </header>

      <div style={styles.tabContainer}>

        <button
          onClick={() => navigate('/student/notices')}
          style={location.pathname.includes('/notices') || location.pathname === '/student' ? styles.activeTab : styles.tab}
        >
          Notices & Events
        </button>

        <button
          onClick={() => navigate('/student/assignments')}
          style={location.pathname.includes('/assignments') ? styles.activeTab : styles.tab}
        >
          Assignments
        </button>

        <button
          onClick={() => navigate('/student/attendance')}
          style={location.pathname.includes('/attendance') ? styles.activeTab : styles.tab}
        >
          Track Attendance
        </button>

        <button
          onClick={() => navigate('/student/profile')}
          style={location.pathname.includes('/profile') ? styles.activeTab : styles.tab}
        >
          Profile
        </button>

      </div>

      <div style={styles.contentCard}>
        <Routes>

          <Route path="/" element={<NoticesView notices={notices} />} />
          <Route path="notices" element={<NoticesView notices={notices} />} />

          <Route
            path="assignments"
            element={<AssignmentsView assignments={assignments} onSubmit={handleAssignmentSubmit} />}
          />

          <Route path="attendance" element={<AttendanceView />} />

          <Route path="profile" element={<ProfileView student={student} />} />

        </Routes>
      </div>

    </div>
  );
}

function NoticesView({ notices }) {
  return (
    <div>
      <h3>📢 Campus Notices & Events</h3>

      <ul style={styles.list}>
        {notices.map(item => (
          <li key={item.id} style={styles.listItem}>
            <div>
              <strong>{item.title}</strong>
              <p style={styles.subText}>{item.dept} • {item.date}</p>
            </div>

            <button style={styles.actionBtn}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssignmentsView({ assignments, onSubmit }) {
  return (
    <div>
      <h3>📝 Assignments & Submissions</h3>

      <ul style={styles.list}>
        {assignments.map(item => (
          <li key={item.id} style={styles.listItem}>
            <div>
              <strong>{item.title}</strong>
              <p style={styles.subText}>{item.subject} • Due: {item.dueDate}</p>
            </div>

            {item.status === 'Submitted' ? (
              <span style={styles.badgeSuccess}>Submitted</span>
            ) : (
              <button style={styles.actionBtn} onClick={() => onSubmit(item.id)}>
                Submit Assignment
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AttendanceView() {
  const attendance = [
    ['CS3202 - Deep Learning', '100%'],
    ['CS3255 - Natural Language Processing', '100%'],
    ['CS3301 - Full Stack Development', '100%'],
    ['CS3402 - Internet of Things', '100%'],
    ['CS3803 - Probability Theory', '85%'],
    ['Fintech BLOCKCHAIN', '95%'],
    ['Fintech Product Development', '100%'],
    ['HEALTH INFORMATICS', '100%']
  ];

  return (
    <div>
      <h3>📊 Attendance Tracker</h3>

      <div style={styles.grid}>
        {attendance.map(([subject, percentage]) => (
          <div style={styles.metricCard} key={subject}>
            <h4>{subject}</h4>
            <p style={styles.metricText}>{percentage} Attendance</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileView({ student }) {
  return (
    <div>
      <h3>👤 Student Profile</h3>

      <div style={styles.profileCard}>
        <img src={student.photo} alt="Student Profile" style={styles.profileImage} />
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Student ID:</strong> {student.id}</p>
        <p><strong>Programme:</strong> {student.programme}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>University:</strong> {student.university}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '850px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0A2240',
    padding: '15px 20px',
    color: '#fff'
  },

  title: {
    margin: 0,
    color: '#F2A900'
  },

  subtitle: {
    fontSize: '13px',
    color: '#e0e0e0'
  },

  backBtn: {
    backgroundColor: '#F2A900',
    border: 'none',
    padding: '8px 14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#0A2240'
  },

  tabContainer: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    borderBottom: '2px solid #0A2240'
  },

  tab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333'
  },

  activeTab: {
    flex: 1,
    padding: '12px',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#0A2240',
    fontWeight: 'bold',
    borderTop: '3px solid #0A2240',
    cursor: 'pointer'
  },

  contentCard: {
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },

  list: {
    listStyle: 'none',
    padding: 0
  },

  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderBottom: '1px solid #eee'
  },

  subText: {
    margin: '4px 0 0 0',
    fontSize: '12px',
    color: '#666'
  },

  actionBtn: {
    backgroundColor: '#0A2240',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  },

  badgeSuccess: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px'
  },

  metricCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '6px',
    textAlign: 'center'
  },

  metricText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0A2240'
  },

  profileCard: {
    textAlign: 'center',
    lineHeight: '1.8',
    backgroundColor: '#f5f7fa',
    padding: '20px',
    borderRadius: '6px'
  },

  profileImage: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
    border: '3px solid #0A2240'
  }
};