"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AsyncJavaScript() {
  const [activeTab, setActiveTab] = useState("callbacks");

  const tabs = [
    { id: "callbacks", label: "Callbacks", icon: "🔄" },
    { id: "promises", label: "Promises", icon: "🤝" },
    { id: "async-await", label: "Async/Await", icon: "⚡" },
    { id: "fetch", label: "Fetch API", icon: "🌐" },
    { id: "error-handling", label: "Error Handling", icon: "🛡️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">⚡</span>
            <div>
              <h1 className="text-5xl font-bold">Async JavaScript</h1>
              <p className="text-blue-100 mt-2">Master asynchronous programming</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === "callbacks" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Callbacks</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">What is a Callback?</h3>
                  <p className="text-slate-300 mb-4">
                    A callback is a function passed as an argument to another function, to be executed later.
                  </p>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Synchronous callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greet('John', function() {
    console.log('Callback executed!');
});

// Array methods use callbacks
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * 2);
});

// Filter with callback
const even = numbers.filter(num => num % 2 === 0);

// Map with callback
const doubled = numbers.map(num => num * 2);`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Asynchronous Callbacks</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// setTimeout (executes after delay)
setTimeout(function() {
    console.log('Executed after 2 seconds');
}, 2000);

// setInterval (executes repeatedly)
const intervalId = setInterval(function() {
    console.log('Repeating every second');
}, 1000);

// Stop interval
clearInterval(intervalId);

// Event listeners (async callbacks)
document.querySelector('#btn').addEventListener('click', function() {
    console.log('Button clicked!');
});

// Reading file (Node.js)
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function(error, data) {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('File content:', data);
});`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400">⚠️ Callback Hell (Pyramid of Doom)</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-red-400">{`// ❌ Hard to read and maintain
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    console.log('Finally done!');
                });
            });
        });
    });
});

// Example: Multiple async operations
setTimeout(function() {
    console.log('First');
    setTimeout(function() {
        console.log('Second');
        setTimeout(function() {
            console.log('Third');
            setTimeout(function() {
                console.log('Done!');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Problems:
// 1. Hard to read
// 2. Difficult error handling
// 3. Cannot use try/catch
// 4. Inversion of control`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "promises" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Promises</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Promise States</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { state: "Pending", description: "Initial state, neither fulfilled nor rejected", color: "yellow" },
                      { state: "Fulfilled", description: "Operation completed successfully", color: "green" },
                      { state: "Rejected", description: "Operation failed", color: "red" }
                    ].map((item) => (
                      <div key={item.state} className={`bg-${item.color}-900/20 border border-${item.color}-700 p-4 rounded-xl`}>
                        <div className={`text-lg font-bold text-${item.color}-400 mb-2`}>{item.state}</div>
                        <div className="text-sm text-slate-300">{item.description}</div>
                      </div>
                    ))}
                  </div>

                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve('Operation successful!');  // fulfilled
        } else {
            reject('Operation failed!');       // rejected
        }
    }, 1000);
});

// Consuming a promise
myPromise
    .then(result => {
        console.log(result);  // "Operation successful!"
        return result.toUpperCase();
    })
    .then(upperResult => {
        console.log(upperResult);  // "OPERATION SUCCESSFUL!"
    })
    .catch(error => {
        console.error(error);  // if rejected
    })
    .finally(() => {
        console.log('Cleanup code');  // always runs
    });`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Promise Chaining</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// ✅ Promise chaining (better than callbacks)
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Data A'), 1000);
    });
}

function getMoreData(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + ' + Data B'), 1000);
    });
}

function getEvenMoreData(data) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data + ' + Data C'), 1000);
    });
}

// Chain them
getData()
    .then(a => {
        console.log(a);
        return getMoreData(a);
    })
    .then(b => {
        console.log(b);
        return getEvenMoreData(b);
    })
    .then(c => {
        console.log(c);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Shorter version
getData()
    .then(a => getMoreData(a))
    .then(b => getEvenMoreData(b))
    .then(c => console.log(c))
    .catch(error => console.error(error));`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Promise Methods</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Promise.all() - all must succeed
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values);  // [1, 2, 3]
    })
    .catch(error => {
        console.error('One failed:', error);
    });

// Promise.allSettled() - wait for all (success or failure)
Promise.allSettled([p1, p2, Promise.reject('error')])
    .then(results => {
        console.log(results);
        // [
        //   { status: 'fulfilled', value: 1 },
        //   { status: 'fulfilled', value: 2 },
        //   { status: 'rejected', reason: 'error' }
        // ]
    });

// Promise.race() - first to finish wins
Promise.race([p1, p2, p3])
    .then(value => {
        console.log('First:', value);
    });

// Promise.any() - first fulfilled wins (ignores rejections)
Promise.any([
    Promise.reject('error1'),
    Promise.resolve('success'),
    Promise.reject('error2')
])
    .then(value => {
        console.log(value);  // 'success'
    });

// Promise.resolve() - create fulfilled promise
const p = Promise.resolve(42);

// Promise.reject() - create rejected promise
const err = Promise.reject(new Error('Failed'));`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "async-await" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Async/Await</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Basic Syntax</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// async function always returns a promise
async function myFunction() {
    return 'Hello';  // automatically wrapped in Promise.resolve()
}

myFunction().then(result => console.log(result));  // "Hello"

// await pauses execution until promise resolves
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// Using async/await
async function main() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Callbacks → Promises → Async/Await</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// ❌ Callbacks (callback hell)
getData(function(a) {
    getMoreData(a, function(b) {
        console.log(b);
    });
});

// ✅ Promises (better)
getData()
    .then(a => getMoreData(a))
    .then(b => console.log(b))
    .catch(error => console.error(error));

// ✅✅ Async/Await (cleanest!)
async function process() {
    try {
        const a = await getData();
        const b = await getMoreData(a);
        console.log(b);
    } catch (error) {
        console.error(error);
    }
}

// Sequential execution
async function sequential() {
    const a = await fetchA();  // waits
    const b = await fetchB();  // waits for a
    const c = await fetchC();  // waits for b
    return [a, b, c];
}

// Parallel execution (faster)
async function parallel() {
    const [a, b, c] = await Promise.all([
        fetchA(),  // all start together
        fetchB(),
        fetchC()
    ]);
    return [a, b, c];
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Error Handling</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// try-catch with async/await
async function fetchUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw error;  // re-throw or handle
    } finally {
        console.log('Cleanup code');
    }
}

// Multiple operations
async function processUser(id) {
    try {
        const user = await fetchUser(id);
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchPostComments(posts[0].id);

        return { user, posts, comments };
    } catch (error) {
        if (error.message.includes('404')) {
            console.log('User not found');
        } else if (error.message.includes('500')) {
            console.log('Server error');
        } else {
            console.log('Unknown error:', error);
        }
    }
}

// Handling rejected promises
async function safeAwait() {
    // Without try-catch (promise rejection)
    const result = await Promise.reject('Error');  // ❌ Unhandled rejection

    // With try-catch
    try {
        const result = await Promise.reject('Error');
    } catch (error) {
        console.error(error);  // ✅ Handled
    }
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Common Patterns</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Wait for multiple promises
async function fetchAll() {
    const [users, posts, comments] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
    ]);

    return { users, posts, comments };
}

// Loop with await
async function processItems(items) {
    for (const item of items) {
        await processItem(item);  // sequential
    }
}

// Parallel processing in loop
async function processItemsParallel(items) {
    await Promise.all(
        items.map(item => processItem(item))
    );
}

// Conditional await
async function conditionalFetch(shouldFetch) {
    let data = null;
    if (shouldFetch) {
        data = await fetchData();
    }
    return data;
}

// Timeout with async/await
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeout() {
    await timeout(1000);  // wait 1 second
    const data = await fetch('/api/data');
    return data;
}

// Race with timeout
async function fetchWithTimeoutRace(url, timeoutMs) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "fetch" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Fetch API</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Basic Fetch</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// GET request
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// With async/await
async function getUsers() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Check response status
async function fetchWithCheck() {
    const response = await fetch('/api/data');

    if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    return await response.json();
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">HTTP Methods</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// POST request
async function createUser(userData) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    return await response.json();
}

// PUT request (update)
async function updateUser(id, userData) {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    return await response.json();
}

// PATCH request (partial update)
async function partialUpdate(id, updates) {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
    });

    return await response.json();
}

// DELETE request
async function deleteUser(id) {
    const response = await fetch(\`/api/users/\${id}\`, {
        method: 'DELETE'
    });

    return response.ok;
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Headers & Options</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Custom headers
async function fetchWithHeaders() {
    const response = await fetch('/api/data', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
            'X-Custom-Header': 'value'
        }
    });

    return await response.json();
}

// Request with credentials (cookies)
fetch('/api/data', {
    credentials: 'include'  // include, same-origin, omit
});

// Abort controller (cancel request)
const controller = new AbortController();

fetch('/api/data', {
    signal: controller.signal
})
    .then(response => response.json())
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        }
    });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);

// Mode & cache
fetch('/api/data', {
    mode: 'cors',        // cors, no-cors, same-origin
    cache: 'no-cache',   // default, no-cache, reload, force-cache
    redirect: 'follow'   // follow, error, manual
});`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Response Methods</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Different response types
const response = await fetch('/api/data');

// JSON
const jsonData = await response.json();

// Text
const text = await response.text();

// Blob (for files)
const blob = await response.blob();

// ArrayBuffer (binary data)
const buffer = await response.arrayBuffer();

// FormData
const formData = await response.formData();

// Response properties
response.ok           // true if status 200-299
response.status       // 200, 404, 500, etc.
response.statusText   // "OK", "Not Found", etc.
response.headers      // Headers object
response.url          // final URL after redirects
response.redirected   // true if redirected

// Clone response (can only read once)
const response1 = await fetch('/api/data');
const response2 = response1.clone();

const json = await response1.json();
const text = await response2.text();`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Complete Example</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// API wrapper class
class API {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        const url = \`\${this.baseURL}\${endpoint}\`;

        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    get(endpoint) {
        return this.request(endpoint);
    }

    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }

    delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Usage
const api = new API('https://api.example.com');

async function main() {
    try {
        const users = await api.get('/users');
        const newUser = await api.post('/users', {
            name: 'John',
            email: 'john@example.com'
        });
        const updated = await api.put('/users/1', { name: 'Jane' });
        await api.delete('/users/1');
    } catch (error) {
        console.error(error);
    }
}

main();`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "error-handling" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Error Handling</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Try-Catch with Async/Await</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Basic try-catch
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;  // re-throw or return default
    }
}

// Multiple error types
async function processData() {
    try {
        const data = await fetchData();
        const processed = processJSON(data);
        return processed;
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('Invalid JSON');
        } else if (error instanceof TypeError) {
            console.error('Type error');
        } else if (error.name === 'AbortError') {
            console.error('Request aborted');
        } else {
            console.error('Unknown error:', error);
        }
    } finally {
        console.log('Cleanup');
    }
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Promise Rejection</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Handling with .catch()
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Done'));

// Global unhandled rejection handler
window.addEventListener('unhandledrejection', event => {
    console.error('Unhandled rejection:', event.reason);
    event.preventDefault();  // prevent default error
});

// Creating custom errors
class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

async function fetchWithCustomError() {
    const response = await fetch('/api/data');

    if (!response.ok) {
        throw new NetworkError(
            'Failed to fetch',
            response.status
        );
    }

    return await response.json();
}

// Using it
try {
    await fetchWithCustomError();
} catch (error) {
    if (error instanceof NetworkError) {
        console.log('Network error:', error.statusCode);
    }
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Retry Logic</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Retry with exponential backoff
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
    let lastError;

    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }

            return await response.json();
        } catch (error) {
            lastError = error;
            console.log(\`Attempt \${i + 1} failed, retrying...\`);

            // Exponential backoff: 1s, 2s, 4s
            const delay = Math.pow(2, i) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw lastError;
}

// Usage
try {
    const data = await fetchWithRetry('/api/data');
} catch (error) {
    console.error('All retries failed:', error);
}

// Retry only on specific errors
async function fetchWithSmartRetry(url) {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            const response = await fetch(url);

            if (response.status === 429) {  // Rate limited
                attempt++;
                await new Promise(r => setTimeout(r, 2000));
                continue;
            }

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }

            return await response.json();
        } catch (error) {
            if (attempt === maxRetries - 1) {
                throw error;
            }
            attempt++;
        }
    }
}`}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">💡 Best Practices</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Always handle promise rejections with <code>.catch()</code> or <code>try-catch</code></li>
                    <li>✅ Use <code>async/await</code> instead of promise chains for better readability</li>
                    <li>✅ Check <code>response.ok</code> before parsing response</li>
                    <li>✅ Use <code>Promise.all()</code> for parallel requests</li>
                    <li>✅ Implement timeout and retry logic for network requests</li>
                    <li>✅ Use <code>AbortController</code> to cancel requests</li>
                    <li>✅ Create custom error classes for better error handling</li>
                    <li>⚠️ Don't mix <code>.then()</code> with <code>async/await</code></li>
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
