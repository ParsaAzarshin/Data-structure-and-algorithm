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
/* ---------------------------------------------------------------
Problem: Two Sum (Unsorted Array)
---------------------------------------------------------------
🧩 Description:
Given an array of integers and a target value,
find the indices [i, j] of two numbers such that nums[i] + nums[j] = target.
You may assume exactly one valid solution exists.

---------------------------------------------------------------
🧠 Steps to solve (Naive approach):
1️⃣ Loop through array with index i (outer loop).
2️⃣ For each i, loop through j = i + 1 to end (inner loop).
3️⃣ In each iteration, compute `nums[i] + nums[j]`.
4️⃣ If the sum equals target → return [i, j].
5️⃣ If loops finish with no match → return null.

🧮 Complexity Analysis:
Time Complexity:  O(n²)
Space Complexity: O(1)
--------------------------------------------------------------- */
function twoSumNaive(nums, target) {
    // Step 0: Input validation
    if (!Array.isArray(nums) || typeof target !== 'number' || nums.length < 2)
        return null;

    // Step 1: Check all pairs
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === complement) {
                // ✅ pair found
                return [i, j];
            }
        }
    }

    // Step 2: If no pair found
    return null;
}

// 🧪 Example test
console.log(twoSumNaive([2, 7, 11, 15], 9));   // Output: [0, 1]
console.log(twoSumNaive([3, 2, 4], 6));        // Output: [1, 2]
console.log(twoSumNaive([3, 3], 6));           // Output: [0, 1]

/* ---------------------------------------------------------------
SMART / OPTIMIZED SOLUTION
---------------------------------------------------------------
🧠 Idea:
Instead of checking all pairs (O(n²)),
we can use a **HashMap** to store seen numbers and their indices.

1️⃣ Create an empty Map.
2️⃣ Iterate through array:
      - For each number, compute complement = target - number.
      - If complement already exists in Map → we found the pair.
      - Else store current number with its index in Map.
3️⃣ Return indices as soon as found.
4️⃣ If nothing found → return null.

Time Complexity:  O(n)
Space Complexity: O(n)
--------------------------------------------------------------- */
function twoSumOptimized(nums, target) {
    // Step 0: Basic validation
    if (!Array.isArray(nums) || typeof target !== 'number' || nums.length < 2)
        return null;

    // Step 1: Initialize map to store seen numbers
    const seen = new Map();

    // Step 2: Iterate through array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // ✅ If complement exists in map, return indices
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        // Otherwise, store current number & its index
        seen.set(nums[i], i);
    }

    // Step 3: If not found, return null
    return null;
}

// 🧪 Example test
console.log(twoSumOptimized([2, 7, 11, 15], 9));   // Output: [0, 1]
console.log(twoSumOptimized([3, 2, 4], 6));        // Output: [1, 2]
console.log(twoSumOptimized([1, 5, 3, 9], 14));    // Output: [1, 3]

```
Each code block includes problem analysis before implementation, helpful for technical explanations during interviews.

## 👨‍💻 Maintained and written by: 
Parsa Azarshin
Data Structures / Algorithm Design


