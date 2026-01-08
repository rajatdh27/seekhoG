"use client";
import { motion } from "framer-motion";

export default function AlertingSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl">
          <span className="text-4xl">🚨</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Alerting
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Alert rules, on-call, and incident response
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-8 rounded-xl border-l-4 border-yellow-600 mb-8">
        <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-4">🚨 What is Alerting?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>Alerting</strong> is the practice of automatically notifying team members when metrics cross thresholds or errors occur, enabling quick response to issues.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          Effective alerting balances being informed about problems without causing alert fatigue from too many notifications.
        </p>
      </div>

      {/* Alert Types */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
          <div className="text-4xl mb-4">🔥</div>
          <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">Critical</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Immediate attention required - page on-call engineer
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Service is down</li>
            <li>• Data loss occurring</li>
            <li>• High error rates</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-700">
          <div className="text-4xl mb-4">⚠️</div>
          <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">Warning</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            Needs attention but not urgent - notify during business hours
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• High memory usage</li>
            <li>• Slow response times</li>
            <li>• Elevated error rates</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-4xl mb-4">ℹ️</div>
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Info</h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
            FYI notifications - no immediate action needed
          </p>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <li>• Deploy completed</li>
            <li>• Backup finished</li>
            <li>• Unusual patterns</li>
          </ul>
        </div>
      </div>

      {/* Prometheus Alertmanager */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🔥 Prometheus Alert Rules</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# prometheus-rules.yml
groups:
  - name: api_alerts
    interval: 30s
    rules:
      # High error rate alert
      - alert: HighErrorRate
        expr: |
          (
            sum(rate(http_requests_total{status_code=~"5.."}[5m]))
            /
            sum(rate(http_requests_total[5m]))
          ) > 0.05
        for: 5m
        labels:
          severity: critical
          team: backend
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value | humanizePercentage }} (threshold: 5%)"

      # High latency alert
      - alert: HighLatency
        expr: |
          histogram_quantile(0.95,
            rate(http_request_duration_seconds_bucket[5m])
          ) > 2
        for: 10m
        labels:
          severity: warning
          team: backend
        annotations:
          summary: "High latency on {{ $labels.route }}"
          description: "P95 latency is {{ $value }}s (threshold: 2s)"

      # Service down
      - alert: ServiceDown
        expr: up{job="api-server"} == 0
        for: 1m
        labels:
          severity: critical
          team: platform
        annotations:
          summary: "Service {{ $labels.instance }} is down"
          description: "Instance {{ $labels.instance }} has been down for 1 minute"

      # High memory usage
      - alert: HighMemoryUsage
        expr: |
          (
            node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
          ) / node_memory_MemTotal_bytes > 0.9
        for: 5m
        labels:
          severity: warning
          team: platform
        annotations:
          summary: "High memory usage on {{ $labels.instance }}"
          description: "Memory usage is {{ $value | humanizePercentage }} (threshold: 90%)"

      # Disk space low
      - alert: DiskSpaceLow
        expr: |
          (
            node_filesystem_avail_bytes{mountpoint="/"}
            /
            node_filesystem_size_bytes{mountpoint="/"}
          ) < 0.1
        for: 5m
        labels:
          severity: warning
          team: platform
        annotations:
          summary: "Low disk space on {{ $labels.instance }}"
          description: "Only {{ $value | humanizePercentage }} disk space remaining"`}
        </pre>
      </div>

      {/* Alertmanager Configuration */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📬 Alertmanager Configuration</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# alertmanager.yml
global:
  resolve_timeout: 5m
  slack_api_url: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL'

# Route alerts to different receivers based on labels
route:
  receiver: 'default'
  group_by: ['alertname', 'cluster']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 12h

  routes:
    # Critical alerts go to PagerDuty
    - match:
        severity: critical
      receiver: pagerduty
      continue: true

    # Warning alerts go to Slack during business hours
    - match:
        severity: warning
      receiver: slack
      active_time_intervals:
        - business_hours

    # Info alerts only to email
    - match:
        severity: info
      receiver: email

# Define notification channels
receivers:
  - name: 'default'
    slack_configs:
      - channel: '#alerts'
        text: '{{ range .Alerts }}{{ .Annotations.summary }}{{ end }}'

  - name: 'pagerduty'
    pagerduty_configs:
      - service_key: 'YOUR_PAGERDUTY_KEY'
        description: '{{ .CommonAnnotations.summary }}'

  - name: 'slack'
    slack_configs:
      - channel: '#backend-alerts'
        title: '{{ .GroupLabels.alertname }}'
        text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'
        color: '{{ if eq .Status "firing" }}danger{{ else }}good{{ end }}'

  - name: 'email'
    email_configs:
      - to: 'team@example.com'
        from: 'alerts@example.com'
        smarthost: 'smtp.gmail.com:587'
        auth_username: 'alerts@example.com'
        auth_password: 'password'

# Define time intervals
time_intervals:
  - name: business_hours
    time_intervals:
      - times:
          - start_time: '09:00'
            end_time: '17:00'
        weekdays: ['monday:friday']`}
        </pre>
      </div>

      {/* On-Call Best Practices */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">📱 On-Call Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-3">🔄 Rotation</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>• Weekly rotation schedule</li>
              <li>• Primary and secondary on-call</li>
              <li>• Clear handoff procedures</li>
              <li>• Escalation policies</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-3">📚 Documentation</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>• Runbooks for common issues</li>
              <li>• Architecture diagrams</li>
              <li>• Debugging guides</li>
              <li>• Contact information</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-3">⚡ Response</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>• Acknowledge within 5 minutes</li>
              <li>• Update incident channel</li>
              <li>• Escalate if needed</li>
              <li>• Post-mortem after resolution</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-3">🛠️ Tools</h5>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>• PagerDuty / Opsgenie</li>
              <li>• Slack for communication</li>
              <li>• Runbook automation</li>
              <li>• Incident management system</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alert Design Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Alert Design Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-bold text-green-700 dark:text-green-400">✅ DO</h5>
            <div className="space-y-2">
              {[
                "Alert on symptoms, not causes (user impact)",
                "Include actionable information in alerts",
                "Set appropriate thresholds and durations",
                "Use alert grouping to reduce noise",
                "Define clear severity levels",
                "Test alerts regularly",
                "Include runbook links in alerts",
                "Review and tune alerts continuously"
              ].map((item, idx) => (
                <div key={idx} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-red-700 dark:text-red-400">❌ DON'T</h5>
            <div className="space-y-2">
              {[
                "Alert on every single error",
                "Set thresholds too sensitive (alert fatigue)",
                "Send all alerts to the same channel",
                "Ignore alerts without investigation",
                "Use vague alert descriptions",
                "Alert without actionable information",
                "Page for non-urgent issues",
                "Forget to update old alerts"
              ].map((item, idx) => (
                <div key={idx} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
