/* -----------------------------------------------
Problem: Two Sum (Sorted Array)
-----------------------------------------------
Given a sorted array and a target value,
find two elements that sum up to the target.

🧠 Steps to solve (How we broke the problem down):
1️⃣ We have a sorted array — that means we can apply
    the "Two Pointer" technique instead of nested loops.
2️⃣ Start one pointer from the left (smallest)
    and one from the right (largest).
3️⃣ Calculate their sum:
      - If the sum equals the target → return the pair.
      - If the sum is smaller than target → move left pointer up.
      - If the sum is larger than target → move right pointer down.
4️⃣ Stop when left >= right (no more pairs).

Time Complexity: O(n)
Space Complexity: O(1)
----------------------------------------------- */
function twoSumSorted(array, target){
    // Step 0: Check all the inputs
    if (!array.length || !target)
        return null

    // Step 1: Establish pointers
    let left = 0;       // start of array
    let right = array.length;    // end of array

    // Step 2: Move pointers toward each other until they meet
    while (left < right){
        const sum = array[left] + array[right];  // combine two numbers
        if (sum === target)
            return [array[left], array[right]]    // success
        else if (sum < target)
            left++                                // need a bigger sum → move left pointer
        else
            right--                               // need a smaller sum → move right pointer
    }

    // Step 3: If nothing found, return null
    return null
}

// 🧪 Example test
console.log(twoSumSorted([1, 2, 3, 4, 6, 8], 10)); // Output: [4, 6]
