const { ServiceBusClient } = require('@azure/service-bus');
// Your Azure Service Bus connection string and queue name 
const connectionString = ''; 
const queueName = 'myqueue'; // Replace with your queue name 
 
async function main() { 
  const client = new ServiceBusClient(connectionString); 
  const sender = client.createSender(queueName); 
 
  try { 
    // Create a message to send 
    const message = { 
      body: 'Hello, Azure Service Bus!', 
      label: 'Test Message' 
    }; 
 
    // Send the message 
    console.log(`Sending message: ${message.body}`); 
    await sender.sendMessages(message); 
    console.log('Message sent successfully.'); 
  } catch (err) { 
    console.error('Error sending message:', err); 
  } finally { 
    // Close the client connection 
    await sender.close(); 
    await client.close(); 
  } 
} 
 
main().catch((err) => { 
  console.error('Error in sending message:', err); 
}); 
