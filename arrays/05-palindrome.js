/**
 * ============================================================
 * 🔁 Problem: Check if String is Palindrome
 * ============================================================
 *
 * 🧩 Problem Statement:
 * Given a string, determine if it reads the same
 * forward and backward.
 *
 * Example:
 *  Input:  "racecar"
 *  Output: true
 *
 *  Input:  "hello"
 *  Output: false
 *
 * ------------------------------------------------------------
 * 🎯 Requirements
 * ------------------------------------------------------------
 * - Ignore case sensitivity ("RaceCar" → true).
 * - We may ignore non-alphanumeric characters in extended version.
 * - Minimize space complexity: avoid creating reversed copies.
 *
 * ------------------------------------------------------------
 * 💡 Decomposition
 * ------------------------------------------------------------
 * 1️⃣ **Naive Approach**
 *      - Reverse the string (split → reverse → join).
 *      - Compare the reversed version with the original.
 * 2️⃣ **Optimized Approach (Two Pointers)**
 *      - Use two pointers: `left` and `right`.
 *      - Compare characters moving inward:
 *          • Increment `left` after each match.
 *          • Decrement `right` after each match.
 *      - Stop immediately if mismatch occurs.
 *      - Continue until `left >= right`.
 *      - Return true if all pairs matched.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity Analysis
 * ------------------------------------------------------------
 * Naive:      Time → O(n) | Space → O(n)
 * Optimized:  Time → O(n) | Space → O(1)
 *
 * ------------------------------------------------------------
 * 🧠 Concept
 * ------------------------------------------------------------
 * The *Two Pointers* inward pattern efficiently validates symmetry.
 * Often extended for numeric / sentence palindromes (filter + compare).
 *
 * ============================================================
 * 🐢 Naive Version (Reverse & Compare)
 * ============================================================
 */

function isPalindromeNaive(str) {
    if (typeof str !== "string") return false;

    // normalize to lowercase for case-insensitive comparison
    const normalized = str.toLowerCase();

    // create reversed copy
    const reversed = normalized.split("").reverse().join("");

    return normalized === reversed;
}

/**
 * ============================================================
 * ⚡ Optimized Version (Two Pointers)
 * ============================================================
 *
 * Example: "racecar"
 * left → r, right → r → same
 * left → a, right → a → same
 * left → c, right → c → same
 * left===right (e) → stop → true ✅
 */
function isPalindrome(str) {
    if (typeof str !== "string") return false;

    const s = str.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false; // mismatch
        }
        left++;
        right--;
    }

    return true; // all matched
}

/**
 * ------------------------------------------------------------
 * 🔍 Example Traces
 * ------------------------------------------------------------
 *
 *  Case 1: "racecar"
 *    left=0('r') right=6('r') → match
 *    left=1('a') right=5('a') → match
 *    left=2('c') right=4('c') → match
 *    left=3('e') → mid reached → ✅ Palindrome
 *
 *  Case 2: "hello"
 *    left=0('h') right=4('o') → mismatch → ❌ False
 *
 * ------------------------------------------------------------
 * ✅ Expected Outputs:
 * ------------------------------------------------------------
 * isPalindromeNaive("racecar") → true
 * isPalindromeNaive("hello")   → false
 * isPalindrome("RaceCar")      → true
 * isPalindrome("madam")        → true
 * ============================================================
 */

// Test samples
console.log(isPalindromeNaive("racecar")); // true
console.log(isPalindromeNaive("hello"));   // false
console.log(isPalindrome("RaceCar"));      // true
console.log(isPalindrome("madam"));        // true
