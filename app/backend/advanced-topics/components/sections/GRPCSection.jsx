"use client";
import { motion } from "framer-motion";

export default function GRPCSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">⚡</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            gRPC
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Protocol Buffers, Streaming, and Service mesh
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">⚡ What is gRPC?</h3>
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
          <strong>gRPC</strong> (gRPC Remote Procedure Calls) is a high-performance, open-source RPC framework developed by Google that uses HTTP/2 and Protocol Buffers.
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          It enables efficient communication between microservices with strongly-typed contracts, automatic code generation, and support for streaming.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
          <div className="text-3xl mb-3">🚀</div>
          <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">Fast</h4>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            HTTP/2, binary format, efficient serialization
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <div className="text-3xl mb-3">📡</div>
          <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Streaming</h4>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            Unary, server, client, and bidirectional streaming
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
          <div className="text-3xl mb-3">🔧</div>
          <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">Code Gen</h4>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            Automatic client and server code generation
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
          <div className="text-3xl mb-3">🌐</div>
          <h4 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-2">Cross-platform</h4>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            Support for 10+ languages
          </p>
        </div>
      </div>

      {/* Protocol Buffers */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">📦 Protocol Buffers (.proto file)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`syntax = "proto3";

package user;

// Service definition
service UserService {
  // Unary RPC
  rpc GetUser (GetUserRequest) returns (User);

  // Server streaming RPC
  rpc ListUsers (ListUsersRequest) returns (stream User);

  // Client streaming RPC
  rpc CreateUsers (stream CreateUserRequest) returns (CreateUsersResponse);

  // Bidirectional streaming RPC
  rpc Chat (stream ChatMessage) returns (stream ChatMessage);
}

// Message definitions
message User {
  string id = 1;
  string name = 2;
  string email = 3;
  int32 age = 4;
  repeated string roles = 5;  // Array
  Address address = 6;         // Nested message
  google.protobuf.Timestamp created_at = 7;
}

message Address {
  string street = 1;
  string city = 2;
  string country = 3;
  string zip_code = 4;
}

message GetUserRequest {
  string id = 1;
}

message ListUsersRequest {
  int32 page_size = 1;
  string page_token = 2;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
  int32 age = 3;
}

message CreateUsersResponse {
  int32 count = 1;
  repeated string ids = 2;
}

message ChatMessage {
  string user_id = 1;
  string text = 2;
  google.protobuf.Timestamp timestamp = 3;
}`}
        </pre>
      </div>

      {/* Node.js Server Implementation */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">🟢 gRPC Server (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

// Load proto file
const packageDefinition = protoLoader.loadSync('user.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Implement service methods
const userService = {
  // Unary RPC
  getUser: async (call, callback) => {
    const { id } = call.request;

    try {
      const user = await db.user.findUnique({ where: { id } });

      if (!user) {
        return callback({
          code: grpc.status.NOT_FOUND,
          message: 'User not found'
        });
      }

      callback(null, user);
    } catch (error) {
      callback({
        code: grpc.status.INTERNAL,
        message: error.message
      });
    }
  },

  // Server streaming RPC
  listUsers: async (call) => {
    const { page_size, page_token } = call.request;

    try {
      const users = await db.user.findMany({
        take: page_size,
        skip: parseInt(page_token) || 0
      });

      // Stream each user to the client
      for (const user of users) {
        call.write(user);
      }

      call.end();
    } catch (error) {
      call.destroy(error);
    }
  },

  // Client streaming RPC
  createUsers: (call, callback) => {
    const users = [];

    call.on('data', (request) => {
      users.push(request);
    });

    call.on('end', async () => {
      try {
        const created = await db.user.createMany({
          data: users
        });

        callback(null, {
          count: created.count,
          ids: users.map(u => u.id)
        });
      } catch (error) {
        callback(error);
      }
    });
  },

  // Bidirectional streaming RPC
  chat: (call) => {
    call.on('data', (message) => {
      console.log('Received:', message);

      // Echo back or broadcast to other clients
      call.write({
        user_id: 'server',
        text: \`Echo: \${message.text}\`,
        timestamp: new Date()
      });
    });

    call.on('end', () => {
      call.end();
    });
  }
};

// Create and start server
const server = new grpc.Server();

server.addService(userProto.UserService.service, userService);

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(\`gRPC server running on port \${port}\`);
    server.start();
  }
);`}
        </pre>
      </div>

      {/* Node.js Client Implementation */}
      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h4 className="text-xl font-bold text-white mb-4">💻 gRPC Client (Node.js)</h4>
        <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('user.proto');
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

// Create client
const client = new userProto.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Unary call
client.getUser({ id: '123' }, (error, user) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('User:', user);
});

// Server streaming
const listCall = client.listUsers({ page_size: 10 });

listCall.on('data', (user) => {
  console.log('Received user:', user);
});

listCall.on('end', () => {
  console.log('Stream ended');
});

listCall.on('error', (error) => {
  console.error('Stream error:', error);
});

// Client streaming
const createCall = client.createUsers((error, response) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Created users:', response);
});

createCall.write({ name: 'Alice', email: 'alice@example.com' });
createCall.write({ name: 'Bob', email: 'bob@example.com' });
createCall.end();

// Bidirectional streaming
const chatCall = client.chat();

chatCall.on('data', (message) => {
  console.log('Received:', message);
});

chatCall.write({ user_id: '1', text: 'Hello' });
chatCall.write({ user_id: '1', text: 'How are you?' });

setTimeout(() => {
  chatCall.end();
}, 5000);`}
        </pre>
      </div>

      {/* gRPC vs REST */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
          <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">✅ When to Use gRPC</h4>
          <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <li>✓ Microservices communication</li>
            <li>✓ Real-time streaming required</li>
            <li>✓ Performance-critical applications</li>
            <li>✓ Polyglot environments (multiple languages)</li>
            <li>✓ Internal APIs (server-to-server)</li>
            <li>✓ Low latency requirements</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
          <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">⚠️ When NOT to Use gRPC</h4>
          <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <li>✗ Browser clients (limited support)</li>
            <li>✗ Public-facing APIs</li>
            <li>✗ Need human-readable format</li>
            <li>✗ Simple CRUD operations</li>
            <li>✗ Third-party integrations</li>
            <li>✗ Team unfamiliar with Protocol Buffers</li>
          </ul>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ gRPC Best Practices</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ DO</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Use streaming for large datasets</li>
                <li>Implement proper error handling</li>
                <li>Add deadlines/timeouts</li>
                <li>Use interceptors for cross-cutting concerns</li>
                <li>Version your .proto files</li>
                <li>Implement health checks</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
              <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ DON'T</h5>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Break backward compatibility</li>
                <li>Use gRPC for browser-facing APIs</li>
                <li>Forget to handle stream errors</li>
                <li>Ignore connection management</li>
                <li>Skip load balancing setup</li>
                <li>Use reserved field numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
