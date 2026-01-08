"use client";
import { useState, useRef } from "react";

/*
  Animation engine with step-by-step visualization.
  Each operation shows the process with delays and visual feedback.
*/

// Animation speed (ms) - Slower for better understanding
const ANIMATION_DELAY = 1000;  // Main animation delay (was 600)
const QUICK_DELAY = 500;       // Quick delay (was 300)
const SCROLL_DELAY = 400;      // Time to wait for scroll to complete

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function useArrayEngine(initial = [], scrollToArray = null, scrollToElement = null) {
  const [arr, setArr] = useState(initial);
  const [prefix, setPrefix] = useState([]);
  const [log, setLog] = useState([]);
  const [ptrHighlight, setPtrHighlight] = useState(null);
  const [pairHighlight, setPairHighlight] = useState(null);
  const [windowHighlight, setWindowHighlight] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const runningRef = useRef(false);

  function pushLog(msg) {
    setLog(l => [...l, msg].slice(-100)); // Keep last 100, newest at end
  }

  function reset() {
    setArr(initial);
    setPrefix([]);
    setPtrHighlight(null);
    setPairHighlight(null);
    setWindowHighlight(null);
    setIsRunning(false);
    runningRef.current = false;
    pushLog("✨ Reset to initial state");
  }

  function randomize() {
    const newArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20));
    setArr(newArr);
    setPrefix([]);
    setPtrHighlight(null);
    setPairHighlight(null);
    setWindowHighlight(null);
    setIsRunning(false);
    runningRef.current = false;
    pushLog(`🎲 Randomized array`);
  }

  function clearLog() {
    setLog([]);
  }

  function clearHighlights() {
    setPtrHighlight(null);
    setPairHighlight(null);
    setWindowHighlight(null);
  }

  // Basic operations with animations
  async function runInsert(index, value) {
    if (isRunning) return;
    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    const idx = Math.max(0, Math.min(index, arr.length));
    setStatusMessage(`Inserting value ${value} at position [${idx}]...`);
    pushLog(`➕ Inserting ${value} at index ${idx}`);

    setPtrHighlight(idx);
    await sleep(ANIMATION_DELAY);

    setStatusMessage(`Shifting elements to make space...`);
    const newArr = [...arr.slice(0, idx), value, ...arr.slice(idx)];
    setArr(newArr);
    await sleep(QUICK_DELAY);

    setPtrHighlight(null);
    setStatusMessage(`✓ Successfully inserted ${value} at index ${idx}!`);
    pushLog(`✓ Inserted successfully`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  async function runDelete(index) {
    if (isRunning) return;
    if (index < 0 || index >= arr.length) {
      pushLog("❌ Index out of range");
      setStatusMessage("❌ Cannot delete - index out of range");
      await sleep(1000);
      setStatusMessage('');
      return;
    }

    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    setStatusMessage(`Deleting element at index [${index}] (value: ${arr[index]})...`);
    pushLog(`🗑️ Deleting element at index ${index}`);

    setPtrHighlight(index);
    await sleep(ANIMATION_DELAY);

    setStatusMessage(`Removing element and shifting array...`);
    const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
    setArr(newArr);
    await sleep(QUICK_DELAY);

    setPtrHighlight(null);
    setStatusMessage(`✓ Successfully deleted element at index ${index}!`);
    pushLog(`✓ Deleted successfully`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  async function runRotate(k = 1) {
    if (isRunning || arr.length === 0) return;
    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    const n = arr.length;
    const kk = ((k % n) + n) % n;
    setStatusMessage(`Rotating array left by ${kk} positions...`);
    pushLog(`🔄 Rotating array left by ${kk} positions`);

    await sleep(QUICK_DELAY);
    setStatusMessage(`Moving first ${kk} elements to the end...`);
    const newArr = [...arr.slice(kk), ...arr.slice(0, kk)];
    setArr(newArr);
    await sleep(ANIMATION_DELAY);

    setStatusMessage(`✓ Rotation complete!`);
    pushLog(`✓ Rotation complete`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  async function runReverse() {
    if (isRunning || arr.length === 0) return;
    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    setStatusMessage(`Starting reverse operation using two-pointer technique...`);
    pushLog(`↔️ Reversing array using two pointers`);
    let a = [...arr];
    let l = 0, r = a.length - 1;

    while (l < r) {
      // Highlight the pair we're about to swap
      setPairHighlight({ l, r });
      setStatusMessage(`Swapping elements at positions [${l}] ↔ [${r}] (values: ${a[l]} ↔ ${a[r]})`);
      pushLog(`Step ${l + 1}: Swapping indices ${l} ↔ ${r} (values: ${a[l]} ↔ ${a[r]})`);
      await sleep(ANIMATION_DELAY);

      // Perform swap
      const tmp = a[l];
      a[l] = a[r];
      a[r] = tmp;
      setArr([...a]);
      await sleep(QUICK_DELAY);

      l++;
      r--;
    }

    setPairHighlight(null);
    setStatusMessage(`✓ Array reversed successfully!`);
    pushLog(`✓ Reverse complete`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  async function runTwoPointers() {
    if (isRunning || arr.length === 0) return;
    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    setStatusMessage("Starting Two Pointers algorithm - placing pointers at both ends...");
    pushLog("👉👈 Two Pointers Algorithm - Finding pairs");
    let a = [...arr];
    let l = 0, r = a.length - 1;
    let step = 1;

    while (l < r) {
      setPairHighlight({ l, r });
      setStatusMessage(`Step ${step}: Pointers at [${l}] & [${r}], values: ${a[l]} and ${a[r]}`);
      pushLog(`Step ${step}: Pointers at ${l} & ${r} (values: ${a[l]}, ${a[r]})`);
      await sleep(ANIMATION_DELAY);

      // Swap for demonstration
      const tmp = a[l];
      a[l] = a[r];
      a[r] = tmp;
      setStatusMessage(`Swapping values ${tmp} ↔ ${a[l]}, moving pointers inward...`);
      setArr([...a]);
      pushLog(`  → Swapped ${tmp} ↔ ${a[l]}`);
      await sleep(QUICK_DELAY);

      l++;
      r--;
      step++;
    }

    setPairHighlight(null);
    setStatusMessage(`✓ Two Pointers complete! Made ${step - 1} swaps`);
    pushLog(`✓ Two pointers complete (${step - 1} swaps)`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  async function runSlidingWindow(k = 1) {
    if (isRunning || arr.length === 0) return;
    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    const n = arr.length;
    k = Math.max(1, Math.min(k, n));
    setStatusMessage(`Starting Sliding Window with window size ${k}...`);
    pushLog(`🪟 Sliding Window - Finding max in windows of size ${k}`);
    await sleep(QUICK_DELAY);

    for (let i = 0; i + k <= n; i++) {
      setWindowHighlight({ start: i, end: i + k - 1 });
      const windowValues = arr.slice(i, i + k);
      const maxVal = Math.max(...windowValues);
      setStatusMessage(`Window ${i + 1}: Elements [${i}..${i + k - 1}] = [${windowValues.join(', ')}] → Maximum = ${maxVal}`);
      pushLog(`Window ${i}: [${i}..${i + k - 1}] = [${windowValues.join(',')}] → max = ${maxVal}`);
      await sleep(ANIMATION_DELAY);
    }

    setWindowHighlight(null);
    setStatusMessage(`✓ Sliding Window complete! Processed ${n - k + 1} windows`);
    pushLog(`✓ Sliding window complete`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  async function runPrefixSum() {
    if (isRunning || arr.length === 0) return;
    setIsRunning(true);

    // Scroll to array visualizer
    scrollToArray?.();
    await sleep(SCROLL_DELAY);

    setStatusMessage("Computing Prefix Sum - building cumulative sum array...");
    pushLog("➕ Computing Prefix Sum Array");
    const p = [];
    let s = 0;
    await sleep(QUICK_DELAY);

    for (let i = 0; i < arr.length; i++) {
      s += arr[i];
      p.push(s);
      setPtrHighlight(i);
      setPrefix([...p]);
      setStatusMessage(`Step ${i + 1}/${arr.length}: Adding arr[${i}] = ${arr[i]}, running sum = ${s}`);
      pushLog(`Step ${i + 1}: prefix[${i}] = ${s} (sum of first ${i + 1} elements)`);
      await sleep(ANIMATION_DELAY);
    }

    setPtrHighlight(null);
    setStatusMessage(`✓ Prefix Sum complete! Result: [${p.join(', ')}]`);
    pushLog(`✓ Prefix sum computed: [${p.join(', ')}]`);
    await sleep(QUICK_DELAY);
    setStatusMessage('');
    setIsRunning(false);
  }

  return {
    arr, setArr, prefix, log,
    ptrHighlight, pairHighlight, windowHighlight,
    isRunning, statusMessage,
    reset, randomize, clearLog,
    runInsert, runDelete, runRotate, runReverse,
    runTwoPointers, runSlidingWindow, runPrefixSum
  };
}
