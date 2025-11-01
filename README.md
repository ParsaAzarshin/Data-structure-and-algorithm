# 🧠 JavaScript DSA Repository

A structured, well-documented collection of **Data Structures and Algorithms** implemented in pure JavaScript.  
Designed for **technical interview preparation** and **conceptual mastery** through clean code and detailed reasoning.

---

## 📍 Overview

This repository focuses on **clarity and decomposition**, not just final answers.  
Each algorithm file includes:
- **🧩 Problem description**
- **🧠 Step-by-step decomposition** (logic breakdown)
- **💻 Fully commented implementation**
- **🧮 Time / Space complexity analysis**

All problems are organized by category (`arrays`, `linked-lists`, `stacks-queues`, `trees`, `hashmaps`) to enable incremental study.

---

## 📂 Folder Structure
│

├─ arrays/

├─ 01-two-sum.js

├─ 02-sliding-window.js

├─ 03-remove-duplicates.js

├─ 04-binary-search.js

└─ 05-palindrome.js

│

├─ linked-lists/

├─ 01-reverse-linked-list.js

├─ 02-detect-cycle.js

├─ 03-merge-sorted-lists.js

└─ 04-find-middle.js

│

├─ stacks-queues/

├─ 01-validate-parentheses.js

├─ 02-stack-implementation.js

└─ 03-queue-using-stacks.js

│

├─ trees/

├─ 01-dfs.js

├─ 02-bfs.js

└─ 03-balanced-tree.js

│

├─ hashmaps/

├─ 01-frequency-counter.js

├─ 02-check-duplicates.js

└─ 03-lru-cache.js

│

└─ README.md ← this file (main project documentation)


---

## 🧩 Code Principles

Each solution emphasizes **real interview structure**, using clear lexicon and step annotations:
```js
/* -----------------------------------------------
Problem: Two Sum (Sorted Array)
-----------------------------------------------
Given a sorted array and a target,
find two elements summing up to the target.

🧠 Steps:
1️⃣ Use Two Pointer technique (because array is sorted)
2️⃣ Move pointers inward depending on the sum
3️⃣ Return pair when sum matches target
-----------------------------------------------
Time: O(n) | Space: O(1)
----------------------------------------------- */

function twoSumSorted(array, target) {
  let left = 0, right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) return [array[left], array[right]];
    else if (sum < target) left++;
    else right--;
  }
  return null;
}
```
Each code block includes problem analysis before implementation, helpful for technical explanations during interviews.

## 👨‍💻 Maintained and written by: 
Parsa Azarshin
Data Structures / Algorithm Design


