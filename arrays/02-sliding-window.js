/* ---------------------------------------------------------------
Problem: Maximum Sum Subarray of Size K
---------------------------------------------------------------
🧩 Description:
Given an array of integers (can be positive or negative)
and a number K, find the **maximum sum** of any contiguous
subarray of size exactly K.

---------------------------------------------------------------
⚙️ Requirements:
- Return the maximum sum (not the subarray itself).
- K is always ≤ array.length.
- Handle negative numbers correctly.
---------------------------------------------------------------

🧠 Steps to solve (Naive approach):
1️⃣ Iterate through array with index i from 0 to array.length - K.
2️⃣ For each i, compute the sum of the next K elements manually.
3️⃣ Keep track of the largest sum seen so far.
4️⃣ When loop finishes, return that maximum.

🧮 Complexity Analysis:
Time Complexity:  O(n × K)
Space Complexity: O(1)
--------------------------------------------------------------- */
function maxSumSubarrayNaive(nums, k) {
    // Step 0: Input validation
    if (!Array.isArray(nums) || typeof k !== 'number' || k <= 0 || nums.length < k)
        return null;

    let maxSum = -Infinity; // track highest sum found

    // Step 1: Iterate each starting index
    for (let i = 0; i <= nums.length - k; i++) {
        let currentSum = 0;

        // Step 2: Sum next K elements
        for (let j = i; j < i + k; j++) {
            currentSum += nums[j];
        }

        // Step 3: Update max if larger found
        if (currentSum > maxSum) maxSum = currentSum;
    }

    // Step 4: Return result
    return maxSum;
}

// 🧪 Test (Naive)
console.log(maxSumSubarrayNaive([2, 1, 5, 1, 3, 2], 3));   // 9 → (5 + 1 + 3)
console.log(maxSumSubarrayNaive([2, 3, 4, 1, 5], 2));      // 7 → (3 + 4)
console.log(maxSumSubarrayNaive([-1, -2, -3, -4], 2));     // -3 → (-1 + -2)

/* ---------------------------------------------------------------
SMART / OPTIMIZED SOLUTION (Sliding Window)
---------------------------------------------------------------
🧠 Idea:
Instead of recomputing sums repeatedly,
we can maintain a **running window sum** of size K:

1️⃣ Sum the first K elements (initial window).
2️⃣ Slide the window forward one step each iteration:
      • Subtract the element exiting the window.
      • Add the new element entering the window.
3️⃣ Update maxSum each time.
4️⃣ Continue until reaching the end of array.

🧮 Complexity Analysis:
Time Complexity:  O(n)
Space Complexity: O(1)
--------------------------------------------------------------- */
function maxSumSubarraySliding(array, k) {
    // Step 0: Input validation
    if (!Array.isArray(array) || typeof k !== 'number' || k <= 0 || array.length < k)
        return null;

    // Step 1: Compute sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += array[i];
    }

    let maxSum = windowSum;

    // Step 2: Slide window across array
    for (let end = k; end < array.length; end++) {
        // remove element leaving window, add new entering one
        windowSum += array[end] - array[end - k];

        // update max if larger sum found
        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }

    // Step 3: Return result
    return maxSum;
}

// 🧪 Test (Optimized)
console.log(maxSumSubarraySliding([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSumSubarraySliding([2, 3, 4, 1, 5], 2));    // 7
console.log(maxSumSubarraySliding([-1, -2, -3, -4], 2));   // -3
