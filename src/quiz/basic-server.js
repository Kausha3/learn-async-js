const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8000;

const incidents = [
    { id: "MABOS001", date: "20170617", time: "1437", road_id: "A90", place: "Stonehaven", direction: "north", description: "Broken-down vehicle on north and park station." },
    { id: "MABOS002", date: "20221217", time: "0937", road_id: "A90", place: "Stonehaven", direction: "north", description: "Car in West Village broken down." }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname.replace(/\/+$/, ''); // Normalize by removing trailing slashes

 
    if (pathname.startsWith('/incidents/')) {
        const segments = pathname.split('/');
        
        if (segments.length === 3 && segments[2]) {
            const incidentId = segments[2];
            const incident = incidents.find(inc => inc.id === incidentId);

            if (incident) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(incident));
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Incident not found');
            }
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Bad Request: Incorrect incident ID format');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
