# 🌲 Trees / Graph — Traversal & Structural Algorithms

This folder contains **core graph and tree traversal algorithms** that frequently appear in technical screens and whiteboard interviews.

Each file adheres to the unified analytical format established for the DSA repository:

🧩 **Problem Statement**  
📋 **Requirements & Constraints**  
🔍 **Step‑by‑Step Decomposition**  
💻 **JavaScript Implementation (Naive → Optimized)**  
🧮 **Time & Space Complexity Analysis**

---

## 🧭 Core Patterns

Graph and Tree problems in interviews generally revolve around **Traversal Patterns** and **Structural Balance** detection.

### 🔹 Depth‑First Search (DFS)
Explores as deep as possible before backtracking.  
Used for: path discovery, cycle detection, generating subtrees → `O(V + E)`

### 🔹 Breadth‑First Search (BFS)
Level‑by‑level traversal using a queue.  
Used for: shortest path in unweighted graphs, level order traversal → `O(V + E)`

### 🔹 Balanced Binary Tree Check
Ensures each node’s left/right subtrees differ by ≤ 1 in height.  
Naive approach → `O(n²)` Optimized post‑order → `O(n)`

Each algorithm demonstrates both a **Naive** baseline for conceptual clarity and an **Optimized** version for real‑world readiness.

---

## 📁 File List

| #  | Problem                   | Core Concepts                      | Time Complexity |
|:--:|:---------------------------|:----------------------------------|:----------------:|
| 01 | Depth First Search (DFS)  | Graph Traversal – Recursion / Stack | O(V + E) |
| 02 | Breadth First Search (BFS)| Graph Traversal – Queue / Level Order | O(V + E) |
| 03 | Balanced Binary Tree      | Tree Balance Detection / Post‑Order  | O(n) |

---

## 🧠 Upcoming Topics

After consolidating traversal fundamentals, next modules will include:

- **Topological Sorting** (for DAGs)
- **Cycle Detection** (Union‑Find / DFS Coloring)
- **Tree‑Graph Conversion** (Adjacency List representation)
- **Minimum Spanning Tree** (Prim / Kruskal)
- **Pathfinding Algorithms** (Dijkstra / A*)

---

## 📘 Study Tip

Always visualize the traversal flow on paper first.  
Once you deeply understand how DFS builds the *call‑stack tree* and BFS maintains its *queue frontier*, every advanced graph topic — from **cycle detection** to **shortest path** — becomes intuitive.

> **Built for mastery & documentation clarity 🧩**  
> *Author: DSA — Parsa Azarshin*
