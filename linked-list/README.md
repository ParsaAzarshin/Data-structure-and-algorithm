# 🔗 Linked Lists — Core Pointer Data Structures

This folder contains **manual implementations** of classic **Linked List problems**.  
All solutions follow the unified DSA documentation format:

🧩 **Problem Statement**  
💭 **Naive Solution → Optimized Approach**  
⚙️ **Manual Pointer Manipulation (without Array methods)**  
🧮 **Complexity Analysis**

> Focus: *True pointer‑level reasoning and memory traversal — implemented without arrays or built‑ins.*

---

## 📁 File List

| # | File Name | Topic | Key Concepts | Time Complexity |
|:--:|:---------------------------|:---------------------------|:--------------------------------|:----------------:|
| 01 | `01-reverse-linked-list.js` | Linked List Reversal | Iterative `prev/curr/next` pointer swaps | O(n) |
| 02 | `02-detect-cycle.js` | Cycle Detection | Floyd’s Tortoise & Hare Algorithm | O(n) / O(1) |
| 03 | `03-merge-sorted-lists.js` | Merge Two Sorted Lists | Pointer rewiring between `list1` & `list2` | O(n + m) |
| 04 | `04-find-middle.js` | Find Middle Node | Fast/Slow pointer technique | O(n) |

---

## 🧩 Core Patterns

### 🔹 Reversal
- **Naive:** Recursive reversal (uses call stack, O(n) space).
- **Optimized:** Iterative loop with 3 raw pointers (`prev`, `curr`, `next`) → O(1) space.

### 🔹 Cycle Detection
- **Naive:** Use Set to track visited nodes (O(n) space).
- **Optimized:** Two‑pointer Floyd cycle detection (O(1) space).

### 🔹 Merge Sorted Lists
- **Naive:** Create new nodes merging data.
- **Optimized:** Pointer‑level merge → no extra memory.

### 🔹 Find Middle
- **Naive:** Traverse → count length → second pass.
- **Optimized:** Single‑pass `fast/slow` pointer method.

---

## ⚙️ Manual Memory Structures

Each file defines standalone helper functions for testability:
```js
function buildList(arr) { ... }  // build linked list from array
function printList(head) { ... } // convert linked list -> array
```
> Built for mastery and documentation clarity 🧩  
> DSA — Parsa Azarshin
