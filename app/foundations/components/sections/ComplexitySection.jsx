import { motion } from "framer-motion";
import { useState } from "react";

export default function ComplexitySection() {
  const [activeExample, setActiveExample] = useState("constant");
  const [activeLang, setActiveLang] = useState("python");

  const complexityExamples = {
    constant: {
      title: "O(1) - Constant Time",
      description: "Execution time doesn't depend on input size - always same speed!",
      realWorld: "Accessing a book page number, checking your watch",
      code: {
        c: `// O(1) - Constant time
int getFirstElement(int arr[], int n) {
    return arr[0];  // Always 1 operation
}

int getLastElement(int arr[], int n) {
    return arr[n-1];  // Always 1 operation
}`,
        cpp: `// O(1) - Constant time
int getFirstElement(vector<int>& arr) {
    return arr[0];  // Always 1 operation
}

int getLastElement(vector<int>& arr) {
    return arr[arr.size()-1];  // Always 1 operation
}`,
        java: `// O(1) - Constant time
public int getFirstElement(int[] arr) {
    return arr[0];  // Always 1 operation
}

public int getLastElement(int[] arr) {
    return arr[arr.length-1];  // Always 1 operation
}`,
        javascript: `// O(1) - Constant time
function getFirstElement(arr) {
    return arr[0];  // Always 1 operation
}

function getLastElement(arr) {
    return arr[arr.length-1];  // Always 1 operation
}`,
        python: `# O(1) - Constant time
def get_first_element(arr):
    return arr[0]  # Always 1 operation

def get_last_element(arr):
    return arr[-1]  # Always 1 operation`,
        go: `// O(1) - Constant time
func getFirstElement(arr []int) int {
    return arr[0]  // Always 1 operation
}

func getLastElement(arr []int) int {
    return arr[len(arr)-1]  // Always 1 operation
}`,
      },
    },
    linear: {
      title: "O(n) - Linear Time",
      description: "Time grows directly with input size - double input, double time",
      realWorld: "Reading all pages in a book, counting all people in a room",
      code: {
        c: `// O(n) - Linear time
int findMax(int arr[], int n) {
    int max = arr[0];
    // Must check every element
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        cpp: `// O(n) - Linear time
int findMax(vector<int>& arr) {
    int max = arr[0];
    // Must check every element
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        java: `// O(n) - Linear time
public int findMax(int[] arr) {
    int max = arr[0];
    // Must check every element
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        javascript: `// O(n) - Linear time
function findMax(arr) {
    let max = arr[0];
    // Must check every element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`,
        python: `# O(n) - Linear time
def find_max(arr):
    max_val = arr[0]
    # Must check every element
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val`,
        go: `// O(n) - Linear time
func findMax(arr []int) int {
    max := arr[0]
    // Must check every element
    for i := 1; i < len(arr); i++ {
        if arr[i] > max {
            max = arr[i]
        }
    }
    return max
}`,
      },
    },
    logarithmic: {
      title: "O(log n) - Logarithmic Time",
      description: "Cuts problem in half each step - extremely efficient!",
      realWorld: "Finding a word in dictionary, finding a name in phone book",
      code: {
        c: `// O(log n) - Binary search
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        cpp: `// O(log n) - Binary search
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        java: `// O(log n) - Binary search
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        javascript: `// O(log n) - Binary search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target)
            left = mid + 1;   // Search right half
        else
            right = mid - 1;  // Search left half
    }
    return -1;
}`,
        python: `# O(log n) - Binary search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid

        if arr[mid] < target:
            left = mid + 1   # Search right half
        else:
            right = mid - 1  # Search left half

    return -1`,
        go: `// O(log n) - Binary search
func binarySearch(arr []int, target int) int {
    left, right := 0, len(arr)-1

    for left <= right {
        mid := left + (right-left)/2

        if arr[mid] == target {
            return mid
        }

        if arr[mid] < target {
            left = mid + 1   // Search right half
        } else {
            right = mid - 1  // Search left half
        }
    }
    return -1
}`,
      },
    },
    quadratic: {
      title: "O(n²) - Quadratic Time",
      description: "Nested loops - time grows with n × n (gets slow quickly!)",
      realWorld: "Comparing every person with every other person in a room",
      code: {
        c: `// O(n²) - Bubble sort
void bubbleSort(int arr[], int n) {
    // Outer loop: n times
    for (int i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
        cpp: `// O(n²) - Bubble sort
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    // Outer loop: n times
    for (int i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}`,
        java: `// O(n²) - Bubble sort
public void bubbleSort(int[] arr) {
    int n = arr.length;
    // Outer loop: n times
    for (int i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
        javascript: `// O(n²) - Bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    // Outer loop: n times
    for (let i = 0; i < n-1; i++) {
        // Inner loop: n times
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}`,
        python: `# O(n²) - Bubble sort
def bubble_sort(arr):
    n = len(arr)
    # Outer loop: n times
    for i in range(n):
        # Inner loop: n times
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
        go: `// O(n²) - Bubble sort
func bubbleSort(arr []int) {
    n := len(arr)
    // Outer loop: n times
    for i := 0; i < n-1; i++ {
        // Inner loop: n times
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                // Swap
                arr[j], arr[j+1] = arr[j+1], arr[j]
            }
        }
    }
}`,
      },
    },
  };

  const languages = [
    { id: "c", name: "C", color: "blue" },
    { id: "cpp", name: "C++", color: "blue" },
    { id: "java", name: "Java", color: "red" },
    { id: "javascript", name: "JavaScript", color: "yellow" },
    { id: "python", name: "Python", color: "green" },
    { id: "go", name: "Go", color: "cyan" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-slate-100">
        🟨 3. Time & Space Complexity
      </h2>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        Complexity analysis helps us understand how an algorithm's performance changes as input size grows.
      </p>

      {/* Why Complexity Matters */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl mb-8 border-l-4 border-yellow-600">
        <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 mb-4">
          🚀 Why Complexity Matters
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <div>
                <strong>Small data:</strong> All algorithms seem fast (100 items)
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <div>
                <strong>Real world:</strong> Millions of users, billions of records
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <div>
                <strong>O(n²) vs O(n log n):</strong> Hours vs seconds on 1M items!
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
            <div className="text-sm font-mono space-y-1">
              <div className="flex justify-between">
                <span>1000 items:</span>
                <span className="text-green-600">O(n²) = 1ms ✓</span>
              </div>
              <div className="flex justify-between">
                <span>1M items:</span>
                <span className="text-red-600">O(n²) = 16 min ✗</span>
              </div>
              <div className="flex justify-between">
                <span>1M items:</span>
                <span className="text-green-600">O(n log n) = 20ms ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time vs Space */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">⏱️ Time Complexity</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            How many operations as input grows?
          </p>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Measures number of operations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Focus on worst-case scenario</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span>Ignore constants: 5n → O(n)</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-3">💾 Space Complexity</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            How much memory does it use?
          </p>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span>Includes variables + data structures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span>Creating array of size n → O(n) space</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600">✓</span>
              <span>Few variables → O(1) space</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Complexity Examples in All Languages
        </h3>

        {/* Complexity Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {Object.entries(complexityExamples).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveExample(key)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeExample === key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600"
              }`}
            >
              {value.title.split(" - ")[0]}
            </button>
          ))}
        </div>

        {/* Example Content */}
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {complexityExamples[activeExample].title}
          </h4>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
            {complexityExamples[activeExample].description}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
            📌 Real world: {complexityExamples[activeExample].realWorld}
          </p>

          {/* Language Tabs */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setActiveLang(lang.id)}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  activeLang === lang.id
                    ? "bg-green-600 text-white"
                    : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-green-50 dark:hover:bg-slate-600"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{complexityExamples[activeExample].code[activeLang]}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Growth Comparison Table */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          📈 How Fast Do They Grow? (Operations for n items)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300 dark:border-slate-600">
                <th className="text-left p-3 text-slate-900 dark:text-slate-100 font-bold">Size (n)</th>
                <th className="text-right p-3 text-green-700 dark:text-green-400 font-bold">O(1)</th>
                <th className="text-right p-3 text-blue-700 dark:text-blue-400 font-bold">O(log n)</th>
                <th className="text-right p-3 text-yellow-700 dark:text-yellow-400 font-bold">O(n)</th>
                <th className="text-right p-3 text-orange-700 dark:text-orange-400 font-bold">O(n log n)</th>
                <th className="text-right p-3 text-red-700 dark:text-red-400 font-bold">O(n²)</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                <td className="p-3 font-semibold">10</td>
                <td className="text-right p-3">1</td>
                <td className="text-right p-3">3</td>
                <td className="text-right p-3">10</td>
                <td className="text-right p-3">33</td>
                <td className="text-right p-3 text-yellow-600">100</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                <td className="p-3 font-semibold">100</td>
                <td className="text-right p-3">1</td>
                <td className="text-right p-3">7</td>
                <td className="text-right p-3">100</td>
                <td className="text-right p-3">664</td>
                <td className="text-right p-3 text-orange-600">10,000</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                <td className="p-3 font-semibold">1,000</td>
                <td className="text-right p-3">1</td>
                <td className="text-right p-3">10</td>
                <td className="text-right p-3">1,000</td>
                <td className="text-right p-3">9,966</td>
                <td className="text-right p-3 text-red-600 font-bold">1,000,000</td>
              </tr>
              <tr className="hover:bg-slate-100 dark:hover:bg-slate-800">
                <td className="p-3 font-semibold">1,000,000</td>
                <td className="text-right p-3">1</td>
                <td className="text-right p-3">20</td>
                <td className="text-right p-3">1,000,000</td>
                <td className="text-right p-3">20,000,000</td>
                <td className="text-right p-3 text-red-600 font-bold">1,000,000,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 text-center">
          💡 Notice: O(n²) explodes with large inputs! Always aim for O(n log n) or better.
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
          ✅ Key Takeaways
        </h3>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>O(1) is best:</strong> Constant time, always fast</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>O(log n) is great:</strong> Scales amazingly (binary search)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>O(n) is acceptable:</strong> Linear growth, usually fine</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <span><strong>O(n log n) is efficient:</strong> Best sorting algorithms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
            <span><strong>O(n²) avoid when possible:</strong> Gets slow very quickly</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
