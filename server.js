const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set headers for SSE
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // Send SSE events to the client at regular intervals
    setInterval(() => {
        const timestamp = new Date().toISOString();
        res.write(`data: Server time: ${timestamp}\n\n`);
    }, 1000);

    // Handle client disconnect
    req.on('close', () => {
        console.log('Client disconnected');
        res.end();
    });
});

// Start the server on port 5000
server.listen(5000, () => {
    console.log('Server listening on port 5000');
});
