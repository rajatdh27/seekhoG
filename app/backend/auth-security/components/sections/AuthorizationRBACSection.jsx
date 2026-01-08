"use client";
import { motion } from "framer-motion";

export default function AuthorizationRBACSection() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
          <span className="text-4xl">👮</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Authorization & RBAC
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Role-Based Access Control and permissions
          </p>
        </div>
      </div>

      {/* What is Authorization */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-indigo-600">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-4">
            🎯 Authentication vs Authorization
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">🔐 Authentication</h4>
              <p className="text-sm text-indigo-900 dark:text-indigo-100">
                <strong>Who are you?</strong> Verifying identity (login, JWT, OAuth)
              </p>
            </div>
            <div>
              <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">👮 Authorization</h4>
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>What can you do?</strong> Checking permissions (roles, access control)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RBAC Model */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🏗️ Role-Based Access Control (RBAC)
        </h3>
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border-2 border-indigo-300 dark:border-indigo-700 mb-6">
          <p className="text-lg text-indigo-900 dark:text-indigo-100 mb-4">
            <strong>RBAC</strong> assigns permissions to roles, then assigns roles to users.
            Users inherit all permissions from their roles.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <code className="text-sm">User → Roles → Permissions → Resources</code>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              role: "Admin",
              icon: "👑",
              permissions: ["Create users", "Delete users", "Manage roles", "Full access"],
              color: "red"
            },
            {
              role: "Editor",
              icon: "✏️",
              permissions: ["Create posts", "Edit posts", "Publish posts", "View analytics"],
              color: "blue"
            },
            {
              role: "Viewer",
              icon: "👁️",
              permissions: ["View posts", "Read comments", "View profile", "Download content"],
              color: "green"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 dark:from-${item.color}-900/20 dark:to-${item.color}-800/20 p-5 rounded-xl border-2 border-${item.color}-300 dark:border-${item.color}-700`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <h4 className={`text-xl font-bold text-${item.color}-900 dark:text-${item.color}-100`}>
                  {item.role}
                </h4>
              </div>
              <ul className="space-y-2 text-sm">
                {item.permissions.map((perm, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`text-${item.color}-500 mt-0.5`}>✓</span>
                    <span>{perm}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Example */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          💻 RBAC Implementation
        </h3>
        <div className="bg-slate-900 p-6 rounded-xl">
          <pre className="text-sm font-mono text-green-400 overflow-auto whitespace-pre">
{`// Middleware to check permissions
function requirePermission(permission) {
  return (req, res, next) => {
    const user = req.user; // From auth middleware

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Check if user's roles have the permission
    const hasPermission = user.roles.some(role =>
      role.permissions.includes(permission)
    );

    if (!hasPermission) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}

// Protected routes
app.delete('/users/:id',
  authenticateJWT,
  requirePermission('delete:users'),
  (req, res) => {
    // Only admins can delete users
  }
);

app.post('/posts',
  authenticateJWT,
  requirePermission('create:posts'),
  (req, res) => {
    // Editors and Admins can create posts
  }
);`}
          </pre>
        </div>
      </div>

      {/* Access Control Models */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🔐 Access Control Models
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              model: "RBAC",
              desc: "Role-Based Access Control",
              example: "User has 'Editor' role → can edit posts",
              useCase: "Most common, good for most apps"
            },
            {
              model: "ABAC",
              desc: "Attribute-Based Access Control",
              example: "Check user.department === 'Sales' && resource.region === 'US'",
              useCase: "Complex rules, dynamic permissions"
            },
            {
              model: "ACL",
              desc: "Access Control Lists",
              example: "Document has list: [user1: read, user2: write]",
              useCase: "Fine-grained per-resource control"
            },
            {
              model: "PBAC",
              desc: "Policy-Based Access Control",
              example: "If time between 9-5 AND user.verified THEN allow",
              useCase: "Context-aware, conditional access"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800"
            >
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">{item.model}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.desc}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 p-2 rounded mb-2">
                <code className="text-xs">{item.example}</code>
              </div>
              <p className="text-xs text-indigo-700 dark:text-indigo-400">
                <strong>Best for:</strong> {item.useCase}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
        <h3 className="text-xl font-semibold mb-4 text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
          <span>💡</span> Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Authorization determines what authenticated users can do</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>RBAC assigns permissions to roles, then roles to users</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
            <span>Always check authorization on the server-side, never trust client</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
