"use client";
import { motion } from "framer-motion";

export default function ScalingSection() {
  const scalingTypes = [
    {
      type: "Vertical Scaling (Scale Up)",
      icon: "⬆️",
      desc: "Add more power to existing server",
      examples: ["More CPU cores", "More RAM", "Faster SSD", "Better network card"],
      pros: ["Simple to implement", "No code changes", "No data consistency issues", "Lower latency"],
      cons: ["Hardware limits", "Expensive at scale", "Single point of failure", "Downtime for upgrades"],
      cost: "$$$",
      when: "Early stage, monolithic apps, databases needing strong consistency"
    },
    {
      type: "Horizontal Scaling (Scale Out)",
      icon: "➡️",
      desc: "Add more servers to distribute load",
      examples: ["Add more web servers", "Deploy more containers", "Add worker nodes", "Shard databases"],
      pros: ["Nearly infinite scalability", "Better fault tolerance", "Cost effective", "No downtime scaling"],
      cons: ["Code complexity", "Data consistency challenges", "Network overhead", "Load balancer needed"],
      cost: "$",
      when: "High traffic, need high availability, modern cloud-native apps"
    }
  ];

  const scalabilityPatterns = [
    {
      pattern: "Stateless Services",
      icon: "🔄",
      desc: "No session data stored on servers",
      implementation: "Store sessions in Redis/DB, not server memory",
      benefit: "Any server can handle any request, easy horizontal scaling",
      code: `// BAD - Stateful
let userSessions = {};  // Stored in server memory

// GOOD - Stateless
await redis.set(\`session:\${sessionId}\`, userData);
const userData = await redis.get(\`session:\${sessionId}\`);`
    },
    {
      pattern: "Database Replication",
      icon: "💾",
      desc: "Master for writes, replicas for reads",
      implementation: "1 master (write), multiple read replicas",
      benefit: "Read scaling, fault tolerance, geographic distribution",
      code: `// Write to master
await masterDB.query('INSERT INTO users...');

// Read from replica
await replicaDB.query('SELECT * FROM users...');`
    },
    {
      pattern: "Database Sharding",
      icon: "🔀",
      desc: "Split data across multiple databases",
      implementation: "Partition by user ID, geography, or feature",
      benefit: "Write scaling, distribute load, isolate failures",
      code: `// Shard by user ID
const shardId = userId % numShards;
const db = dbShards[shardId];
await db.query('SELECT * FROM users WHERE id = ?', userId);`
    },
    {
      pattern: "Microservices",
      icon: "🧩",
      desc: "Split monolith into independent services",
      implementation: "Each service owns its data, scales independently",
      benefit: "Independent scaling, tech flexibility, team autonomy",
      code: `// Each service scales independently
User Service:    10 instances
Order Service:   50 instances  // High load
Payment Service:  5 instances`
    },
    {
      pattern: "Async Processing",
      icon: "⏰",
      desc: "Offload heavy tasks to background workers",
      implementation: "Message queues (RabbitMQ, Kafka, SQS)",
      benefit: "Better response times, scale workers independently",
      code: `// API responds immediately
app.post('/process', async (req, res) => {
  await queue.publish('process-job', req.body);
  res.json({ status: 'queued' });  // Instant response
});

// Worker processes in background
worker.consume('process-job', heavyTask);`
    },
    {
      pattern: "CQRS (Command Query Separation)",
      icon: "🔍",
      desc: "Separate read and write data models",
      implementation: "Write to normalized DB, read from denormalized cache",
      benefit: "Optimize each for its workload, scale independently",
      code: `// Command (Write) - Normalized
await commandDB.insert({ userId, orderId, total });

// Query (Read) - Denormalized cache
const orders = await queryCache.get(\`user:\${userId}:orders\`);`
    }
  ];

  const autoScalingStrategies = [
    {
      strategy: "Target-Based",
      desc: "Scale based on metric targets",
      example: "Keep CPU at 70%",
      metrics: ["CPU utilization", "Memory usage", "Request count", "Response time"]
    },
    {
      strategy: "Schedule-Based",
      desc: "Scale at specific times",
      example: "Add servers 9am-5pm weekdays",
      metrics: ["Time of day", "Day of week", "Seasonal patterns"]
    },
    {
      strategy: "Predictive",
      desc: "ML predicts future load",
      example: "Scale before expected traffic spike",
      metrics: ["Historical patterns", "Trends", "External events"]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl">
          <span className="text-4xl">📈</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Scaling Strategies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Horizontal vs vertical scaling, patterns, and auto-scaling
          </p>
        </div>
      </div>

      {/* Vertical vs Horizontal Scaling */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚔️ Vertical vs Horizontal Scaling
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {scalingTypes.map((scale, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-xl border-2 border-pink-300 dark:border-pink-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl">{scale.icon}</span>
                  <h4 className="text-xl font-bold text-pink-900 dark:text-pink-100">{scale.type}</h4>
                </div>
                <span className="text-2xl font-bold text-pink-700 dark:text-pink-400">{scale.cost}</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{scale.desc}</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-pink-700 dark:text-pink-400 mb-2">Examples:</p>
                <div className="grid grid-cols-2 gap-2">
                  {scale.examples.map((ex, i) => (
                    <div key={i} className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">
                      • {ex}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✅ Pros:</p>
                  <ul className="text-xs space-y-1">
                    {scale.pros.map((pro, i) => (
                      <li key={i}>• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-orange-700 dark:text-orange-400 mb-1">⚠️ Cons:</p>
                  <ul className="text-xs space-y-1">
                    {scale.cons.map((con, i) => (
                      <li key={i}>• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded">
                <p className="text-xs"><strong>When to use:</strong> {scale.when}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scalability Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Scalability Patterns
        </h3>
        <div className="space-y-6">
          {scalabilityPatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-4xl">{pattern.icon}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">{pattern.pattern}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pattern.desc}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">Implementation:</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{pattern.implementation}</p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✓ Benefit:</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{pattern.benefit}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{pattern.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Auto-Scaling */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🤖 Auto-Scaling Strategies
        </h3>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600 mb-6">
          <p className="text-lg text-purple-900 dark:text-purple-100">
            Automatically adjust resources based on demand to optimize cost and performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {autoScalingStrategies.map((strat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{strat.strategy}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{strat.desc}</p>

              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mb-3">
                <p className="text-xs font-semibold text-purple-900 dark:text-purple-100 mb-1">Example:</p>
                <p className="text-xs text-slate-700 dark:text-slate-300">{strat.example}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Key Metrics:</p>
                <ul className="space-y-1">
                  {strat.metrics.map((metric, i) => (
                    <li key={i} className="text-xs flex items-start gap-1">
                      <span className="text-purple-500">•</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AWS Auto-Scaling Example */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ☁️ AWS Auto-Scaling Configuration
        </h3>
        <div className="bg-slate-900 p-6 rounded-xl">
          <pre className="text-sm font-mono text-green-400 overflow-auto whitespace-pre">{`# Auto Scaling Group
resource "aws_autoscaling_group" "web" {
  name                 = "web-asg"
  min_size            = 2    # Minimum instances
  max_size            = 10   # Maximum instances
  desired_capacity    = 4    # Initial instances
  health_check_type   = "ELB"

  # Scale up when CPU > 70%
  target_group_arns   = [aws_lb_target_group.web.arn]
}

# Scale Up Policy
resource "aws_autoscaling_policy" "scale_up" {
  name                   = "scale-up"
  scaling_adjustment     = 2      # Add 2 instances
  adjustment_type        = "ChangeInCapacity"
  cooldown              = 300     # Wait 5 min before next scale
  autoscaling_group_name = aws_autoscaling_group.web.name
}

# CloudWatch Alarm - High CPU
resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "cpu-utilization-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = "120"
  statistic           = "Average"
  threshold           = "70"
  alarm_actions       = [aws_autoscaling_policy.scale_up.arn]
}`}</pre>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Horizontal scaling is preferred for modern cloud apps - design for it from the start</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Make services stateless - store sessions in Redis/DB, not server memory</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Use database replication for read scaling, sharding for write scaling</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
            <span>Implement auto-scaling to automatically adjust resources based on demand</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
