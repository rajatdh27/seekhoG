"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function UnitTestingSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: "📋" },
    { id: "jest", label: "Jest", icon: "🃏" },
    { id: "pytest", label: "Pytest", icon: "🐍" },
    { id: "junit", label: "JUnit", icon: "☕" },
    { id: "best-practices", label: "Best Practices", icon: "⭐" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
          <span className="text-4xl">🧪</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Unit Testing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Test individual units of code in isolation
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
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
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
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl border-l-4 border-emerald-600 mb-8">
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">🧪 What is Unit Testing?</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                <strong>Unit testing</strong> is the practice of testing individual units or components of code (functions, methods, classes) in isolation from the rest of the application.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Unit tests verify that each unit of code performs as expected, catching bugs early in the development cycle and providing documentation for how code should behave.
              </p>
            </div>

            {/* Testing Pyramid */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">📐 Testing Pyramid</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded flex items-center justify-center text-white font-bold text-sm">
                    UI Tests
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 dark:text-red-400">E2E Tests (Few)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Slow, expensive, brittle - test critical user journeys</p>
                  </div>
                </div>
                <div className="text-center text-2xl text-emerald-600">↓</div>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded flex items-center justify-center text-white font-bold">
                    Integration
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-700 dark:text-yellow-400">Integration Tests (Some)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Medium speed, test how components work together</p>
                  </div>
                </div>
                <div className="text-center text-2xl text-emerald-600">↓</div>
                <div className="flex items-center gap-4">
                  <div className="w-48 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded flex items-center justify-center text-white font-bold text-lg">
                    Unit Tests
                  </div>
                  <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 dark:text-green-400">Unit Tests (Many)</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Fast, cheap, reliable - test individual units in isolation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AAA Pattern */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">📝 AAA Pattern (Arrange-Act-Assert)</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Good unit test structure
test('should calculate total price with tax', () => {
  // Arrange - Set up test data and dependencies
  const cart = new ShoppingCart();
  cart.addItem({ name: 'Book', price: 10 });
  cart.addItem({ name: 'Pen', price: 2 });
  const taxRate = 0.1;

  // Act - Execute the unit being tested
  const total = cart.calculateTotal(taxRate);

  // Assert - Verify the result
  expect(total).toBe(13.2); // (10 + 2) * 1.1
});`}
              </pre>
            </div>

            {/* Benefits & Characteristics */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ Benefits</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Early Bug Detection:</strong> Find issues before integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Fast Feedback:</strong> Tests run in milliseconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Living Documentation:</strong> Tests explain how code works</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Refactoring Safety:</strong> Confidence to change code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Better Design:</strong> Testable code is modular code</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">🎯 Good Unit Test Characteristics</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Fast:</strong> Runs in milliseconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Isolated:</strong> No dependencies on external systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Repeatable:</strong> Same result every time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Self-Checking:</strong> Pass/fail without human inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Timely:</strong> Written before or with production code</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "jest" && (
          <motion.div
            key="jest"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">🃏 Jest (JavaScript/TypeScript)</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Jest is a delightful JavaScript testing framework with a focus on simplicity, created by Facebook.
              </p>
            </div>

            {/* Basic Jest Test */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Basic Jest Tests</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// math.js
export function add(a, b) {
  return a + b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// math.test.js
import { add, divide } from './math';

describe('Math utilities', () => {
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should handle zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('divide()', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle decimal results', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });
  });
});`}
              </pre>
            </div>

            {/* Async Testing */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">⏳ Testing Async Code</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// userService.js
export async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
}

// userService.test.js
import { fetchUser } from './userService';

describe('fetchUser()', () => {
  // Mock fetch globally
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should fetch user successfully', async () => {
    const mockUser = { id: 1, name: 'John Doe' };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    const user = await fetchUser(1);

    expect(user).toEqual(mockUser);
    expect(global.fetch).toHaveBeenCalledWith('/api/users/1');
  });

  test('should throw error for non-existent user', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchUser(999)).rejects.toThrow('User not found');
  });

  test('should handle network errors', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchUser(1)).rejects.toThrow('Network error');
  });
});`}
              </pre>
            </div>

            {/* Mocking & Spies */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🎭 Mocking & Spies</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// emailService.js
export class EmailService {
  async sendEmail(to, subject, body) {
    // Real implementation would send email
    console.log(\`Sending email to \${to}\`);
    return { sent: true };
  }
}

// orderService.js
export class OrderService {
  constructor(emailService) {
    this.emailService = emailService;
  }

  async createOrder(userId, items) {
    const order = {
      id: Date.now(),
      userId,
      items,
      total: items.reduce((sum, item) => sum + item.price, 0),
    };

    // Send confirmation email
    await this.emailService.sendEmail(
      \`user\${userId}@example.com\`,
      'Order Confirmation',
      \`Your order #\${order.id} has been placed\`
    );

    return order;
  }
}

// orderService.test.js
import { OrderService } from './orderService';
import { EmailService } from './emailService';

// Mock the EmailService module
jest.mock('./emailService');

describe('OrderService', () => {
  let orderService;
  let mockEmailService;

  beforeEach(() => {
    // Create a mock instance
    mockEmailService = new EmailService();
    mockEmailService.sendEmail = jest.fn().mockResolvedValue({ sent: true });

    orderService = new OrderService(mockEmailService);
  });

  test('should create order and send confirmation email', async () => {
    const items = [
      { name: 'Book', price: 10 },
      { name: 'Pen', price: 2 },
    ];

    const order = await orderService.createOrder(123, items);

    // Verify order created
    expect(order).toMatchObject({
      userId: 123,
      items,
      total: 12,
    });
    expect(order.id).toBeDefined();

    // Verify email was sent
    expect(mockEmailService.sendEmail).toHaveBeenCalledTimes(1);
    expect(mockEmailService.sendEmail).toHaveBeenCalledWith(
      'user123@example.com',
      'Order Confirmation',
      expect.stringContaining('Your order')
    );
  });

  test('should handle email sending failure', async () => {
    // Mock email service to fail
    mockEmailService.sendEmail.mockRejectedValueOnce(
      new Error('Email service down')
    );

    const items = [{ name: 'Book', price: 10 }];

    await expect(orderService.createOrder(123, items))
      .rejects.toThrow('Email service down');
  });
});`}
              </pre>
            </div>

            {/* Common Matchers */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">🎯 Common Jest Matchers</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">Equality</h5>
                  <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`expect(value).toBe(5);          // ===
expect(obj).toEqual({ a: 1 });  // deep equal
expect(value).toBeNull();
expect(value).toBeDefined();
expect(value).toBeTruthy();
expect(value).toBeFalsy();`}
                  </pre>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Numbers</h5>
                  <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`expect(value).toBeGreaterThan(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3);
expect(value).toBeGreaterThanOrEqual(3.5);`}
                  </pre>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-pink-700 dark:text-pink-400 mb-2">Strings</h5>
                  <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`expect(str).toMatch(/pattern/);
expect(str).toContain('substring');`}
                  </pre>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Arrays & Objects</h5>
                  <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`expect(arr).toContain(item);
expect(arr).toHaveLength(3);
expect(obj).toHaveProperty('key');
expect(obj).toMatchObject({ a: 1 });`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "pytest" && (
          <motion.div
            key="pytest"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border-l-4 border-blue-600 mb-8">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">🐍 Pytest (Python)</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Pytest is a mature, feature-rich Python testing framework that makes it easy to write simple and scalable tests.
              </p>
            </div>

            {/* Basic Pytest */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 Basic Pytest Tests</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# calculator.py
class Calculator:
    def add(self, a, b):
        return a + b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b

    def is_even(self, n):
        return n % 2 == 0

# test_calculator.py
import pytest
from calculator import Calculator

class TestCalculator:
    def setup_method(self):
        """Run before each test method"""
        self.calc = Calculator()

    def test_add_positive_numbers(self):
        result = self.calc.add(2, 3)
        assert result == 5

    def test_add_negative_numbers(self):
        result = self.calc.add(-2, -3)
        assert result == -5

    def test_divide_normal(self):
        result = self.calc.divide(10, 2)
        assert result == 5.0

    def test_divide_by_zero_raises_error(self):
        with pytest.raises(ValueError, match="Cannot divide by zero"):
            self.calc.divide(10, 0)

    @pytest.mark.parametrize("number,expected", [
        (2, True),
        (3, False),
        (0, True),
        (-4, True),
        (-3, False),
    ])
    def test_is_even(self, number, expected):
        result = self.calc.is_even(number)
        assert result == expected`}
              </pre>
            </div>

            {/* Fixtures */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🔧 Pytest Fixtures</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`# conftest.py (shared fixtures)
import pytest
from database import Database
from api_client import APIClient

@pytest.fixture
def database():
    """Provide a database connection for tests"""
    db = Database('test.db')
    db.connect()
    yield db  # Test runs here
    db.disconnect()
    db.cleanup()

@pytest.fixture
def api_client():
    """Provide an API client"""
    client = APIClient(base_url='http://test.api.com')
    return client

@pytest.fixture
def sample_user():
    """Provide sample user data"""
    return {
        'id': 1,
        'name': 'John Doe',
        'email': 'john@example.com'
    }

# test_user_service.py
import pytest
from user_service import UserService

class TestUserService:
    @pytest.fixture
    def user_service(self, database):
        """Create UserService with database"""
        return UserService(database)

    def test_create_user(self, user_service, sample_user):
        """Test user creation"""
        user = user_service.create_user(
            name=sample_user['name'],
            email=sample_user['email']
        )

        assert user.id is not None
        assert user.name == sample_user['name']
        assert user.email == sample_user['email']

    def test_get_user(self, user_service, database, sample_user):
        """Test fetching user"""
        # Create user first
        created_user = user_service.create_user(
            name=sample_user['name'],
            email=sample_user['email']
        )

        # Fetch user
        fetched_user = user_service.get_user(created_user.id)

        assert fetched_user.id == created_user.id
        assert fetched_user.name == sample_user['name']

    def test_delete_user(self, user_service, sample_user):
        """Test user deletion"""
        user = user_service.create_user(
            name=sample_user['name'],
            email=sample_user['email']
        )

        user_service.delete_user(user.id)

        with pytest.raises(UserNotFoundError):
            user_service.get_user(user.id)`}
              </pre>
            </div>

            {/* Parametrize & Marks */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🎯 Parametrize & Marks</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import pytest
from validator import EmailValidator, PasswordValidator

class TestEmailValidator:
    @pytest.mark.parametrize("email,is_valid", [
        ("user@example.com", True),
        ("user.name@example.co.uk", True),
        ("user+tag@example.com", True),
        ("invalid.email", False),
        ("@example.com", False),
        ("user@", False),
        ("", False),
    ])
    def test_email_validation(self, email, is_valid):
        validator = EmailValidator()
        assert validator.is_valid(email) == is_valid

class TestPasswordValidator:
    @pytest.mark.parametrize("password,expected_strength", [
        ("12345", "weak"),
        ("password", "weak"),
        ("Password1", "medium"),
        ("P@ssw0rd!", "strong"),
        ("MyC0mpl3x!P@ss", "strong"),
    ])
    def test_password_strength(self, password, expected_strength):
        validator = PasswordValidator()
        assert validator.check_strength(password) == expected_strength

    @pytest.mark.slow
    def test_bcrypt_hashing(self):
        """Test password hashing (slow operation)"""
        validator = PasswordValidator()
        password = "MySecurePassword123!"
        hashed = validator.hash_password(password)

        assert validator.verify_password(password, hashed)
        assert not validator.verify_password("WrongPassword", hashed)

    @pytest.mark.skip(reason="External service not available")
    def test_password_breach_check(self):
        """Check if password has been breached"""
        validator = PasswordValidator()
        result = validator.check_breach("password123")
        assert result is True

# Run specific marks:
# pytest -m "not slow"  # Skip slow tests
# pytest -m "slow"      # Run only slow tests`}
              </pre>
            </div>

            {/* Mocking with pytest */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🎭 Mocking with Pytest</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`from unittest.mock import Mock, patch, MagicMock
import pytest
from payment_service import PaymentService
from email_service import EmailService

class TestPaymentService:
    @pytest.fixture
    def email_service_mock(self):
        return Mock(spec=EmailService)

    @pytest.fixture
    def payment_service(self, email_service_mock):
        return PaymentService(email_service_mock)

    def test_process_payment_success(self, payment_service, email_service_mock):
        """Test successful payment processing"""
        result = payment_service.process_payment(
            user_id=123,
            amount=100.00,
            card_number="4111111111111111"
        )

        assert result['status'] == 'success'
        assert result['transaction_id'] is not None

        # Verify email was sent
        email_service_mock.send_receipt.assert_called_once_with(
            user_id=123,
            amount=100.00,
            transaction_id=result['transaction_id']
        )

    @patch('payment_service.stripe')
    def test_payment_with_stripe_api(self, stripe_mock, payment_service):
        """Test payment using mocked Stripe API"""
        # Mock Stripe charge creation
        stripe_mock.Charge.create.return_value = {
            'id': 'ch_123456',
            'status': 'succeeded',
            'amount': 10000,
        }

        result = payment_service.charge_card(
            amount=100.00,
            card_token='tok_visa'
        )

        assert result['status'] == 'succeeded'
        stripe_mock.Charge.create.assert_called_once()

    def test_payment_failure_handling(self, payment_service, email_service_mock):
        """Test payment failure handling"""
        with patch.object(
            payment_service,
            '_charge_card',
            side_effect=PaymentDeclinedError("Insufficient funds")
        ):
            result = payment_service.process_payment(
                user_id=123,
                amount=100.00,
                card_number="4111111111111111"
            )

            assert result['status'] == 'failed'
            assert 'Insufficient funds' in result['error']

            # Verify no email was sent on failure
            email_service_mock.send_receipt.assert_not_called()`}
              </pre>
            </div>

            {/* Pytest Commands */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-3">💻 Common Pytest Commands</h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`# Run all tests
pytest

# Run tests in a specific file
pytest tests/test_user.py

# Run tests matching a pattern
pytest -k "test_user"

# Run with coverage
pytest --cov=myapp tests/

# Run in parallel (with pytest-xdist)
pytest -n auto

# Show print statements
pytest -s

# Stop on first failure
pytest -x

# Show detailed failure info
pytest -vv

# Run only failed tests from last run
pytest --lf

# Generate HTML coverage report
pytest --cov=myapp --cov-report=html tests/`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "junit" && (
          <motion.div
            key="junit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600 mb-8">
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">☕ JUnit (Java)</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                JUnit is the most popular testing framework for Java, providing annotations and assertions for writing unit tests.
              </p>
            </div>

            {/* Basic JUnit 5 */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🚀 JUnit 5 Basics</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`// Calculator.java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return a / b;
    }

    public boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}

// CalculatorTest.java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @AfterEach
    void tearDown() {
        calculator = null;
    }

    @Test
    @DisplayName("Should add two positive numbers")
    void testAddPositiveNumbers() {
        int result = calculator.add(2, 3);
        assertEquals(5, result, "2 + 3 should equal 5");
    }

    @Test
    void testAddNegativeNumbers() {
        assertEquals(-5, calculator.add(-2, -3));
    }

    @Test
    void testDivide() {
        assertEquals(5, calculator.divide(10, 2));
        assertEquals(3, calculator.divide(10, 3));
    }

    @Test
    void testDivideByZeroThrowsException() {
        Exception exception = assertThrows(
            IllegalArgumentException.class,
            () -> calculator.divide(10, 0)
        );
        assertEquals("Cannot divide by zero", exception.getMessage());
    }

    @Test
    void testIsPrime() {
        assertTrue(calculator.isPrime(2));
        assertTrue(calculator.isPrime(7));
        assertFalse(calculator.isPrime(1));
        assertFalse(calculator.isPrime(4));
    }
}`}
              </pre>
            </div>

            {/* Parametrized Tests */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🎯 Parametrized Tests</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.*;
import java.util.stream.Stream;

class StringUtilsTest {

    @ParameterizedTest
    @ValueSource(strings = {"", "  ", "\\t", "\\n"})
    void testIsBlank(String input) {
        assertTrue(StringUtils.isBlank(input));
    }

    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "-1, 1, 0",
        "0, 0, 0"
    })
    void testAdd(int a, int b, int expected) {
        Calculator calc = new Calculator();
        assertEquals(expected, calc.add(a, b));
    }

    @ParameterizedTest
    @MethodSource("providePrimeNumbers")
    void testIsPrime(int number, boolean expected) {
        Calculator calc = new Calculator();
        assertEquals(expected, calc.isPrime(number));
    }

    static Stream<Arguments> providePrimeNumbers() {
        return Stream.of(
            Arguments.of(2, true),
            Arguments.of(3, true),
            Arguments.of(4, false),
            Arguments.of(17, true),
            Arguments.of(100, false)
        );
    }

    @ParameterizedTest
    @EnumSource(Month.class)
    void testMonthsHave28Days(Month month) {
        assertTrue(month.length(false) >= 28);
    }
}`}
              </pre>
            </div>

            {/* Mocking with Mockito */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">🎭 Mocking with Mockito</h4>
              <pre className="text-xs font-mono text-green-400 overflow-auto whitespace-pre">
{`import org.junit.jupiter.api.*;
import org.mockito.*;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

// UserService.java
public class UserService {
    private final UserRepository repository;
    private final EmailService emailService;

    public UserService(UserRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    public User createUser(String name, String email) {
        User user = new User(name, email);
        User saved = repository.save(user);
        emailService.sendWelcomeEmail(email);
        return saved;
    }

    public void deleteUser(Long userId) {
        User user = repository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found"));
        repository.delete(user);
        emailService.sendGoodbyeEmail(user.getEmail());
    }
}

// UserServiceTest.java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository repository;

    @Mock
    private EmailService emailService;

    @InjectMocks
    private UserService userService;

    @Test
    void testCreateUser() {
        // Arrange
        User user = new User("John Doe", "john@example.com");
        user.setId(1L);

        when(repository.save(any(User.class))).thenReturn(user);

        // Act
        User created = userService.createUser("John Doe", "john@example.com");

        // Assert
        assertNotNull(created);
        assertEquals(1L, created.getId());
        assertEquals("John Doe", created.getName());

        // Verify interactions
        verify(repository).save(any(User.class));
        verify(emailService).sendWelcomeEmail("john@example.com");
    }

    @Test
    void testDeleteUser() {
        // Arrange
        Long userId = 1L;
        User user = new User("John Doe", "john@example.com");
        user.setId(userId);

        when(repository.findById(userId)).thenReturn(Optional.of(user));

        // Act
        userService.deleteUser(userId);

        // Assert
        verify(repository).findById(userId);
        verify(repository).delete(user);
        verify(emailService).sendGoodbyeEmail("john@example.com");
    }

    @Test
    void testDeleteNonExistentUser() {
        // Arrange
        when(repository.findById(999L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(
            UserNotFoundException.class,
            () -> userService.deleteUser(999L)
        );

        verify(repository).findById(999L);
        verify(repository, never()).delete(any());
        verify(emailService, never()).sendGoodbyeEmail(anyString());
    }
}`}
              </pre>
            </div>

            {/* Test Lifecycle & Annotations */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">🔄 Test Lifecycle & Annotations</h4>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                <pre className="text-xs font-mono text-slate-700 dark:text-slate-300">
{`@BeforeAll        // Run once before all tests (static)
@BeforeEach       // Run before each test method
@AfterEach        // Run after each test method
@AfterAll         // Run once after all tests (static)

@Test             // Mark method as test
@DisplayName      // Custom test name
@Disabled         // Skip this test
@RepeatedTest(5)  // Repeat test 5 times
@Timeout(5)       // Fail if test takes > 5 seconds

// Conditional execution
@EnabledOnOs(OS.LINUX)
@EnabledOnJre(JRE.JAVA_11)
@EnabledIf("customCondition")

// Nested tests
@Nested
class WhenUserIsAuthenticated {
    @Test
    void shouldAllowAccess() { }
}

// Assertions
assertEquals(expected, actual);
assertNotEquals(value1, value2);
assertTrue(condition);
assertFalse(condition);
assertNull(object);
assertNotNull(object);
assertSame(expected, actual);
assertThrows(Exception.class, () -> code);
assertAll(
    () -> assertEquals(1, actual.getA()),
    () -> assertEquals(2, actual.getB())
);`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "best-practices" && (
          <motion.div
            key="best-practices"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-8 rounded-xl border-l-4 border-amber-600 mb-8">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">⭐ Unit Testing Best Practices</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Essential practices for writing effective, maintainable unit tests that provide value.
              </p>
            </div>

            {/* FIRST Principles */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🎯 FIRST Principles</h4>
              <div className="space-y-4">
                {[
                  {
                    letter: "F",
                    word: "Fast",
                    desc: "Tests should run quickly (milliseconds)",
                    example: "Mock external dependencies, use in-memory databases"
                  },
                  {
                    letter: "I",
                    word: "Independent",
                    desc: "Tests should not depend on each other",
                    example: "Each test sets up its own data, can run in any order"
                  },
                  {
                    letter: "R",
                    word: "Repeatable",
                    desc: "Same results every time",
                    example: "No random data, fixed dates, mocked external APIs"
                  },
                  {
                    letter: "S",
                    word: "Self-Validating",
                    desc: "Pass/fail without manual checking",
                    example: "Use assertions, not console.log or manual inspection"
                  },
                  {
                    letter: "T",
                    word: "Timely",
                    desc: "Written at the right time",
                    example: "Before or immediately after production code (TDD)"
                  }
                ].map((principle, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {principle.letter}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-purple-700 dark:text-purple-400 mb-1">
                          {principle.word}
                        </h5>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                          {principle.desc}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                          Example: {principle.example}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DO vs DON'T */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">✅ DO</h4>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Test behavior, not implementation:</strong> Focus on what code does, not how</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>One assertion per test:</strong> Test one thing at a time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Use descriptive names:</strong> Test name should explain what/why</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Follow AAA pattern:</strong> Arrange, Act, Assert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Test edge cases:</strong> null, empty, boundary values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Keep tests simple:</strong> Easy to understand and maintain</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-700">
                <h4 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4">❌ DON'T</h4>
                <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Test private methods:</strong> Test public interface only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Use real databases/APIs:</strong> Mock external dependencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Share state between tests:</strong> Each test independent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Use vague names:</strong> "test1", "testStuff" are useless</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Test framework code:</strong> Trust that libraries work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Write brittle tests:</strong> Tests shouldn't break on refactoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Test Naming Conventions */}
            <div className="bg-slate-900 p-6 rounded-xl mb-8">
              <h4 className="text-xl font-bold text-white mb-4">📝 Test Naming Conventions</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-green-400 font-bold mb-2">✅ Good Names (Describe What & Why)</p>
                  <pre className="text-xs font-mono text-green-300 overflow-auto whitespace-pre">
{`test('should return user when valid ID is provided')
test('should throw error when dividing by zero')
test('should calculate discount for premium members')
test('should send welcome email after user registration')
test('should return empty array when no items match filter')`}
                  </pre>
                </div>
                <div>
                  <p className="text-red-400 font-bold mb-2">❌ Bad Names (Too Vague)</p>
                  <pre className="text-xs font-mono text-red-300 overflow-auto whitespace-pre">
{`test('test1')
test('testUser')
test('it works')
test('testGetData')
test('checkSomething')`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Code Coverage */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📊 Code Coverage Guidelines</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Coverage Targets</h5>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>• <strong>80%+</strong> for critical business logic</li>
                    <li>• <strong>60-80%</strong> for most application code</li>
                    <li>• <strong>Lower</strong> for UI components, configuration</li>
                    <li>• <strong>100%</strong> for utility functions, core algorithms</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                  <h5 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">⚠️ Coverage Caveats</h5>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>• <strong>High coverage ≠ good tests:</strong> Can have 100% coverage with poor tests</li>
                    <li>• <strong>Focus on quality:</strong> Better to have 60% meaningful tests than 100% shallow</li>
                    <li>• <strong>Don't game metrics:</strong> Coverage should guide, not dictate testing</li>
                    <li>• <strong>Test important paths:</strong> Not all code is equally critical</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
