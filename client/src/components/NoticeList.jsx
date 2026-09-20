export default function NoticeList({ notices }) {
  return (
    <div>
      <h3>📢 Campus Notices & Events</h3>

      <ul style={styles.list}>
        {notices.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <div>
              <strong>{item.title}</strong>

              <p style={styles.subText}>
                {item.dept} • {item.date}
              </p>
            </div>

            <button style={styles.actionBtn}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
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
    margin: '4px 0 8px 0',
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
  }
};