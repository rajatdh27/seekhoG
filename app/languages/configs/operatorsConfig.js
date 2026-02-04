export const operatorsData = {
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    themeColor: "yellow-400",
    intro: {
      description: "JavaScript operators are famously flexible, often performing 'Type Coercion' to make code run rather than crash. This flexibility comes at a cost: strict equality (`===`) is mandatory to avoid bugs. Memory-wise, operations on objects involve reference copying, while primitives are copied by value.",
      highlights: [
        { title: "Type Coercion", text: "'5' - 1 = 4, but '5' + 1 = '51'.", icon: "🎭" },
        { title: "Strict Equality", text: "=== checks value AND type (Safe).", icon: "🔒" },
        { title: "Short-Circuit", text: "&& and || return the operand, not boolean.", icon: "⚡" },
        { title: "Spread", text: "Deep vs Shallow copy implications.", icon: "✨" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic & Coercion",
        description: "Math works as expected for numbers, but strings introduce chaos. The '+' operator prefers concatenation over addition if any operand is a string.",
        code: `let x = 10 + 5;   // 15
let y = "10" + 5; // "105" (String wins)
let z = "10" - 5; // 5 (Math wins, string coerced to number)
let n = NaN + 1;  // NaN (Toxic: poisons everything)`
      },
      {
        id: "comparison",
        title: "The Equality Matrix",
        description: "Always use '===' (Strict Equality). '==' (Loose Equality) triggers complex coercion rules that are hard to memorize.",
        code: `false == 0;      // true (Boolean coerced to number)
"" == 0;         // true (Empty string coerced to number)
null == undefined; // true (Special rule)
NaN === NaN;     // false (Unique rule: use Number.isNaN())`
      },
      {
        id: "logical",
        title: "Short-Circuit Logic",
        description: "Logical operators return the value of one of the operands, allowing for powerful patterns like 'Default Values' and 'Guards'.",
        code: `// '||' returns first Truthy value
const name = inputName || "Guest"; 

// '&&' returns first Falsy value OR the last value
const access = isLoggedIn && user.hasPermission;

// '??' (Nullish) only checks for null/undefined
const score = userScore ?? 0; // 0 if score is null`
      }
    ],
    advanced: {
      description: "Bitwise operators in JS treat numbers as 32-bit signed integers, truncating floating-point parts. This can be used for fast flooring.",
      code: `// Fast Floor (Truncate decimal)
let floor = 5.95 | 0; // 5

// Toggle Boolean (1/0)
let toggle = 1 ^ 1; // 0

// Optional Chaining (?.) for deep access
let city = user?.address?.city; // Undefined if broken chain`
    },
    quiz: [
      {
        question: "What is the result of '10' - 5 in JavaScript?",
        options: ["'105'", "5", "NaN", "Error"],
        correct: 1
      },
      {
        question: "Which expression evaluates to True?",
        options: ["NaN === NaN", "null === undefined", "false == 0", "[] == true"],
        correct: 2
      },
      {
        question: "What does the '??' operator ignore?",
        options: ["False", "0", "Empty String", "Null & Undefined"],
        correct: 3
      },
      {
        question: "Bitwise operators in JS convert numbers to...",
        options: ["64-bit Floats", "32-bit Integers", "BigInts", "Strings"],
        correct: 1
      },
      {
        question: "What is the result of: 1 && 2 && 3?",
        options: ["true", "false", "3", "1"],
        correct: 2
      }
    ]
  },
  python: {
    id: "python",
    name: "Python",
    icon: "🐍",
    themeColor: "green-400",
    intro: {
      description: "Python operators prioritize readability and strictness. Unlike JS, Python refuses to coerce incompatible types (e.g., adding a number to a string throws a TypeError). It introduces unique concepts like chained comparisons and identity checks (`is`).",
      highlights: [
        { title: "No Coercion", text: "Explicit casting required.", icon: "🚫" },
        { title: "Identity", text: "'is' checks memory address.", icon: "🆔" },
        { title: "Chaining", text: "10 < x < 20 is valid syntax.", icon: "🔗" },
        { title: "Power", text: "** operator for exponentiation.", icon: "🚀" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic & Division",
        description: "Python distinguishes between true division `/` (returns float) and floor division `//` (returns integer).",
        code: `real = 10 / 3   # 3.333... (Float)
floor = 10 // 3 # 3 (Int)
power = 2 ** 3  # 8 (2 to the power of 3)
# text = "Age: " + 25 # ❌ TypeError`
      },
      {
        id: "comparison",
        title: "Chained Comparisons",
        description: "Python allows mathematical chaining, which expands logically: `a < b < c` becomes `a < b and b < c`.",
        code: `x = 15
if 10 < x < 20: # True
    print("In range")

# Value equality vs Identity
a = [1, 2]; b = [1, 2]
print(a == b) # True (Values match)
print(a is b) # False (Different objects in memory)`
      },
      {
        id: "logical",
        title: "English Logic",
        description: "Python uses 'and', 'or', 'not'. These are short-circuit operators. Empty containers ([], {}, '') are Falsy.",
        code: `users = []
if not users:
    print("No users found") # Prints`
      }
    ],
    advanced: {
      description: "The 'Walrus Operator' (`:=`) assigns values inside expressions. Bitwise operators work on arbitrary-precision integers.",
      code: `// Walrus: Assign and Return
if (n := len(data)) > 10:
    print(f"Too big: {n}")

// Unpacking (Splitting sequences)
a, *mid, b = [1, 2, 3, 4, 5]
# a=1, b=5, mid=[2, 3, 4]`
    },
    quiz: [
      {
        question: "What does the operator '//' do?",
        options: ["Comments", "Float Division", "Floor Division", "Modulo"],
        correct: 2
      },
      {
        question: "What is the difference between '==' and 'is'?",
        options: ["None", "== checks value, is checks memory", "is checks value, == checks memory", "is is for numbers only"],
        correct: 1
      },
      {
        question: "What evaluates to False in Python?",
        options: ["-1", "0", "'False'", "[0]"],
        correct: 1
      },
      {
        question: "What does the operator '**' do?",
        options: ["Pointer dereference", "Multiplication", "Exponentiation", "Double pointers"],
        correct: 2
      },
      {
        question: "Which statement is valid Python?",
        options: ["x++", "++x", "x += 1", "x =+ 1"],
        correct: 2
      }
    ]
  },
  cpp: {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    themeColor: "indigo-400",
    intro: {
      description: "C++ operators are a direct conduit to hardware. They are heavily overloaded—`<<` can shift bits or print to a console depending on context. Understanding 'Operator Overloading' and 'Pointer Arithmetic' is essential. Logical operators introduce 'Sequence Points', guaranteeing order of execution.",
      highlights: [
        { title: "Overloading", text: "Change behavior for custom types.", icon: "🔧" },
        { title: "Pointers", text: "* dereference, & address-of.", icon: "📍" },
        { title: "Bitwise", text: "Essential for low-level logic.", icon: "0️⃣1️⃣" },
        { title: "Three-Way", text: "<=> (Spaceship) for comparisons.", icon: "🛸" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic & Pointers",
        description: "Adding to a pointer increases the address by `sizeof(type)`. This is the basis of array iteration.",
        code: `int arr[] = {10, 20, 30};
int* ptr = arr;
ptr++; // Moves 4 bytes (assuming 32-bit int)
cout << *ptr; // 20

// Increment Nuance
int x = 5;
int y = x++; // y=5, x=6 (Post-increment)
int z = ++x; // z=7, x=7 (Pre-increment)`
      },
      {
        id: "overloading",
        title: "Operator Overloading",
        description: "You can define how `+` works for your Matrix class. This makes user-defined types feel like built-ins.",
        code: `Vector v3 = v1 + v2; // Calls v1.operator+(v2)
cout << v3; // Calls operator<<(cout, v3)`
      },
      {
        id: "bitwise",
        title: "Bitwise Operations",
        description: "Used heavily in systems programming. Flags are combined with `|` and checked with `&`.",
        code: `const int READ = 1;  // 0001
const int WRITE = 2; // 0010
int perms = READ | WRITE; // 0011
bool canWrite = perms & WRITE; // True`
      }
    ],
    advanced: {
      description: "The 'Spaceship Operator' (`<=>`) performs a three-way comparison, returning negative, zero, or positive.",
      code: `auto result = (a <=> b);
if (result < 0) cout << "Less";
if (result == 0) cout << "Equal";
if (result > 0) cout << "Greater";`
    },
    quiz: [
      {
        question: "What does 'ptr++' actually add to the memory address?",
        options: ["1 byte", "The size of the pointed type", "8 bytes", "Random value"],
        correct: 1
      },
      {
        question: "What is the purpose of the operator '->'?",
        options: ["Bitwise shift", "Lambda definition", "Member access via pointer", "Range"],
        correct: 2
      },
      {
        question: "What does the operator '<=>' return?",
        options: ["Boolean", "Ordering object (<, 0, >)", "Integer diff", "Pointer"],
        correct: 1
      },
      {
        question: "Which logical operator has the highest precedence?",
        options: ["||", "&&", "!", "=="],
        correct: 2
      },
      {
        question: "Can you overload the '::' operator?",
        options: ["Yes", "No", "Only in namespaces", "Only for static members"],
        correct: 1
      }
    ]
  },
  java: {
    id: "java",
    name: "Java",
    icon: "☕",
    themeColor: "red-400",
    intro: {
      description: "Java operators are consistent and safe. Operator overloading is BANNED (except for String `+`) to prevent confusing code. It introduces the unsigned right shift `>>>` to handle binary data safely. Auto-boxing can cause performance hits during equality checks of wrapper types.",
      highlights: [
        { title: "No Overloading", text: "Predictable behavior for all objects.", icon: "🚫" },
        { title: "Unsigned Shift", text: ">>> ignores sign bit.", icon: "⏩" },
        { title: "Instanceof", text: "Runtime type checking.", icon: "🔍" },
        { title: "String Math", text: "'+' creates new String objects.", icon: "📝" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic & Promotion",
        description: "Operations on byte/short promote to `int`. String concatenation with `+` uses `StringBuilder` internally but can be slow in loops.",
        code: `byte b1 = 1, b2 = 2;
// byte b3 = b1 + b2; // ❌ Error: Result is int
int b3 = b1 + b2; // ✅ OK

String s = "Score: " + 10; // "Score: 10"`
      },
      {
        id: "comparison",
        title: "Reference vs Value",
        description: "`==` compares MEMORY addresses for objects. Always use `.equals()` for content comparison.",
        code: `String s1 = new String("A");
String s2 = new String("A");
System.out.println(s1 == s2);      // false (Different refs)
System.out.println(s1.equals(s2)); // true (Same content)`
      },
      {
        id: "logical",
        title: "Bitwise vs Logical",
        description: "`&&` is logical (short-circuits). `&` is bitwise (evaluates both sides). Don't mix them up!",
        code: `if (obj != null && obj.isValid()) { ... } // Safe
if (obj != null & obj.isValid()) { ... }  // ❌ Crash (NullPtr)`
      }
    ],
    advanced: {
      description: "The Ternary Operator (`? :`) behaves differently with auto-boxing, sometimes throwing NullPointerException.",
      code: `Integer a = null;
int b = true ? a : 0; // ❌ Crash! Unboxing null throws NPE.

// Unsigned Right Shift
int x = -1; // 1111...1111
int y = x >>> 1; // 0111...1111 (Positive max int)`
    },
    quiz: [
      {
        question: "What does '10 / 3' evaluate to?",
        options: ["3.33", "3", "4", "Error"],
        correct: 1
      },
      {
        question: "What is the difference between '>>' and '>>>'?",
        options: ["None", ">>> fills with zero (Unsigned)", ">> fills with zero", ">>> is a logical shift"],
        correct: 1
      },
      {
        question: "Does '==' check content for Strings?",
        options: ["Yes", "No, it checks reference", "Sometimes", "Only for literals"],
        correct: 1
      },
      {
        question: "Can you overload operators in Java?",
        options: ["Yes", "No", "Only +", "Only =="],
        correct: 1
      },
      {
        question: "What happens if you use '&' instead of '&&' in an if-statement?",
        options: ["Syntax Error", "No Short-Circuiting", "Faster execution", "Bitwise logic only"],
        correct: 1
      }
    ]
  },
  c: {
    id: "c",
    name: "C",
    icon: "🔷",
    themeColor: "blue-400",
    intro: {
      description: "C operators are the bedrock of modern programming. They map directly to CPU instructions. Pointer arithmetic is the most powerful (and dangerous) feature. There is no boolean type in C89; `0` is false, and non-zero is true. Bitwise operators are heavily used for hardware control.",
      highlights: [
        { title: "Pointer Math", text: "Navigating memory manually.", icon: "📍" },
        { title: "Undefined", text: "Signed overflow is dangerous.", icon: "⚠️" },
        { title: "Sequence Points", text: "Order of ops nuances.", icon: "⏱️" },
        { title: "Ternary", text: "Compact conditional logic.", icon: "❓" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Integer Arithmetic",
        description: "Integer promotion happens silently. `char` + `char` results in `int`. Division by zero crashes the program (SIGFPE).",
        code: `char a = 100, b = 200;
int c = a + b; // 300 (Promoted to int, safe)
// a = a + b; // Overflow if assigned back to char`
      },
      {
        id: "pointers",
        title: "Pointer Arithmetic",
        description: "The core of C. `ptr + n` adds `n * sizeof(type)` bytes to the address.",
        code: `int arr[5] = {10, 20, 30};
int* p = arr;
*(p + 1) = 99; // Sets arr[1] to 99
p++; // p now points to arr[1]`
      },
      {
        id: "bitwise",
        title: "Bitwise Manipulation",
        description: "Critical for drivers and embedded systems. XOR (`^`) is useful for toggling bits.",
        code: `unsigned int flags = 0x05; // 0101
flags &= ~0x01; // Clear bit 0 -> 0100
flags ^= 0x02;  // Toggle bit 1 -> 0110`
      }
    ],
    advanced: {
      description: "The Comma Operator evaluates operands left-to-right and returns the RIGHT operand. It has the lowest precedence of all.",
      code: `int a = (1, 2, 3); // a = 3
// Undefined Behavior:
// int x = i++ * ++i; // ❌ Don't modify twice in one statement!`
    },
    quiz: [
      {
        question: "What is the value of 'true' in C89?",
        options: ["1", "-1", "Any non-zero integer", "true keyword"],
        correct: 2
      },
      {
        question: "What does the Comma Operator return?",
        options: ["Left operand", "Right operand", "Sum", "Tuple"],
        correct: 1
      },
      {
        question: "If 'int' is 4 bytes, what does 'ptr + 2' add to the address?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
        correct: 2
      },
      {
        question: "What happens on signed integer overflow?",
        options: ["Wraps negative", "Undefined Behavior", "Throws Exception", "Stays at max"],
        correct: 1
      },
      {
        question: "Which operator is used to access struct members from a pointer?",
        options: [".", "->", "::", "&"],
        correct: 1
      }
    ]
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: "🔵",
    themeColor: "blue-400",
    intro: {
      description: "TypeScript adds a layer of compile-time logic to operators. While the runtime behavior mirrors JS, TS introduces 'Type Assertions' (`as`), 'Non-Null Assertions' (`!`), and 'Type Guards' (`is`). The `keyof` and `typeof` operators allow you to perform math on TYPES themselves.",
      highlights: [
        { title: "Assertions", text: "'as' and '!' override checks.", icon: "🛠️" },
        { title: "Type Ops", text: "keyof, typeof, in.", icon: "🧬" },
        { title: "Safety", text: "Prevents invalid math (number + object).", icon: "🛡️" },
        { title: "Chaining", text: "?. works with type inference.", icon: "🔗" }
      ]
    },
    categories: [
      {
        id: "type_ops",
        title: "Type Operators",
        description: "Operators that work on types, not values. `keyof` extracts keys, `typeof` extracts the type structure.",
        code: `const user = { name: "Rajat", age: 25 };
type UserKeys = keyof typeof user; // "name" | "age"

function get(k: UserKeys) { return user[k]; } // Type-safe access`
      },
      {
        id: "assertion",
        title: "Assertions",
        description: "Telling the compiler 'I know better'. Use `!` to strip null/undefined, and `as` to cast.",
        code: `const input = document.getElementById("field") as HTMLInputElement;
const val = input.value; // Compiler knows it's an Input

function process(name?: string) {
    const len = name!.length; // ❌ Dangerous if name is undefined
}`
      },
      {
        id: "checks",
        title: "Narrowing",
        description: "Using `in` and `instanceof` acts as a Type Guard, narrowing the type inside the block.",
        code: `if ("role" in user) {
    // user is narrowed to Admin type here
    console.log(user.role);
}`
      }
    ],
    advanced: {
      description: "Mapped Types allow you to transform types using operators like `in` and `keyof`.",
      code: `type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
// Converts any type T to be fully immutable.`
    },
    quiz: [
      {
        question: "What does the '!' operator do in TypeScript?",
        options: ["Logical NOT", "Factorial", "Non-null Assertion", "Make optional"],
        correct: 2
      },
      {
        question: "What does 'keyof' return?",
        options: ["Array of keys", "Object values", "Union of key names", "JSON string"],
        correct: 2
      },
      {
        question: "Which operator is used for casting?",
        options: ["cast", "to", "as", ">>"],
        correct: 2
      },
      {
        question: "Can 'typeof' be used on variables?",
        options: ["Yes", "No", "Only primitives", "Only classes"],
        correct: 0
      },
      {
        question: "What happens to TS operators at runtime?",
        options: ["They run slower", "They are erased (compiled to JS)", "They throw errors", "They persist"],
        correct: 1
      }
    ]
  },
  go: {
    id: "go",
    name: "Go",
    icon: "🔷",
    themeColor: "cyan-400",
    intro: {
      description: "Go prioritizes simplicity. It REMOVES pointer arithmetic (mostly) to prevent bugs. The most unique operator is `<-`, used for sending/receiving data from Channels in concurrent programming. Increments (`++`) are statements, not expressions, meaning you can't assign them (`x = y++` is illegal).",
      highlights: [
        { title: "Channels", text: "<- handles async data.", icon: "📡" },
        { title: "Address", text: "& and * standard pointer ops.", icon: "📍" },
        { title: "Statements", text: "x++ returns nothing.", icon: "🛑" },
        { title: "Bit Clear", text: "&^ clears specific bits.", icon: "🧹" }
      ]
    },
    categories: [
      {
        id: "concurrency",
        title: "Channel Operator",
        description: "The arrow `<-` indicates the direction of data flow. It blocks execution until data is sent/received.",
        code: `ch := make(chan int)
go func() { ch <- 42 }() // Send 42 to channel
val := <-ch // Block until data arrives, then receive`
      },
      {
        id: "arithmetic",
        title: "Strict Arithmetic",
        description: "No implicit conversion. You cannot add `int` to `float64` without casting.",
        code: `var a int = 10
var b float64 = 5.5
// var c = a + b // ❌ Compiler Error
var c = float64(a) + b // ✅ OK`
      },
      {
        id: "pointers",
        title: "Pointers (Simplified)",
        description: "You can get an address (`&`) and dereference (`*`), but you can't do math (`p++`) to prevent buffer overflows.",
        code: `x := 10
ptr := &x  // Point to x
*ptr = 20  // Change x
// ptr++   // ❌ Compile Error`
      }
    ],
    advanced: {
      description: "The 'Bit Clear' operator (`&^`) is unique to Go. `x &^ y` clears the bits in `x` that are set in `y`.",
      code: `const (
    READ = 1 << iota // 1
    WRITE            // 2
)
perms := READ | WRITE
perms = perms &^ WRITE // Clear WRITE bit`
    },
    quiz: [
      {
        question: "What does the '<-' operator do?",
        options: ["Less than or equal", "Assignment", "Channel Send/Receive", "Pointer math"],
        correct: 2
      },
      {
        question: "Is 'y = x++' valid in Go?",
        options: ["Yes", "No", "Only for ints", "Only in loops"],
        correct: 1
      },
      {
        question: "What does '&^' do?",
        options: ["Bitwise AND NOT (Bit Clear)", "XOR", "Power", "NAND"],
        correct: 0
      },
      {
        question: "Can you add int and float directly?",
        options: ["Yes", "No (Explicit cast needed)", "Only literals", "If int is small"],
        correct: 1
      },
      {
        question: "Does Go support operator overloading?",
        options: ["Yes", "No", "Comparison only", "Arithmetic only"],
        correct: 1
      }
    ]
  },
  rust: {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    themeColor: "orange-400",
    intro: {
      description: "Rust operators are safe by default. Integer overflow causes a panic (crash) in debug mode but wraps in release mode. There is NO `++` or `--` operator to prevent confusion. All operators are implemented as Traits (`Add`, `Mul`), allowing structured overloading. The borrow operator `&` is central to memory safety.",
      highlights: [
        { title: "No Increment", text: "++ implies side effects. Use += 1.", icon: "🚫" },
        { title: "Traits", text: "Operators are Trait methods.", icon: "🧩" },
        { title: "Overflow", text: "Panics in debug, Wraps in release.", icon: "💥" },
        { title: "Borrowing", text: "& creates safe references.", icon: "🤝" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic & Traits",
        description: "Math delegates to traits like `std::ops::Add`. You must handle overflows explicitly if you want specific behavior.",
        code: `let a = 10;
// a++; // ❌ Error
let b = a.saturating_add(100); // Caps at max value
let c = a.wrapping_add(100);   // Wraps around`
      },
      {
        id: "borrow",
        title: "Borrowing",
        description: "`&` creates an immutable reference. `&mut` creates a mutable reference. Rules are enforced at compile time.",
        code: `let mut x = 10;
let r1 = &x; // Immutable borrow
// let r2 = &mut x; // ❌ Error: Can't have mut and immut borrows`
      },
      {
        id: "logic",
        title: "Pattern Matching",
        description: "Range operators (`..` and `..=`) work beautifully in `match` statements.",
        code: `match score {
    0..=50 => println!("Fail"),
    51..=100 => println!("Pass"),
    _ => println!("Invalid")
}`
      }
    ],
    advanced: {
      description: "The `?` operator is a control-flow operator for error propagation. It returns the error early if the result is `Err`.",
      code: `fn read_file() -> Result<String, io::Error> {
    let mut file = File::open("data.txt")?; // Return err if fails
    let mut s = String::new();
    file.read_to_string(&mut s)?;
    Ok(s)
}`
    },
    quiz: [
      {
        question: "Does Rust have a '++' operator?",
        options: ["Yes", "No", "Only for unsafe", "Only for pointers"],
        correct: 1
      },
      {
        question: "What happens on integer overflow in Debug mode?",
        options: ["Wraps around", "Returns 0", "Panics (Crash)", "Nothing"],
        correct: 2
      },
      {
        question: "What does the '?' operator do?",
        options: ["Ternary", "Optional check", "Error Propagation", "Null coalescing"],
        correct: 2
      },
      {
        question: "How do you create an inclusive range?",
        options: ["..", "...", "..=", "to"],
        correct: 2
      },
      {
        question: "Operators in Rust are implemented as...",
        options: ["Classes", "Traits", "Macros", "Functions"],
        correct: 1
      }
    ]
  },
  kotlin: {
    id: "kotlin",
    name: "Kotlin",
    icon: "💜",
    themeColor: "purple-400",
    intro: {
      description: "Kotlin operators are syntactic sugar for function calls (`a + b` compiles to `a.plus(b)`). This allows for convention-based operator overloading. The 'Elvis Operator' (`?:`) and Safe Call (`?.`) handle nullability elegantly. Ranges (`..`) are first-class citizens.",
      highlights: [
        { title: "Sugar", text: "Ops map to functions (.plus()).", icon: "🍬" },
        { title: "Elvis", text: "?: for default values.", icon: "🎸" },
        { title: "Ranges", text: "1..10 used in loops/checks.", icon: "📏" },
        { title: "Infix", text: "Custom readable ops (map to).", icon: "🗣️" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Operator Overloading",
        description: "You can overload operators by defining functions with specific names (`plus`, `minus`, `times`).",
        code: `data class Point(val x: Int, val y: Int) {
    operator fun plus(p: Point) = Point(x + p.x, y + p.y)
}
val p3 = p1 + p2; // Calls p1.plus(p2)`
      },
      {
        id: "comparison",
        title: "Equality & Identity",
        description: "`==` calls `.equals()` (safe structural equality). `===` checks reference identity.",
        code: `val s1 = "Hello"
val s2 = "Hello"
s1 == s2  // true (Content match)
s1 === s2 // true (JVM string pooling)`
      },
      {
        id: "null",
        title: "Null Safety",
        description: "The Elvis operator `?:` returns the right side if the left is null. `!!` throws an exception if null.",
        code: `val len = input?.length ?: 0 // Safe length
val data = input!! // Crash if null`
      }
    ],
    advanced: {
      description: "The `in` operator checks membership in ranges or collections. It maps to the `contains()` function.",
      code: `if (code in 200..299) {
    println("Success")
}
if ("admin" !in roles) {
    println("Access Denied")
}`
    },
    quiz: [
      {
        question: "What does 'a + b' compile to in Kotlin?",
        options: ["a.add(b)", "a.plus(b)", "a.sum(b)", "a.op(b)"],
        correct: 1
      },
      {
        question: "What is the 'Elvis Operator'?",
        options: ["?:", "?.", "!!", "??"],
        correct: 0
      },
      {
        question: "What does '==' check in Kotlin?",
        options: ["Reference", "Content (.equals)", "Type", "Memory"],
        correct: 1
      },
      {
        question: "How do you define a range?",
        options: ["1 to 10", "1-10", "1..10", "range(1,10)"],
        correct: 2
      },
      {
        question: "What does '!!' do?",
        options: ["Force unwrap (NPE if null)", "Safe call", "Logical NOT", "Assert true"],
        correct: 0
      }
    ]
  },
  swift: {
    id: "swift",
    name: "Swift",
    icon: "🍎",
    themeColor: "orange-400",
    intro: {
      description: "Swift operators are rigorous. Standard arithmetic operators throw errors on overflow (`+` vs `&+`). It supports custom operator definition with precedence groups. The 'Nil-Coalescing' operator (`??`) is essential for Swift's optional-heavy ecosystem. Range operators (`...`, `..<`) are pervasive.",
      highlights: [
        { title: "Overflow", text: "&+ wraps, + crashes.", icon: "🌊" },
        { title: "Custom", text: "Define your own symbols.", icon: "✍️" },
        { title: "Ranges", text: "Closed (...) vs Half-Open (..<).", icon: "📏" },
        { title: "Coalescing", text: "?? unwraps optionals safely.", icon: "🎁" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Overflow Handling",
        description: "Swift protects you from accidental overflows. Use special operators (`&+`, `&-`, `&*`) if you want wrap-around behavior.",
        code: `let max = UInt8.max // 255
// let crash = max + 1 // ❌ Runtime Error
let wrap = max &+ 1 // 0 (Wraps around)`
      },
      {
        id: "ranges",
        title: "Range Operators",
        description: "Used for loops and array slicing. `...` includes the end, `..<` excludes it.",
        code: `for i in 1...5 { /* 1,2,3,4,5 */ }
let arr = ["A", "B", "C"]
let slice = arr[0..<2] // ["A", "B"]`
      },
      {
        id: "comparison",
        title: "Identity vs Equality",
        description: "`==` checks value (Equatable). `===` checks if two references point to the exact same class instance.",
        code: `if classInstance1 === classInstance2 {
    // Same memory address
}`
      }
    ],
    advanced: {
      description: "You can define custom operators (infix, prefix, postfix) and assign them precedence groups.",
      code: `infix operator +++ : AdditionPrecedence
func +++ (left: Int, right: Int) -> Int {
    return (left + right) * 2
}
// 2 +++ 2 = 8`
    },
    quiz: [
      {
        question: "Which operator allows integer overflow (wrapping)?",
        options: ["+", "++", "&+", "|+"],
        correct: 2
      },
      {
        question: "Which range operator excludes the upper bound?",
        options: ["...", "..<", "->", "to"],
        correct: 1
      },
      {
        question: "What does '??' do?",
        options: ["Ternary", "Nil Coalescing (Default)", "Force Unwrap", "Optional Chain"],
        correct: 1
      },
      {
        question: "Can you define custom operators in Swift?",
        options: ["Yes", "No", "Only for structs", "Only symbols"],
        correct: 0
      },
      {
        question: "What operator checks instance identity?",
        options: ["==", "===", "is", "equals"],
        correct: 1
      }
    ]
  }
};