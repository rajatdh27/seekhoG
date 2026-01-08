"use client";
import { motion } from "framer-motion";

export default function BackgroundJobsSection() {
  const jobProcessors = [
    {
      name: "Bull (Node.js)",
      icon: "🐂",
      desc: "Redis-based queue for Node.js",
      features: ["Priority queues", "Job scheduling", "Retry logic", "Progress tracking", "Rate limiting"],
      code: `const Queue = require('bull');
const emailQueue = new Queue('email', 'redis://127.0.0.1:6379');

// Add job to queue
await emailQueue.add({
  to: 'user@example.com',
  subject: 'Welcome!',
  body: 'Thanks for signing up'
}, {
  attempts: 3,          // Retry 3 times
  backoff: 5000,        // Wait 5s between retries
  priority: 1,          // Higher priority
  delay: 60000          // Delay 1 minute
});

// Process jobs
emailQueue.process(async (job) => {
  const { to, subject, body } = job.data;
  await sendEmail(to, subject, body);

  // Update progress
  job.progress(50);
  await job.log('Email sent successfully');
  return { sent: true };
});

// Handle events
emailQueue.on('completed', (job, result) => {
  console.log(\`Job \${job.id} completed\`, result);
});

emailQueue.on('failed', (job, err) => {
  console.error(\`Job \${job.id} failed\`, err);
});`
    },
    {
      name: "Celery (Python)",
      icon: "🌿",
      desc: "Distributed task queue for Python",
      features: ["Async tasks", "Scheduled tasks", "Task chains", "Result backend", "Worker pools"],
      code: `from celery import Celery

app = Celery('tasks', broker='redis://localhost:6379')

# Define task
@app.task(bind=True, max_retries=3)
def send_email(self, to, subject, body):
    try:
        # Send email logic
        return {'status': 'sent', 'to': to}
    except Exception as exc:
        # Retry with exponential backoff
        raise self.retry(exc=exc, countdown=60 * (2 ** self.request.retries))

# Queue task
send_email.delay('user@example.com', 'Welcome', 'Hello!')

# Schedule task
from celery.schedules import crontab

@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Run daily at 9am
    sender.add_periodic_task(
        crontab(hour=9, minute=0),
        send_daily_report.s(),
    )

@app.task
def send_daily_report():
    # Generate and send report
    pass`
    },
    {
      name: "Sidekiq (Ruby)",
      icon: "💎",
      desc: "Background processing for Ruby",
      features: ["Multithreaded", "Job scheduling", "Web UI", "Middleware", "Error handling"],
      code: `# Define worker
class EmailWorker
  include Sidekiq::Worker
  sidekiq_options retry: 3, queue: 'default'

  def perform(user_id, email_type)
    user = User.find(user_id)
    EmailService.send(user.email, email_type)
  end
end

# Queue job
EmailWorker.perform_async(123, 'welcome')

# Schedule job
EmailWorker.perform_in(1.hour, 123, 'reminder')
EmailWorker.perform_at(3.days.from_now, 123, 'follow_up')

# Scheduled jobs (cron-like)
class DailyReportWorker
  include Sidekiq::Worker

  def perform
    # Generate report
  end
end

# config/schedule.yml
daily_report:
  cron: "0 9 * * *"  # 9am daily
  class: "DailyReportWorker"`
    }
  ];

  const jobPatterns = [
    {
      pattern: "Fire and Forget",
      icon: "🚀",
      desc: "Queue job, don't wait for result",
      example: "Send welcome email after signup",
      code: `// Add to queue, return immediately
await emailQueue.add({ userId: 123 });
res.json({ status: 'queued' });`
    },
    {
      pattern: "Delayed Jobs",
      icon: "⏰",
      desc: "Execute job after specific delay",
      example: "Send reminder email 24 hours later",
      code: `// Delay 24 hours
await reminderQueue.add({ userId: 123 }, {
  delay: 24 * 60 * 60 * 1000
});`
    },
    {
      pattern: "Scheduled Jobs (Cron)",
      icon: "📅",
      desc: "Run jobs on schedule",
      example: "Daily reports, weekly cleanup, monthly billing",
      code: `// Run every day at 9am
cron.schedule('0 9 * * *', async () => {
  await generateDailyReport();
});

// Every hour
cron.schedule('0 * * * *', cleanupOldLogs);`
    },
    {
      pattern: "Job Chaining",
      icon: "⛓️",
      desc: "Execute jobs in sequence",
      example: "Resize image → Upload to S3 → Update database",
      code: `// Chain jobs
const job1 = await resizeQueue.add({ imageId });
const job2 = await uploadQueue.add({
  imageId,
  waitFor: job1.id
});
await updateQueue.add({
  imageId,
  waitFor: job2.id
});`
    }
  ];

  const retryStrategies = [
    {
      strategy: "Fixed Delay",
      desc: "Retry after fixed time",
      example: "Retry every 30 seconds",
      code: `{
  attempts: 3,
  backoff: {
    type: 'fixed',
    delay: 30000  // 30s
  }
}`
    },
    {
      strategy: "Exponential Backoff",
      desc: "Increase delay exponentially",
      example: "1s, 2s, 4s, 8s, 16s...",
      code: `{
  attempts: 5,
  backoff: {
    type: 'exponential',
    delay: 1000  // Start at 1s
  }
}`
    },
    {
      strategy: "Custom Backoff",
      desc: "Custom retry logic",
      example: "Based on error type",
      code: `{
  attempts: 3,
  backoff: (attemptsMade, err) => {
    if (err.code === 'RATE_LIMIT') {
      return 60000;  // 1 min
    }
    return 5000;  // 5s
  }
}`
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">⏰</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Background Jobs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Async task processing, job scheduling, and worker management
          </p>
        </div>
      </div>

      {/* Why Background Jobs */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            ⚡ Why Background Jobs?
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Fast API Responses", desc: "Don't block requests", icon: "🚀" },
              { label: "Resource Intensive", desc: "Heavy processing", icon: "💪" },
              { label: "Scheduled Tasks", desc: "Run on schedule", icon: "📅" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-blue-900 dark:text-blue-100">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Processors */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🛠️ Popular Job Processors
        </h3>
        <div className="space-y-6">
          {jobProcessors.map((processor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{processor.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">{processor.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{processor.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {processor.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{processor.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎨 Common Job Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {jobPatterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{pattern.icon}</span>
                <h4 className="text-lg font-bold text-indigo-900 dark:text-indigo-100">{pattern.pattern}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{pattern.desc}</p>

              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded mb-3">
                <p className="text-xs"><strong>Example:</strong> {pattern.example}</p>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{pattern.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retry Strategies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔄 Retry Strategies
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {retryStrategies.map((retry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <div className="p-4 border-b border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">{retry.strategy}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{retry.desc}</p>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded">
                  <p className="text-xs">{retry.example}</p>
                </div>
              </div>
              <div className="bg-slate-900 p-3 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{retry.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Best Practices
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { practice: "Make jobs idempotent", why: "Safe to retry without side effects" },
            { practice: "Set timeout limits", why: "Prevent jobs from running forever" },
            { practice: "Monitor job queues", why: "Track queue depth, failures, processing time" },
            { practice: "Use priority queues", why: "Critical jobs processed first" },
            { practice: "Implement dead letter queues", why: "Handle permanently failed jobs" },
            { practice: "Log job progress", why: "Debug issues, track completion" },
            { practice: "Scale workers independently", why: "Add more workers for high load" },
            { practice: "Use job TTL", why: "Auto-expire old jobs to prevent backlog" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <span>✓</span> {item.practice}
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.why}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Use background jobs for time-consuming tasks - API responds immediately, job processes async</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Always implement retry logic with exponential backoff for transient failures</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Make jobs idempotent - safe to run multiple times without duplicating effects</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
            <span>Monitor queue depth and job failures - scale workers when queues grow</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
