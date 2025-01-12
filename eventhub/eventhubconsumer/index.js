const { EventHubConsumerClient, earliestEventPosition, latestEventPosition } = require('@azure/event-hubs'); 
 
// Replace with your Event Hub connection string, Event Hub name, and consumer group name 
const connectionString = ""; 
const eventHubName = ""; 
const consumerGroup = "$Default"; // Default consumer group 
 
async function receiveMessages() { 
  const consumerClient = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName); 
 
  // This function is called whenever a new event is received 
  const subscription = consumerClient.subscribe( 
    { 
      processEvents: async (events) => { 
        for (const event of events) { 
          console.log(`Received event: ${event.body}`); 
        } 
      }, 
      processError: async (err) => { 
        console.error("Error occurred: ", err); 
      } 
    }, 
    { startPosition: earliestEventPosition } // Start reading from the latest event 
  ); 
 
  // Keep the consumer alive to listen to events 
  setTimeout(() => { 
    subscription.close(); 
    consumerClient.close(); 
  }, 5000); // Listen for events for 5 seconds 
} 
 
receiveMessages().catch((err) => { 
  console.error("Error running the consumer: ", err); 
}); 
 