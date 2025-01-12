const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON payloads
app.use(bodyParser.json());

// Handle POST requests to /webhook
app.post('/webhook', (req, res) => {
    // Log the incoming Event Grid event data
    console.log('Event received:', JSON.stringify(req.body, null, 2));

    // You can handle the event logic here
    // Example: if you're dealing with Azure Storage events, check for a specific event type
    const event = req.body[0];  // Event Grid sends an array of events
    if (event.eventType === 'Microsoft.Storage.BlobCreated') {
        console.log('A blob was created in your storage account.');
        // Handle blob creation event
    }

    // Send a 200 OK response back to acknowledge receipt of the event
    res.status(200).send('Event received');
});

// Start the server
app.listen(port, () => {
    console.log(`Webhook listener running at http://localhost:${port}`);
});
