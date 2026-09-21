import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

export default function FacultyPortal({ onBackToHome }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div>
          <h2 style={styles.title}>👨‍🏫 Faculty Portal View</h2>
          <span style={styles.subtitle}>Welcome, RVU Faculty</span>
        </div>

        <button onClick={onBackToHome} style={styles.backBtn}>
          ← Back to Main Campus View
        </button>
      </header>

      <div style={styles.tabContainer}>
        <button onClick={() => navigate('/faculty')} style={location.pathname === '/faculty' ? styles.activeTab : styles.tab}>Dashboard</button>
        <button onClick={() => navigate('/faculty/notices')} style={location.pathname.includes('/notices') ? styles.activeTab : styles.tab}>Post Notices</button>
        <button onClick={() => navigate('/faculty/assignments')} style={location.pathname.includes('/assignments') ? styles.activeTab : styles.tab}>Post Assignments</button>
        <button onClick={() => navigate('/faculty/attendance')} style={location.pathname.includes('/attendance') ? styles.activeTab : styles.tab}>Mark Attendance</button>
        <button onClick={() => navigate('/faculty/events')} style={location.pathname.includes('/events') ? styles.activeTab : styles.tab}>View Events</button>
        <button onClick={() => navigate('/faculty/submissions')} style={location.pathname.includes('/submissions') ? styles.activeTab : styles.tab}>View Submissions</button>
      </div>

      <div style={styles.contentCard}>
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="notices" element={<NoticesView />} />
          <Route path="assignments" element={<AssignmentsView />} />
          <Route path="attendance" element={<AttendanceView />} />
          <Route path="events" element={<EventsView />} />
          <Route path="submissions" element={<SubmissionsView />} />
        </Routes>
      </div>
    </div>
  );
}

function DashboardView() {
  return <div><h3>📊 Faculty Dashboard</h3><p>Manage notices, assignments, attendance, events and student submissions.</p></div>;
}

function NoticesView() {
  return <div><h3>📢 Post Notices</h3><p>Faculty can post campus and academic notices.</p></div>;
}

function AssignmentsView() {
  return <div><h3>📝 Post Assignments</h3><p>Faculty can create and post assignments for students.</p></div>;
}

function AttendanceView() {
  return <div><h3>📊 Mark Attendance</h3><p>Faculty can mark and manage student attendance.</p></div>;
}

function EventsView() {
  return <div><h3>📅 View Events</h3><p>View upcoming campus and academic events.</p></div>;
}

function SubmissionsView() {
  return <div><h3>📂 View Submissions</h3><p>View student assignment submissions.</p></div>;
}

const styles = {
  container: { maxWidth: '850px', margin: '30px auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0A2240', padding: '15px 20px', color: '#fff' },
  title: { margin: 0, color: '#F2A900' },
  subtitle: { fontSize: '13px', color: '#e0e0e0' },
  backBtn: { backgroundColor: '#F2A900', border: 'none', padding: '8px 14px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', color: '#0A2240' },
  tabContainer: { display: 'flex', backgroundColor: '#e0e0e0', borderBottom: '2px solid #0A2240' },
  tab: { flex: 1, padding: '12px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#333' },
  activeTab: { flex: 1, padding: '12px', border: 'none', backgroundColor: '#ffffff', color: '#0A2240', fontWeight: 'bold', borderTop: '3px solid #0A2240', cursor: 'pointer' },
  contentCard: { backgroundColor: '#ffffff', padding: '25px', borderRadius: '0 0 8px 8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }
};