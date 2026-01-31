"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import SectionHeader from "@/app/components/common/SectionHeader";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  CalendarClock, 
  CheckCircle2, 
  ArrowRight, 
  ListOrdered
} from "lucide-react";

export default function ActivitySelection() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const activityCode = {
    javascript: `// Activity Selection
function activitySelection(start, finish) {
    const n = start.length;
    const activities = [];
    
    // 1. Create activities with original indices
    for (let i = 0; i < n; i++) {
        activities.push({ id: i, start: start[i], finish: finish[i] });
    }
    
    // 2. Sort by finish time
    activities.sort((a, b) => a.finish - b.finish);
    
    // 3. Select activities
    const selected = [];
    // Always select the first activity
    selected.push(activities[0].id);
    let lastSelected = 0;
    
    for (let i = 1; i < n; i++) {
        // If start time >= finish time of last selected
        if (activities[i].start >= activities[lastSelected].finish) {
            selected.push(activities[i].id);
            lastSelected = i;
        }
    }
    
    return selected;
}
// Time: O(n log n) for sorting`,
    python: `# Activity Selection
def activity_selection(start, finish):
    n = len(start)
    activities = []
    
    # 1. Create activities
    for i in range(n):
        activities.append({'id': i, 'start': start[i], 'finish': finish[i]})
        
    # 2. Sort by finish time
    activities.sort(key=lambda x: x['finish'])
    
    # 3. Select activities
    selected = []
    # Always select the first activity
    selected.append(activities[0]['id'])
    last_selected = 0
    
    for i in range(1, n):
        # If start time >= finish time of last selected
        if activities[i]['start'] >= activities[last_selected]['finish']:
            selected.append(activities[i]['id'])
            last_selected = i
            
    return selected
# Time: O(n log n) for sorting`,
    java: `// Activity Selection
import java.util.*;

class Activity {
    int id, start, finish;
    Activity(int id, int start, int finish) {
        this.id = id;
        this.start = start;
        this.finish = finish;
    }
}

public List<Integer> activitySelection(int[] start, int[] finish) {
    int n = start.length;
    List<Activity> activities = new ArrayList<>();
    
    for (int i = 0; i < n; i++) {
        activities.add(new Activity(i, start[i], finish[i]));
    }
    
    // Sort by finish time
    Collections.sort(activities, (a, b) -> a.finish - b.finish);
    
    List<Integer> selected = new ArrayList<>();
    selected.add(activities.get(0).id);
    int lastSelected = 0;
    
    for (int i = 1; i < n; i++) {
        if (activities.get(i).start >= activities.get(lastSelected).finish) {
            selected.add(activities.get(i).id);
            lastSelected = i;
        }
    }
    
    return selected;
}`,
    cpp: `// Activity Selection
struct Activity {
    int id, start, finish;
};

bool compare(Activity a, Activity b) {
    return a.finish < b.finish;
}

vector<int> activitySelection(vector<int>& start, vector<int>& finish) {
    int n = start.size();
    vector<Activity> activities(n);
    
    for (int i = 0; i < n; i++) {
        activities[i] = {i, start[i], finish[i]};
    }
    
    sort(activities.begin(), activities.end(), compare);
    
    vector<int> selected;
    selected.push_back(activities[0].id);
    int lastSelected = 0;
    
    for (int i = 1; i < n; i++) {
        if (activities[i].start >= activities[lastSelected].finish) {
            selected.push_back(activities[i].id);
            lastSelected = i;
        }
    }
    
    return selected;
}`,
    go: `// Activity Selection
import "sort"

type Activity struct {
    id, start, finish int
}

func activitySelection(start, finish []int) []int {
    n := len(start)
    activities := make([]Activity, n)
    
    for i := 0; i < n; i++ {
        activities[i] = Activity{i, start[i], finish[i]}
    }
    
    sort.Slice(activities, func(i, j int) bool {
        return activities[i].finish < activities[j].finish
    })
    
    selected := []int{}
    selected = append(selected, activities[0].id)
    lastSelected := 0
    
    for i := 1; i < n; i++ {
        if activities[i].start >= activities[lastSelected].finish {
            selected = append(selected, activities[i].id)
            lastSelected = i
        }
    }
    
    return selected
}`
  };

  return (
    <PerspectiveCard color="violet">
      <SectionHeader 
        title="Activity Selection" 
        description="Maximize the number of non-overlapping activities."
        icon={CalendarClock} 
        color="violet" 
      />

      <div className="space-y-12">
        {/* Concept */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <ListOrdered size={20} className="text-violet-400" /> The Strategy
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            To select the maximum number of activities, simply pick the one that <strong className="text-violet-400">finishes earliest</strong>. This leaves as much time as possible for the remaining activities.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-violet-500 mb-1">Step 1</div>
              <div className="text-slate-300 text-sm">Sort all activities by finish time.</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-violet-500 mb-1">Step 2</div>
              <div className="text-slate-300 text-sm">Select the first activity (earliest finish).</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-violet-500 mb-1">Step 3</div>
              <div className="text-slate-300 text-sm">Iterate and pick if start ≥ last finish.</div>
            </div>
          </div>
        </div>

        {/* Code */}
        <CodeImplementation 
          languages={activityCode}
          color="violet"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}