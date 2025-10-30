/**
 * ============================================================
 * 🧩 Problem: Remove Duplicates from Sorted Array (In-Place)
 * ============================================================
 *
 * 🔸 Problem Statement:
 * Given a *sorted* array of integers, remove the duplicate elements
 * in-place so that each unique element appears only once.
 * Return the length of the unique portion of the array.
 *
 * Example:
 *  Input:  [1, 1, 2, 2, 3]
 *  Output: 3
 *  Explanation: The array becomes [1, 2, 3, _, _], only first 3 elements matter.
 *
 * ------------------------------------------------------------
 * 🎯 Requirements
 * ------------------------------------------------------------
 * - Array is already sorted (duplicates are adjacent).
 * - Remove duplicates *in-place* without using extra arrays.
 * - Return the count of unique elements.
 * - Space Complexity must stay O(1).
 *
 * ------------------------------------------------------------
 * 🧩 Decomposition
 * ------------------------------------------------------------
 * 1️⃣ Use two pointers: i (slow) & j (fast).
 *     - 'i' points to the last unique element position.
 *     - 'j' scans through the array looking for new values.
 * 2️⃣ If nums[j] !== nums[i]:
 *     - Move 'i' forward (i++).
 *     - Write nums[j] to nums[i].
 * 3️⃣ At the end, the array’s first (i+1) elements are unique.
 * 4️⃣ Return i + 1.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity Analysis
 * ------------------------------------------------------------
 *  Naive:      Time → O(n),  Space → O(n)
 *  Optimized:  Time → O(n),  Space → O(1)
 *
 * ------------------------------------------------------------
 * 🧠 Concept Reference
 * ------------------------------------------------------------
 * This uses the *Two Pointers* "parallel" pattern:
 * One pointer builds the 'clean' section, the other scans ahead.
 * Each value is checked exactly once — turning a potential O(n²)
 * problem into O(n).
 *
 * ============================================================
 * 🐢 Naive Version (Using Set for clarity)
 * ============================================================
 */

function removeDuplicatesNaive(nums) {
    const unique = [...new Set(nums)];
    for (let i = 0; i < unique.length; i++) {
        nums[i] = unique[i];
    }
    return unique.length; // number of unique elements
}
// 🧪 Test (Naive)
console.log(removeDuplicatesNaive([1, 1, 2, 2, 3]));

/**
 * ============================================================
 * ⚡ Optimized Version (Two Pointers | In-Place)
 * ============================================================
 *
 * Algorithm Flow:
 *  i → last index of unique section
 *  j → scanning pointer
 *
 *  Steps:
 *   ┌───────── Initialization ─────────┐
 *   │ i = 0                           │
 *   │ nums = [1,1,2,2,3]              │
 *   └─────────────────────────────────┘
 *
 *   for each j from 1 to n-1:
 *       if nums[j] !== nums[i]:
 *           i++              → move unique boundary forward
 *           nums[i] = nums[j] → copy new unique value
 *
 *   return (i + 1)
 */

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // points to last unique element position

    for (let j = 1; j < nums.length; j++) {
        // when finding a new unique value
        if (nums[j] !== nums[i]) {
            i++;               // expand unique section
            nums[i] = nums[j]; // write new unique element into place
        }
    }

    return i + 1; // total count of unique elements
}
// 🧪 Test (Optimized)
console.log(removeDuplicates([1, 1, 2, 2, 3]));

/**
 * ------------------------------------------------------------
 * 🔍 Line-by-Line Example
 * ------------------------------------------------------------
 * Input: [1, 1, 2, 2, 3]
 *
 * Step-by-step execution:
 *  i=0, j=1 → nums[j]==nums[i] (1==1) → skip
 *  i=0, j=2 → nums[j]!=nums[i] (2!=1) → i=1; nums[1]=2  → [1,2,2,2,3]
 *  i=1, j=3 → nums[j]==nums[i] (2==2) → skip
 *  i=1, j=4 → nums[j]!=nums[i] (3!=2) → i=2; nums[2]=3  → [1,2,3,2,3]
 *
 * Output:
 *    → return i+1 = 3
 *    → array’s unique part: [1, 2, 3]
 *
 * ------------------------------------------------------------
 * ✅ Final Result:
 * ------------------------------------------------------------
 * removeDuplicates([1, 1, 2, 2, 3]) → 3
 * nums after function → [1, 2, 3, 2, 3]
 *
 * Only first 3 elements are relevant.
 *
 * ============================================================
 */
