"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ActivitySelection() {
  const [currentLanguage, setCurrentLanguage] = useState("cpp");

  const languages = [
    { id: "c", name: "C", icon: "🔷" },
    { id: "cpp", name: "C++", icon: "⚡" },
    { id: "java", name: "Java", icon: "☕" },
    { id: "javascript", name: "JavaScript", icon: "🟨" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "go", name: "Go", icon: "🔵" },
  ];

  const codeExamples = {
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int start;
    int finish;
    int index;
} Activity;

// Compare function for sorting by finish time
int compare(const void* a, const void* b) {
    Activity* act1 = (Activity*)a;
    Activity* act2 = (Activity*)b;
    return act1->finish - act2->finish;
}

// Activity Selection - O(n log n)
void activitySelection(int start[], int finish[], int n) {
    // Create array of activities
    Activity* activities = (Activity*)malloc(n * sizeof(Activity));
    for (int i = 0; i < n; i++) {
        activities[i].start = start[i];
        activities[i].finish = finish[i];
        activities[i].index = i;
    }

    // Sort by finish time - O(n log n)
    qsort(activities, n, sizeof(Activity), compare);

    printf("Selected activities:\\n");

    // First activity is always selected
    int lastSelected = 0;
    printf("Activity %d: [%d, %d]\\n",
           activities[0].index,
           activities[0].start,
           activities[0].finish);

    // Greedy selection - O(n)
    for (int i = 1; i < n; i++) {
        // If start time >= finish time of last selected
        if (activities[i].start >= activities[lastSelected].finish) {
            printf("Activity %d: [%d, %d]\\n",
                   activities[i].index,
                   activities[i].start,
                   activities[i].finish);
            lastSelected = i;
        }
    }

    free(activities);
}

// Usage
int main() {
    int start[] = {1, 3, 0, 5, 8, 5};
    int finish[] = {2, 4, 6, 7, 9, 9};
    int n = 6;

    activitySelection(start, finish, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Activity {
    int start;
    int finish;
    int index;
};

// Activity Selection - O(n log n)
vector<int> activitySelection(vector<int>& start, vector<int>& finish) {
    int n = start.size();
    vector<Activity> activities(n);

    // Create activities with original indices
    for (int i = 0; i < n; i++) {
        activities[i] = {start[i], finish[i], i};
    }

    // Sort by finish time - O(n log n)
    sort(activities.begin(), activities.end(),
         [](const Activity& a, const Activity& b) {
             return a.finish < b.finish;
         });

    vector<int> selected;

    // First activity is always selected
    selected.push_back(activities[0].index);
    int lastSelected = 0;

    // Greedy selection - O(n)
    for (int i = 1; i < n; i++) {
        // If start time >= finish time of last selected
        if (activities[i].start >= activities[lastSelected].finish) {
            selected.push_back(activities[i].index);
            lastSelected = i;
        }
    }

    return selected;
}

// Print selected activities
void printActivities(vector<int>& start, vector<int>& finish,
                     vector<int>& selected) {
    cout << "Selected activities:" << endl;
    for (int idx : selected) {
        cout << "Activity " << idx << ": ["
             << start[idx] << ", " << finish[idx] << "]" << endl;
    }
}

// Usage
int main() {
    vector<int> start = {1, 3, 0, 5, 8, 5};
    vector<int> finish = {2, 4, 6, 7, 9, 9};

    vector<int> selected = activitySelection(start, finish);
    printActivities(start, finish, selected);

    cout << "Total activities: " << selected.size() << endl;
    return 0;
}`,

    java: `import java.util.*;

class Activity {
    int start;
    int finish;
    int index;

    Activity(int start, int finish, int index) {
        this.start = start;
        this.finish = finish;
        this.index = index;
    }
}

public class ActivitySelection {
    // Activity Selection - O(n log n)
    public static List<Integer> selectActivities(int[] start, int[] finish) {
        int n = start.length;
        List<Activity> activities = new ArrayList<>();

        // Create activities with original indices
        for (int i = 0; i < n; i++) {
            activities.add(new Activity(start[i], finish[i], i));
        }

        // Sort by finish time - O(n log n)
        Collections.sort(activities, (a, b) -> a.finish - b.finish);

        List<Integer> selected = new ArrayList<>();

        // First activity is always selected
        selected.add(activities.get(0).index);
        int lastSelected = 0;

        // Greedy selection - O(n)
        for (int i = 1; i < n; i++) {
            // If start time >= finish time of last selected
            if (activities.get(i).start >= activities.get(lastSelected).finish) {
                selected.add(activities.get(i).index);
                lastSelected = i;
            }
        }

        return selected;
    }

    // Print selected activities
    public static void printActivities(int[] start, int[] finish,
                                       List<Integer> selected) {
        System.out.println("Selected activities:");
        for (int idx : selected) {
            System.out.println("Activity " + idx + ": [" +
                             start[idx] + ", " + finish[idx] + "]");
        }
    }

    // Usage
    public static void main(String[] args) {
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] finish = {2, 4, 6, 7, 9, 9};

        List<Integer> selected = selectActivities(start, finish);
        printActivities(start, finish, selected);

        System.out.println("Total activities: " + selected.size());
    }
}`,

    javascript: `// Activity Selection - O(n log n)
function activitySelection(start, finish) {
    const n = start.length;
    const activities = [];

    // Create activities with original indices
    for (let i = 0; i < n; i++) {
        activities.push({ start: start[i], finish: finish[i], index: i });
    }

    // Sort by finish time - O(n log n)
    activities.sort((a, b) => a.finish - b.finish);

    const selected = [];

    // First activity is always selected
    selected.push(activities[0].index);
    let lastSelected = 0;

    // Greedy selection - O(n)
    for (let i = 1; i < n; i++) {
        // If start time >= finish time of last selected
        if (activities[i].start >= activities[lastSelected].finish) {
            selected.push(activities[i].index);
            lastSelected = i;
        }
    }

    return selected;
}

// Print selected activities
function printActivities(start, finish, selected) {
    console.log("Selected activities:");
    for (const idx of selected) {
        console.log(\`Activity \${idx}: [\${start[idx]}, \${finish[idx]}]\`);
    }
}

// Usage
const start = [1, 3, 0, 5, 8, 5];
const finish = [2, 4, 6, 7, 9, 9];

const selected = activitySelection(start, finish);
printActivities(start, finish, selected);

console.log(\`Total activities: \${selected.length}\`);`,

    python: `# Activity Selection - O(n log n)
def activity_selection(start, finish):
    n = len(start)

    # Create activities with original indices
    activities = [(start[i], finish[i], i) for i in range(n)]

    # Sort by finish time - O(n log n)
    activities.sort(key=lambda x: x[1])

    selected = []

    # First activity is always selected
    selected.append(activities[0][2])
    last_selected = 0

    # Greedy selection - O(n)
    for i in range(1, n):
        # If start time >= finish time of last selected
        if activities[i][0] >= activities[last_selected][1]:
            selected.append(activities[i][2])
            last_selected = i

    return selected

# Print selected activities
def print_activities(start, finish, selected):
    print("Selected activities:")
    for idx in selected:
        print(f"Activity {idx}: [{start[idx]}, {finish[idx]}]")

# Usage
start = [1, 3, 0, 5, 8, 5]
finish = [2, 4, 6, 7, 9, 9]

selected = activity_selection(start, finish)
print_activities(start, finish, selected)

print(f"Total activities: {len(selected)}")`,

    go: `package main

import (
    "fmt"
    "sort"
)

type Activity struct {
    start  int
    finish int
    index  int
}

// Activity Selection - O(n log n)
func activitySelection(start, finish []int) []int {
    n := len(start)
    activities := make([]Activity, n)

    // Create activities with original indices
    for i := 0; i < n; i++ {
        activities[i] = Activity{start[i], finish[i], i}
    }

    // Sort by finish time - O(n log n)
    sort.Slice(activities, func(i, j int) bool {
        return activities[i].finish < activities[j].finish
    })

    selected := []int{}

    // First activity is always selected
    selected = append(selected, activities[0].index)
    lastSelected := 0

    // Greedy selection - O(n)
    for i := 1; i < n; i++ {
        // If start time >= finish time of last selected
        if activities[i].start >= activities[lastSelected].finish {
            selected = append(selected, activities[i].index)
            lastSelected = i
        }
    }

    return selected
}

// Print selected activities
func printActivities(start, finish []int, selected []int) {
    fmt.Println("Selected activities:")
    for _, idx := range selected {
        fmt.Printf("Activity %d: [%d, %d]\\n", idx, start[idx], finish[idx])
    }
}

// Usage
func main() {
    start := []int{1, 3, 0, 5, 8, 5}
    finish := []int{2, 4, 6, 7, 9, 9}

    selected := activitySelection(start, finish)
    printActivities(start, finish, selected)

    fmt.Printf("Total activities: %d\\n", len(selected))
}`,
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
          <span className="text-4xl">📅</span>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Activity Selection Problem
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Select maximum number of non-overlapping activities
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="mb-12">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-violet-600">
          <h3 className="text-2xl font-bold text-violet-900 dark:text-violet-100 mb-4">
            📝 Problem Statement
          </h3>
          <p className="text-lg text-violet-900 dark:text-violet-100 mb-4">
            Given N activities with their start and finish times, select the maximum number of activities
            that can be performed by a single person, assuming that a person can only work on a single
            activity at a time.
          </p>
          <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold text-violet-700 dark:text-violet-300 mb-2">
              Example:
            </p>
            <code className="text-sm">
              Activities: [(1,2), (3,4), (0,6), (5,7), (8,9), (5,9)]<br />
              Maximum activities: 4 → Activities at indices [0, 1, 3, 4]
            </code>
          </div>
        </div>
      </div>

      {/* Greedy Strategy */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          🎯 Greedy Strategy
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-4xl mb-3">1️⃣</div>
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
              Sort by Finish Time
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Sort all activities by their finish time in ascending order
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <div className="text-4xl mb-3">2️⃣</div>
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">
              Select First Activity
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              The first activity (earliest finish time) is always selected
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="text-4xl mb-3">3️⃣</div>
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              Greedy Choice
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Select next activity whose start ≥ last selected activity's finish
            </p>
          </div>
        </div>
      </div>

      {/* Implementation */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          💻 Implementation
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setCurrentLanguage(lang.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                currentLanguage === lang.id
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-100">
            <code>{codeExamples[currentLanguage]}</code>
          </pre>
        </div>
      </div>

      {/* Complexity Analysis */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ⚡ Complexity Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800">
            <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">
              Time Complexity
            </h4>
            <div className="text-3xl font-bold text-violet-600 mb-2 font-mono">O(n log n)</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Sorting takes O(n log n), greedy selection takes O(n)
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
              Space Complexity
            </h4>
            <div className="text-3xl font-bold text-blue-600 mb-2 font-mono">O(n)</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              For storing activities and selected indices
            </p>
          </div>
        </div>
      </div>

      {/* Why Greedy Works */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          ✨ Why Greedy Works Here
        </h3>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-green-900 dark:text-green-100">Greedy Choice Property:</strong>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Selecting the activity with earliest finish time leaves maximum room for other activities
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-green-900 dark:text-green-100">Optimal Substructure:</strong>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  After selecting an activity, the remaining problem is also activity selection
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
              <div>
                <strong className="text-green-900 dark:text-green-100">Proof:</strong>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Any optimal solution can be modified to include the earliest finishing activity
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
