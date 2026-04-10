const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
// Increase limits for base64 image parsing
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store
let reports = [];
let nextId = 1;

// API: Get all reports
app.get('/reports', (req, res) => {
    // Sort array latest first
    const sortedReports = [...reports].sort((a, b) => b.timestamp - a.timestamp);
    res.json(sortedReports);
});

// API: Submit a new report
app.post('/report', (req, res) => {
    const { location, wasteType, description, image } = req.body;
    
    // Create new report object
    const newReport = {
        id: nextId++,
        timestamp: Date.now(),
        location: location || '',
        wasteType: wasteType || '',
        description: description || '',
        reporterName: 'Ganesh',
        status: 'Pending',
        imageUrl: image || null
    };

    // Save to array
    reports.push(newReport);
    res.status(201).json({ success: true, report: newReport });
});

// API: Mark report as completed
app.post('/complete/:id', (req, res) => {
    const reportIndex = reports.findIndex(r => r.id === req.params.id);
    if (reportIndex !== -1) {
        reports[reportIndex].status = 'Completed';
        reports[reportIndex].completedAt = Date.now();
        res.json({ success: true, report: reports[reportIndex] });
    } else {
        res.status(404).json({ success: false, error: 'Report not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running locally on http://localhost:${PORT}`);
});
