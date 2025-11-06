/**
 * ============================================================
 * 🌲 Problem: Depth‑First Search (DFS) Traversal
 * ============================================================
 *
 * 🔸 Task:
 * Traverse graph using DFS — first naive (non‑optimized), then proper optimized.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity Analysis
 * ------------------------------------------------------------
 *  Naive (rebuild path repeatedly):  O(V + E²)
 *  Optimized (HashSet memo):         O(V + E)
 */

/**
 * ============================================================
 * 🐢 Naive Solution
 * ============================================================
 * - Doesn't track visited nodes per call correctly.
 * - Re‑visits neighbors, causing possible infinite loops.
 */
function dfsNaive(graph, node) {
    const result = [node];
    for (let neighbor of graph[node] || []) {
        result.push(...dfsNaive(graph, neighbor)); // no visited check
    }
    return result;
}

/**
 * ============================================================
 * ⚡ Optimized DFS (Recursive)
 * ============================================================
 */
function dfsRecursive(graph, node, visited = new Set(), result = []) {
    if (visited.has(node)) return;
    visited.add(node);
    result.push(node);

    for (let neighbor of graph[node] || []) {
        dfsRecursive(graph, neighbor, visited, result);
    }

    return result;
}

const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: [],
    E: []
};

console.log('Naive DFS:', dfsNaive(graph, 'A'));
console.log('Optimized DFS:', dfsRecursive(graph, 'A'));
