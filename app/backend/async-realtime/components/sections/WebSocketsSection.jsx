"use client";
import { motion } from "framer-motion";

export default function WebSocketsSection() {
  const technologies = [
    {
      name: "Socket.IO",
      icon: "🔌",
      desc: "Real-time bidirectional event-based communication",
      features: ["Auto-reconnection", "Rooms & namespaces", "Fallback to polling", "Binary support"],
      code: `// Server (Node.js)
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join room
  socket.join('room1');

  // Listen for events
  socket.on('chat message', (msg) => {
    // Broadcast to room
    io.to('room1').emit('chat message', {
      user: socket.id,
      message: msg,
      timestamp: Date.now()
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Client
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected!');
});

socket.emit('chat message', 'Hello World!');

socket.on('chat message', (data) => {
  console.log('Received:', data);
});`
    },
    {
      name: "Native WebSockets",
      icon: "🌐",
      desc: "Built-in browser WebSocket API",
      features: ["Lightweight", "Built-in support", "Low overhead", "Binary frames"],
      code: `// Server (Node.js with ws library)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('Welcome to WebSocket server!');
});

// Client
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected!');
  ws.send('Hello Server!');
};

ws.onmessage = (event) => {
  console.log('Received:', event.data);
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

ws.onclose = () => {
  console.log('Disconnected');
};`
    },
    {
      name: "Server-Sent Events (SSE)",
      icon: "📡",
      desc: "One-way server-to-client updates",
      features: ["HTTP-based", "Auto-reconnect", "Simple", "Text-only"],
      code: `// Server
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Send event
  const sendEvent = (data) => {
    res.write(\`data: \${JSON.stringify(data)}\\n\\n\`);
  };

  sendEvent({ message: 'Connected' });

  // Send updates every 5 seconds
  const interval = setInterval(() => {
    sendEvent({
      timestamp: Date.now(),
      data: 'Live update'
    });
  }, 5000);

  req.on('close', () => {
    clearInterval(interval);
  });
});

// Client
const eventSource = new EventSource('/events');

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Update:', data);
};

eventSource.onerror = (error) => {
  console.error('SSE error:', error);
};`
    }
  ];

  const useCases = [
    {
      useCase: "Chat Applications",
      icon: "💬",
      desc: "Real-time messaging between users",
      features: ["Instant delivery", "Read receipts", "Typing indicators", "Presence"],
      tech: "Socket.IO, WebSockets"
    },
    {
      useCase: "Live Notifications",
      icon: "🔔",
      desc: "Push notifications to users",
      features: ["Instant updates", "Unread counts", "Desktop notifications"],
      tech: "SSE, WebSockets"
    },
    {
      useCase: "Collaborative Editing",
      icon: "✏️",
      desc: "Multiple users editing same document",
      features: ["Operational Transform", "Conflict resolution", "Cursor tracking"],
      tech: "WebSockets, CRDT"
    },
    {
      useCase: "Live Dashboards",
      icon: "📊",
      desc: "Real-time data visualization",
      features: ["Live metrics", "Auto-refresh", "Multiple viewers"],
      tech: "SSE, WebSockets"
    },
    {
      useCase: "Multiplayer Games",
      icon: "🎮",
      desc: "Real-time game state sync",
      features: ["Low latency", "State sync", "Player actions"],
      tech: "WebSockets, UDP"
    },
    {
      useCase: "Live Feeds",
      icon: "📰",
      desc: "Social media, stock prices, sports scores",
      features: ["Push updates", "High throughput", "Many subscribers"],
      tech: "SSE, WebSockets"
    }
  ];

  const patterns = [
    {
      pattern: "Broadcasting",
      desc: "Send message to all connected clients",
      code: `// Send to all clients
io.emit('update', data);

// Send to all except sender
socket.broadcast.emit('update', data);`
    },
    {
      pattern: "Rooms",
      desc: "Group clients into rooms/channels",
      code: `// Join room
socket.join('game-room-123');

// Send to room
io.to('game-room-123').emit('game-update', state);

// Leave room
socket.leave('game-room-123');`
    },
    {
      pattern: "Private Messages",
      desc: "Send to specific user",
      code: `// Store socket.id by userId
users.set(userId, socket.id);

// Send to specific user
io.to(users.get(targetUserId)).emit('private', msg);`
    },
    {
      pattern: "Acknowledgments",
      desc: "Confirm message receipt",
      code: `// Server with callback
socket.on('message', (data, callback) => {
  processMessage(data);
  callback({ status: 'received' });
});

// Client
socket.emit('message', data, (response) => {
  console.log('Server acknowledged:', response);
});`
    }
  ];

  const challenges = [
    {
      challenge: "Scaling WebSockets",
      desc: "Handle many concurrent connections",
      solutions: [
        "Use sticky sessions on load balancer",
        "Redis adapter for Socket.IO (pub/sub)",
        "Dedicated WebSocket servers",
        "Connection pooling"
      ]
    },
    {
      challenge: "Connection Management",
      desc: "Handle disconnects and reconnects",
      solutions: [
        "Auto-reconnection logic",
        "Exponential backoff",
        "Heartbeat/ping-pong",
        "Session recovery"
      ]
    },
    {
      challenge: "Message Ordering",
      desc: "Guarantee message delivery order",
      solutions: [
        "Sequence numbers",
        "Message queuing",
        "Acknowledgments",
        "Client-side buffering"
      ]
    },
    {
      challenge: "Security",
      desc: "Authenticate and authorize connections",
      solutions: [
        "JWT in handshake",
        "Cookie-based auth",
        "Rate limiting",
        "Input validation"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
          <span className="text-4xl">🔌</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            WebSockets & Real-time
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Bidirectional communication, Socket.IO, SSE, and real-time patterns
          </p>
        </div>
      </div>

      {/* What are WebSockets */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-600">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
            ⚡ Why WebSockets?
          </h3>
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            Traditional HTTP: Client requests → Server responds (one-way, new connection each time)
          </p>
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            <strong>WebSockets:</strong> Persistent bidirectional connection - server can push updates to client instantly!
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <code className="text-sm">
              Client ←→ Server (persistent connection, real-time both ways)
            </code>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🛠️ Real-time Technologies
        </h3>
        <div className="space-y-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-2 border-indigo-300 dark:border-indigo-700"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-5xl">{tech.icon}</span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">{tech.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{tech.desc}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-indigo-200 dark:bg-indigo-800 px-2 py-1 rounded">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg">
                    <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{tech.code}</pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Common Use Cases
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{uc.icon}</span>
                <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100">{uc.useCase}</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{uc.desc}</p>

              <div className="mb-3">
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">Key Features:</p>
                <ul className="space-y-1">
                  {uc.features.map((feature, i) => (
                    <li key={i} className="text-xs flex items-start gap-1">
                      <span className="text-purple-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-200 dark:bg-purple-800 px-2 py-1 rounded text-xs">
                <strong>Tech:</strong> {uc.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Patterns */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎨 Common Patterns
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {patterns.map((pattern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <div className="p-4 border-b border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">{pattern.pattern}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{pattern.desc}</p>
              </div>
              <div className="bg-slate-900 p-3 rounded-b-xl">
                <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">{pattern.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚠️ Challenges & Solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">{item.challenge}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{item.desc}</p>
              <div>
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-1">Solutions:</p>
                <ul className="space-y-1">
                  {item.solutions.map((solution, i) => (
                    <li key={i} className="text-xs flex items-start gap-1">
                      <span className="text-purple-500 mt-0.5">✓</span>
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
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Use WebSockets for bidirectional real-time (chat, games), SSE for server-to-client only (notifications)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Socket.IO adds auto-reconnection, rooms, and fallbacks - great for production</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Scale WebSockets with sticky sessions and Redis pub/sub for multi-server setups</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Always implement heartbeat mechanism to detect and handle dead connections</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
