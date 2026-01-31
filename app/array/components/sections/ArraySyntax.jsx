"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { Code2 } from "lucide-react";

export default function ArraySyntax() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const languages = {
    javascript: `// Creating an array
const arr = [1, 2, 3, 4, 5];

// Accessing elements
console.log(arr[0]); // 1

// Adding elements
arr.push(6);    // Add to end
arr.unshift(0); // Add to start

// Removing elements
arr.pop();      // Remove from end
arr.shift();    // Remove from start

// Length
console.log(arr.length);`,
    python: `# Creating a list (dynamic array)
arr = [1, 2, 3, 4, 5]

# Accessing elements
print(arr[0]) # 1

# Adding elements
arr.append(6)      # Add to end
arr.insert(0, 0)   # Add to start

# Removing elements
arr.pop()          # Remove from end
arr.pop(0)         # Remove from start

# Length
print(len(arr))`,
    java: `// Creating an array (fixed size)
int[] arr = new int[5];
int[] initializedArr = {1, 2, 3, 4, 5};

// Using ArrayList (dynamic size)
import java.util.ArrayList;
ArrayList<Integer> list = new ArrayList<>();

// Adding elements
list.add(1);
list.add(2);

// Accessing elements
System.out.println(list.get(0)); // 1

// Removing elements
list.remove(0); // Remove by index

// Size
System.out.println(list.size());`,
    cpp: `// Creating an array
int arr[5] = {1, 2, 3, 4, 5};

// Using Vector (dynamic array)
#include <vector>
std::vector<int> vec = {1, 2, 3, 4, 5};

// Accessing elements
cout << vec[0]; // 1

// Adding elements
vec.push_back(6); // Add to end

// Removing elements
vec.pop_back();   // Remove from end

// Size
cout << vec.size();`,
    c: `// Creating an array
int arr[5] = {1, 2, 3, 4, 5};

// Accessing elements
printf("%d", arr[0]); // 1

// In C, arrays are fixed size.
// Dynamic arrays require manual memory management
// using malloc/calloc and realloc.`,
    go: `// Creating a slice (dynamic array)
arr := []int{1, 2, 3, 4, 5}

// Accessing elements
fmt.Println(arr[0]) // 1

// Adding elements
arr = append(arr, 6)

// Slicing (sub-array)
sub := arr[1:3] // {2, 3}

// Length
fmt.Println(len(arr))`,
  };

  return (
    <PerspectiveCard color="cyan">
      <SectionHeader 
        title="Syntax Guide" 
        description="Common operations across different languages."
        icon={Code2} 
        color="cyan" 
      />

      <CodeImplementation 
        languages={languages} 
        color="cyan" 
        initialLanguage={currentLanguage} 
      />
    </PerspectiveCard>
  );
}