# 🧱 Stacks & Queues — Core Linear Data Structures

This folder contains **manual implementations** of Stack‑ and Queue‑based problems.  
All solutions follow the unified DSA documentation style:

🧩 **Problem Statement**  
💭 **Naive Solution → Optimized Approach**  
⚙️ **Manual Memory Structure (using Objects, without Array methods)**  
🧮 **Complexity Analysis**

> Focus: *Pure algorithmic reasoning without relying on built‑in methods (`push`, `pop`, `shift`, etc.).*

---

## 📁 File List

| # | File Name | Topic | Key Concepts | Time Complexity |
|:--:|:--------------------------|:--------------------|:---------------------------|:----------------:|
| 01 | `01-validate-parentheses.js` | Stack & Parsing | Bracket Validation via Manual Stack | O(n) |
| 02 | `02-stack-implementation.js` | Stack LIFO Design | Push/Pop/Peek via Object Index Tracking | O(1) |
| 03 | `03-queue-using-stacks.js` | Queue (FIFO) | Two Manual Stacks, Amortized O(1) | O(1 amortized) |

---

## 🧩 Core Patterns

### 🔹 Stack (LIFO)
- **Naive:** Uses array push/pop → conceptual clarity but hides memory logic.
- **Optimized:** Manual object + counter tracking for true low‑level control.

### 🔹 Queue (FIFO)
- **Naive:** Uses shift → O(n).
- **Optimized:** Two manual stacks (`input`, `output`) to simulate enqueue/dequeue with amortized O(1).

### 🔹 Validation Logic
- Parentheses checks rely on **stack symmetry**.
- Implemented without any regex or replace calls.

---

## ⚙️ Manual Memory Structures

All implementations use:
```js
this.storage = {};
this.top = 0;      // For Stack
this.front = 0;    // For Queue front pointer
this.rear = 0;     // For Queue rear pointer
```
---

> Built for mastery and documentation clarity 🧩  
> DSA — Parsa Azarshin
