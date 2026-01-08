"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DOMManipulation() {
  const [activeTab, setActiveTab] = useState("selection");

  const tabs = [
    { id: "selection", label: "DOM Selection", icon: "🎯" },
    { id: "manipulation", label: "Element Manipulation", icon: "✏️" },
    { id: "events", label: "Events", icon: "⚡" },
    { id: "traversal", label: "DOM Traversal", icon: "🔄" },
    { id: "creation", label: "Create & Delete", icon: "🏗️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-600 to-red-600 py-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🎨</span>
            <div>
              <h1 className="text-5xl font-bold">DOM Manipulation</h1>
              <p className="text-orange-100 mt-2">Master the Document Object Model</p>
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
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"
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
        {activeTab === "selection" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">DOM Selection Methods</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    method: "getElementById()",
                    returns: "Single element",
                    description: "Selects element by ID",
                    example: 'document.getElementById("header")'
                  },
                  {
                    method: "getElementsByClassName()",
                    returns: "HTMLCollection (live)",
                    description: "Selects elements by class",
                    example: 'document.getElementsByClassName("btn")'
                  },
                  {
                    method: "getElementsByTagName()",
                    returns: "HTMLCollection (live)",
                    description: "Selects elements by tag",
                    example: 'document.getElementsByTagName("div")'
                  },
                  {
                    method: "querySelector()",
                    returns: "First matching element",
                    description: "CSS selector (modern)",
                    example: 'document.querySelector(".btn")'
                  },
                  {
                    method: "querySelectorAll()",
                    returns: "NodeList (static)",
                    description: "All matching elements",
                    example: 'document.querySelectorAll(".item")'
                  },
                  {
                    method: "getElementsByName()",
                    returns: "NodeList (live)",
                    description: "Selects by name attribute",
                    example: 'document.getElementsByName("email")'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-700/50 p-6 rounded-xl">
                    <div className="text-xl font-bold text-orange-400 mb-2">{item.method}</div>
                    <div className="text-sm text-slate-400 mb-2">Returns: <span className="text-green-400">{item.returns}</span></div>
                    <div className="text-sm mb-3">{item.description}</div>
                    <div className="bg-slate-900 rounded p-3">
                      <code className="text-xs text-green-400">{item.example}</code>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Practical Examples</h3>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">{`// By ID (fastest, most specific)
const header = document.getElementById('header');

// By Class Name
const buttons = document.getElementsByClassName('btn');
// Returns HTMLCollection, need to convert for array methods
const buttonArray = Array.from(buttons);

// By Tag Name
const divs = document.getElementsByTagName('div');

// querySelector (CSS selectors) - RECOMMENDED
const firstBtn = document.querySelector('.btn');
const navItem = document.querySelector('#nav .item');
const checkbox = document.querySelector('input[type="checkbox"]');

// querySelectorAll - RECOMMENDED
const allButtons = document.querySelectorAll('.btn');
const allLinks = document.querySelectorAll('a[href^="http"]');

// Converting NodeList to Array
const buttonsArray = [...allButtons];  // spread operator
const linksArray = Array.from(allLinks);

// forEach on NodeList (works directly)
allButtons.forEach(btn => {
    console.log(btn.textContent);
});

// Complex selectors
const nested = document.querySelector('.container > .item:first-child');
const notFirst = document.querySelectorAll('li:not(:first-child)');
const evenItems = document.querySelectorAll('li:nth-child(even)');`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "manipulation" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Element Manipulation</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Content Manipulation</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const element = document.querySelector('#myDiv');

// textContent (plain text, no HTML)
element.textContent = 'Hello World';
console.log(element.textContent);

// innerHTML (parses HTML)
element.innerHTML = '<strong>Bold Text</strong>';
element.innerHTML += '<p>New paragraph</p>';  // append

// innerText (considers CSS, slower)
element.innerText = 'Visible text only';

// outerHTML (includes element itself)
console.log(element.outerHTML);  // <div id="myDiv">...</div>

// Security: Avoid XSS attacks
const userInput = '<img src=x onerror="alert(1)">';
// element.innerHTML = userInput;  // ❌ Dangerous!
element.textContent = userInput;   // ✅ Safe (treats as text)`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Attributes</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const link = document.querySelector('a');

// Get attribute
link.getAttribute('href');
link.href;  // property access (preferred)

// Set attribute
link.setAttribute('href', 'https://example.com');
link.href = 'https://example.com';  // (preferred)

// Remove attribute
link.removeAttribute('target');

// Check if attribute exists
link.hasAttribute('href');  // true/false

// data-* attributes
const element = document.querySelector('#user');
element.dataset.userId;        // data-user-id
element.dataset.role = 'admin'; // sets data-role="admin"

// Common attributes
element.id = 'newId';
element.className = 'btn btn-primary';
element.title = 'Tooltip text';
element.style.color = 'red';`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Classes & Styles</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const element = document.querySelector('.box');

// classList API (RECOMMENDED)
element.classList.add('active');
element.classList.add('visible', 'highlighted');  // multiple
element.classList.remove('hidden');
element.classList.toggle('active');  // add if missing, remove if present
element.classList.replace('old', 'new');
element.classList.contains('active');  // true/false

// Old way (not recommended)
element.className += ' new-class';

// Inline styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';  // camelCase
element.style.fontSize = '16px';

// Multiple styles
Object.assign(element.style, {
    color: 'white',
    backgroundColor: 'black',
    padding: '10px'
});

// CSS variables
element.style.setProperty('--main-color', '#ff0000');
const color = element.style.getPropertyValue('--main-color');

// Computed styles (read-only)
const styles = window.getComputedStyle(element);
const fontSize = styles.fontSize;
const color = styles.color;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "events" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Event Handling</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">addEventListener()</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const button = document.querySelector('#myBtn');

// Basic event listener
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log(event.target);  // element that triggered event
});

// Arrow function
button.addEventListener('click', (e) => {
    console.log('Clicked:', e.target.textContent);
});

// Named function (can be removed later)
function handleClick(event) {
    console.log('Handling click');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event object properties
button.addEventListener('click', (e) => {
    e.target;           // element clicked
    e.currentTarget;    // element with listener
    e.type;            // "click"
    e.preventDefault(); // prevent default action
    e.stopPropagation(); // stop bubbling
});

// Options
button.addEventListener('click', handler, {
    once: true,      // run only once
    capture: false,  // use capture phase
    passive: true    // won't call preventDefault()
});`}</code>
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-400">Common Events</h3>
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`// Mouse Events
'click'
'dblclick'
'mousedown'
'mouseup'
'mousemove'
'mouseenter'
'mouseleave'
'mouseover'
'mouseout'

// Keyboard Events
'keydown'
'keyup'
'keypress' (deprecated)

// Form Events
'submit'
'change'
'input'
'focus'
'blur'

// Document Events
'DOMContentLoaded'
'load'
'scroll'
'resize'`}</code>
                    </pre>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-orange-400">Event Examples</h3>
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-green-400">{`// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
});

// Input change
input.addEventListener('input', (e) => {
    console.log(e.target.value);
});

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log('Enter pressed');
    }
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('Ctrl+S');
    }
});

// Scroll
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
});`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Event Delegation</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Instead of adding listener to each button
// ❌ Bad (performance issue with many elements)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Button clicked');
    });
});

// ✅ Good (event delegation)
document.querySelector('.container').addEventListener('click', (e) => {
    // Check if clicked element matches
    if (e.target.matches('.btn')) {
        console.log('Button clicked:', e.target.textContent);
    }

    // Or using closest() for nested elements
    const button = e.target.closest('.btn');
    if (button) {
        console.log('Button clicked:', button.textContent);
    }
});

// Example: Dynamic list
const list = document.querySelector('#todoList');

// This works for current AND future items
list.addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
        e.target.closest('li').remove();
    }
    if (e.target.matches('.edit-btn')) {
        // edit logic
    }
});

// Event bubbling and capturing
/*
Bubbling: child → parent → grandparent (default)
Capturing: grandparent → parent → child

HTML: <div id="outer"><div id="inner">Click</div></div>
*/

outer.addEventListener('click', () => console.log('Outer'), false);  // bubble
inner.addEventListener('click', () => console.log('Inner'), false);  // bubble
// Click inner: "Inner" → "Outer"

outer.addEventListener('click', () => console.log('Outer'), true);   // capture
inner.addEventListener('click', () => console.log('Inner'), true);   // capture
// Click inner: "Outer" → "Inner"`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "traversal" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">DOM Traversal</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Parent/Child Navigation</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const element = document.querySelector('.item');

// Parent
element.parentNode;           // parent (any node)
element.parentElement;        // parent (element only)
element.closest('.container'); // nearest ancestor matching selector

// Children
element.children;             // HTMLCollection of child elements
element.childNodes;           // NodeList (includes text nodes)
element.firstElementChild;    // first child element
element.lastElementChild;     // last child element
element.firstChild;          // first child node
element.lastChild;           // last child node

// Siblings
element.nextElementSibling;   // next sibling element
element.previousElementSibling; // previous sibling element
element.nextSibling;         // next sibling node
element.previousSibling;     // previous sibling node

// Check if has children
element.hasChildNodes();
element.childElementCount;    // number of child elements`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Traversal Examples</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Find all parent elements
function getAllParents(element) {
    const parents = [];
    while (element.parentElement) {
        parents.push(element.parentElement);
        element = element.parentElement;
    }
    return parents;
}

// Find sibling by selector
function findSibling(element, selector) {
    let sibling = element.nextElementSibling;
    while (sibling) {
        if (sibling.matches(selector)) {
            return sibling;
        }
        sibling = sibling.nextElementSibling;
    }
    return null;
}

// Get all siblings
function getSiblings(element) {
    return [...element.parentElement.children].filter(
        child => child !== element
    );
}

// Traverse all descendants
function walkDOM(node, callback) {
    callback(node);
    node = node.firstChild;
    while (node) {
        walkDOM(node, callback);
        node = node.nextSibling;
    }
}

// Usage
walkDOM(document.body, (node) => {
    if (node.nodeType === 1) {  // Element node
        console.log(node.tagName);
    }
});`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "creation" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Create & Delete Elements</h2>

              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Creating Elements</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`// Create element
const div = document.createElement('div');
const text = document.createTextNode('Hello');
const fragment = document.createDocumentFragment();

// Set properties
div.id = 'myDiv';
div.className = 'container active';
div.textContent = 'Hello World';

// Set attributes
div.setAttribute('data-id', '123');
div.dataset.userId = '456';

// Add styles
div.style.color = 'red';
div.classList.add('highlight');

// Creating complex elements
const card = document.createElement('div');
card.className = 'card';
card.innerHTML = \`
    <h2>Title</h2>
    <p>Description</p>
    <button class="btn">Click</button>
\`;

// Using template literals (safer)
function createCard(title, description) {
    const card = document.createElement('div');
    card.className = 'card';

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = 'Click';

    card.append(h2, p, btn);
    return card;
}`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Inserting Elements</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const parent = document.querySelector('.container');
const newElement = document.createElement('div');

// Append (at end)
parent.appendChild(newElement);
parent.append(newElement, 'text', otherElement);  // can add multiple

// Prepend (at beginning)
parent.prepend(newElement);

// Insert before/after
const reference = document.querySelector('.reference');
parent.insertBefore(newElement, reference);

// Modern methods
reference.before(newElement);  // before reference
reference.after(newElement);   // after reference
reference.replaceWith(newElement);  // replace reference

// insertAdjacentHTML/Element/Text
element.insertAdjacentHTML('beforebegin', '<div>Before</div>');
element.insertAdjacentHTML('afterbegin', '<div>First child</div>');
element.insertAdjacentHTML('beforeend', '<div>Last child</div>');
element.insertAdjacentHTML('afterend', '<div>After</div>');

// Clone element
const clone = element.cloneNode(true);  // deep clone (with children)
const shallowClone = element.cloneNode(false);  // shallow

// DocumentFragment (better performance)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = \`Item \${i}\`;
    fragment.appendChild(div);
}
// Single reflow instead of 1000
document.body.appendChild(fragment);`}</code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">Removing Elements</h3>
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-green-400">{`const element = document.querySelector('.item');

// Remove element (modern)
element.remove();

// Remove element (old way)
element.parentNode.removeChild(element);

// Remove all children
element.innerHTML = '';  // fast but doesn't remove event listeners

// Remove children properly
while (element.firstChild) {
    element.removeChild(element.firstChild);
}

// Or using replaceChildren (modern)
element.replaceChildren();  // removes all children

// Remove specific children
const items = element.querySelectorAll('.item');
items.forEach(item => item.remove());

// Empty container
element.textContent = '';  // removes all child nodes`}</code>
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-600/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-400">💡 Best Practices</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Use <code>querySelector/querySelectorAll</code> for selection</li>
                    <li>✅ Use <code>classList</code> instead of <code>className</code></li>
                    <li>✅ Use event delegation for dynamic elements</li>
                    <li>✅ Use <code>textContent</code> instead of <code>innerHTML</code> for plain text</li>
                    <li>✅ Use <code>DocumentFragment</code> for bulk insertions</li>
                    <li>✅ Remove event listeners to prevent memory leaks</li>
                    <li>⚠️ Be careful with <code>innerHTML</code> - can cause XSS attacks</li>
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
