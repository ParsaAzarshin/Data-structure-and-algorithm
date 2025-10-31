/**
 * ============================================================
 * 🔎 Problem: Binary Search (Search Element in Sorted Array)
 * ============================================================
 *
 * 🧩 Problem Statement:
 * Given a *sorted* array of integers and a target value,
 * return the index of the target if it exists.
 * If it does not exist, return -1.
 *
 * Example:
 *  Input: nums = [-3, 0, 1, 4, 6, 10], target = 4
 *  Output: 3
 *
 * ------------------------------------------------------------
 * 🎯 Requirements
 * ------------------------------------------------------------
 * - Array elements are sorted in ascending order.
 * - Find target's index if it exists.
 * - Optimize for minimal comparisons (faster than O(n)).
 *
 * ------------------------------------------------------------
 * 💡 Decomposition
 * ------------------------------------------------------------
 * 1️⃣ **Naive approach (Linear Search)**
 *      - Iterate through the array.
 *      - Compare each element with target.
 *      - Return index if match found; else -1.
 *
 * 2️⃣ **Optimized approach (Binary Search)**
 *      - Use two pointers: `left` and `right`.
 *      - While left ≤ right:
 *          a. mid = Math.floor((left + right) / 2)
 *          b. If nums[mid] == target → return mid
 *          c. If nums[mid] < target → search right: left = mid + 1
 *          d. Else → search left: right = mid - 1
 *      - Return -1 if not found.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity Analysis
 * ------------------------------------------------------------
 *  Linear (Naive):   Time → O(n)   Space → O(1)
 *  Binary (Opt):     Time → O(log n)   Space → O(1)
 *
 * ------------------------------------------------------------
 * 🧠 Key Concept
 * ------------------------------------------------------------
 * Binary Search = "Divide and Conquer"
 * Each comparison halves the search space.
 * For 1 million items → only ≈ 20 comparisons.
 *
 * ============================================================
 * 🐢 Naive Version (Linear Search)
 * ============================================================
 */

function searchNaive(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

/**
 * ============================================================
 * ⚡ Optimized Version (Binary Search)
 * ============================================================
 *
 *  Example:
 *   nums = [-3, 0, 1, 4, 6, 10], target = 4
 *
 *  left = 0, right = 5
 *  mid = 2 → nums[2]=1 < 4 → move left → left=3
 *  next: mid = 4 → nums[4]=6 > 4 → move right → right=3
 *  next: mid = 3 → nums[3]=4 ✅ found → return 3
 */

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // target found
        } else if (nums[mid] < target) {
            left = mid + 1; // search right half
        } else {
            right = mid - 1; // search left half
        }
    }

    return -1; // not found
}

/**
 * ------------------------------------------------------------
 * 🔍 Example Trace
 * ------------------------------------------------------------
 * nums = [-3, 0, 1, 4, 6, 10], target = 4
 *
 * Step 1: left=0, right=5 → mid=2 (nums[2]=1)
 *         1 < 4 → shift left=3
 *
 * Step 2: left=3, right=5 → mid=4 (nums[4]=6)
 *         6 > 4 → shift right=3
 *
 * Step 3: left=3, right=3 → mid=3 (nums[3]=4)
 *         ✅ Found at index 3
 * ------------------------------------------------------------
 * Output → 3
 *
 * ============================================================
 */

console.log(binarySearch([-3, 0, 1, 4, 6, 10], 4)); // 3
console.log(searchNaive([-3, 0, 1, 4, 6, 10], 4));  // 3
