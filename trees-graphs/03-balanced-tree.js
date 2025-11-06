/**
 * ============================================================
 * 🌲 Problem: Check if a Binary Tree is Height Balanced
 * ============================================================
 *
 * 🔸 Goal:
 * Verify if for every node, |left‑height − right‑height| ≤ 1.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity
 * ------------------------------------------------------------
 *  Naive:      O(n²)
 *  Optimized:  O(n)
 */

/**
 * ============================================================
 * 🐢 Naive Solution (Recalculates height repeatedly)
 * ============================================================
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function heightNaive(node) {
    if (!node) return 0;
    return 1 + Math.max(heightNaive(node.left), heightNaive(node.right));
}

function isBalancedNaive(root) {
    if (!root) return true;

    const left = heightNaive(root.left);
    const right = heightNaive(root.right);

    if (Math.abs(left - right) > 1) return false;

    return isBalancedNaive(root.left) && isBalancedNaive(root.right);
}

/**
 * ============================================================
 * ⚡ Optimized Solution (Single Pass, Post‑Order)
 * ============================================================
 */
function isBalanced(root) {
    function height(node) {
        if (!node) return 0;

        const left = height(node.left);
        if (left === -1) return -1;
        const right = height(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }

    return height(root) !== -1;
}

// Example:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log('Naive balanced?', isBalancedNaive(root)); // true
root.left.left.left = new TreeNode(6);
console.log('Optimized balanced?', isBalanced(root));  // false
