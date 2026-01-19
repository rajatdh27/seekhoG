"use client";

import { motion } from "framer-motion";
import { Zap, AlertTriangle, Check, X } from "lucide-react";
import PerspectiveCard from "@/app/components/common/PerspectiveCard"; // Re-add this import

const complexityData = [
  {
    op: "Push",
    time: "O(1)",
    note: "Amortized O(1) for dynamic arrays.",
    color: "emerald"
  },
  {
    op: "Pop",
    time: "O(1)",
    note: "Always constant time.",
    color: "emerald"
  },
  {
    op: "Peek / Top",
    time: "O(1)",
    note: "Direct access to the top element.",
    color: "emerald"
  },
  {
    op: "Search",
    time: "O(n)",
    note: "Requires traversing the entire stack.",
    color: "amber"
  },
   {
    op: "is Empty",
    time: "O(1)",
    note: "A simple check of the size or top pointer.",
    color: "emerald"
  },
  {
    op: "Size",
    time: "O(1)",
    note: "Typically stored as a variable.",
    color: "emerald"
  },
];

export default function StackComplexity() {
  return (
    <PerspectiveCard color="purple">
       <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
        The primary advantage of a stack is its <strong className="text-white">exceptional performance</strong> for adding and removing elements. All fundamental operations are performed in <strong className="text-purple-400">Constant Time</strong>, making stacks highly efficient for LIFO-based tasks.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
        {complexityData.map((item) => (
          <motion.div
            key={item.op}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className={`p-6 bg-slate-900 border border-${item.color}-500/20 rounded-3xl text-center shadow-lg group relative`}
          >
            <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider mb-2">{item.op}</h3>
            <p className={`text-4xl sm:text-5xl font-black bg-gradient-to-b from-${item.color}-400 to-${item.color}-600 bg-clip-text text-transparent mb-2`}>{item.time}</p>
            <p className="text-xs text-slate-500 font-bold hidden sm:block">{item.note}</p>
            {item.color === 'amber' && <AlertTriangle className="absolute top-3 right-3 text-amber-500/50" size={20}/>}
          </motion.div>
        ))}
      </div>

      <div>
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <Zap size={24} className="text-purple-400" /> Complexity Deep Dive
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem]">
                <h3 className="text-xl font-black text-purple-400 mb-6 flex items-center gap-3">
                    Why O(1)?
                </h3>
                <p className="text-sm font-bold text-slate-300 leading-relaxed">
                Stack operations don't need to shift elements or iterate through the structure. They only ever interact with the <strong className="text-white">top</strong> of the stack. A simple pointer or index is updated, which is a single, constant-time operation.
                </p>
            </div>
            <div className="p-8 bg-slate-900/70 border border-white/5 rounded-[2.5rem]">
                <h3 className="text-xl font-black text-purple-400 mb-6 flex items-center gap-3">
                    Space Complexity: O(n)
                </h3>
                <p className="text-sm font-bold text-slate-300 leading-relaxed">
                The space required for a stack is directly proportional to the number of elements (<strong className="text-white">n</strong>) it holds. Each element takes up a slot, so a stack with 100 elements will take up twice as much space as one with 50.
                </p>
            </div>
        </div>
      </div>

      <div className="mt-12">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <AlertTriangle size={24} className="text-amber-400" /> The Amortized Cost of Push
          </h3>
          <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem]">
              <p className="text-sm font-bold text-slate-300 leading-relaxed">
              When using a <strong className="text-white">dynamic array</strong> (like C++'s `std::vector` or Python's `list`), a `push` operation might find the array is full. To make space, the implementation must allocate a <strong className="text-amber-400">new, larger array</strong> and copy all existing elements over. This single push operation takes O(n) time.
              <br/><br/>
              However, this resizing is infrequent. By doubling the array size each time, the expensive O(n) copies are spread out over many fast O(1) pushes. The average cost over many operations, known as the <strong className="text-white">amortized cost</strong>, remains O(1).
              </p>
          </div>
      </div>
    </PerspectiveCard>
  );
}