"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function IntegrationTestingSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "api-testing", label: "API Testing", icon: "🌐" },
    { id: "database-testing", label: "Database Testing", icon: "💾" },
    { id: "e2e-testing", label: "E2E Testing", icon: "🔗" },
    { id: "strategies", label: "Strategies", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          <span className="text-4xl">🔗</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Integration Testing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Test how components work together
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
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
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
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🔗 What is Integration Testing?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>Integration testing</strong> verifies that different modules, services, or components work correctly together. It tests the interfaces and interactions between integrated units.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Unlike unit tests that isolate code, integration tests validate end-to-end workflows, database interactions, API communications, and third-party integrations.
              </p>
            </div>

            {/* Types of Integration Testing */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🔼 Big Bang Integration</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  All components integrated simultaneously and tested as whole.
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p><strong>Pros:</strong> Simple approach, works for small systems</p>
                  <p><strong>Cons:</strong> Hard to isolate failures, late integration</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">⬆️ Bottom-Up Integration</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  Start with lowest-level modules, gradually integrate higher levels.
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p><strong>Pros:</strong> Early testing of critical modules</p>
                  <p><strong>Cons:</strong> Need drivers for testing</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">⬇️ Top-Down Integration</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  Start with top-level modules, gradually integrate lower levels.
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p><strong>Pros:</strong> Early UI testing, matches user perspective</p>
                  <p><strong>Cons:</strong> Need stubs for lower modules</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
                <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-4">🎯 Sandwich Integration</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                  Combination of top-down and bottom-up approaches.
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <p><strong>Pros:</strong> Balanced approach, flexible</p>
                  <p><strong>Cons:</strong> More complex to manage</p>
                </div>
              </div>
            </div>

            {/* When to Use Integration Tests */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">📍 When to Write Integration Tests</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Testing database queries and transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Verifying API endpoints and HTTP requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Testing third-party service integrations</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Validating authentication and authorization flows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Testing message queue consumers/producers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Verifying file system operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "api-testing" && (
          <motion.div
            key="api-testing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-xl border-l-4 border-green-600 mb-8">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">🌐 API Integration Testing</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Test HTTP endpoints, request/response handling, and API contracts without mocking external layers.
              </p>
            </div>

            {/* Supertest (Node.js/Express) */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Supertest (Node.js/Express)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// app.js
const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

module.exports = app;

// app.test.js
const request = require('supertest');
const app = require('./app');

describe('User API', () => {
  beforeEach(() => {
    // Reset users before each test
    users = [];
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = { name: 'John Doe', email: 'john@example.com' };

      const response = await request(app)
        .post('/api/users')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /json/);

      expect(response.body).toMatchObject(newUser);
      expect(response.body.id).toBeDefined();
    });

    it('should return 400 for invalid data', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({ name: '' })  // Missing email
        .expect(400);

      expect(response.body.error).toBeDefined();
    });
  });

  describe('GET /api/users', () => {
    it('should return all users', async () => {
      // Create test users
      await request(app).post('/api/users').send({ name: 'User 1', email: 'user1@example.com' });
      await request(app).post('/api/users').send({ name: 'User 2', email: 'user2@example.com' });

      const response = await request(app)
        .get('/api/users')
        .expect(200);

      expect(response.body).toHaveLength(2);
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return user by id', async () => {
      const created = await request(app)
        .post('/api/users')
        .send({ name: 'Test User', email: 'test@example.com' });

      const response = await request(app)
        .get(\`/api/users/\${created.body.id}\`)
        .expect(200);

      expect(response.body.name).toBe('Test User');
    });

    it('should return 404 for non-existent user', async () => {
      await request(app)
        .get('/api/users/99999')
        .expect(404);
    });
  });
});`}
              </pre>
            </div>

            {/* REST Assured (Java) */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">☕ REST Assured (Java)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.*;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserAPITest {

    @BeforeAll
    static void setup() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 8080;
        RestAssured.basePath = "/api";
    }

    @Test
    @Order(1)
    void testGetAllUsers() {
        given()
            .when()
                .get("/users")
            .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("$", hasSize(greaterThanOrEqualTo(0)));
    }

    @Test
    @Order(2)
    void testCreateUser() {
        String requestBody = """
            {
                "name": "John Doe",
                "email": "john@example.com",
                "age": 30
            }
            """;

        given()
            .contentType(ContentType.JSON)
            .body(requestBody)
        .when()
            .post("/users")
        .then()
            .statusCode(201)
            .body("name", equalTo("John Doe"))
            .body("email", equalTo("john@example.com"))
            .body("id", notNullValue());
    }

    @Test
    @Order(3)
    void testGetUserById() {
        // First create a user
        int userId = given()
            .contentType(ContentType.JSON)
            .body("""
                {
                    "name": "Jane Doe",
                    "email": "jane@example.com"
                }
                """)
        .when()
            .post("/users")
        .then()
            .statusCode(201)
            .extract()
            .path("id");

        // Then retrieve it
        given()
        .when()
            .get("/users/" + userId)
        .then()
            .statusCode(200)
            .body("name", equalTo("Jane Doe"))
            .body("email", equalTo("jane@example.com"));
    }

    @Test
    void testUpdateUser() {
        // Create user
        int userId = given()
            .contentType(ContentType.JSON)
            .body("{\\"name\\": \\"Update Test\\", \\"email\\": \\"test@example.com\\"}")
        .when()
            .post("/users")
            .extract().path("id");

        // Update user
        given()
            .contentType(ContentType.JSON)
            .body("{\\"name\\": \\"Updated Name\\", \\"email\\": \\"updated@example.com\\"}")
        .when()
            .put("/users/" + userId)
        .then()
            .statusCode(200)
            .body("name", equalTo("Updated Name"));
    }

    @Test
    void testDeleteUser() {
        // Create user
        int userId = given()
            .contentType(ContentType.JSON)
            .body("{\\"name\\": \\"Delete Test\\", \\"email\\": \\"delete@example.com\\"}")
            .post("/users")
            .extract().path("id");

        // Delete user
        given()
        .when()
            .delete("/users/" + userId)
        .then()
            .statusCode(204);

        // Verify deletion
        given()
        .when()
            .get("/users/" + userId)
        .then()
            .statusCode(404);
    }
}`}
              </pre>
            </div>

            {/* pytest with requests */}
            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">🐍 Pytest with Requests (Python)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import pytest
import requests

BASE_URL = "http://localhost:8000/api"

class TestUserAPI:
    @pytest.fixture(autouse=True)
    def setup(self):
        # Setup runs before each test
        self.base_url = BASE_URL
        # Clear test data if needed
        yield
        # Teardown runs after each test

    def test_create_user(self):
        payload = {
            "name": "John Doe",
            "email": "john@example.com"
        }

        response = requests.post(f"{self.base_url}/users", json=payload)

        assert response.status_code == 201
        data = response.json()
        assert data["name"] == "John Doe"
        assert data["email"] == "john@example.com"
        assert "id" in data

    def test_get_all_users(self):
        response = requests.get(f"{self.base_url}/users")

        assert response.status_code == 200
        users = response.json()
        assert isinstance(users, list)

    def test_get_user_by_id(self):
        # Create a user first
        create_response = requests.post(
            f"{self.base_url}/users",
            json={"name": "Test User", "email": "test@example.com"}
        )
        user_id = create_response.json()["id"]

        # Get the user
        response = requests.get(f"{self.base_url}/users/{user_id}")

        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "Test User"

    def test_update_user(self):
        # Create user
        create_response = requests.post(
            f"{self.base_url}/users",
            json={"name": "Original", "email": "original@example.com"}
        )
        user_id = create_response.json()["id"]

        # Update user
        update_payload = {
            "name": "Updated Name",
            "email": "updated@example.com"
        }
        response = requests.put(
            f"{self.base_url}/users/{user_id}",
            json=update_payload
        )

        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "Updated Name"

    def test_delete_user(self):
        # Create user
        create_response = requests.post(
            f"{self.base_url}/users",
            json={"name": "Delete Me", "email": "delete@example.com"}
        )
        user_id = create_response.json()["id"]

        # Delete user
        response = requests.delete(f"{self.base_url}/users/{user_id}")
        assert response.status_code == 204

        # Verify deletion
        get_response = requests.get(f"{self.base_url}/users/{user_id}")
        assert get_response.status_code == 404

    def test_error_handling(self):
        # Test 404
        response = requests.get(f"{self.base_url}/users/99999")
        assert response.status_code == 404

        # Test 400 - Invalid data
        response = requests.post(
            f"{self.base_url}/users",
            json={"name": ""}  # Invalid - missing email
        )
        assert response.status_code == 400
        assert "error" in response.json()`}
              </pre>
            </div>
          </motion.div>
        )}

        {/* Other tabs would continue with similar comprehensive content */}
        {activeTab === "database-testing" && (
          <div className="text-center py-12 text-slate-600 dark:text-slate-400">
            Database Testing content would include test containers, transaction rollback strategies, and seeding test data...
          </div>
        )}

        {activeTab === "e2e-testing" && (
          <div className="text-center py-12 text-slate-600 dark:text-slate-400">
            E2E Testing content would include Cypress, Playwright, and Selenium examples...
          </div>
        )}

        {activeTab === "strategies" && (
          <div className="text-center py-12 text-slate-600 dark:text-slate-400">
            Integration Testing Strategies would include test data management, environment setup, and CI/CD integration...
          </div>
        )}
      </div>
    </div>
  );
}
