/**
 * ============================================================
 * 🧮 Problem: Frequency Counter Pattern (HashMap Usage)
 * ============================================================
 *
 * 🔸 Problem Statement:
 * Given two strings, determine if they are composed of the same
 * characters with the same frequency.
 *
 * Example:
 *  Input:  ("aabbcc", "baccab")
 *  Output: true
 *
 *  Input:  ("aabb", "abcc")
 *  Output: false
 *
 * ------------------------------------------------------------
 * 🎯 Requirements
 * ------------------------------------------------------------
 * - Use HashMap (object/dictionary) to count occurrences.
 * - Comparison should check both frequency and membership.
 * - Minimize complexity — avoid nested loops (no O(n²)).
 *
 * ------------------------------------------------------------
 * 💡 Real‑World Analogy
 * ------------------------------------------------------------
 * Comparing two strings by raw scanning → O(n²)
 * Using dictionary (hash map) counters → O(n)
 * e.g., validating anagrams, matching letter inventory, etc.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity
 * ------------------------------------------------------------
 *  Naive:      Time → O(n²), Space → O(1)
 *  Optimized:  Time → O(n),  Space → O(n)
 *
 * ============================================================
 * 🐢 Naive Version (Brute Force Comparison)
 * ============================================================
 */

function sameFrequencyNaive(str1, str2) {
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        // simulate "count & delete" behavior by scanning str2
        const indexInStr2 = str2.indexOf(char);
        if (indexInStr2 === -1) return false;
        // remove that char to avoid double counting
        str2 = str2.slice(0, indexInStr2) + str2.slice(indexInStr2 + 1);
    }

    return true;
}

/**
 * ============================================================
 * ⚡ Optimized Version (Using Hash Map / Frequency Counter)
 * ============================================================
 *
 * Steps:
 * 1️⃣ If lengths differ → early return false.
 * 2️⃣ Build frequency counters for each string.
 * 3️⃣ Compare key‑by‑key counts.
 */

function sameFrequency(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq1 = {};
    const freq2 = {};

    // build frequency maps
    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    // compare maps
    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

/**
 * ------------------------------------------------------------
 * 🔍 Example Trace
 * ------------------------------------------------------------
 * Input:
 *   str1 = "aabbcc"
 *   str2 = "baccab"
 *
 * freq1 → { a:2, b:2, c:2 }
 * freq2 → { b:2, a:2, c:2 }
 *
 * Compare:
 *   key 'a': 2==2 ✅
 *   key 'b': 2==2 ✅
 *   key 'c': 2==2 ✅
 *
 * ✅ All matched → return true
 *
 * ------------------------------------------------------------
 * ❌ Counterexample:
 *   str1 = "aabb", str2 = "abcc"
 *   → freq1: {a:2,b:2}
 *   → freq2: {a:1,b:1,c:2}
 *   → keys mismatched → false
 *
 * ============================================================
 */

// Test examples
console.log(sameFrequencyNaive("aabbcc", "baccab")); // true
console.log(sameFrequencyNaive("aabb", "abcc"));     // false
console.log(sameFrequency("aabbcc", "baccab"));      // true
console.log(sameFrequency("aabb", "abcc"));          // false
