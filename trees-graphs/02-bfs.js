/**
 * ============================================================
 * 🌳 Problem: Breadth‑First Search (BFS)
 * ============================================================
 *
 * 🔸 Task:
 * Traverse all vertices level by level. Show naive version (inefficient)
 * and the optimized one with proper queue.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity
 * ------------------------------------------------------------
 *  Naive:      O(V²)
 *  Optimized:  O(V + E)
 */

/**
 * ============================================================
 * 🐢 Naive BFS Version
 * ============================================================
 * - Uses array as queue but re‑scans entire graph each loop.
 * - Inefficient due to repetitive index searching.
 */
function bfsNaive(graph, start) {
    const result = [];
    const queue = [start];
    while (queue.length) {
        const current = queue.shift();
        result.push(current);
        // no visited, will requeue duplicates
        for (let n of graph[current] || []) queue.push(n);
    }
    return result;
}

/**
 * ============================================================
 * ⚡ Optimized BFS (Using Set & Proper Queue)
 * ============================================================
 */
function bfs(graph, start) {
    const queue = [start];
    const visited = new Set([start]);
    const result = [];

    while (queue.length) {
        const node = queue.shift();
        result.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}

const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

console.log('Naive BFS:', bfsNaive(graph, 'A'));
console.log('Optimized BFS:', bfs(graph, 'A'));
