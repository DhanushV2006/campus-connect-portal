export default function AssignmentList({
  assignments,
  onSubmit
}) {
  return (
    <div>
      <h3>📝 My Assignments</h3>

      <ul style={styles.list}>
        {assignments.map((assignment) => (
          <li
            key={assignment.id}
            style={styles.listItem}
          >
            <div>
              <strong>{assignment.title}</strong>

              <p style={styles.subText}>
                {assignment.subject} • Due: {assignment.dueDate}
              </p>

              <span
                style={
                  assignment.status === 'Submitted'
                    ? styles.badgeSuccess
                    : styles.badgePending
                }
              >
                {assignment.status}
              </span>
            </div>

            {assignment.status === 'Pending' && (
              <button
                style={styles.actionBtn}
                onClick={() => onSubmit(assignment.id)}
              >
                Submit
              </button>
            )}
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
  },

  badgeSuccess: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px'
  },

  badgePending: {
    backgroundColor: '#ffc107',
    color: '#000',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px'
  }
};