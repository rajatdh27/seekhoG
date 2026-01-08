"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GraphQLSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "schema", label: "Schema", icon: "📐" },
    { id: "resolvers", label: "Resolvers", icon: "🔧" },
    { id: "queries-mutations", label: "Queries & Mutations", icon: "🔄" },
    { id: "best-practices", label: "Best Practices", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl">
          <span className="text-4xl">📊</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            GraphQL
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Schema, Resolvers, Apollo, and Federation
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg scale-105"
                  : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">📊 What is GraphQL?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>GraphQL</strong> is a query language for APIs and a runtime for executing those queries. It provides a complete and understandable description of the data in your API.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Developed by Facebook (now Meta), GraphQL lets clients request exactly the data they need, making APIs more flexible and efficient than traditional REST.
              </p>
            </div>

            {/* GraphQL vs REST */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">🌐 REST API</h4>
                <pre className="text-xs font-mono bg-slate-900 text-blue-400 p-4 rounded-lg overflow-auto mb-3">
{`GET /users/1
{
  "id": 1,
  "name": "John",
  "email": "john@example.com",
  "address": {...},
  "posts": {...}
}

GET /users/1/posts
GET /users/1/friends
// Multiple endpoints, over-fetching`}
                </pre>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  <li>❌ Multiple round trips</li>
                  <li>❌ Over-fetching or under-fetching</li>
                  <li>❌ Versioning required</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-xl border-2 border-pink-200 dark:border-pink-700">
                <h4 className="text-xl font-bold text-pink-900 dark:text-pink-100 mb-4">📊 GraphQL</h4>
                <pre className="text-xs font-mono bg-slate-900 text-pink-400 p-4 rounded-lg overflow-auto mb-3">
{`POST /graphql
{
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}
// One endpoint, exact data`}
                </pre>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  <li>✅ Single request for all data</li>
                  <li>✅ Get exactly what you need</li>
                  <li>✅ No versioning needed</li>
                </ul>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">No Over-fetching</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Request only the fields you need, reducing payload size and bandwidth
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">Single Request</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Fetch related data in one query instead of multiple REST endpoints
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-4">📖</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">Self-documenting</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Type system provides automatic API documentation and validation
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "schema" && (
          <motion.div
            key="schema"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">📐 GraphQL Schema</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                The schema defines the structure of your API, including types, queries, mutations, and their relationships.
              </p>
            </div>

            {/* Schema Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">📐 Schema Definition Language (SDL)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Define types
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  posts: [Post!]!
  createdAt: DateTime!
}

type Post {
  id: ID!
  title: String!
  content: String!
  published: Boolean!
  author: User!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  text: String!
  author: User!
  post: Post!
}

# Root Query type
type Query {
  # Get a single user by ID
  user(id: ID!): User

  # Get all users with optional filtering
  users(
    limit: Int
    offset: Int
    orderBy: UserOrderBy
  ): [User!]!

  # Get a single post
  post(id: ID!): Post

  # Search posts by title
  searchPosts(query: String!): [Post!]!
}

# Root Mutation type
type Mutation {
  # Create a new user
  createUser(input: CreateUserInput!): User!

  # Update an existing user
  updateUser(id: ID!, input: UpdateUserInput!): User!

  # Delete a user
  deleteUser(id: ID!): Boolean!

  # Create a new post
  createPost(input: CreatePostInput!): Post!
}

# Input types for mutations
input CreateUserInput {
  name: String!
  email: String!
  age: Int
}

input UpdateUserInput {
  name: String
  email: String
  age: Int
}

input CreatePostInput {
  title: String!
  content: String!
  authorId: ID!
}

# Enums
enum UserOrderBy {
  NAME_ASC
  NAME_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
}

# Custom scalars
scalar DateTime`}
              </pre>
            </div>

            {/* Scalar Types */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📦 Built-in Scalar Types</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm font-mono text-pink-600 dark:text-pink-400">Int</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Signed 32-bit integer</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm font-mono text-pink-600 dark:text-pink-400">Float</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Signed double-precision floating-point value</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm font-mono text-pink-600 dark:text-pink-400">String</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">UTF-8 character sequence</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm font-mono text-pink-600 dark:text-pink-400">Boolean</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">true or false</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm font-mono text-pink-600 dark:text-pink-400">ID</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Unique identifier (serialized as String)</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <code className="text-sm font-mono text-pink-600 dark:text-pink-400">!</code>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Non-null modifier (required field)</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "resolvers" && (
          <motion.div
            key="resolvers"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">🔧 Resolvers</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Resolvers are functions that return data for fields in your schema. They connect your schema to your data sources.
              </p>
            </div>

            {/* Resolver Example */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🔧 Resolver Implementation (Node.js)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import { GraphQLResolveInfo } from 'graphql';

// Resolver function signature
// resolver(parent, args, context, info)

const resolvers = {
  // Query resolvers
  Query: {
    // Get single user
    user: async (parent, { id }, context, info) => {
      return await context.db.user.findUnique({
        where: { id }
      });
    },

    // Get all users with filtering
    users: async (parent, { limit = 10, offset = 0, orderBy }, context) => {
      return await context.db.user.findMany({
        take: limit,
        skip: offset,
        orderBy: orderBy ? { [orderBy]: 'asc' } : undefined
      });
    },

    // Search posts
    searchPosts: async (parent, { query }, context) => {
      return await context.db.post.findMany({
        where: {
          OR: [
            { title: { contains: query } },
            { content: { contains: query } }
          ]
        }
      });
    }
  },

  // Mutation resolvers
  Mutation: {
    createUser: async (parent, { input }, context) => {
      // Authentication check
      if (!context.user) {
        throw new Error('Not authenticated');
      }

      // Validate input
      if (!input.email.includes('@')) {
        throw new Error('Invalid email');
      }

      // Create user
      return await context.db.user.create({
        data: input
      });
    },

    updateUser: async (parent, { id, input }, context) => {
      // Authorization check
      if (context.user.id !== id && !context.user.isAdmin) {
        throw new Error('Not authorized');
      }

      return await context.db.user.update({
        where: { id },
        data: input
      });
    },

    deleteUser: async (parent, { id }, context) => {
      await context.db.user.delete({ where: { id } });
      return true;
    }
  },

  // Type resolvers (field-level)
  User: {
    // Resolve posts for a user
    posts: async (parent, args, context) => {
      return await context.db.post.findMany({
        where: { authorId: parent.id }
      });
    },

    // Computed field
    fullName: (parent) => {
      return \`\${parent.firstName} \${parent.lastName}\`;
    }
  },

  Post: {
    // Resolve author for a post
    author: async (parent, args, context) => {
      return await context.db.user.findUnique({
        where: { id: parent.authorId }
      });
    },

    // Resolve comments
    comments: async (parent, args, context) => {
      return await context.db.comment.findMany({
        where: { postId: parent.id }
      });
    }
  }
};

export default resolvers;`}
              </pre>
            </div>

            {/* Resolver Arguments */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">📚 Resolver Arguments</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">1. parent</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    The result of the parent resolver (useful for nested fields)
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">2. args</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    The arguments passed to the field in the query
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">3. context</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Shared object across all resolvers (DB connection, user auth, etc.)
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-orange-700 dark:text-orange-400 mb-2">4. info</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Information about the query itself (field name, path, schema)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "queries-mutations" && (
          <motion.div
            key="queries-mutations"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">🔄 Queries & Mutations</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Queries fetch data (read operations) while Mutations modify data (write operations).
              </p>
            </div>

            {/* Query Examples */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🔍 Query Examples</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Basic query
query GetUser {
  user(id: "1") {
    id
    name
    email
  }
}

# Query with variables
query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}

# Nested query
query GetUserWithPosts {
  user(id: "1") {
    id
    name
    posts {
      id
      title
      comments {
        id
        text
        author {
          name
        }
      }
    }
  }
}

# Multiple queries in one request
query GetMultiple {
  user1: user(id: "1") {
    name
  }
  user2: user(id: "2") {
    name
  }
  recentPosts: posts(limit: 5) {
    title
  }
}

# Query with fragments
query GetUsers {
  user1: user(id: "1") {
    ...UserFields
  }
  user2: user(id: "2") {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  name
  email
  posts {
    title
  }
}`}
              </pre>
            </div>

            {/* Mutation Examples */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">✏️ Mutation Examples</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# Create a user
mutation CreateUser {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    age: 30
  }) {
    id
    name
    email
  }
}

# Update a user
mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
  }
}

# Delete a user
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id)
}

# Create a post and return author data
mutation CreatePost {
  createPost(input: {
    title: "My First Post"
    content: "This is the content"
    authorId: "1"
  }) {
    id
    title
    author {
      id
      name
    }
  }
}

# Multiple mutations (executed sequentially)
mutation CreateUserAndPost {
  newUser: createUser(input: {
    name: "Jane"
    email: "jane@example.com"
  }) {
    id
  }
  newPost: createPost(input: {
    title: "Jane's Post"
    content: "Hello World"
    authorId: "2"
  }) {
    id
  }
}`}
              </pre>
            </div>
          </motion.div>
        )}

        {activeTab === "best-practices" && (
          <motion.div
            key="best-practices"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl border-l-4 border-pink-600 mb-8">
              <h3 className="text-2xl font-bold text-pink-900 dark:text-pink-100 mb-4">⭐ GraphQL Best Practices</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Follow these best practices to build efficient, maintainable GraphQL APIs.
              </p>
            </div>

            {/* DO vs DON'T */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-700 dark:text-green-400 flex items-center gap-2">
                  <span>✅</span> DO
                </h4>
                <div className="space-y-3">
                  {[
                    "Use DataLoader to batch and cache database queries",
                    "Implement pagination (cursor-based preferred)",
                    "Add depth limiting to prevent malicious queries",
                    "Use query complexity analysis",
                    "Implement proper error handling with codes",
                    "Version your schema with @deprecated",
                    "Add authentication and authorization",
                    "Use input validation"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-700 dark:text-red-400 flex items-center gap-2">
                  <span>❌</span> DON'T
                </h4>
                <div className="space-y-3">
                  {[
                    "Allow unlimited query depth (DoS risk)",
                    "Expose internal implementation details",
                    "Use REST naming (getUser, updateUser)",
                    "Return null without proper nullable types",
                    "Forget about the N+1 query problem",
                    "Skip input validation on mutations",
                    "Ignore query cost and complexity",
                    "Make all fields nullable by default"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DataLoader Example */}
            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">🔁 DataLoader (Solving N+1 Problem)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import DataLoader from 'dataloader';

// Create a DataLoader for batching user queries
const userLoader = new DataLoader(async (userIds) => {
  // Batch load users by IDs
  const users = await db.user.findMany({
    where: { id: { in: userIds } }
  });

  // Return users in the same order as requested IDs
  const userMap = new Map(users.map(user => [user.id, user]));
  return userIds.map(id => userMap.get(id));
});

// Use in resolver
const resolvers = {
  Post: {
    author: async (parent, args, context) => {
      // Instead of querying DB for each post
      // DataLoader batches all requests
      return context.loaders.user.load(parent.authorId);
    }
  }
};

// Without DataLoader: N+1 queries
// Query 1: Get 10 posts
// Query 2-11: Get author for each post (10 queries!)

// With DataLoader: 2 queries
// Query 1: Get 10 posts
// Query 2: Get all authors in one batch query`}
              </pre>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
