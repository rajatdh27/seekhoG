"use client";
import { useState, useRef } from "react";

/*
  Minimal animation engine: generates step logs and updates state.
  For simplicity we rely on state updates and framer-motion layout to animate.
*/

export default function useArrayEngine(initial = []) {
  const [arr, setArr] = useState(initial);
  const [prefix, setPrefix] = useState([]);
  const [log, setLog] = useState([]);
  const [ptrHighlight, setPtrHighlight] = useState(null);
  const [pairHighlight, setPairHighlight] = useState(null);
  const [windowHighlight, setWindowHighlight] = useState(null);
  const runningRef = useRef(false);

  function pushLog(msg) {
    setLog(l => [msg, ...l].slice(0, 100));
  }

  function reset() {
    setArr(initial);
    setPrefix([]);
    setPtrHighlight(null);
    setPairHighlight(null);
    setWindowHighlight(null);
    pushLog("Reset to initial");
  }

  function randomize() {
    const newArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));
    setArr(newArr);
    setPrefix([]);
    setPtrHighlight(null);
    pushLog(`Randomized -> [${newArr.join(", ")}]`);
  }

  function clearLog() {
    setLog([]);
  }

  // simple immediate-run steps (could be extended to true stepper)
  function runInsert(index, value) {
    const idx = Math.max(0, Math.min(index, arr.length));
    pushLog(`Insert ${value} at ${idx}`);
    setPtrHighlight(idx);
    const newArr = [...arr.slice(0, idx), value, ...arr.slice(idx)];
    setArr(newArr);
    setPtrHighlight(null);
    pushLog(`Array -> [${newArr.join(", ")}]`);
  }

  function runDelete(index) {
    if (index < 0 || index >= arr.length) {
      pushLog("Delete: index out of range");
      return;
    }
    pushLog(`Delete at ${index}`);
    setPtrHighlight(index);
    const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
    setArr(newArr);
    setPtrHighlight(null);
    pushLog(`Array -> [${newArr.join(", ")}]`);
  }

  function runRotate(k = 1) {
    if (arr.length === 0) return;
    const n = arr.length;
    const kk = ((k % n) + n) % n;
    pushLog(`Rotate left by ${kk}`);
    const newArr = [...arr.slice(kk), ...arr.slice(0, kk)];
    setArr(newArr);
    pushLog(`Array -> [${newArr.join(", ")}]`);
  }

  function runReverse() {
    pushLog("Reverse");
    const newArr = [...arr].reverse();
    setArr(newArr);
    pushLog(`Array -> [${newArr.join(", ")}]`);
  }

  function runTwoPointers() {
    pushLog("Two pointers demo");
    let a = [...arr];
    let l = 0, r = a.length - 1;
    while (l < r) {
      setPtrHighlight(null);
      setPairHighlight({ l, r });
      pushLog(`Compare indices ${l} and ${r} -> ${a[l]}, ${a[r]}`);
      // swap for demo
      const tmp = a[l]; a[l] = a[r]; a[r] = tmp;
      setArr([...a]);
      pushLog(`Swapped -> [${a.join(", ")}]`);
      l++; r--;
    }
    setPairHighlight(null);
    pushLog("Two pointers finished");
  }

  function runSlidingWindow(k = 1) {
    pushLog(`Sliding window (k=${k})`);
    const n = arr.length;
    k = Math.max(1, Math.min(k, n));
    for (let i = 0; i + k <= n; i++) {
      setWindowHighlight({ start: i, end: i + k - 1 });
      pushLog(`Window [${i}, ${i + k - 1}] -> max = ${Math.max(...arr.slice(i, i+k))}`);
    }
    setWindowHighlight(null);
    pushLog("Sliding window done");
  }

  function runPrefixSum() {
    pushLog("Prefix sum");
    const p = [];
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      s += arr[i];
      p.push(s);
      setPrefix([...p]);
      pushLog(`prefix[0..${i}] = ${p.join(",")}`);
    }
    pushLog("Prefix computed");
  }

  return {
    arr, setArr, prefix, log,
    ptrHighlight, pairHighlight, windowHighlight,
    reset, randomize, clearLog,
    runInsert, runDelete, runRotate, runReverse,
    runTwoPointers, runSlidingWindow, runPrefixSum
  };
}
