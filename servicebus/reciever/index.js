const { ServiceBusClient } = require('@azure/service-bus'); 
 
// Your Azure Service Bus connection string and queue name 
const connectionString = ''; 
const queueName = 'myqueue'; // Replace with your queue name 
 
async function main() { 
  const client = new ServiceBusClient(connectionString); 
  const receiver = client.createReceiver(queueName, { 
    receiveMode: 'peekLock' // This is to lock the message until it is completed 
    //  receiveMode: 'receiveAndDelete'  // Using Receive and Delete mode
  }); 
 
  try { 
    // Receive a message from the queue 
    const messages = await receiver.receiveMessages(1, { maxWaitTimeInMs: 5000 }); 
 
    if (messages.length > 0) { 
      console.log(`Received message: ${messages[0].body}`); 
       
      // Complete the message so it is removed from the queue 
      await receiver.completeMessage(messages[0]); 
      console.log('Message processed and removed from the queue.'); 
    } else { 
      console.log('No messages received.'); 
    } 
  } catch (err) { 
    console.error('Error receiving message:', err); 
  } finally { 
    // Close the receiver and client connection 
    await receiver.close(); 
    await client.close(); 
  } 
} 
 
main().catch((err) => { 
  console.error('Error in receiving message:', err); 
}); 
 