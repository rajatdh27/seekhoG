"use client";
import { motion } from "framer-motion";

export default function MessageQueuesSection() {
  const messageQueues = [
    {
      name: "RabbitMQ",
      icon: "🐰",
      type: "Traditional Message Broker",
      features: ["AMQP protocol", "Flexible routing", "Message acknowledgment", "Clustering"],
      pros: ["Mature & stable", "Great documentation", "Multiple protocols", "Easy to set up"],
      cons: ["Lower throughput than Kafka", "More memory intensive", "Complex clustering"],
      useCase: "Task queues, microservices communication, request-reply patterns",
      code: `// Producer
const amqp = require('amqplib');
const connection = await amqp.connect('amqp://localhost');
const channel = await connection.createChannel();

await channel.assertQueue('tasks');
channel.sendToQueue('tasks', Buffer.from(JSON.stringify({
  userId: 123,
  action: 'send-email'
})));

// Consumer
channel.consume('tasks', (msg) => {
  const task = JSON.parse(msg.content.toString());
  console.log('Processing:', task);
  channel.ack(msg); // Acknowledge
});`
    },
    {
      name: "Apache Kafka",
      icon: "📊",
      type: "Distributed Streaming Platform",
      features: ["High throughput", "Partitioning", "Replication", "Event sourcing"],
      pros: ["Massive scale", "Replay messages", "Durable storage", "Real-time streaming"],
      cons: ["Complex setup", "Higher latency", "Overkill for simple tasks"],
      useCase: "Event streaming, log aggregation, real-time analytics, CDC",
      code: `// Producer
const { Kafka } = require('kafkajs');
const kafka = new Kafka({ brokers: ['localhost:9092'] });
const producer = kafka.producer();

await producer.connect();
await producer.send({
  topic: 'user-events',
  messages: [
    { value: JSON.stringify({ userId: 123, event: 'signup' }) }
  ]
});

// Consumer
const consumer = kafka.consumer({ groupId: 'my-group' });
await consumer.subscribe({ topic: 'user-events' });
await consumer.run({
  eachMessage: async ({ message }) => {
    console.log(JSON.parse(message.value.toString()));
  }
});`
    },
    {
      name: "AWS SQS",
      icon: "☁️",
      type: "Managed Queue Service",
      features: ["Fully managed", "Auto-scaling", "Dead letter queues", "FIFO queues"],
      pros: ["Zero ops", "Pay per use", "Highly available", "Easy integration"],
      cons: ["Vendor lock-in", "Limited visibility", "Potential duplicates"],
      useCase: "Decoupling microservices, async processing, AWS-based apps",
      code: `// Send message
const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs');
const client = new SQSClient({ region: 'us-east-1' });

await client.send(new SendMessageCommand({
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123/my-queue',
  MessageBody: JSON.stringify({ userId: 123, action: 'process' })
}));

// Receive messages
const { ReceiveMessageCommand, DeleteMessageCommand } = require('@aws-sdk/client-sqs');
const { Messages } = await client.send(new ReceiveMessageCommand({
  QueueUrl: queueUrl,
  MaxNumberOfMessages: 10,
  WaitTimeSeconds: 20 // Long polling
}));

// Process and delete
for (const message of Messages) {
  await processMessage(message);
  await client.send(new DeleteMessageCommand({
    QueueUrl: queueUrl,
    ReceiptHandle: message.ReceiptHandle
  }));
}`
    },
    {
      name: "Redis Pub/Sub",
      icon: "⚡",
      type: "In-Memory Messaging",
      features: ["Ultra fast", "Simple API", "Multiple subscribers", "Pattern matching"],
      pros: ["Very low latency", "Simple to use", "Already using Redis", "Good for real-time"],
      cons: ["No persistence", "Fire and forget", "No replay", "Not for task queues"],
      useCase: "Real-time notifications, chat, live updates, pub-sub patterns",
      code: `// Publisher
const redis = require('redis');
const publisher = redis.createClient();

await publisher.connect();
await publisher.publish('notifications', JSON.stringify({
  userId: 123,
  message: 'New order received'
}));

// Subscriber
const subscriber = redis.createClient();
await subscriber.connect();

await subscriber.subscribe('notifications', (message) => {
  const notification = JSON.parse(message);
  console.log('Received:', notification);
});`
    }
  ];

  const patterns = [
    {
      pattern: "Task Queue",
      icon: "📬",
      desc: "Distribute tasks to workers for processing",
      flow: "Producer → Queue → Worker(s) → Complete",
      example: "Send emails, resize images, generate reports",
      benefits: ["Load balancing", "Fault tolerance", "Rate limiting"]
    },
    {
      pattern: "Pub/Sub",
      icon: "📡",
      desc: "One publisher, many subscribers get the same message",
      flow: "Publisher → Topic → Subscriber 1, 2, 3...",
      example: "Notification system, event broadcasting, live updates",
      benefits: ["Decoupling", "Fan-out", "Real-time distribution"]
    },
    {
      pattern: "Request-Reply",
      icon: "↔️",
      desc: "Send request, wait for response via queue",
      flow: "Client → Request Queue → Server → Reply Queue → Client",
      example: "RPC over message queue, async API calls",
      benefits: ["Async processing", "Load balancing", "Resilience"]
    },
    {
      pattern: "Event Streaming",
      icon: "🌊",
      desc: "Continuous flow of events, consumers can replay",
      flow: "Events → Stream (Kafka) → Consumer(s) with offsets",
      example: "User activity logs, CDC, real-time analytics",
      benefits: ["Event replay", "Multiple consumers", "Time travel"]
    }
  ];

  const considerations = [
    {
      aspect: "Message Ordering",
      desc: "Guarantee messages processed in order",
      solutions: ["Single consumer per partition", "FIFO queues (SQS)", "Kafka partitions"]
    },
    {
      aspect: "At-Least-Once Delivery",
      desc: "Message delivered one or more times",
      solutions: ["Idempotent operations", "Deduplication logic", "Message IDs"]
    },
    {
      aspect: "Exactly-Once Processing",
      desc: "Message processed exactly once (hard!)",
      solutions: ["Kafka transactions", "Database transactions", "Idempotency keys"]
    },
    {
      aspect: "Dead Letter Queues",
      desc: "Handle failed messages after retries",
      solutions: ["Separate DLQ", "Monitor & alert", "Manual intervention"]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
          <span className="text-4xl">📬</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Message Queues
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            RabbitMQ, Kafka, SQS, and async communication patterns
          </p>
        </div>
      </div>

      {/* Why Message Queues */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-purple-600">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            🎯 Why Use Message Queues?
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Decoupling", desc: "Services independent", icon: "🔗" },
              { label: "Async Processing", desc: "Fast API responses", icon: "⚡" },
              { label: "Load Leveling", desc: "Handle traffic spikes", icon: "📊" },
              { label: "Reliability", desc: "Guaranteed delivery", icon: "✅" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-purple-900 dark:text-purple-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Message Queues */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🛠️ Popular Message Queue Systems
        </h3>
        <div className="space-y-6">
          {messageQueues.map((mq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{mq.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-2xl font-bold text-purple-900 dark:text-purple-100">{mq.name}</h4>
                    <span className="text-xs bg-purple-200 dark:bg-purple-800 px-3 py-1 rounded-full">{mq.type}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2">Features:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {mq.features.map((feature, i) => (
                          <span key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div>
                          <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">Pros:</p>
                          <ul className="text-xs space-y-1">
                            {mq.pros.slice(0, 2).map((pro, i) => (
                              <li key={i}>✓ {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1">Cons:</p>
                          <ul className="text-xs space-y-1">
                            {mq.cons.slice(0, 2).map((con, i) => (
                              <li key={i}>⚠ {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mb-4">
                    <p className="text-xs"><strong>Best for:</strong> {mq.useCase}</p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{mq.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Messaging Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎨 Messaging Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {patterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{pattern.icon}</span>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">{pattern.pattern}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pattern.desc}</p>

              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg mb-3">
                <p className="text-xs font-mono text-center">{pattern.flow}</p>
              </div>

              <div className="mb-3">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">Example:</p>
                <p className="text-xs bg-blue-100 dark:bg-blue-900/30 p-2 rounded">{pattern.example}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">Benefits:</p>
                <div className="flex flex-wrap gap-1">
                  {pattern.benefits.map((benefit, i) => (
                    <span key={i} className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                      ✓ {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Important Considerations */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚠️ Important Considerations
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {considerations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.aspect}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.desc}</p>
              <div>
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">Solutions:</p>
                <ul className="space-y-1">
                  {item.solutions.map((solution, i) => (
                    <li key={i} className="text-xs flex items-start gap-1">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Use RabbitMQ for task queues and traditional messaging, Kafka for event streaming</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Message queues enable async processing - API responds immediately, work happens in background</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Handle at-least-once delivery with idempotent operations to prevent duplicate processing</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Always implement dead letter queues to handle failed messages gracefully</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
