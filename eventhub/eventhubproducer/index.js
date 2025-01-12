const { EventHubProducerClient } = require('@azure/event-hubs'); 
 
// Replace with your Event Hub connection string and Event Hub name 
/*
const connectionString = ""; 
const eventHubName = ""; 
 
async function sendMessage() { 
  const producerClient = new EventHubProducerClient(connectionString, eventHubName); 
 
  // Create a batch of events 
  const eventDataBatch = await producerClient.createBatch(); 
 
  // Add events to the batch 
  eventDataBatch.tryAdd({ body: 'Hello Event Hub!' }); 
  eventDataBatch.tryAdd({ body: 'Chidi!' }); 
 
  // Send the batch of events 
  try { 
    await producerClient.sendBatch(eventDataBatch); 
    console.log("Events sent successfully!"); 
  } catch (err) { 
    console.log("Error sending events: ", err); 
  } finally { 
    await producerClient.close(); 
  } 
} 
 
sendMessage().catch((err) => { 
  console.error("Error running the producer: ", err); 
});
*/ 
 