export default function ProfileCard({ student }) {
  return (
    <div>
      <h3>👤 Student Profile</h3>

      <div style={styles.profileCard}>

        <img
          src={student.photo}
          alt="Student Profile"
          style={styles.profileImage}
        />

        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Student ID:</strong> {student.id}
        </p>

        <p>
          <strong>Programme:</strong> {student.programme}
        </p>

        <p>
          <strong>Department:</strong> {student.department}
        </p>

        <p>
          <strong>University:</strong> {student.university}
        </p>

      </div>
    </div>
  );
}

const styles = {
  profileCard: {
    marginTop: '15px',
    padding: '20px',
    backgroundColor: '#f5f7fa',
    borderRadius: '6px',
    lineHeight: '1.8',
    textAlign: 'center'
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