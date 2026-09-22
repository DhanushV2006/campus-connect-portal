import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// ==================== MOCK DATA ====================

let assignments = [
    { id: 1, subject: 'CS3301 - FULL STACK', title: 'LAB 2 React Routing', status: 'Pending', dueDate: 'Sept 18, 2026' },
    { id: 2, subject: 'CS2302 - DEEP LEARNING', title: 'CIE - 1 ASSESSMENT', status: 'Submitted', dueDate: 'Sept 10, 2026' }
];

let notices = [
    { id: 1, title: 'Mid-Term Exam Schedule Released', date: 'Sept 10, 2026', dept: 'SOCSE' },
    { id: 2, title: 'Hackathon Registration Open', date: 'Sept 20, 2026', dept: 'RVU Tech Club' }
];

let events = [
    { id: 1, title: 'RVU Tech Fest', date: 'Sept 25, 2026', venue: 'RV University' },
    { id: 2, title: 'Hackathon 2026', date: 'Oct 5, 2026', venue: 'Innovation Centre' }
];

let attendance = [
    { id: 1, student: 'Dhanush V', subject: 'CS3301 - Full Stack Development', percentage: 100 },
    { id: 2, student: 'Dhanush V', subject: 'CS3202 - Deep Learning', percentage: 100 },
    { id: 3, student: 'Dhanush V', subject: 'CS3255 - Natural Language Processing', percentage: 100 },
    { id: 4, student: 'Dhanush V', subject: 'CS3803 - Probability Theory', percentage: 85 },
    { id: 5, student: 'Dhanush V', subject: 'Fintech BLOCKCHAIN', percentage: 95 }
];

let submissions = [
    { id: 1, student: 'Dhanush V', assignment: 'LAB 2 React Routing', status: 'Submitted', date: 'Sept 15, 2026' },
    { id: 2, student: 'Dhanush V', assignment: 'CIE - 1 ASSESSMENT', status: 'Submitted', date: 'Sept 10, 2026' }
];

// ==================== HOME / TEST ROUTE ====================

app.get('/', (req, res) => {
    res.json({ message: 'Campus Connect Portal API is running' });
});

// ==================== ASSIGNMENTS ====================

// Get all assignments
app.get('/api/assignments', (req, res) => {
    res.json(assignments);
});

// Create assignment - Faculty
app.post('/api/assignments', (req, res) => {
    const { subject, title, dueDate } = req.body;

    const newAssignment = {
        id: assignments.length + 1,
        subject,
        title,
        status: 'Pending',
        dueDate
    };

    assignments.push(newAssignment);
    res.status(201).json(newAssignment);
});

// Submit assignment - Student
app.put('/api/assignments/:id/submit', (req, res) => {
    const id = parseInt(req.params.id);
    const assignment = assignments.find(a => a.id === id);

    if (!assignment) {
        return res.status(404).json({ message: 'Assignment not found' });
    }

    assignment.status = 'Submitted';

    submissions.push({
        id: submissions.length + 1,
        student: 'Dhanush V',
        assignment: assignment.title,
        status: 'Submitted',
        date: new Date().toLocaleDateString()
    });

    res.json(assignment);
});

// ==================== NOTICES ====================

// Get notices - Student
app.get('/api/notices', (req, res) => {
    res.json(notices);
});

// Post notice - Faculty
app.post('/api/notices', (req, res) => {
    const { title, date, dept } = req.body;

    const newNotice = {
        id: notices.length + 1,
        title,
        date,
        dept
    };

    notices.push(newNotice);
    res.status(201).json(newNotice);
});

// ==================== EVENTS ====================

// Get events
app.get('/api/events', (req, res) => {
    res.json(events);
});

// Add event - Faculty
app.post('/api/events', (req, res) => {
    const { title, date, venue } = req.body;

    const newEvent = {
        id: events.length + 1,
        title,
        date,
        venue
    };

    events.push(newEvent);
    res.status(201).json(newEvent);
});

// ==================== ATTENDANCE ====================

// Get attendance
app.get('/api/attendance', (req, res) => {
    res.json(attendance);
});

// Mark attendance - Faculty
app.post('/api/attendance', (req, res) => {
    const { student, subject, percentage } = req.body;

    const newAttendance = {
        id: attendance.length + 1,
        student,
        subject,
        percentage
    };

    attendance.push(newAttendance);
    res.status(201).json(newAttendance);
});

// ==================== SUBMISSIONS ====================

// Get submissions - Faculty
app.get('/api/submissions', (req, res) => {
    res.json(submissions);
});

// ==================== STUDENT PROFILE ====================

app.get('/api/student/profile', (req, res) => {
    res.json({
        name: 'Dhanush V',
        id: '1RUA24SCS0031',
        programme: 'B.Sc. (Hons.) Computer Science',
        department: 'School of Computer Science & Engineering',
        university: 'RV University'
    });
});

// ==================== SERVER ====================

app.listen(PORT, () => {
    console.log(`Campus Connect Portal API running on http://localhost:${PORT}`);
});