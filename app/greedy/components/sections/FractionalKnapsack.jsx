"use client";

import { useState } from "react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard";
import CodeImplementation from "@/app/components/common/CodeImplementation";
import { 
  ShoppingBag, 
  Percent, 
  Scale, 
  ArrowDown
} from "lucide-react";

export default function FractionalKnapsack() {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const knapsackCode = {
    javascript: `// Fractional Knapsack
function fractionalKnapsack(weights, values, capacity) {
    const n = weights.length;
    const items = [];
    
    // 1. Calculate ratio and store
    for (let i = 0; i < n; i++) {
        items.push({ 
            id: i, 
            weight: weights[i], 
            value: values[i], 
            ratio: values[i] / weights[i] 
        });
    }
    
    // 2. Sort by ratio (descending)
    items.sort((a, b) => b.ratio - a.ratio);
    
    let totalValue = 0;
    let currentWeight = 0;
    
    // 3. Select items
    for (let item of items) {
        if (currentWeight + item.weight <= capacity) {
            // Take whole item
            currentWeight += item.weight;
            totalValue += item.value;
        } else {
            // Take fraction
            const remaining = capacity - currentWeight;
            totalValue += item.value * (remaining / item.weight);
            break; // Knapsack full
        }
    }
    
    return totalValue;
}
// Time: O(n log n)`,
    python: `# Fractional Knapsack
def fractional_knapsack(weights, values, capacity):
    n = len(weights)
    items = []
    
    # 1. Store items with ratio
    for i in range(n):
        items.append({
            'weight': weights[i],
            'value': values[i],
            'ratio': values[i] / weights[i]
        })
        
    # 2. Sort by ratio (descending)
    items.sort(key=lambda x: x['ratio'], reverse=True)
    
    total_value = 0
    current_weight = 0
    
    # 3. Select items
    for item in items:
        if current_weight + item['weight'] <= capacity:
            # Take whole item
            current_weight += item['weight']
            total_value += item['value']
        else:
            # Take fraction
            remaining = capacity - current_weight
            total_value += item['value'] * (remaining / item['weight'])
            break
            
    return total_value`,
    java: `// Fractional Knapsack
import java.util.*;

class Item {
    int weight, value;
    double ratio;
    
    Item(int weight, int value) {
        this.weight = weight;
        this.value = value;
        this.ratio = (double)value / weight;
    }
}

public double fractionalKnapsack(int[] weights, int[] values, int capacity) {
    int n = weights.length;
    List<Item> items = new ArrayList<>();
    
    for (int i = 0; i < n; i++) {
        items.add(new Item(weights[i], values[i]));
    }
    
    // Sort by ratio descending
    Collections.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
    
    double totalValue = 0;
    int currentWeight = 0;
    
    for (Item item : items) {
        if (currentWeight + item.weight <= capacity) {
            currentWeight += item.weight;
            totalValue += item.value;
        } else {
            int remaining = capacity - currentWeight;
            totalValue += item.value * ((double)remaining / item.weight);
            break;
        }
    }
    
    return totalValue;
}`,
    cpp: `// Fractional Knapsack
struct Item {
    int weight, value;
    double ratio;
};

bool compare(Item a, Item b) {
    return a.ratio > b.ratio;
}

double fractionalKnapsack(vector<int>& weights, vector<int>& values, int capacity) {
    int n = weights.size();
    vector<Item> items(n);
    
    for (int i = 0; i < n; i++) {
        items[i] = {weights[i], values[i], (double)values[i] / weights[i]};
    }
    
    sort(items.begin(), items.end(), compare);
    
    double totalValue = 0;
    int currentWeight = 0;
    
    for (const auto& item : items) {
        if (currentWeight + item.weight <= capacity) {
            currentWeight += item.weight;
            totalValue += item.value;
        } else {
            int remaining = capacity - currentWeight;
            totalValue += item.value * ((double)remaining / item.weight);
            break;
        }
    }
    
    return totalValue;
}`,
    go: `// Fractional Knapsack
import "sort"

type Item struct {
    weight, value int
    ratio float64
}

func fractionalKnapsack(weights, values []int, capacity int) float64 {
    n := len(weights)
    items := make([]Item, n)
    
    for i := 0; i < n; i++ {
        items[i] = Item{
            weight: weights[i],
            value: values[i],
            ratio: float64(values[i]) / float64(weights[i]),
        }
    }
    
    // Sort descending by ratio
    sort.Slice(items, func(i, j int) bool {
        return items[i].ratio > items[j].ratio
    })
    
    totalValue := 0.0
    currentWeight := 0
    
    for _, item := range items {
        if currentWeight + item.weight <= capacity {
            currentWeight += item.weight
            totalValue += float64(item.value)
        } else {
            remaining := capacity - currentWeight
            totalValue += float64(item.value) * (float64(remaining) / float64(item.weight))
            break
        }
    }
    
    return totalValue
}`
  };

  return (
    <PerspectiveCard color="purple">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
          <ShoppingBag size={28} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight">Fractional Knapsack</h2>
          <p className="text-slate-400 font-medium">Maximize value by taking fractions of items.</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Concept */}
        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8">
          <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
            <Scale size={20} className="text-purple-400" /> The Strategy
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Unlike 0/1 Knapsack where you must take or leave an item, here you can take a part of it. The optimal strategy is to always pick the item with the <strong className="text-purple-400">highest value-to-weight ratio</strong> first.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-purple-500 mb-1">Step 1</div>
              <div className="text-slate-300 text-sm">Calculate Ratio = Value / Weight</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-purple-500 mb-1">Step 2</div>
              <div className="text-slate-300 text-sm">Sort items by Ratio (Descending)</div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
              <div className="text-xs font-bold text-purple-500 mb-1">Step 3</div>
              <div className="text-slate-300 text-sm">Fill bag, taking fractions at end</div>
            </div>
          </div>
        </div>

        {/* Code */}
        <CodeImplementation 
          languages={knapsackCode}
          color="purple"
          initialLanguage={currentLanguage}
        />
      </div>
    </PerspectiveCard>
  );
}