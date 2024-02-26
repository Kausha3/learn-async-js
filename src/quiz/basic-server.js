const express = require('express');
const app = express();
const port = 8000;

const incidents = [
    { id: "MABOS001", date: "20170617", time: "1437", road_id: "A90", place: "Stonehaven", direction: "north", description: "Broken-down vehicle on north and park station." },
    { id: "MABOS002", date: "20221217", time: "0937", road_id: "A90", place: "Stonehaven", direction: "north", description: "Car in West Village broken down." }
];

// Middleware to parse request body
app.use(express.json());

app.get('/incidents/:id', (req, res) => {
    const { id } = req.params;
    // Basic validation for ID format
    if (!/MABOS00\d+/.test(id)) {
        return res.status(400).json({ error: 'Invalid incident ID format' });
    }

    const incident = incidents.find(incident => incident.id === id);
    if (incident) {
        res.json(incident);
    } else {
        res.status(404).json({ error: 'Incident not found' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
