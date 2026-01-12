export const variablesData = {
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    themeColor: "yellow-400",
    gradient: "from-yellow-400 to-amber-400",
    intro: {
      description: "Think of a variable as a labeled box where you can store information. Just like you might label a box 'Photos' to store your pictures, in programming you give variables names to store data. JavaScript is dynamically typed, meaning you don't need to specify the type of data you're storing - JavaScript figures it out automatically.",
      highlights: [
        { title: "Store Information", text: "Remember user names, scores, settings, etc.", icon: "✅" },
        { title: "Reuse Values", text: "Use the same value multiple times without repeating it", icon: "✅" },
        { title: "Change Data", text: "Update values as your program runs (like a counter)", icon: "✅" },
        { title: "Make Code Readable", text: "Names like 'userName' are clearer than random values", icon: "✅" }
      ]
    },
    declarations: {
      description: "In JavaScript, you have 3 ways to create (declare) a variable. Modern code prefers const and let over the older var keyword.",
      code: `// Modern declaration keywords
let age = 25;              // ✅ Changeable variable
const PI = 3.14;           // ✅ Fixed constant
var name = "Old way";      // ⚠️ Avoid using var!

// Dynamic typing: same variable can hold different types
let data = 42;             // Currently a number
data = "hello";            // Now a string - No error!`,
      constants: {
        keyword: "const",
        description: "Use const by default for values that won't change. It prevents accidental reassignments and makes code easier to optimize.",
        code: `const API_KEY = "abc123";
// API_KEY = "new"; // ❌ ERROR: Assignment to constant variable.`
      }
    },
    types: {
      primitive: [
        { name: "Number", size: "8 bytes", range: "Integer & Float" },
        { name: "String", size: "Dynamic", range: "Textual data" },
        { name: "Boolean", size: "1 byte", range: "true / false" },
        { name: "BigInt", size: "Dynamic", range: "Large integers" },
        { name: "Undefined", size: "N/A", range: "Not assigned" },
        { name: "Null", size: "N/A", range: "Intentionally empty" },
        { name: "Symbol", size: "Unique", range: "Unique identifiers" }
      ]
    },
    limits: {
      description: "Every data type in JavaScript has memory limits. Understanding these helps you write efficient code and avoid precision errors.",
      table: {
        headers: ["Data Type", "Memory Size", "Typical Range", "Max Value"],
        rows: [
          ["Number", "8 bytes", "64-bit float", "1.79e+308"],
          ["Safe Integer", "8 bytes", "±9 quadrillion", "9,007,199,254,740,991"],
          ["BigInt", "Dynamic", "Memory limited", "No theoretical limit"],
          ["String", "2 bytes/char", "UTF-16", "~2^53 characters"],
          ["Array", "Dynamic", "0 to 2^32-1", "4,294,967,295 elements"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Floating-point arithmetic is imprecise (0.1 + 0.2 ≠ 0.3)",
        "Type coercion can cause unexpected results ('5' + 3 = '53')",
        "No integer overflow errors - precision loss happens silently",
        "undefined vs null - two different ways to represent 'nothing'",
        "String immutability - operations create new strings in memory"
      ]
    },
    collections: {
      description: "JavaScript provides powerful built-in structures for grouping data, from simple Arrays to specialized Maps and Sets.",
      code: `// Array - Ordered list
let fruits = ["apple", "banana"];
fruits.push("orange");

// Object - Key-Value pairs
let user = { name: "Alice", age: 25 };

// Map - Advanced Key-Value
let scores = new Map();
scores.set("Alice", 95);

// Set - Unique values only
let unique = new Set([1, 2, 2, 3]); // {1, 2, 3}`
    },
    advanced: {
      description: "JavaScript features like closures, proxies, and symbols allow for complex logic and meta-programming.",
      code: `// Destructuring
const { name, age } = user;
const [first, second] = fruits;

// Spread & Rest
const copy = [...fruits];
const merged = { ...user, city: "NYC" };

// Optional Chaining
const street = user?.address?.street;

// Nullish Coalescing
const theme = user.theme ?? "dark";`
    },
    usage: {
      applications: [
        { title: "Frontend Web", text: "The only language that runs natively in all browsers", icon: "🌐" },
        { title: "Backend (Node.js)", text: "High-performance server-side APIs and microservices", icon: "🖥️" },
        { title: "Mobile (React Native)", text: "Building iOS and Android apps with one codebase", icon: "📱" },
        { title: "Desktop (Electron)", text: "Powering apps like VS Code, Slack, and Discord", icon: "💻" }
      ],
      companies: ["Facebook", "Google", "Netflix", "Uber", "Amazon", "PayPal"]
    },
    purpose: {
      history: "Created in 1995 by Brendan Eich at Netscape in just 10 days! Originally designed to make static web pages interactive, it has evolved into a universal general-purpose language.",
      principles: ["Dynamic Typing", "First-class Functions", "Prototypal Inheritance", "Event-driven architecture"]
    },
    future: {
      trends: [
        "TypeScript becoming the professional standard",
        "Server-side execution with Bun and Deno",
        "Edge computing and serverless dominance",
        "AI integration via libraries like TensorFlow.js"
      ]
    }
  },
  python: {
    id: "python",
    name: "Python",
    icon: "🐍",
    themeColor: "green-400",
    gradient: "from-green-400 to-emerald-400",
    intro: {
      description: "Think of a variable as a labeled container where you can store information. In Python, you don't need any complex setup - you just give a name to a value and Python handles the rest. Its syntax is designed to be as close to English as possible.",
      highlights: [
        { title: "Simplicity", text: "No keywords like 'let' or 'int' needed - just name = value", icon: "✅" },
        { title: "Dynamic Typing", text: "Python figures out the data type automatically", icon: "✅" },
        { title: "Readability", text: "Code that looks like prose, making it easy to learn", icon: "✅" },
        { title: "Batteries Included", text: "Massive standard library for almost any task", icon: "✅" }
      ]
    },
    declarations: {
      description: "Python makes creating variables incredibly simple! No keywords required. Just write the variable name, an equals sign (=), and the value.",
      code: `# Standard variable assignment
age = 25                    # ✅ An integer
name = "Alice"              # ✅ A string
price = 19.99               # ✅ A float (decimal)

# Multiple assignment
x, y, z = 1, 2, 3           # ✅ Assign three at once
a = b = c = 0               # ✅ All are now 0`,
      constants: {
        keyword: "NAME_IN_CAPS",
        description: "Python doesn't have true constants. By convention, we use UPPER_CASE names to tell other developers 'Please don't change this value'.",
        code: `MAX_USERS = 100
PI = 3.14159
# We can still change them, but we shouldn't!
# PI = 3.0 # Technically allowed, but bad practice`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "Unlimited", range: "All whole numbers" },
        { name: "float", size: "8 bytes", range: "Decimal numbers" },
        { name: "str", size: "Dynamic", range: "Unicode text" },
        { name: "bool", size: "1 byte", range: "True / False" },
        { name: "NoneType", size: "N/A", range: "Represent 'nothing'" },
        { name: "complex", size: "16 bytes", range: "Imaginary numbers" }
      ]
    },
    limits: {
      description: "Python integers have arbitrary precision (they grow as large as your RAM allows), but other types have standard limits.",
      table: {
        headers: ["Data Type", "Memory Size", "Precision", "Max Value"],
        rows: [
          ["int", "Unlimited", "Arbitrary precision", "Limited by RAM"],
          ["float", "8 bytes", "15-17 digits", "1.8e+308"],
          ["str", "Dynamic", "UTF-8/Unicode", "Memory limited"],
          ["list", "Dynamic", "O(1) access", "2^63 - 1 elements"],
          ["bool", "1 byte", "True/False", "N/A"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Slower execution than compiled languages (C++/Java)",
        "Global Interpreter Lock (GIL) limits true multi-threading",
        "Significant memory overhead per object (28 bytes for a small int!)",
        "Indentation-sensitive syntax (whitespace matters)",
        "Mobile development is not a first-class citizen"
      ]
    },
    collections: {
      description: "Python has rich, built-in collection types that are highly flexible and performant for data manipulation.",
      code: `# List - Ordered, mutable
nums = [1, 2, 3]
nums.append(4)

# Tuple - Ordered, immutable
point = (10, 20)

# Set - Unique, unordered
unique = {1, 2, 2, 3} # {1, 2, 3}

# Dictionary - Key-Value
user = {"name": "Alice", "age": 25}`
    },
    advanced: {
      description: "Python supports advanced features like decorators, generators, and comprehensive type hinting.",
      code: `# List Comprehension
squares = [x**2 for x in range(10)]

# Generators (Memory efficient)
def count():
    yield 1
    yield 2

# Type Hinting
def greet(name: str) -> str:
    return f"Hello {name}"`
    },
    usage: {
      applications: [
        { title: "AI & Machine Learning", text: "The undisputed king of artificial intelligence", icon: "🤖" },
        { title: "Data Science", text: "Powering pandas, NumPy, and massive data analysis", icon: "📊" },
        { title: "Backend Web", text: "Django and FastAPI are industry-standard frameworks", icon: "🌐" },
        { title: "Automation", text: "Perfect for scripting, scraping, and DevOps tasks", icon: "⚙️" }
      ],
      companies: ["Google", "Instagram", "Spotify", "Netflix", "Dropbox", "NASA"]
    },
    purpose: {
      history: "Released in 1991 by Guido van Rossum. Named after 'Monty Python's Flying Circus', it was created to be a language that prioritizes developer happiness and readability over raw performance.",
      principles: ["Readability counts", "Simple is better than complex", "One obvious way to do things", "Beautiful is better than ugly"]
    },
    future: {
      trends: [
        "Python 3.13+ JIT compiler bringing 2-3x speedup",
        "Continued dominance in AI and LLM infrastructure",
        "Better type checking with Mypy and static analysis",
        "WebAssembly (PyScript) bringing Python to the browser"
      ]
    }
  },
  cpp: {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    themeColor: "indigo-400",
    gradient: "from-indigo-400 to-blue-400",
    intro: {
      description: "Think of a variable as a named memory location with a type. C++ gives you the power of low-level hardware control while providing high-level abstractions like classes and templates. It's the language of choice when every millisecond and every byte matters.",
      highlights: [
        { title: "Zero-Overhead", text: "You only pay for the features you actually use", icon: "✅" },
        { title: "Hardware Control", text: "Directly manipulate memory addresses and CPU features", icon: "✅" },
        { title: "Performance", text: "Compiled to highly optimized native machine code", icon: "✅" },
        { title: "Multi-Paradigm", text: "Supports OOP, Generic, and Procedural styles", icon: "✅" }
      ]
    },
    declarations: {
      description: "C++ is statically typed. You must specify the type before the name, but modern C++11+ allows 'auto' for type deduction.",
      code: `// Traditional explicit typing
int age = 25;              
double price = 19.99;

// Modern C++11+ type inference
auto score = 100;          // Compiler figures out it's an int
auto name = "Alice";       // Compiler figures out it's a string

// Pointer declaration (memory address)
int* ptr = &age;           // Stores the address of 'age'`,
      constants: {
        keyword: "constexpr",
        description: "Modern C++ uses constexpr for compile-time constants, which are even more powerful and optimized than standard const variables.",
        code: `constexpr int MAX_LIMIT = 100; // Calculated at compile-time
const int runtime_val = getUserInput(); // Known at runtime`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "4 bytes*", range: "±2.1 billion" },
        { name: "long long", size: "8 bytes", range: "±9 quintillion" },
        { name: "float", size: "4 bytes", range: "7 decimal digits" },
        { name: "double", size: "8 bytes", range: "15 decimal digits" },
        { name: "bool", size: "1 byte", range: "true / false" },
        { name: "char", size: "1 byte", range: "-128 to 127" },
        { name: "void", size: "0 bytes", range: "No value" }
      ]
    },
    limits: {
      description: "C++ sizes depend on the compiler and architecture, but modern standards (C++11+) provide fixed-width types for reliability.",
      table: {
        headers: ["Data Type", "Standard Size", "Typical Range", "Exact Type"],
        rows: [
          ["int", "4 bytes", "±2.1 billion", "int32_t"],
          ["long long", "8 bytes", "±9 quintillion", "int64_t"],
          ["float", "4 bytes", "7 decimal prec.", "float"],
          ["double", "8 bytes", "15 decimal prec.", "double"],
          ["char", "1 byte", "-128 to 127", "int8_t"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Manual memory management is error-prone (leaks, crashes)",
        "Extremely complex language with a steep learning curve",
        "Undefined behavior can lead to silent security bugs",
        "Slow compilation times for large template-heavy projects",
        "No standard build system or package manager (CMake used mostly)"
      ]
    },
    collections: {
      description: "The Standard Template Library (STL) provides highly optimized containers for every use case.",
      code: `// Vector - Dynamic array (Preferred)
std::vector<int> vec = {1, 2, 3};
vec.push_back(4);

// Map - Ordered Key-Value
std::map<std::string, int> ages;
ages["Alice"] = 25;

// Set - Unique ordered elements
std::set<int> unique = {1, 2, 2, 3}; // {1, 2, 3}`
    },
    advanced: {
      description: "C++ advanced features include move semantics, smart pointers, and template meta-programming.",
      code: `// Smart Pointers (RAII)
auto ptr = std::make_unique<int>(42);

// Lambda Expressions
auto sum = [](int a, int b) { return a + b; };

// Templates (Generic Code)
template<typename T>
T max(T a, T b) { return a > b ? a : b; }`
    },
    usage: {
      applications: [
        { title: "Game Engines", text: "Unreal Engine and AAA games use C++ for raw speed", icon: "🎮" },
        { title: "Operating Systems", text: "The core of Windows, macOS, and performance kernels", icon: "💻" },
        { title: "High-Freq Trading", text: "Executing financial trades in microseconds", icon: "💹" },
        { title: "Browsers", text: "Chrome and Firefox engines are written in C++", icon: "🌐" }
      ],
      companies: ["Microsoft", "Google", "Apple", "Adobe", "Blizzard", "NASA"]
    },
    purpose: {
      history: "Created in 1985 by Bjarne Stroustrup as 'C with Classes'. The goal was to add high-level organization to C without losing the efficiency that made C great.",
      principles: ["Don't pay for what you don't use", "Leave no room for a lower-level language", "Trust the programmer"]
    },
    future: {
      trends: [
        "C++23/26 focusing on safety and better ergonomics",
        "Competition from Rust forcing better safety defaults",
        "Modules finally replacing old header-file system",
        "Increasing use in high-performance AI inference"
      ]
    }
  },
  java: {
    id: "java",
    name: "Java",
    icon: "☕",
    themeColor: "red-400",
    gradient: "from-orange-500 to-red-500",
    intro: {
      description: "Think of a variable as a strictly labeled container. In Java, every container has a specific type that determines exactly what can fit inside. Java is famous for its 'Write Once, Run Anywhere' philosophy and its strict rules that help prevent mistakes.",
      highlights: [
        { title: "Reliability", text: "Strict rules catch many errors before the program even runs", icon: "✅" },
        { title: "Explicit Code", text: "It's always clear what kind of data you're working with", icon: "✅" },
        { title: "Memory Safety", text: "Java manages memory for you automatically (Garbage Collection)", icon: "✅" },
        { title: "Scalability", text: "Perfect for large teams and massive codebases", icon: "✅" }
      ]
    },
    declarations: {
      description: "In Java, every variable declaration follows this pattern: Type name = value;. You must tell Java the Type (like int, String, or double) first.",
      code: `// Basic pattern: Type variableName = value;
int age = 25;                // ✅ Integer (whole number)
double price = 19.99;        // ✅ Double (decimal number)
boolean isActive = true;     // ✅ Boolean (true or false)
char grade = 'A';            // ✅ Character (single letter)

// Multiple variables of the same type
int x = 10, y = 20, z = 30;  // ✅ All are integers

// Reassigning values (must match the type!)
age = 26;                    // ✅ OK
// age = "Alice";            // ❌ ERROR: Cannot put String in an int!`,
      constants: {
        keyword: "final",
        description: "Use the final keyword to create a constant. A final variable cannot be changed once it is assigned a value.",
        code: `final double PI = 3.14159;  // ✅ Value is locked!
// PI = 3.14;                // ❌ ERROR: cannot assign a value to final variable

final int MAX_ATTEMPTS = 3;
// MAX_ATTEMPTS = 5;         // ❌ ERROR`
      }
    },
    types: {
      primitive: [
        { name: "byte", size: "8-bit", range: "-128 to 127" },
        { name: "short", size: "16-bit", range: "-32,768 to 32,767" },
        { name: "int", size: "32-bit", range: "±2.1 billion" },
        { name: "long", size: "64-bit", range: "±9 quintillion" },
        { name: "float", size: "32-bit", range: "±3.4e38" },
        { name: "double", size: "64-bit", range: "±1.7e308" },
        { name: "char", size: "16-bit", range: "Unicode characters" },
        { name: "boolean", size: "1-bit*", range: "true / false" }
      ]
    },
    limits: {
      description: "Java types have strictly defined sizes, ensuring the same behavior across all platforms (JVM).",
      table: {
        headers: ["Data Type", "Size", "Range", "Default"],
        rows: [
          ["byte", "8-bit", "-128 to 127", "0"],
          ["short", "16-bit", "-32,768 to 32,767", "0"],
          ["int", "32-bit", "±2.1 billion", "0"],
          ["long", "64-bit", "±9 quintillion", "0L"],
          ["float", "32-bit", "±3.4e38", "0.0f"],
          ["double", "64-bit", "±1.7e308", "0.0d"],
          ["char", "16-bit", "Unicode", "'\u0000'"]
        ]
      }
    },
    limitations: {
      warnings: [
        "NullPointerException is the most common runtime error",
        "Verbose syntax compared to modern languages like Kotlin",
        "Primitive types are not objects (requires Wrapper classes)",
        "No unsigned integer types (except via Java 8+ methods)",
        "Memory overhead of the JVM (Java Virtual Machine)"
      ]
    },
    collections: {
      description: "Java has a robust Collections Framework for handling data structures like lists, sets, and maps.",
      code: `// ArrayList - Dynamic array
List<String> list = new ArrayList<>();
list.add("Java");

// HashMap - Key-Value pairs
Map<String, Integer> map = new HashMap<>();
map.put("Score", 100);

// HashSet - Unique values only
Set<Integer> set = new HashSet<>();
set.add(1);`
    },
    advanced: {
      description: "Java features like Streams, Lambdas, and Generics allow for functional and type-safe programming.",
      code: `// Streams (Modern Java)
list.stream()
    .filter(s -> s.startsWith("J"))
    .forEach(System.out::println);

// Optional (Avoid Nulls)
Optional<String> name = Optional.ofNullable(null);

// var (Type Inference - Java 10+)
var message = "Hello";`
    },
    usage: {
      applications: [
        { title: "Enterprise Software", text: "Backbone of large-scale banking and corporate systems", icon: "🏢" },
        { title: "Android Apps", text: "Primary language for Android development for over a decade", icon: "📱" },
        { title: "Big Data", text: "Powering Hadoop, Spark, and other massive data tools", icon: "📊" },
        { title: "Server-Side", text: "Spring Boot is one of the most popular backend frameworks", icon: "🖥️" }
      ],
      companies: ["Google", "Netflix", "Uber", "Amazon", "eBay", "LinkedIn"]
    },
    purpose: {
      history: "Created in 1995 by James Gosling at Sun Microsystems. Originally called 'Oak', it was designed for interactive television but became the language of the web and enterprise.",
      principles: ["Simple, Object-Oriented, and Familiar", "Robust and Secure", "Architecture-Neutral and Portable (WORA)", "High Performance", "Interpreted, Threaded, and Dynamic"]
    },
    future: {
      trends: [
        "Project Loom: Virtual threads for massive scalability",
        "Project Valhalla: Value types for better performance",
        "Project Panama: Better interoperability with native code",
        "Regular 6-month release cycle keeping the language modern"
      ]
    }
  },
  c: {
    id: "c",
    name: "C",
    icon: "🔷",
    themeColor: "blue-400",
    gradient: "from-blue-500 to-cyan-500",
    intro: {
      description: "Think of a variable as a direct name for a memory address. C is a low-level language, meaning it doesn't hide how the computer works. When you create a variable, you are literally telling the computer to set aside a specific number of bits in its RAM.",
      highlights: [
        { title: "Direct Memory Access", text: "Total control over how much RAM your program uses", icon: "✅" },
        { title: "Blazing Speed", text: "No overhead - code runs as close to the hardware as possible", icon: "✅" },
        { title: "Predictability", text: "You know exactly how every bit of data is stored", icon: "✅" },
        { title: "Portability", text: "Foundational language for operating systems and embedded devices", icon: "✅" }
      ]
    },
    declarations: {
      description: "In C, declaration always follows a strict pattern: type name = value;. Unlike modern languages, C is very picky about where and how you declare them.",
      code: `// Standard pattern: type variable_name = value;
int score = 100;             // ✅ Integer (whole number)
float price = 19.99f;        // ✅ Float (decimal number)
double pi = 3.14159265;      // ✅ Double (precise decimal)
char grade = 'A';            // ✅ Character (single letter)

// Multiple variables of the same type
int x = 10, y = 20, z = 30;  // ✅ All are integers

// Declaration without initialization (BE CAREFUL!)
int count;                   // ⚠️ Contains random data!
count = 0;                   // ✅ Now it's safe to use`,
      constants: {
        keyword: "const",
        description: "If you want to make a variable that cannot be changed after it's created, use the const keyword.",
        code: `const float PI = 3.14159;  // ✅ Value is locked!
// PI = 3.14;               // ❌ ERROR: Cannot change constant!

const int MAX_USERS = 100;
// MAX_USERS = 200;         // ❌ ERROR`
      }
    },
    types: {
      primitive: [
        { name: "char", size: "1 byte", range: "-128 to 127" },
        { name: "int", size: "4 bytes", range: "±2.1 billion" },
        { name: "short", size: "2 bytes", range: "±32,768" },
        { name: "long", size: "4 or 8 bytes", range: "Varies" },
        { name: "float", size: "4 bytes", range: "7 decimal digits" },
        { name: "double", size: "8 bytes", range: "15 decimal digits" },
        { name: "void", size: "0 bytes", range: "N/A" }
      ]
    },
    limits: {
      description: "C gives you direct control over memory, but limits are platform-dependent. Standard sizes (C99+) are generally predictable.",
      table: {
        headers: ["Data Type", "Typical Size", "Minimum Value", "Maximum Value"],
        rows: [
          ["char", "1 byte", "-128", "127"],
          ["unsigned char", "1 byte", "0", "255"],
          ["short", "2 bytes", "-32,768", "32,767"],
          ["int", "4 bytes", "-2,147,483,648", "2,147,483,647"],
          ["long long", "8 bytes", "-9.22e18", "9.22e18"],
          ["float", "4 bytes", "1.2e-38", "3.4e38"],
          ["double", "8 bytes", "2.3e-308", "1.7e308"]
        ]
      }
    },
    limitations: {
      warnings: [
        "No bounds checking for arrays (buffer overflows)",
        "No automatic memory management (manual malloc/free)",
        "Undefined behavior is easy to trigger",
        "No built-in string type (char arrays only)",
        "Integer overflow happens silently"
      ]
    },
    collections: {
      description: "C doesn't have a rich standard library for collections. You mostly work with raw arrays or build your own structures.",
      code: `// Array - Fixed size, contiguous memory
int nums[5] = {1, 2, 3, 4, 5};

// Struct - Custom data type
struct User {
    char name[50];
    int age;
};

// Pointer Array
int* heap_array = malloc(5 * sizeof(int));`
    },
    advanced: {
      description: "C's most powerful (and dangerous) features are Pointers and Direct Memory Access.",
      code: `// Pointers - Memory addresses
int x = 42;
int *ptr = &x; // ptr holds address of x
*ptr = 100;    // x is now 100

// Function Pointers
void (*fn_ptr)(int) = &my_function;

// Bit Manipulation
int flags = 1 << 3; // Set 4th bit`
    },
    usage: {
      applications: [
        { title: "Operating Systems", text: "Windows, Linux, and macOS kernels are mostly written in C", icon: "💻" },
        { title: "Embedded Systems", text: "Powering everything from microwaves to spacecraft", icon: "🛰️" },
        { title: "Compilers", text: "Most other languages' compilers are written in C", icon: "⚙️" },
        { title: "Game Engines", text: "Performance-critical parts of engines like Doom or Quake", icon: "🎮" }
      ],
      companies: ["Microsoft", "Apple", "Linux Foundation", "NASA", "SpaceX", "Intel"]
    },
    purpose: {
      history: "Developed in 1972 by Dennis Ritchie at Bell Labs for the Unix operating system. It was designed to be a system programming language that was both efficient and portable.",
      principles: ["Efficiency above all", "Small, simple core language", "Trust the programmer", "Close to hardware"]
    },
    future: {
      trends: [
        "C23: The latest standard adding modern features like nullptr and static_assert",
        "Continued dominance in OS and embedded development",
        "Modern tooling (Clang, LLVM) making C development safer"
      ]
    }
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "🔵",
    themeColor: "blue-400",
    gradient: "from-blue-500 to-indigo-500",
    intro: {
      description: "Think of a variable as a labeled box with a safety lock. TypeScript is JavaScript with syntax for types. It adds a layer of safety to your JavaScript variables, helping you catch errors before you even run your code.",
      highlights: [
        { title: "Type Safety", text: "Catch bugs early before they reach users", icon: "✅" },
        { title: "Better Tooling", text: "Amazing autocomplete and refactoring support", icon: "✅" },
        { title: "Clear Intent", text: "Types document what your code is supposed to do", icon: "✅" },
        { title: "Scalability", text: "Essential for teams and large codebases", icon: "✅" }
      ]
    },
    declarations: {
      description: "TypeScript uses the same let and const keywords as JavaScript, but adds type annotations.",
      code: `// Standard pattern: let name: type = value;
let age: number = 25;            // ✅ Explicitly a number
let name: string = "Alice";      // ✅ Explicitly text
let isActive: boolean = true;    // ✅ Explicitly true/false

// Type Inference (TS often figures it out for you!)
let score = 100;                 // ✅ TS knows this is a number
// score = "high";               // ❌ ERROR: Type 'string' is not assignable to type 'number'

// Constants
const PI: number = 3.14159;      // ✅ Unchangeable number`,
      constants: {
        keyword: "const",
        description: "Same as JavaScript, but with optional type safety.",
        code: `const API_KEY: string = "secret-123";
// API_KEY = "new-key"; // ❌ Error: Cannot assign to 'API_KEY' because it is a constant.`
      }
    },
    types: {
      primitive: [
        { name: "number", size: "8 bytes", range: "Integer & Float" },
        { name: "string", size: "Dynamic", range: "Textual data" },
        { name: "boolean", size: "1 byte", range: "true / false" },
        { name: "any", size: "Varies", range: "Bypass type checking" },
        { name: "unknown", size: "Varies", range: "Safe 'any' alternative" },
        { name: "void", size: "0 bytes", range: "No return value" }
      ]
    },
    limits: {
      description: "Since TypeScript compiles to JavaScript, it shares the same memory limits as JS.",
      table: {
        headers: ["Data Type", "TS Type", "JS Equivalent", "Limit"],
        rows: [
          ["Number", "number", "Number", "64-bit Float"],
          ["Large Int", "bigint", "BigInt", "Limited by Memory"],
          ["String", "string", "String", "Typically 1GB-2GB"],
          ["Array", "T[]", "Array", "2^32 - 1 elements"],
          ["Object", "object", "Object", "Limited by Heap"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Type safety only exists at compile-time (removed at runtime)",
        "The 'any' type can bypass all safety checks (use sparingly!)",
        "Complexity increases with deep nested generics",
        "Slow compilation for extremely large projects",
        "Third-party libraries might lack proper type definitions"
      ]
    },
    collections: {
      description: "TypeScript improves JavaScript's collections by adding type safety to arrays, maps, and sets.",
      code: `// Type-safe Array
let list: number[] = [1, 2, 3];
list.push(4); // ✅ OK
// list.push("5"); // ❌ Error

// Tuple - Fixed length and types
let person: [string, number] = ["Alice", 25];

// Type-safe Map
let map = new Map<string, number>();
map.set("Alice", 100);`
    },
    advanced: {
      description: "Interfaces, Aliases, and Union types are the heart of TypeScript's power.",
      code: `// Interface - Define object structure
interface User {
    name: string;
    id: number;
}

// Union Types
let result: string | number;
result = "Success";
result = 200;

// Generics
function wrap<T>(item: T): T[] {
    return [item];
}`
    },
    usage: {
      applications: [
        { title: "Web Apps", text: "Industry standard for modern frontend frameworks like React", icon: "🌐" },
        { title: "Backend", text: "Becoming the default choice for Node.js APIs", icon: "🖥️" },
        { title: "Large Teams", text: "Essential for managing large codebases with many developers", icon: "👥" },
        { title: "Desktop", text: "Powering apps like VS Code and Slack (via Electron)", icon: "💻" }
      ],
      companies: ["Microsoft", "Airbnb", "Slack", "Discord", "Twitch", "Asana"]
    },
    purpose: {
      history: "Released by Microsoft in 2012, created by Anders Hejlsberg (also created C#). It was designed to solve JavaScript's scalability problems for large applications.",
      principles: ["Optional static typing", "Modern JavaScript features", "Zero runtime overhead", "Great tooling"]
    },
    future: {
      trends: [
        "Near 100% adoption in new professional web projects",
        "Better integration with browser APIs and Node.js",
        "Faster type-checking with SWC and other native tools"
      ]
    }
  },
  go: {
    id: "go",
    name: "Go",
    icon: "🔷",
    themeColor: "cyan-400",
    gradient: "from-cyan-500 to-blue-500",
    intro: {
      description: "Think of a variable as a simple, labeled storage space. Go believes in keeping things simple and straightforward - no fancy tricks, just clean, readable code.",
      highlights: [
        { title: "Simple Syntax", text: "Easy to learn and read - no complexity", icon: "✅" },
        { title: "Type Safety", text: "Catch errors at compile time", icon: "✅" },
        { title: "Fast Performance", text: "Compiles to efficient machine code", icon: "✅" },
        { title: "Clear Code", text: "One obvious way to do things", icon: "✅" }
      ]
    },
    declarations: {
      description: "Go has two main ways to declare variables: var (formal) and := (short, most common).",
      code: `// Short declaration (most common)
name := "Alice"                  // ✅ Type inferred as string
age := 25                        // ✅ Type inferred as int

// Formal var declaration
var score int = 100              // ✅ Explicit type
var count = 42                   // ✅ Inferred with var

// Multiple assignment
x, y := 10, 20
a, b = b, a                      // ✅ Swap values easily!`,
      constants: {
        keyword: "const",
        description: "Constants must be compile-time values and cannot be modified.",
        code: `const PI = 3.14159
const MAX_USERS int = 100`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "4 or 8 bytes", range: "±2.1B or ±9 quintillion" },
        { name: "string", size: "Dynamic", range: "UTF-8 text" },
        { name: "bool", size: "1 byte", range: "true / false" },
        { name: "float64", size: "8 bytes", range: "Decimal numbers" },
        { name: "uint32", size: "4 bytes", range: "0 to 4.2 billion" },
        { name: "rune", size: "4 bytes", range: "Unicode code point" }
      ]
    },
    limits: {
      description: "Go provides platform-independent types but also platform-specific ones like 'int'.",
      table: {
        headers: ["Data Type", "Size", "Min", "Max"],
        rows: [
          ["int8", "1 byte", "-128", "127"],
          ["int32 / rune", "4 bytes", "-2.14e9", "2.14e9"],
          ["int64", "8 bytes", "-9.22e18", "9.22e18"],
          ["float32", "4 bytes", "1.2e-38", "3.4e38"],
          ["float64", "8 bytes", "2.3e-308", "1.7e308"],
          ["string", "Varies", "0", "Memory Limited"]
        ]
      }
    },
    limitations: {
      warnings: [
        "No traditional inheritance (uses composition/interfaces)",
        "Error handling can be repetitive (if err != nil)",
        "Strict rules: unused variables cause compilation errors!",
        "Nil pointers can still cause panics",
        "Generics are relatively new and less powerful than C++"
      ]
    },
    collections: {
      description: "Go uses Slices (dynamic arrays) and Maps as its primary collection types.",
      code: `// Slice - Dynamic array
nums := []int{1, 2, 3}
nums = append(nums, 4)

// Map - Key-Value pairs
scores := make(map[string]int)
scores["Alice"] = 95

// Array - Fixed size
var arr [5]int`
    },
    advanced: {
      description: "Pointers, Structs, and Interfaces define Go's approach to data organization.",
      code: `// Pointers
x := 42
ptr := &x // Address of x
fmt.Println(*ptr) // Value of x

// Struct
type User struct {
    Name string
    Age  int
}

// Interface
type Shape interface {
    Area() float64
}`
    },
    usage: {
      applications: [
        { title: "Cloud Native", text: "The language of Docker and Kubernetes", icon: "☁️" },
        { title: "Microservices", text: "Perfect for high-concurrency backend services", icon: "⚙️" },
        { title: "DevOps", text: "Powering modern infrastructure tools", icon: "🛠️" },
        { title: "Networking", text: "Efficient handling of network protocols", icon: "🌐" }
      ],
      companies: ["Google", "Uber", "Dropbox", "Netflix", "Twitch", "Cloudflare"]
    },
    purpose: {
      history: "Created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. Designed to improve programming productivity in an era of multicore, networked machines and large codebases.",
      principles: ["Simplicity", "Fast compilation", "Concurrency built-in", "Efficiency"]
    },
    future: {
      trends: [
        "Expanding use in AI infrastructure and data processing",
        "Continued evolution of Generics and tooling",
        "Dominance in cloud-native and serverless architectures"
      ]
    }
  },
  rust: {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    themeColor: "orange-400",
    gradient: "from-orange-500 to-amber-500",
    intro: {
      description: "Think of a variable as a safe, controlled storage location. Rust takes memory safety seriously - every variable has an owner, and Rust tracks who can read or modify it at all times.",
      highlights: [
        { title: "Memory Safety", text: "Catch memory bugs at compile time, not runtime", icon: "✅" },
        { title: "Zero-Cost Abstractions", text: "High-level features with no runtime overhead", icon: "✅" },
        { title: "Fearless Concurrency", text: "Safe multi-threading guaranteed by compiler", icon: "✅" },
        { title: "No Garbage Collection", text: "Predictable performance without GC pauses", icon: "✅" }
      ]
    },
    declarations: {
      description: "Rust variables are immutable by default. This is intentional - it prevents accidental modifications and makes your code safer.",
      code: `// Immutable by default
let age = 25;                    // ✅ Cannot be changed
// age = 26;                     // ❌ ERROR!

// Mutable with 'mut'
let mut count = 0;               // ✅ Can be modified
count += 1;                      // ✅ OK

// Shadowing
let x = 5;
let x = x + 1;                   // ✅ Shadows old x with new value`,
      constants: {
        keyword: "const",
        description: "Constants must have explicit types and be known at compile-time.",
        code: `const MAX_POINTS: u32 = 100_000;`
      }
    },
    types: {
      primitive: [
        { name: "i32", size: "4 bytes", range: "±2.1 billion" },
        { name: "u64", size: "8 bytes", range: "0 to 18 quintillion" },
        { name: "f32", size: "4 bytes", range: "7 decimal digits" },
        { name: "f64", size: "8 bytes", range: "15 decimal digits" },
        { name: "bool", size: "1 byte", range: "true / false" },
        { name: "char", size: "4 bytes", range: "Unicode code point" },
        { name: "usize", size: "Arch", range: "Pointer-sized integer" }
      ]
    },
    limits: {
      description: "Rust has explicit integer types with fixed sizes.",
      table: {
        headers: ["Data Type", "Size", "Min", "Max"],
        rows: [
          ["i8", "1 byte", "-128", "127"],
          ["i32", "4 bytes", "±2.1 billion", "±2.1 billion"],
          ["u64", "8 bytes", "0", "1.84e19"],
          ["f32", "4 bytes", "±3.4e38", "7 digits prec."],
          ["f64", "8 bytes", "±1.7e308", "15 digits prec."],
          ["usize", "Arch", "0", "2^64-1 (on 64-bit)"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Steep learning curve (Borrow Checker is tough!)",
        "Slow compilation times compared to Go or C",
        "Strict rules about reference lifetimes",
        "No traditional class-based inheritance",
        "Verbose error handling (Result/Option)"
      ]
    },
    collections: {
      description: "Rust provides memory-safe collections like Vectors, Strings, and HashMaps.",
      code: `// Vector - Dynamic array
let mut v = vec![1, 2, 3];
v.push(4);

// String - UTF-8 encoded
let mut s = String::from("Hello");
s.push_str(" Rust");

// HashMap - Key-Value pairs
use std::collections::HashMap;
let mut scores = HashMap::new();
scores.insert("Blue", 10);`
    },
    advanced: {
      description: "Rust's Ownership and Borrowing system is its most unique and powerful feature.",
      code: `// Ownership Transfer
let s1 = String::from("hello");
let s2 = s1; // s1 is now invalid!

// Borrowing (References)
let len = calculate_length(&s2);

// Enums with Data
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}`
    },
    usage: {
      applications: [
        { title: "Systems Programming", text: "Modern alternative to C/C++ for OS and drivers", icon: "⚙️" },
        { title: "WebAssembly", text: "Leading language for high-performance web code", icon: "🌐" },
        { title: "Blockchain", text: "Safe code for smart contracts and cryptos", icon: "🔗" },
        { title: "Performance Tools", text: "Rewriting bottlenecks in CLI tools and libraries", icon: "🚀" }
      ],
      companies: ["AWS", "Discord", "Cloudflare", "Meta", "Google", "Microsoft"]
    },
    purpose: {
      history: "Started at Mozilla in 2006 by Graydon Hoare. Developed to fix memory safety issues in the Firefox browser engine.",
      principles: ["Safety", "Speed", "Concurrency"]
    },
    future: {
      trends: [
        "Rapidly growing in the Linux Kernel and Cloud infrastructure",
        "Improving compile times and IDE support",
        "Increasingly used for AI and ML infrastructure"
      ]
    }
  },
  kotlin: {
    id: "kotlin",
    name: "Kotlin",
    icon: "💜",
    themeColor: "purple-400",
    gradient: "from-purple-500 to-pink-500",
    intro: {
      description: "Think of a variable as a modern, safe container. Kotlin is designed to be 'better Java' - it takes everything good about Java and adds safety, conciseness, and modern features like immutability by default.",
      highlights: [
        { title: "Null Safety", text: "Eliminate common crashes by design", icon: "✅" },
        { title: "Less Boilerplate", text: "Clean syntax means more work with less code", icon: "✅" },
        { title: "Interoperability", text: "Works 100% with Java code and libraries", icon: "✅" },
        { title: "Modern Features", text: "Smart casts, string templates, and more", icon: "✅" }
      ]
    },
    declarations: {
      description: "Kotlin has two main keywords: val (read-only) and var (mutable).",
      code: `// Immutable (read-only)
val name = "Alice"               // ✅ Cannot be changed
// name = "Bob"                  // ❌ ERROR!

// Mutable
var count = 0                    // ✅ Can be modified
count++                          // ✅ OK

// Null safety
var nickname: String? = null     // ✅ Optional type`,
      constants: {
        keyword: "const val",
        description: "Compile-time constants inside objects or at top-level.",
        code: `const val PI = 3.14159`
      }
    },
    types: {
      primitive: [
        { name: "Int", size: "32-bit", range: "±2.1 billion" },
        { name: "Long", size: "64-bit", range: "±9 quintillion" },
        { name: "Float", size: "32-bit", range: "±3.4e38" },
        { name: "Double", size: "64-bit", range: "±1.7e308" },
        { name: "Boolean", size: "1-bit*", range: "true / false" },
        { name: "Char", size: "16-bit", range: "Unicode" },
        { name: "String", size: "Dynamic", range: "Text" }
      ]
    },
    limits: {
      description: "Shares the same JVM types as Java but with better syntax.",
      table: {
        headers: ["Data Type", "Size", "Min", "Max"],
        rows: [
          ["Byte", "8-bit", "-128", "127"],
          ["Int", "32-bit", "±2.1 billion", "±2.1 billion"],
          ["Long", "64-bit", "±9 quintillion", "±9 quintillion"],
          ["Float", "32-bit", "±3.4e38", "6-7 digits prec."],
          ["Double", "64-bit", "±1.7e308", "15-16 digits prec."]
        ]
      }
    },
    limitations: {
      warnings: [
        "Compilation is slightly slower than Java",
        "JVM overhead (though Native/JS targets exist)",
        "Learning modern idioms after Java can take time",
        "Binary size increase for small Android apps",
        "Strict null safety can feel verbose at first"
      ]
    },
    collections: {
      description: "Kotlin distinguishes between mutable and read-only collections for better safety.",
      code: `// Read-only list
val list = listOf("A", "B")

// Mutable list
val mutable = mutableListOf(1, 2)
mutable.add(3)

// Map
val map = mapOf("key" to 42)`
    },
    advanced: {
      description: "Extension functions and Data classes are Kotlin's secret weapons.",
      code: `// Data Class (Auto equals/hashCode)
data class User(val name: String, val id: Int)

// Extension Function
fun String.shout() = this.toUpperCase() + "!"

// Smart Casts
if (x is String) print(x.length) // x cast to String automatically`
    },
    usage: {
      applications: [
        { title: "Android", text: "Google's preferred language for Android apps", icon: "📱" },
        { title: "Backend", text: "Modern choice for Spring Boot and Ktor APIs", icon: "🖥️" },
        { title: "Multiplatform", text: "Share code between Android, iOS, and Web", icon: "🌍" },
        { title: "Data Science", text: "Gaining traction with Kotlin for Data Science", icon: "📊" }
      ],
      companies: ["Google", "JetBrains", "Netflix", "Uber", "Airbnb", "Pinterest"]
    },
    purpose: {
      history: "Developed by JetBrains in 2011. Designed to be more concise and safe than Java while being fully interoperable.",
      principles: ["Conciseness", "Safety", "Pragmatism", "Interoperability"]
    },
    future: {
      trends: [
        "Kotlin Multiplatform (KMP) taking over cross-platform dev",
        "Expanding use in Serverless and Cloud Native",
        "Deep integration with modern AI and data libraries"
      ]
    }
  },
  swift: {
    id: "swift",
    name: "Swift",
    icon: "🍎",
    themeColor: "orange-400",
    gradient: "from-orange-500 to-red-500",
    intro: {
      description: "Think of a variable as a safe, labeled storage spot. Swift is Apple's modern language designed to be safe, fast, and expressive - perfect for building iOS and macOS apps.",
      highlights: [
        { title: "Type Safety", text: "Catch errors at compile time before running", icon: "✅" },
        { title: "Optional Safety", text: "Explicit handling of nil prevents crashes", icon: "✅" },
        { title: "Performance", text: "Compiled code runs as fast as C/C++", icon: "✅" },
        { title: "Modern Syntax", text: "Clean, readable code that's easy to maintain", icon: "✅" }
      ]
    },
    declarations: {
      description: "Swift uses let for constants (immutable) and var for variables (mutable).",
      code: `// Constant (preferred)
let name = "Alice"               // ✅ Cannot be changed
// name = "Bob"                  // ❌ ERROR!

// Variable
var count = 0                    // ✅ Can be modified
count += 1                       // ✅ OK

// Optionals
var age: Int? = 25               // ✅ Can be nil
age = nil                        // ✅ OK`,
      constants: {
        keyword: "let",
        description: "Constants in Swift are declared with let and are highly optimized.",
        code: `let PI = 3.14159`
      }
    },
    types: {
      primitive: [
        { name: "Int", size: "8 bytes", range: "±9 quintillion" },
        { name: "Double", size: "8 bytes", range: "15 decimal digits" },
        { name: "String", size: "Dynamic", range: "Unicode text" },
        { name: "Bool", size: "1 byte", range: "true / false" },
        { name: "Float", size: "4 bytes", range: "7 decimal digits" },
        { name: "Character", size: "Varies", range: "Extended grapheme cluster" }
      ]
    },
    limits: {
      description: "Swift uses architecture-dependent sizes for 'Int' but fixed for others.",
      table: {
        headers: ["Data Type", "Size", "Min", "Max"],
        rows: [
          ["Int8", "1 byte", "-128", "127"],
          ["Int", "Word Size", "±2.1B or ±9Q", "±2.1B or ±9Q"],
          ["Float", "4 bytes", "±3.4e38", "±3.4e38"],
          ["Double", "8 bytes", "±1.7e308", "±1.7e308"],
          ["String", "Varies", "0", "Memory Limited"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Locked primarily to Apple's ecosystem (iOS/macOS)",
        "ABI stability issues in early years (now fixed)",
        "Complex generic system can be hard to learn",
        "Swift Package Manager was late to the party",
        "Large binary sizes for simple apps"
      ]
    },
    collections: {
      description: "Swift's standard collections include Arrays, Dictionaries, and Sets.",
      code: `// Array - Ordered
var fruits = ["Apple", "Banana"]
fruits.append("Orange")

// Dictionary - Key-Value
var scores = ["Alice": 95, "Bob": 87]

// Set - Unique values
var unique = Set([1, 2, 2, 3])`
    },
    advanced: {
      description: "Optionals and Closures make Swift both safe and highly flexible.",
      code: `// Optional Binding
if let val = optionalValue {
    print(val)
}

// Nil Coalescing
let name = optionalName ?? "Guest"

// Closures
let greet = { (name: String) in
    print("Hello \(name)")
}`
    },
    usage: {
      applications: [
        { title: "iOS / macOS", text: "The standard for building all iPhone, iPad, and Mac apps", icon: "📱" },
        { title: "Server-Side", text: "Growing with frameworks like Vapor and Kitura", icon: "🖥️" },
        { title: "Systems", text: "Highly efficient for performance-critical components", icon: "⚙️" },
        { title: "Watch/TV", text: "Powering apps for Apple Watch and Apple TV", icon: "📺" }
      ],
      companies: ["Apple", "Uber", "Lyft", "Airbnb", "LinkedIn", "Instagram"]
    },
    purpose: {
      history: "Developed by Apple and released in 2014. Designed to replace Objective-C with a safer, faster, and more modern alternative.",
      principles: ["Safe", "Fast", "Expressive"]
    },
    future: {
      trends: [
        "SwiftUI becoming the default for all Apple UI dev",
        "Expanding to Server-Side and Cloud Native via Swift on Linux",
        "Integration with AI through Apple's Core ML"
      ]
    }
  }
};