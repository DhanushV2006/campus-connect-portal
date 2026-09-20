export default function PortalTabs({ activeTab, setActiveTab }) {

  return (
    <div style={styles.tabContainer}>

      <button
        type="button"
        onClick={() => setActiveTab('notices')}
        style={
          activeTab === 'notices'
            ? styles.activeTab
            : styles.tab
        }
      >
        Notices & Events
      </button>

      <button
        type="button"
        onClick={() => setActiveTab('assignments')}
        style={
          activeTab === 'assignments'
            ? styles.activeTab
            : styles.tab
        }
      >
        Assignments
      </button>

      <button
        type="button"
        onClick={() => setActiveTab('attendance')}
        style={
          activeTab === 'attendance'
            ? styles.activeTab
            : styles.tab
        }
      >
        Track Attendance
      </button>

      <button
        type="button"
        onClick={() => setActiveTab('profile')}
        style={
          activeTab === 'profile'
            ? styles.activeTab
            : styles.tab
        }
      >
        Profile
      </button>

    </div>
  );
}

const styles = {
  tabContainer: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    borderBottom: '2px solid #0A2240'
  },

  tab: {
    flex: 1,
    padding: '12px 8px',
    border: 'none',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#333333',
    fontSize: '13px'
  },

  activeTab: {
    flex: 1,
    padding: '12px 8px',
    border: 'none',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#0A2240',
    borderTop: '3px solid #0A2240',
    fontSize: '13px'
  }
};