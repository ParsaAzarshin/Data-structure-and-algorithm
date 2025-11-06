/**
 * ============================================================
 * 🔍 Problem: Check for Duplicates (Using HashSet / Frequency)
 * ============================================================
 *
 * 🔸 Problem Statement:
 * Given an array of values, determine whether any value
 * appears at least twice.
 *
 * Example:
 *   Input: [1, 2, 3, 4, 5, 2]
 *   Output: true
 *
 *   Input: [1, 2, 3]
 *   Output: false
 *
 * ------------------------------------------------------------
 * 🎯 Requirements
 * ------------------------------------------------------------
 * - Return true if any duplicate exists.
 * - Optimize to O(n) time — avoid O(n²).
 * - Use Set or frequency map to track seen elements.
 *
 * ------------------------------------------------------------
 * 💡 Real‑World Analogy
 * ------------------------------------------------------------
 * Like checking if any name in a conference guest list
 * appears twice — using a notepad (Set) instead of scanning
 * the entire list again for each entry.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity
 * ------------------------------------------------------------
 *  Naive:      Time → O(n²), Space → O(1)
 *  Optimized:  Time → O(n),  Space → O(n)
 *
 * ============================================================
 * 🐢 Naive Version (Nested Scan)
 * ============================================================
 */
function hasDuplicatesNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}

/**
 * ============================================================
 * ⚡ Optimized Version (Using HashSet)
 * ============================================================
 *
 * Steps:
 * 1️⃣ Create a Set to store unique items.
 * 2️⃣ Iterate through the array.
 * 3️⃣ If the item already exists → duplicate found.
 */
function hasDuplicates(arr) {
    const seen = new Set();

    for (let value of arr) {
        if (seen.has(value)) return true;
        seen.add(value);
    }
    return false;
}

/**
 * ------------------------------------------------------------
 * 🔍 Example Trace
 * ------------------------------------------------------------
 * Input: [1, 2, 3, 2]
 * seen → {1,2,3}
 *  value=2 already exists → return true
 * ------------------------------------------------------------
 */

console.log(hasDuplicatesNaive([1, 2, 3, 1])); // true
console.log(hasDuplicatesNaive([1, 2, 3]));    // false
console.log(hasDuplicates([1, 2, 3, 1]));      // true
console.log(hasDuplicates([1, 2, 3]));         // false
