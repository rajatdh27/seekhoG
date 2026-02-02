export const variablesData = {
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    themeColor: "yellow-400",
    gradient: "from-yellow-400 to-amber-400",
    intro: {
      description: "A variable is like a labeled box in the computer's memory. You give the box a name (the label) and put information inside. In JavaScript, these boxes are 'magic'—they can hold a number one minute and a word the next without any extra setup.",
      highlights: [
        { title: "The Label", text: "Choose a name like 'playerScore' so you know what's inside.", icon: "🏷️" },
        { title: "The Box", text: "The computer sets aside a tiny bit of space to hold your data.", icon: "📦" },
        { title: "The Content", text: "You can put numbers, text, or lists inside the box.", icon: "💾" },
        { title: "Changing", text: "You can empty the box and put something new in it anytime.", icon: "🔄" }
      ]
    },
    declarations: {
      description: "To create a variable box in JavaScript, you use 'let' (if you'll change it later) or 'const' (if you want to lock it).",
      code: `// 1. Create a box named 'age' and put 25 in it
let age = 25;

// 2. Change the content of the 'age' box
age = 26; 

// 3. Create a locked box named 'pi'
const pi = 3.14;`,
      constants: {
        keyword: "const",
        description: "Use 'const' for boxes that should never be emptied or changed, like your name or a math rule.",
        code: `const myName = "Rajat";`
      }
    },
    types: {
      primitive: [
        { name: "Number", size: "8 bytes", range: "Any number (10, 3.14, -5)" },
        { name: "String", size: "Dynamic", range: "Text inside quotes (\"Hello\")" },
        { name: "Boolean", size: "1 bit", range: "True or False (Yes/No)" },
        { name: "Undefined", size: "N/A", range: "A box that was never filled" }
      ]
    },
    limits: {
      description: "JavaScript boxes are very flexible, but they have limits on how much detail they can remember for extremely large numbers.",
      table: {
        headers: ["Box Type", "What fits?", "Limit"],
        rows: [
          ["Number", "Standard numbers", "Up to 15 digits precisely"],
          ["BigInt", "Huge whole numbers", "Limited only by computer memory"],
          ["String", "Text data", "Over 1 billion characters"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Math with decimals can be slightly fuzzy (0.1 + 0.2 isn't exactly 0.3)",
        "If you add text '5' to number 5, JS gets confused and makes '55'",
        "JS is very loose; it won't stop you from doing silly things with boxes"
      ]
    },
    collections: {
      description: "Sometimes you need a container that holds many smaller boxes at once.",
      code: `// A List (Array) - One big box with slots
let colors = ["Red", "Green", "Blue"];

// A Group (Object) - A box with named folders
let car = {
  brand: "Tesla",
  model: "Model 3"
};
`
    },
    advanced: {
      description: "Quick ways to move data between boxes.",
      code: `// Pulling data out of a group box
const { brand } = car; // 'brand' is now its own box!
`
    },
    usage: {
      applications: [
        { title: "Websites", text: "Making buttons click and menus slide.", icon: "🌐" },
        { title: "Apps", text: "Building mobile apps for iPhone and Android.", icon: "📱" },
        { title: "Servers", text: "Handling data behind the scenes.", icon: "🖥️" }
      ],
      companies: ["Google", "Netflix", "Facebook"]
    }
  },
  python: {
    id: "python",
    name: "Python",
    icon: "🐍",
    themeColor: "green-400",
    gradient: "from-green-400 to-emerald-400",
    intro: {
      description: "A variable is like a labeled box in the computer's memory. You give the box a name (the label) and put information inside. Python is the world's most popular beginner language because creating these boxes is as easy as writing a normal sentence. You don't need fancy keywords—just name it and fill it.",
      highlights: [
        { title: "Simple Labeling", text: "No special setup; just 'name = value'.", icon: "🏷️" },
        { title: "Smart Storage", text: "Python automatically picks the right box size for you.", icon: "📦" },
        { title: "Easy Access", text: "Call the name, and the computer instantly brings the content.", icon: "💾" },
        { title: "Flexible", text: "Swap a number for text in the same box anytime.", icon: "🔄" }
      ]
    },
    declarations: {
      description: "In Python, you create a variable box just by typing the label name, an equals sign, and what you want to store.",
      code: `# 1. Create a box named 'score' and put 100 in it
score = 100

# 2. Change the content of the 'score' box
score = 150

# 3. Put text in a box
name = "Alice"`,
      constants: {
        keyword: "UPPER_CASE",
        description: "Python doesn't physically lock boxes. We just use ALL CAPS to tell others 'Please don't change this'.",
        code: `MAX_LIVES = 3`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "Flexible", range: "Whole numbers (1, 2, 3)" },
        { name: "float", size: "8 bytes", range: "Decimal numbers (3.14)" },
        { name: "str", size: "Dynamic", range: "Text (\"Hello\")" },
        { name: "bool", size: "Tiny", range: "True or False" }
      ]
    },
    limits: {
      description: "Python is incredibly powerful; its whole-number boxes can grow to be as big as your entire computer memory.",
      table: {
        headers: ["Box Type", "Capacity", "Precision"],
        rows: [
          ["int", "Infinite", "Perfect precision"],
          ["float", "Standard", "Up to 15 decimal points"],
          ["str", "Huge", "Depends on your RAM"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Python is a bit slower at moving data than 'strict' languages.",
        "It uses more memory per box than languages like C.",
        "Spaces at the start of lines are critical; get them wrong and it breaks."
      ]
    },
    collections: {
      description: "Special containers for when you have a lot of items to store.",
      code: `# A List - An ordered row of items
fruits = ["Apple", "Banana"]

# A Dictionary - A box where every value has its own label
user = {"id": 1, "name": "Rajat"}`
    },
    advanced: {
      description: "Smart ways to fill boxes.",
      code: `# Create a list of 10 boxes in one line
numbers = [x for x in range(10)]`
    },
    usage: {
      applications: [
        { title: "AI / Robots", text: "Teaching computers to think and see.", icon: "🤖" },
        { title: "Data", text: "Analyzing massive amounts of science data.", icon: "📊" },
        { title: "Scripts", text: "Writing small tools to automate your work.", icon: "⚙️" }
      ],
      companies: ["NASA", "Instagram", "Spotify"]
    }
  },
  cpp: {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    themeColor: "indigo-400",
    gradient: "from-indigo-400 to-blue-400",
    intro: {
      description: "A variable is like a labeled box in the computer's memory. You give the box a name (the label) and put information inside. In C++, you must be very specific: you have to tell the computer exactly what *size* and *shape* the box should be before you use it. This makes your program incredibly fast because the computer doesn't have to guess.",
      highlights: [
        { title: "Strict Labels", text: "You must say 'int' for numbers or 'string' for text.", icon: "🏷️" },
        { title: "Manual Control", text: "You decide exactly how much memory each box uses.", icon: "🎛️" },
        { title: "Extreme Speed", text: "Because you are so specific, the computer runs it instantly.", icon: "🚀" },
        { title: "Fixed Purpose", text: "Once a box is for numbers, you can't put a word in it.", icon: "🔒" }
      ]
    },
    declarations: {
      description: "To make a box in C++, you write the Type, then the Name, then the Value.",
      code: `// 1. Create a 'whole number' box named 'lives'
int lives = 3;

// 2. Create a 'decimal' box named 'price'
double price = 19.99;

// 3. Create a 'text' box
std::string name = "Rajat";

// lives = "Empty"; // ❌ Error! Can't put text in an 'int' box.`,
      constants: {
        keyword: "const",
        description: "Locks the box so the information inside can never be changed.",
        code: `const int MAX_LEVEL = 100;`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "4 bytes", range: "Whole numbers up to 2 billion" },
        { name: "double", size: "8 bytes", range: "Very precise decimals" },
        { name: "char", size: "1 byte", range: "A single character ('A')" },
        { name: "bool", size: "Tiny", range: "True or False" }
      ]
    },
    limits: {
      description: "C++ is built for performance. Every bit of space is used efficiently, but you must choose the right size.",
      table: {
        headers: ["Box Type", "Size", "Max Value"],
        rows: [
          ["int", "4 bytes", "2,147,483,647"],
          ["long long", "8 bytes", "9 quintillion (Huge!)"],
          ["float", "4 bytes", "7 decimal digits"],
          ["double", "8 bytes", "15 decimal digits"]
        ]
      }
    },
    limitations: {
      warnings: [
        "If you put too big a number in a small box, it 'wraps around' to a negative one!",
        "It won't clean up your old boxes automatically; you have to be careful.",
        "C++ is very strict; a single missing semicolon breaks everything."
      ]
    },
    collections: {
      description: "Advanced containers provided by the C++ Standard Library (STL).",
      code: `// A Vector - A box that can grow to hold more items
std::vector<int> scores = {10, 20};
scores.push_back(30); // Add a new item`
    },
    advanced: {
      description: "Talking directly to the computer's memory addresses.",
      code: `int x = 10;
int* address = &x; // 'address' stores WHERE the box 'x' is located.`
    },
    usage: {
      applications: [
        { title: "High-End Games", text: "Powering engines like Unreal Engine and Fortnite.", icon: "🎮" },
        { title: "Browsers", text: "The foundation of Chrome and Safari.", icon: "🌐" },
        { title: "Trading", text: "Systems that need to buy/sell stocks in microseconds.", icon: "💹" }
      ],
      companies: ["Microsoft", "Apple", "Blizzard"]
    }
  },
  java: {
    id: "java",
    name: "Java",
    icon: "☕",
    themeColor: "red-400",
    gradient: "from-orange-500 to-red-500",
    intro: {
      description: "A variable is like a labeled box in the computer's memory. You give the box a name (the label) and put information inside. Java is famous for its strict 'safety inspector'. Every box must have a clear type, and the inspector checks your boxes before the program starts to make sure no errors occur.",
      highlights: [
        { title: "Safe Labels", text: "The computer confirms every box matches its content.", icon: "🛡️" },
        { title: "Automatic Cleanup", text: "When you're done with a box, Java throws it away for you.", icon: "🧹" },
        { title: "Universal", text: "Java boxes work the same on any computer in the world.", icon: "🌍" },
        { title: "Organized", text: "Built for huge teams to work on the same project.", icon: "🏢" }
      ]
    },
    declarations: {
      description: "Just like C++, you write the Type, then the Name, then the Value.",
      code: `// 1. Create a number box
int count = 10;

// 2. Create a text box
String message = "Welcome";

// 3. Create a decimal box
double weight = 70.5;

// count = "Empty"; // ❌ Error! The inspector stops this.` ,
      constants: {
        keyword: "final",
        description: "The 'final' keyword locks the box so nobody can change it.",
        code: `final int ID = 12345;`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "4 bytes", range: "Whole numbers (±2 billion)" },
        { name: "long", size: "8 bytes", range: "Huge whole numbers" },
        { name: "double", size: "8 bytes", range: "Precise decimals" },
        { name: "boolean", size: "Tiny", range: "True or False" }
      ]
    },
    limits: {
      description: "Java was designed to be predictable. An 'int' box is the exact same size whether you are on a phone or a supercomputer.",
      table: {
        headers: ["Box Type", "Size", "Typical Limit"],
        rows: [
          ["int", "32-bit", "±2.1 billion"],
          ["long", "64-bit", "±9.2 quintillion"],
          ["char", "16-bit", "Any single letter/symbol"]
        ]
      }
    },
    limitations: {
      warnings: [
        "You have to write more code to do simple things (verbose).",
        "If a box is 'null' (missing), the program might crash.",
        "It uses more memory than C or C++ to stay safe."
      ]
    },
    collections: {
      description: "Powerful containers for managing groups of data.",
      code: `// A flexible list
List<String> names = new ArrayList<>();
names.add("Rajat");`
    },
    advanced: {
      description: "Modern Java features for data processing.",
      code: `// Processing a list in one go
names.stream().forEach(System.out::println);`
    },
    usage: {
      applications: [
        { title: "Android", text: "The primary language for millions of phone apps.", icon: "📱" },
        { title: "Banks", text: "Safe and secure systems for handling money.", icon: "🏦" },
        { title: "Big Data", text: "Processing massive amounts of corporate info.", icon: "📊" }
      ],
      companies: ["Amazon", "Uber", "Netflix"]
    }
  },
  c: {
    id: "c",
    name: "C",
    icon: "🔷",
    themeColor: "blue-400",
    gradient: "from-blue-500 to-cyan-500",
    intro: {
      description: "A variable is like a labeled box in the computer's memory. You give the box a name (the label) and put information inside. C is the 'grandfather' of programming. It doesn't have any safety nets—it trusts you to manage every box yourself. It's raw, fast, and the foundation of everything else.",
      highlights: [
        { title: "Direct Access", text: "You tell the computer exactly where to put the box.", icon: "🦾" },
        { title: "No Overhead", text: "C doesn't waste even a single bit of space.", icon: "⚡" },
        { title: "Small & Fast", text: "C programs are tiny and run at maximum speed.", icon: "💾" },
        { title: "Low Level", text: "Great for talking to hardware like motors or sensors.", icon: "🏗️" }
      ]
    },
    declarations: {
      description: "In C, you must specify the type. If you don't fill the box immediately, it will contain random 'junk' data from the memory!",
      code: `// 1. Create a number box
int age = 25;

// 2. Create a character box
char grade = 'A';

// 3. Declaration without filling (DANGEROUS)
int score; // ⚠️ This box has random data in it!
score = 0; // ✅ Now it's safe.`,
      constants: {
        keyword: "const",
        description: "Prevents anyone from changing the value in the box.",
        code: `const float PI = 3.14;`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "4 bytes", range: "Standard whole numbers" },
        { name: "char", size: "1 byte", range: "Single letters" },
        { name: "float", size: "4 bytes", range: "Decimal numbers" }
      ]
    },
    limits: {
      description: "Limits in C depend on your computer hardware. A box on your laptop might be bigger than a box on a tiny microwave chip.",
      table: {
        headers: ["Box Type", "Size", "Max Value"],
        rows: [
          ["char", "1 byte", "127"],
          ["int", "4 bytes", "2.1 billion"],
          ["long", "8 bytes", "9.2 quintillion"]
        ]
      }
    },
    limitations: {
      warnings: [
        "No safety features; if you make a mistake, the whole computer might crash.",
        "Handling text (strings) is notoriously difficult in C.",
        "You have to manually create and destroy your boxes (memory management)."
      ]
    },
    collections: {
      description: "C only has simple Arrays—a row of boxes that cannot grow.",
      code: `// A fixed row of 5 boxes
int numbers[5] = {1, 2, 3, 4, 5};`
    },
    advanced: {
      description: "The Power of Pointers.",
      code: `int x = 10;
int* ptr = &x; // 'ptr' stores the memory address of box 'x'.`
    },
    usage: {
      applications: [
        { title: "Operating Systems", text: "Windows, Linux, and MacOS are built with C.", icon: "💻" },
        { title: "Smart Devices", text: "Cars, watches, and smart fridges.", icon: "📟" },
        { title: "Compilers", text: "C is used to build other programming languages.", icon: "⚙️" }
      ],
      companies: ["Intel", "NASA", "Microsoft"]
    }
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "🔵",
    themeColor: "blue-400",
    gradient: "from-blue-500 to-indigo-500",
    intro: {
      description: "JavaScript is flexible but can be messy. TypeScript is like JavaScript with a 'Safety Inspector'. It forces you to label every variable box clearly. If you try to put the wrong thing in a box, the inspector stops you while you're typing, not after you run the code.",
      highlights: [
        { title: "Type Labels", text: "Boxes are clearly labeled (e.g., :number).", icon: "🏷️" },
        { title: "Bug Prevention", text: "Catches mistakes before users ever see them.", icon: "🛡️" },
        { title: "Great Help", text: "Shows you exactly what fits in each box as you type.", icon: "💡" },
        { title: "Professional", text: "Used by big teams to build massive websites.", icon: "📈" }
      ]
    },
    declarations: {
      description: "You use 'let' or 'const' just like JS, but you add a colon and the type name.",
      code: `// 1. A box that ONLY holds numbers
let score: number = 100;

// 2. A box that ONLY holds text
let name: string = "Rajat";

// score = "Ten"; // ❌ The inspector stops this error!` ,
      constants: {
        keyword: "const",
        description: "Standard JS constants with added type safety.",
        code: `const PI: number = 3.14;`
      }
    },
    types: {
      primitive: [
        { name: "number", size: "8 bytes", range: "All numbers" },
        { name: "string", size: "Dynamic", range: "Text" },
        { name: "boolean", size: "Tiny", range: "True/False" }
      ]
    },
    limits: {
      description: "TypeScript eventually turns into JavaScript, so it shares the same physical limits.",
      table: {
        headers: ["Box Type", "Limit"],
        rows: [
          ["number", "±9 quadrillion"],
          ["string", "Billions of characters"]
        ]
      }
    },
    limitations: {
      warnings: [
        "It takes a bit longer to set up than normal JavaScript.",
        "You have to 'build' the code before the browser can read it."
      ]
    },
    collections: {
      description: "Strict lists where you decide the contents.",
      code: `// A list of ONLY strings
let fruits: string[] = ["Apple", "Banana"];`
    },
    advanced: {
      description: "Defining custom shapes for your boxes.",
      code: `interface User {
  id: number;
  name: string;
}`
    },
    usage: {
      applications: [
        { title: "Web Apps", text: "Building complex sites like Slack or Discord.", icon: "💻" },
        { title: "E-Commerce", text: "Safe systems for online shopping.", icon: "🛒" }
      ],
      companies: ["Microsoft", "Airbnb", "Slack"]
    }
  },
  go: {
    id: "go",
    name: "Go",
    icon: "🔷",
    themeColor: "cyan-400",
    gradient: "from-cyan-500 to-blue-500",
    intro: {
      description: "Go (made by Google) is all about simplicity. It's built for the modern internet. It gives you fast, strong variable boxes like C++, but makes them as easy to use as Python. It's the language of the 'Cloud'.",
      highlights: [
        { title: "Blazing Fast", text: "Go code builds and runs in the blink of an eye.", icon: "🏎️" },
        { title: "Clean Syntax", text: "Very few rules to memorize.", icon: "✨" },
        { title: "Modern", text: "Built specifically for internet servers.", icon: "☁️" }
      ]
    },
    declarations: {
      description: "Go loves shortcuts. You often use ':=' to create and fill a box at the same time.",
      code: `// 1. Shortcut: Create and fill box
name := "Rajat" 

// 2. Formal: Specify the type
var age int = 25`,
      constants: {
        keyword: "const",
        description: "Fixed values that never change.",
        code: `const PI = 3.14`
      }
    },
    types: {
      primitive: [
        { name: "int", size: "4 or 8 bytes", range: "Whole numbers" },
        { name: "string", size: "Dynamic", range: "Text" },
        { name: "bool", size: "Tiny", range: "True/False" }
      ]
    },
    limits: {
      description: "Predictable sizes for high-performance servers.",
      table: {
        headers: ["Box Type", "Limit"],
        rows: [
          ["int", "±2 billion"],
          ["string", "Memory limited"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Go is very strict: if you make a variable and don't use it, it won't run!",
        "It doesn't have some 'fancy' features other languages have (to keep it simple)."
      ]
    },
    collections: {
      description: "Flexible lists called Slices.",
      code: `// A list that can grow
numbers := []int{1, 2, 3}`
    },
    advanced: {
      description: "Fast communication between parts of your program.",
      code: `// Channels - Passing boxes between tasks
messages := make(chan string)`
    },
    usage: {
      applications: [
        { title: "Cloud Tools", text: "Powering Docker and Kubernetes.", icon: "🐳" },
        { title: "Servers", text: "Handling millions of users at once.", icon: "🖥️" }
      ],
      companies: ["Google", "Uber", "Twitch"]
    }
  },
  rust: {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    themeColor: "orange-400",
    gradient: "from-orange-500 to-amber-500",
    intro: {
      description: "Rust is the 'Safety First' language. It's as fast as C++, but it has a very strict 'Borrow Checker'—think of it as a librarian who makes sure only one person can write in a book (variable box) at a time. This makes it impossible for your program to crash due to memory mistakes.",
      highlights: [
        { title: "Unbreakable", text: "Prevents memory bugs while you're writing.", icon: "🛡️" },
        { title: "Fast", text: "No speed penalty for being safe.", icon: "⚡" },
        { title: "Helpful", text: "The compiler gives the best error messages in the world.", icon: "🔧" }
      ]
    },
    declarations: {
      description: "By default, every box in Rust is LOCKED. You have to say 'mut' (mutable) if you want to change it later.",
      code: `// 1. A locked box
let x = 5;

// 2. A changeable box
let mut y = 10;

y = 11; // ✅ OK`,
      constants: {
        keyword: "const",
        description: "Values that are fixed forever.",
        code: `const MAX: u32 = 100;`
      }
    },
    types: {
      primitive: [
        { name: "i32", size: "4 bytes", range: "Standard whole numbers" },
        { name: "bool", size: "1 byte", range: "True/False" },
        { name: "char", size: "4 bytes", range: "Letters/Symbols" }
      ]
    },
    limits: {
      description: "Extreme control. You decide the exact bits for every box.",
      table: {
        headers: ["Box Type", "Size", "Range"],
        rows: [
          ["u8", "8-bit", "0 to 255"],
          ["i32", "32-bit", "±2.1 billion"]
        ]
      }
    },
    limitations: {
      warnings: [
        "It's very difficult to learn at first.",
        "The compiler is very picky and will stop you often to keep you safe."
      ]
    },
    collections: {
      description: "Growable lists called Vectors.",
      code: `let mut vec = vec![1, 2, 3];`
    },
    advanced: {
      description: "The concept of Ownership.",
      code: `let s1 = String::from("Hi");
let s2 = s1; // Box s1 is now empty! s2 owns the data.`
    },
    usage: {
      applications: [
        { title: "Systems", text: "Building operating systems and fast tools.", icon: "💻" },
        { title: "Security", text: "Writing code that can't be hacked easily.", icon: "🔒" }
      ],
      companies: ["Discord", "AWS", "Cloudflare"]
    }
  },
  kotlin: {
    id: "kotlin",
    name: "Kotlin",
    icon: "💜",
    themeColor: "purple-400",
    gradient: "from-purple-500 to-pink-500",
    intro: {
      description: "Kotlin is a modern, better version of Java. It removes the 'boring' parts of Java and adds safety nets to prevent common crashes. It's the #1 language for building Android apps today.",
      highlights: [
        { title: "Concise", text: "Do more with 50% less code than Java.", icon: "✍️" },
        { title: "No Crashes", text: "Designed to stop the 'Null Pointer' crash.", icon: "🛡️" },
        { title: "Android King", text: "The standard for modern mobile apps.", icon: "📱" }
      ]
    },
    declarations: {
      description: "Kotlin uses 'val' for boxes that stay the same, and 'var' for boxes that change.",
      code: `// 1. A locked box
val name = "Rajat"

// 2. A changeable box
var age = 25

age = 26`,
      constants: {
        keyword: "const val",
        description: "Fixed values used throughout the app.",
        code: `const val PI = 3.14`
      }
    },
    types: {
      primitive: [
        { name: "Int", size: "4 bytes", range: "Standard numbers" },
        { name: "String", size: "Dynamic", range: "Text" }
      ]
    },
    limits: {
      description: "Same reliable limits as Java.",
      table: {
        headers: ["Box Type", "Limit"],
        rows: [
          ["Int", "±2 billion"],
          ["Long", "9 quintillion"]
        ]
      }
    },
    limitations: {
      warnings: [
        "It can be slightly slower to build (compile) than Java.",
        "It's a large language with many features to learn."
      ]
    },
    collections: {
      description: "Safety-first lists.",
      code: `// A list you CANNOT change
val list = listOf("A", "B")`
    },
    advanced: {
      description: "Smart Casting.",
      code: `if (x is String) {
  print(x.length) // Java knows it's a string!
}`
    },
    usage: {
      applications: [
        { title: "Android", text: "Used for 90% of new Android apps.", icon: "📱" },
        { title: "Servers", text: "Modern, safe backend systems.", icon: "🖥️" }
      ],
      companies: ["Google", "Netflix", "Airbnb"]
    }
  },
  swift: {
    id: "swift",
    name: "Swift",
    icon: "🍎",
    themeColor: "orange-400",
    gradient: "from-orange-500 to-red-500",
    intro: {
      description: "Swift is Apple's language for making apps. It's designed to be 'beginner-first' like Python, but 'pro-fast' like C++. It's safe, clean, and helps you avoid the most common coding mistakes.",
      highlights: [
        { title: "Apple First", text: "The best way to build for iPhone and Mac.", icon: "🍏" },
        { title: "Modern", text: "Clean syntax that is easy to read.", icon: "✨" },
        { title: "Safe", text: "Prevents crashes by handling empty data carefully.", icon: "🛡️" }
      ]
    },
    declarations: {
      description: "Swift uses 'let' for locked boxes and 'var' for changeable ones. Apple recommends using 'let' whenever possible.",
      code: `// 1. Locked box (Apple's favorite)
let pi = 3.14

// 2. Changeable box
var score = 0

score += 10`,
      constants: {
        keyword: "let",
        description: "Every constant in Swift is made with 'let'.",
        code: `let name = "Rajat"`
      }
    },
    types: {
      primitive: [
        { name: "Int", size: "Standard", range: "Whole numbers" },
        { name: "String", size: "Dynamic", range: "Text" },
        { name: "Bool", size: "Tiny", range: "True/False" }
      ]
    },
    limits: {
      description: "Highly optimized for modern processors.",
      table: {
        headers: ["Box Type", "Limit"],
        rows: [
          ["Int", "Huge range (64-bit)"],
          ["Double", "Very precise decimals"]
        ]
      }
    },
    limitations: {
      warnings: [
        "Mainly only useful for Apple devices.",
        "The language is updated often, so code can get outdated."
      ]
    },
    collections: {
      description: "Simple lists and dictionaries.",
      code: `var fruits = ["Apple", "Orange"]
`
    },
    advanced: {
      description: "Safe handling of missing data (Optionals).",
      code: `var name: String? = nil // Box might be empty!
`
    },
    usage: {
      applications: [
        { title: "iPhone Apps", text: "The primary language for the App Store.", icon: "📱" },
        { title: "Mac Apps", text: "Desktop software for MacOS.", icon: "💻" }
      ],
      companies: ["Apple", "Uber", "Lyft"]
    }
  }
};