export const operatorsData = {
  javascript: {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    themeColor: "yellow-400",
    intro: {
      description: "Operators in JavaScript are symbols that perform operations on operands. JS is unique because of 'Type Coercion'—operators can sometimes change the type of data they work on unexpectedly (like adding a number to a string).",
      highlights: [
        { title: "Coercion", text: "Values change types automatically (e.g. '5' - 1 = 4).", icon: "🎭" },
        { title: "Strict Equality", text: "=== checks value AND type (Safe).", icon: "🔒" },
        { title: "Destructuring", text: "Extract values effortlessly.", icon: "📦" },
        { title: "Spread", text: "Expand arrays/objects with ...", icon: "✨" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Math with a twist. Standard symbols work as expected, but watch out for the '+' operator with strings.",
        code: `let x = 10 + 5;  // 15 (Math)
let y = "10" + 5; // "105" (Concatenation)
let z = 2 ** 3;   // 8 (Exponentiation)`
      },
      {
        id: "comparison",
        title: "Comparison",
        description: "The Tale of Two Equals. Always use '===' unless you have a very specific reason not to.",
        code: `5 == "5"   // true (Loose - Bad)
5 === "5"  // false (Strict - Good)
10 !== "10" // true (Strict Not Equal)`
      },
      {
        id: "logical",
        title: "Logical",
        description: "Short-circuit logic. Operators return the actual value, not just true/false.",
        code: `const user = name || "Guest"; // Default value
const access = isLoggedIn && hasPermission; // Guard check
const valid = !isBanned; // NOT`
      }
    ],
    advanced: {
      description: "Modern JS operators that make life easier.",
      code: `// Nullish Coalescing (??)
let count = input ?? 0; // 0 if input is null/undefined

// Optional Chaining (?.)
let city = user?.address?.city; // No crash if address is missing`
    },
    quiz: [
      {
        question: "What is the result of '5' + 3 in JavaScript?",
        options: ["8", "53", "Error", "NaN"],
        correct: 1
      },
      {
        question: "Which operator checks for both value and type equality?",
        options: ["==", "=", "===", "equals()"],
        correct: 2
      },
      {
        question: "What does the '??' operator do?",
        options: ["Checks for null/undefined", "Checks for false", "Exponentiation", "Ternary"],
        correct: 0
      },
      {
        question: "What is the result of true && 'Hello'?",
        options: ["true", "false", "'Hello'", "undefined"],
        correct: 2
      },
      {
        question: "Which operator is used for exponentiation (power)?",
        options: ["^", "pow()", "**", "^^"],
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
      description: "Python operators are designed to be readable. Instead of symbols like '&&' or '||', Python uses English words 'and', 'or', 'not'. It strictly separates math from logic—you can't add a number to a string without converting it first.",
      highlights: [
        { title: "English Syntax", text: "Uses 'and', 'or', 'not' keywords.", icon: "📖" },
        { title: "Strict Typing", text: "No implicit coercion (e.g. '5' + 5 is Error).", icon: "👮" },
        { title: "Power", text: "Built-in ** for exponents.", icon: "🚀" },
        { title: "Floor Div", text: "// ensures integer results.", icon: "➗" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Standard math, plus convenient operators for powers and floor division.",
        code: `sum = 10 + 5
power = 2 ** 3   # 8 (2^3)
floor = 10 // 3  # 3 (Drops decimal)
real = 10 / 3    # 3.333... (Always float)`
      },
      {
        id: "comparison",
        title: "Comparison",
        description: "You can chain comparisons in Python, which is a unique superpower.",
        code: `if 10 < x < 20:
    print("x is between 10 and 20")

# Identity check
is_same = a is b # Checks memory address`
      },
      {
        id: "logical",
        title: "Logical",
        description: "Uses English words. Short-circuiting still applies.",
        code: `if is_admin and not is_banned:
    grant_access()

result = value or "Default" # Returns value if truthy`
      }
    ],
    advanced: {
      description: "The 'Walrus Operator' (:=) allows assignment inside expressions.",
      code: `if (n := len(items)) > 10:
    print(f"List is too long: {n} items")`
    },
    quiz: [
      {
        question: "Which operator performs floor division (drops decimal)?",
        options: ["/", "%", "//", "div"],
        correct: 2
      },
      {
        question: "How do you write 'logical AND' in Python?",
        options: ["&&", "&", "and", "AND"],
        correct: 2
      },
      {
        question: "What is the result of 2 ** 3?",
        options: ["6", "5", "8", "9"],
        correct: 2
      },
      {
        question: "Can you chain comparisons like 'x < y < z'?",
        options: ["Yes", "No", "Only with brackets", "Only in Python 2"],
        correct: 0
      },
      {
        question: "What does 'is' check for?",
        options: ["Value equality", "Memory identity", "Type match", "Truthiness"],
        correct: 1
      }
    ]
  },
  cpp: {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    themeColor: "indigo-400",
    intro: {
      description: "C++ operators are powerful and low-level. You have direct access to memory via pointers (* and &). C++ also allows 'Operator Overloading', letting you define how standard symbols (+, -) work for your own custom classes.",
      highlights: [
        { title: "Overloading", text: "Redefine +, -, * for custom objects.", icon: "🔧" },
        { title: "Pointers", text: "* dereferences, & gets address.", icon: "📍" },
        { title: "Bitwise", text: "Control individual bits (&, |, ^).", icon: "0️⃣1️⃣" },
        { title: "Increment", text: "++i vs i++ matters.", icon: "⬆️" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Efficient machine-level math. Be careful with Pre/Post increment.",
        code: `int x = 10;
int y = x++; // y=10, x=11 (Post)
int z = ++x; // z=12, x=12 (Pre)
x += 5;      // Compound assignment`
      },
      {
        id: "comparison",
        title: "Comparison",
        description: "Standard symbols. Note that 'bool' is returned.",
        code: `if (x == 10 && y != 5) {
    // Logic here
}
// Spaceship Operator (C++20)
auto result = a <=> b; // <0, 0, or >0`
      },
      {
        id: "logical",
        title: "Logical",
        description: "Standard symbols &&, ||, !. Short-circuit evaluation applies.",
        code: `bool valid = !input.empty() && input.size() > 5;`
      }
    ],
    advanced: {
      description: "Bitwise operators allow manipulation of raw binary data.",
      code: `int flags = 0b0001;
flags |= 0b0010; // Set 2nd bit
if (flags & 0b0001) { /* Check 1st bit */ }
int shift = 1 << 3; // 8`
    },
    quiz: [
      {
        question: "What does '++i' do?",
        options: ["Increments after usage", "Increments before usage", "Adds 2", "Nothing"],
        correct: 1
      },
      {
        question: "Which operator gets the memory address of a variable?",
        options: ["*", "->", "&", "@"],
        correct: 2
      },
      {
        question: "What is the 'Spaceship Operator' (<=>) used for?",
        options: ["Three-way comparison", "Pointer access", "Bitwise shift", "Logical OR"],
        correct: 0
      },
      {
        question: "Can you redefine operators for your own classes?",
        options: ["No", "Yes (Overloading)", "Only comparisons", "Only assignment"],
        correct: 1
      },
      {
        question: "What does 5 << 1 result in?",
        options: ["5", "6", "10", "25"],
        correct: 2
      }
    ]
  },
  java: {
    id: "java",
    name: "Java",
    icon: "☕",
    themeColor: "red-400",
    intro: {
      description: "Java operators are consistent and safe. Unlike C++, you cannot overload operators (except '+' for String concatenation). It introduces the unsigned right shift '>>>' for bitwise operations, distinguishing it from '>>'.",
      highlights: [
        { title: "No Overloading", text: "Operators strictly defined by language.", icon: "🚫" },
        { title: "String Concat", text: "'+' joins strings automatically.", icon: "🔗" },
        { title: "Instanceof", text: "Checks type at runtime.", icon: "🔍" },
        { title: "Unsigned Shift", text: ">>> fills with zeros.", icon: "⏩" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Standard math. Integer division truncates towards zero.",
        code: `int div = 10 / 3; // 3
double real = 10.0 / 3; // 3.333...
int mod = 10 % 3; // 1`
      },
      {
        id: "comparison",
        title: "Comparison",
        description: "For objects (like String), '==' checks reference, not content! Use .equals().",
        code: `String a = new String("Hi");
String b = new String("Hi");
boolean ref = (a == b); // false!
boolean val = a.equals(b); // true`
      },
      {
        id: "logical",
        title: "Logical",
        description: "Standard &&, ||, ! logic gates.",
        code: `if (obj != null && obj.isValid()) {
    // Safe access
}`
      }
    ],
    advanced: {
      description: "The ternary operator is a one-line if-else.",
      code: `String status = (score > 50) ? "Pass" : "Fail";
// 'instanceof' checks object type
if (obj instanceof String) { /* ... */ }`
    },
    quiz: [
      {
        question: "What does '10 / 3' result in (int division)?",
        options: ["3.33", "3", "4", "Error"],
        correct: 1
      },
      {
        question: "How do you check if two Strings have the same text?",
        options: ["==", "===", ".equals()", ".match()"],
        correct: 2
      },
      {
        question: "What does the operator '>>>' do?",
        options: ["Right shift", "Unsigned right shift", "Left shift", "Comparison"],
        correct: 1
      },
      {
        question: "What operator checks an object's type?",
        options: ["typeof", "is", "instanceof", "check"],
        correct: 2
      },
      {
        question: "Does Java support operator overloading?",
        options: ["Yes", "No", "Only for +", "Only for -"],
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
      description: "C operators work close to the hardware. Pointer arithmetic allows you to move through memory by adding to addresses. It treats boolean logic as integers (0 is false, anything else is true).",
      highlights: [
        { title: "Pointer Math", text: "ptr + 1 moves to next memory block.", icon: "📍" },
        { title: "No Bool", text: "0 is false, 1 (or non-zero) is true.", icon: "0️⃣" },
        { title: "Bitwise", text: "Low-level bit manipulation.", icon: "⚙️" },
        { title: "Ternary", text: "? : conditional assignment.", icon: "❓" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Basic integer and float math. Modulo (%) works only on integers.",
        code: `int x = 10;
x++; // Increment
int rem = 10 % 3; // 1`
      },
      {
        id: "pointers",
        title: "Pointers",
        description: "Unique to C/C++. Adding to a pointer moves it by the size of the type.",
        code: `int arr[] = {10, 20};
int* ptr = arr;
ptr++; // Points to 20 now (moved 4 bytes)`
      },
      {
        id: "comparison",
        title: "Comparison",
        description: "Returns 1 for true, 0 for false (pre-C99).",
        code: `int is_equal = (a == b); // 1 or 0
if (is_equal) { /* ... */ }`
      }
    ],
    advanced: {
      description: "Bitwise operators are crucial for embedded programming.",
      code: `unsigned char flags = 0x0F;
flags &= ~0x01; // Clear lowest bit
flags ^= 0xFF;  // Toggle all bits`
    },
    quiz: [
      {
        question: "What is 'true' in standard C (pre-C99)?",
        options: ["true keyword", "1", "Any non-zero integer", "-1"],
        correct: 2
      },
      {
        question: "If 'int' is 4 bytes, what does 'ptr + 1' add to the address?",
        options: ["1 byte", "4 bytes", "8 bytes", "Depends on OS"],
        correct: 1
      },
      {
        question: "Which operator is the 'Address Of' operator?",
        options: ["*", "&", "->", "@"],
        correct: 1
      },
      {
        question: "What is the result of 10 % 3?",
        options: ["3", "1", "3.33", "0"],
        correct: 1
      },
      {
        question: "Can you use '%' on floats in C?",
        options: ["Yes", "No", "Sometimes", "With a library"],
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
      description: "TypeScript supports all JavaScript operators but adds type safety to them. You cannot accidentally add a number to an object without the compiler yelling at you. It also adds 'Non-null Assertion' (!) to tell the compiler 'I know this exists'.",
      highlights: [
        { title: "Type Safety", text: "Prevents invalid operations.", icon: "🛡️" },
        { title: "Assertion", text: "! tells compiler 'trust me'.", icon: "❗" },
        { title: "As", text: "Type casting operator.", icon: "🎭" },
        { title: "In", text: "Narrowing types checking properties.", icon: "🔍" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Same as JS, but type-checked.",
        code: `const x: number = 10;
const y: number = 5;
// const z = x * "5"; // ❌ Error in TS, allowed in JS`
      },
      {
        id: "type",
        title: "Type Operators",
        description: "Operators specifically for handling types.",
        code: `interface User { name: string }
const data: any = "Rajat";
const u = data as User; // Type Assertion

if ("name" in u) { /* Safe check */ }`
      },
      {
        id: "logical",
        title: "Logical",
        description: "Nullish coalescing is very useful in strict TS code.",
        code: `const input: string | null = null;
const val = input ?? "Default";`
      }
    ],
    advanced: {
      description: "The 'keyof' and 'typeof' operators allow type manipulation.",
      code: `type Point = { x: number, y: number };
type Keys = keyof Point; // "x" | "y"

const origin = { x: 0, y: 0 };
type Derived = typeof origin; // Point`
    },
    quiz: [
      {
        question: "What does the '!' operator do after a variable?",
        options: ["Logical NOT", "Factorial", "Non-null Assertion", "Type Cast"],
        correct: 2
      },
      {
        question: "Which operator is used for Type Assertion (Casting)?",
        options: ["cast", "to", "as", "convert"],
        correct: 1
      },
      {
        question: "What does 'keyof' return?",
        options: ["Values of an object", "Union of keys", "Array of keys", "Object size"],
        correct: 1
      },
      {
        question: "Does TypeScript run arithmetic at compile time?",
        options: ["Yes", "No, it compiles to JS", "Only constants", "Sometimes"],
        correct: 1
      },
      {
        question: "The '??' operator checks for...",
        options: ["Falsy values", "Null or Undefined", "Zero", "Empty strings"],
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
      description: "Go keeps operators simple. No pointer arithmetic (mostly). No operator overloading. It adds a special operator '<-' for Channels, used in concurrency. ++ and -- are statements, not expressions (you can't do x = y++).",
      highlights: [
        { title: "Channels", text: "<- sends/receives data.", icon: "📡" },
        { title: "No Arithmetic", text: "Pointers exist, but no math on them.", icon: "🚫" },
        { title: "Statements", text: "x++ returns nothing.", icon: "📝" },
        { title: "Address", text: "& and * work like C.", icon: "📍" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Standard set. Strict types prevent mixing int/float.",
        code: `x := 10
x++ // Valid line
// y := x++ // ❌ Error! Not an expression.`
      },
      {
        id: "concurrency",
        title: "Concurrency",
        description: "The channel operator is unique to Go.",
        code: `ch := make(chan int)
ch <- 5    // Send to channel
val := <-ch // Receive from channel`
      },
      {
        id: "pointers",
        title: "Pointers",
        description: "Simple referencing.",
        code: `x := 10
p := &x  // Address of x
*p = 20  // Dereference and assign`
      }
    ],
    advanced: {
      description: "Bitwise Clear operator (&^) is distinct to Go.",
      code: `x := 0b0011
y := 0b0001
z := x &^ y // 0b0010 (Clears bits in x that are set in y)`
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
        question: "Does Go support pointer arithmetic (like ptr++)?",
        options: ["Yes", "No (mostly)", "Yes via 'unsafe'", "Only for arrays"],
        correct: 1
      },
      {
        question: "What does '&^' do?",
        options: ["Bitwise AND NOT (Bit Clear)", "XOR", "Power", "NAND"],
        correct: 0
      },
      {
        question: "Can you overload operators in Go?",
        options: ["Yes", "No", "Only comparison", "Only arithmetic"],
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
      description: "Rust is explicit. No ++ or -- operators exists (use += 1). References uses '&' and dereferencing uses '*'. It has strict casting using 'as'. Overflows in arithmetic cause a panic in debug mode!",
      highlights: [
        { title: "No Increment", text: "++ does not exist. Use += 1.", icon: "🚫" },
        { title: "References", text: "& creates a borrow.", icon: "🤝" },
        { title: "Casting", text: "'as' keyword for type conversion.", icon: "🎭" },
        { title: "Panic", text: "Overflows crash safety.", icon: "💥" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Standard math, but no increment/decrement operators.",
        code: `let mut x = 10;
x += 1; // Correct
// x++; // ❌ Error`
      },
      {
        id: "logic",
        title: "Logical",
        description: "Standard &&, ||, !.",
        code: `if x > 5 && x < 20 {
    // Range check
}`
      },
      {
        id: "borrow",
        title: "Borrowing",
        description: "The core of Rust's safety.",
        code: `let x = 10;
let r = &x; // Immutable borrow
println!("{}", *r); // Dereference`
      }
    ],
    advanced: {
      description: "Pattern matching with ranges allows powerful checks.",
      code: `let x = 5;
match x {
    1..=5 => println!("1 to 5"),
    _ => println!("Other")
}`
    },
    quiz: [
      {
        question: "Does Rust have a '++' operator?",
        options: ["Yes", "No", "Only for unsafe", "Only for pointers"],
        correct: 1
      },
      {
        question: "How do you cast types in Rust?",
        options: ["(int)x", "cast(x)", "x as u32", "convert(x)"],
        correct: 2
      },
      {
        question: "What operator creates a reference (borrow)?",
        options: ["*", "&", "->", "ref"],
        correct: 1
      },
      {
        question: "What happens on integer overflow in debug mode?",
        options: ["Wraps around", "Returns 0", "Panics (Crash)", "Nothing"],
        correct: 2
      },
      {
        question: "What does '..' represent?",
        options: ["Spread", "Range", "Concatenation", "Modulo"],
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
      description: "Kotlin adds safety and syntactic sugar to Java's operators. '==' checks for structural equality (.equals), while '===' checks referential equality. It has null-safety operators like '?.' and '?:' (Elvis operator).",
      highlights: [
        { title: "Equality", text: "== calls .equals() automatically.", icon: "🤝" },
        { title: "Elvis", text: "?: handles null defaults.", icon: "🎸" },
        { title: "Ranges", text: ".. creates range objects.", icon: "📏" },
        { title: "Safe Call", text: "?. prevents NullPointerExceptions.", icon: "🛡️" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Standard operators. Objects can overload these via operator functions.",
        code: `val sum = 10 + 20
val range = 1..10 // 1, 2, ..., 10`
      },
      {
        id: "comparison",
        title: "Comparison",
        description: "A huge improvement over Java. == is safe.",
        code: `val s1 = "Hello"
val s2 = "Hello"
println(s1 == s2)  // true (Content check)
println(s1 === s2) // true (Same object)`
      },
      {
        id: "null",
        title: "Null Safety",
        description: "Operators designed to handle missing data.",
        code: `val len = str?.length ?: 0
// If str is null, return 0`
      }
    ],
    advanced: {
      description: "The 'in' operator checks for membership in ranges or collections.",
      code: `if (x in 1..10) { /* x is between 1 and 10 */ }
if (name !in bannedList) { /* Safe */ }`
    },
    quiz: [
      {
        question: "What does '==' check in Kotlin?",
        options: ["Reference equality", "Content equality (.equals)", "Type match", "Assignment"],
        correct: 1
      },
      {
        question: "What is the 'Elvis Operator'?",
        options: ["?:", "?.", "!!", "??"],
        correct: 0
      },
      {
        question: "How do you create a range from 1 to 10?",
        options: ["1 to 10", "1-10", "1..10", "range(1, 10)"],
        correct: 2
      },
      {
        question: "What operator checks referential identity (same object)?",
        options: ["==", "===", "is", "equals"],
        correct: 1
      },
      {
        question: "What does '!!' do?",
        options: ["Logical NOT", "Force unwrap (throw if null)", "Double factorial", "Check type"],
        correct: 1
      }
    ]
  },
  swift: {
    id: "swift",
    name: "Swift",
    icon: "🍎",
    themeColor: "orange-400",
    intro: {
      description: "Swift operators are safe and expressive. It forbids overflow by default. It has 'Range Operators' (..., ..<) and the 'Nil-Coalescing Operator' (??). You can define your own custom operators if you're feeling adventurous.",
      highlights: [
        { title: "Ranges", text: "1...5 (Closed) and 1..<5 (Half-open).", icon: "📏" },
        { title: "Nil Coalescing", text: "?? provides defaults for optionals.", icon: "🛡️" },
        { title: "Overflow", text: "&+ allows overflow explicitly.", icon: "🌊" },
        { title: "Identity", text: "=== checks class instance identity.", icon: "🆔" }
      ]
    },
    categories: [
      {
        id: "arithmetic",
        title: "Arithmetic",
        description: "Standard math. Overflow traps (crashes) unless you use overflow operators.",
        code: `let sum = 10 + 5
// let bad = Int.max + 1 // ❌ Crash
let good = Int.max &+ 1 // ✅ Wraps around`
      },
      {
        id: "range",
        title: "Range Operators",
        description: "Unique to Swift, used in loops and slicing.",
        code: `for i in 1...5 { /* 1,2,3,4,5 */ }
for i in 1..<5 { /* 1,2,3,4 */ }`
      },
      {
        id: "coalescing",
        title: "Nil Coalescing",
        description: "Unwrap optionals safely with a default.",
        code: `let name: String? = nil
let display = name ?? "Guest" // "Guest"`
      }
    ],
    advanced: {
      description: "Custom operator definition allows domain-specific syntax.",
      code: `infix operator +++
func +++ (left: Int, right: Int) -> Int {
    return (left + right) * 2
}
// 2 +++ 2 = 8`
    },
    quiz: [
      {
        question: "What does the '??' operator do?",
        options: ["Ternary check", "Nil Coalescing (Default value)", "Double optional", "Range check"],
        correct: 1
      },
      {
        question: "Which range operator excludes the upper bound?",
        options: ["...", "..^", "..<", "->"],
        correct: 2
      },
      {
        question: "What happens if a standard addition overflows in Swift?",
        options: ["Wraps around", "Returns 0", "Crashes (Error)", "Becomes infinity"],
        correct: 2
      },
      {
        question: "Which operator checks if two references point to the same object instance?",
        options: ["==", "===", "is", "equals"],
        correct: 1
      },
      {
        question: "Can you define custom operators in Swift?",
        options: ["Yes", "No", "Only for structs", "Only symbols"],
        correct: 0
      }
    ]
  }
};