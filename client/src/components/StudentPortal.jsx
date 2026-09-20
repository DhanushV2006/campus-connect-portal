import { useState } from 'react';
import PortalTabs from './PortalTabs.jsx';
import NoticeList from './NoticeList.jsx';
import AssignmentList from './AssignmentList.jsx';
import ProfileCard from './ProfileCard.jsx';
import profileImage from "../assets/dhanush2.jpg";

export default function StudentPortal({ onBackToHome }) {

  const [activeTab, setActiveTab] = useState('notices');

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      subject: 'CS3301 - Full Stack',
      title: 'Lab Assignment 5',
      status: 'Pending',
      dueDate: 'Sept 18, 2026'
    },
    {
      id: 2,
      subject: 'CS2302 - DEEP LEARNING',
      title: 'CIE - 1 ASSSESMENT ',
      status: 'Submitted',
      dueDate: 'Sept 10, 2026'
    }
  ]);

  const notices = [
    {
      id: 1,
      title: 'Mid-Term Exam Schedule Released',
      date: 'Sept 10, 2026',
      dept: 'SOCSE'
    },
    {
      id: 2,
      title: 'Hackathon Registration Open',
      date: 'Sept 20, 2026',
      dept: 'RVU Tech Club'
    }
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
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === id
          ? { ...assignment, status: 'Submitted' }
          : assignment
      )
    );
  };

  return (
    <div style={styles.container}>

      <header style={styles.header}>

        <div>
          <h2 style={styles.title}>
            👨‍🎓 Student Portal View
          </h2>

          <span style={styles.subtitle}>
            Welcome, RVU Student
          </span>
        </div>

        <button
          type="button"
          onClick={onBackToHome}
          style={styles.backBtn}
        >
          ← Back to Main Campus View
        </button>

      </header>

      <PortalTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div style={styles.contentCard}>

        {activeTab === 'notices' && (
          <NoticeList notices={notices} />
        )}

        {activeTab === 'assignments' && (
          <AssignmentList
            assignments={assignments}
            onSubmit={handleAssignmentSubmit}
          />
        )}

        {activeTab === 'attendance' && (
  <div>

    <h3>📊 Track Attendance</h3>

    <div style={styles.attendanceCard}>
      <strong>CS3202 - Deep Learning</strong>
      <span style={styles.attendancePercent}>100%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>CS3255 - Natural Language Processing</strong>
      <span style={styles.attendancePercent}>100%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>CS3301 - Full Stack Development</strong>
      <span style={styles.attendancePercent}>100%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>CS3402 - Internet of Things</strong>
      <span style={styles.attendancePercent}>100%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>CS3803 - Probability Theory</strong>
      <span style={styles.attendancePercent}>85%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>Fintech BLOCKCHAIN</strong>
      <span style={styles.attendancePercent}>95%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>Fintech Product Development</strong>
      <span style={styles.attendancePercent}>100%</span>
    </div>

    <div style={styles.attendanceCard}>
      <strong>HEALTH INFORMATICS</strong>
      <span style={styles.attendancePercent}>100%</span>
    </div>

  </div>
)}

        {activeTab === 'profile' && (
          <ProfileCard student={student} />
        )}

      </div>

    </div>
  );
}

const styles = {

  container: {
    width: '90%',
    maxWidth: '850px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0A2240',
    padding: '15px 20px',
    color: '#ffffff'
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
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#0A2240'
  },

  contentCard: {
    backgroundColor: '#ffffff',
    padding: '25px'
  },

  attendanceCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginTop: '12px',
    backgroundColor: '#f5f7fa',
    borderRadius: '6px',
    borderLeft: '4px solid #0A2240'
  },

  onTrack: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold'
  }

};