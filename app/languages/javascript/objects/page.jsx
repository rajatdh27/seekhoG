"use client";

import { motion } from "framer-motion";

export default function ObjectsPrototypes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🔷</span>
            <div>
              <h1 className="text-5xl font-bold">Objects & Prototypes</h1>
              <p className="text-indigo-100 mt-2">Master object-oriented JavaScript</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Objects */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">Objects</h2>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">{`// Object literal
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
};

// Property access
person.name;              // dot notation
person['age'];            // bracket notation
person['first-name'];     // for special characters

// Add/modify properties
person.email = 'john@example.com';
person.age = 31;

// Delete properties
delete person.age;

// Check if property exists
'name' in person;         // true
person.hasOwnProperty('name');  // true

// Object methods
Object.keys(person);      // ['name', 'greet']
Object.values(person);    // ['John', function]
Object.entries(person);   // [['name', 'John'], ...]

// Object.assign (merge/clone)
const clone = Object.assign({}, person);
const merged = Object.assign({}, obj1, obj2);

// Spread operator (modern)
const clone = { ...person };
const merged = { ...obj1, ...obj2 };

// Object.freeze (immutable)
Object.freeze(person);
person.name = 'Jane';     // fails silently (strict mode: error)

// Object.seal (no add/delete, can modify)
Object.seal(person);

// Computed property names
const key = 'dynamicKey';
const obj = {
    [key]: 'value',
    [\`\${key}2\`]: 'value2'
};

// Shorthand property names
const name = 'John';
const age = 30;
const person = { name, age };  // same as { name: name, age: age }

// Method shorthand
const obj = {
    // Old way
    greet: function() {},
    // Shorthand
    greet() {}
};`}</code>
            </pre>
          </div>
        </div>

        {/* Prototypes */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">Prototypes & Inheritance</h2>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">{`// Prototype chain
const obj = {};
obj.__proto__;            // Object.prototype
Object.getPrototypeOf(obj);  // Same thing (preferred)

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(\`Hello, I'm \${this.name}\`);
};

const john = new Person('John', 30);
john.greet();  // "Hello, I'm John"

// Prototype chain
john.__proto__ === Person.prototype;           // true
Person.prototype.__proto__ === Object.prototype;  // true

// Inheritance with prototypes
function Employee(name, age, role) {
    Person.call(this, name, age);  // call parent constructor
    this.role = role;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
    console.log(\`\${this.name} is working as \${this.role}\`);
};

const emp = new Employee('Jane', 25, 'Developer');
emp.greet();  // inherited from Person
emp.work();   // own method

// Object.create
const personProto = {
    greet() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
};

const john = Object.create(personProto);
john.name = 'John';
john.greet();

// Check prototype
personProto.isPrototypeOf(john);  // true`}</code>
            </pre>
          </div>
        </div>

        {/* Classes */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">ES6 Classes</h2>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">{`// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, I'm \${this.name}\`);
    }

    // Getter
    get info() {
        return \`\${this.name} (\${this.age})\`;
    }

    // Setter
    set age(value) {
        if (value < 0) throw new Error('Invalid age');
        this._age = value;
    }

    // Static method
    static create(name, age) {
        return new Person(name, age);
    }
}

const john = new Person('John', 30);
john.greet();

// Static method usage
const jane = Person.create('Jane', 25);

// Class inheritance
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);  // call parent constructor
        this.role = role;
    }

    work() {
        console.log(\`\${this.name} is working as \${this.role}\`);
    }

    // Override method
    greet() {
        super.greet();  // call parent method
        console.log(\`I'm a \${this.role}\`);
    }
}

const emp = new Employee('Bob', 35, 'Manager');
emp.work();
emp.greet();

// Private fields (ES2022)
class BankAccount {
    #balance = 0;  // private field

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
// account.#balance;  // Error: private field

// Class expressions
const Person = class {
    constructor(name) {
        this.name = name;
    }
};`}</code>
            </pre>
          </div>
        </div>

        {/* this keyword */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">'this' Keyword</h2>
          <div className="bg-slate-900 rounded-xl p-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-green-400">{`// Global context
console.log(this);  // Window (browser) or global (Node.js)

// Object method
const obj = {
    name: 'Object',
    greet() {
        console.log(this.name);  // 'Object'
    }
};

// Constructor function
function Person(name) {
    this.name = name;  // 'this' = new instance
}
const person = new Person('John');

// Arrow functions (no own 'this')
const obj = {
    name: 'Object',
    greet: () => {
        console.log(this.name);  // undefined (inherits from outer scope)
    }
};

// Event handlers
button.addEventListener('click', function() {
    console.log(this);  // button element
});

button.addEventListener('click', () => {
    console.log(this);  // undefined or Window
});

// Explicit binding
const obj1 = { name: 'Obj1' };
const obj2 = { name: 'Obj2' };

function greet() {
    console.log(this.name);
}

greet.call(obj1);     // 'Obj1'
greet.apply(obj2);    // 'Obj2'
const boundGreet = greet.bind(obj1);
boundGreet();         // 'Obj1'

// call vs apply
function sum(a, b) {
    return a + b;
}

sum.call(null, 1, 2);      // arguments separately
sum.apply(null, [1, 2]);   // arguments as array

// Class methods losing 'this'
class Counter {
    count = 0;

    increment() {
        this.count++;
    }

    // Arrow function keeps 'this'
    incrementArrow = () => {
        this.count++;
    }
}

const counter = new Counter();
const inc = counter.increment;
inc();  // Error: this is undefined

const incArrow = counter.incrementArrow;
incArrow();  // Works! Arrow function maintains 'this'`}</code>
            </pre>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-blue-600/20 border border-indigo-600/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-indigo-400">💡 Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Use ES6 classes instead of constructor functions</li>
            <li>✅ Use arrow functions for callbacks to preserve <code>this</code></li>
            <li>✅ Use <code>Object.create()</code> for prototype-based inheritance</li>
            <li>✅ Use private fields (#) for encapsulation</li>
            <li>✅ Prefer composition over deep inheritance hierarchies</li>
            <li>✅ Use <code>Object.freeze()</code> for immutable objects</li>
            <li>⚠️ Avoid modifying built-in prototypes</li>
            <li>⚠️ Be careful with <code>this</code> in callbacks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
