/**
 * ============================================================
 * 🧠 Problem: Least Recently Used (LRU) Cache Implementation
 * ============================================================
 *
 * 🔸 Problem Statement:
 * Design a data structure that stores up to `capacity` items
 * and evicts the least recently used item when the limit is reached.
 *
 * Example:
 *   Input:
 *     cache = new LRUCache(2)
 *     cache.put(1, "A")
 *     cache.put(2, "B")
 *     cache.get(1)  → "A"     (recent)
 *     cache.put(3, "C")       (evict key 2)
 *     cache.get(2)  → -1
 *
 * ------------------------------------------------------------
 * 🎯 Requirements
 * ------------------------------------------------------------
 * - O(1) time complexity for get() and put() operations.
 * - Maintain access order (most → least recent).
 * - Implemented with Map (ordered by insertion).
 *
 * ------------------------------------------------------------
 * 💡 Real‑World Analogy
 * ------------------------------------------------------------
 * Like a small fridge: every time you grab something,
 * it moves to the front; when full, you throw away whatever
 * hasn’t been touched in the longest time.
 *
 * ------------------------------------------------------------
 * 🧾 Complexity
 * ------------------------------------------------------------
 *  get():  O(1)
 *  put():  O(1)
 *  Space:  O(capacity)
 *
 * ============================================================
 * ⚙️ Implementation (Using JS Map)
 * ============================================================
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    // Retrieve value and refresh key order
    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        // move to the end to show recent usage
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    // Insert or update value; evict least used if full
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // delete first inserted (least recently used)
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
        this.cache.set(key, value);
    }
}

/**
 * ------------------------------------------------------------
 * 🔍 Example Trace
 * ------------------------------------------------------------
 * cache = new LRUCache(2)
 * cache.put(1,"A")  → cache:{1:A}
 * cache.put(2,"B")  → cache:{1:A,2:B}
 * cache.get(1)      → move key1 to recent: {2:B,1:A}
 * cache.put(3,"C")  → evict key2 → {1:A,3:C}
 * ------------------------------------------------------------
 */

const cache = new LRUCache(2);
cache.put(1, "A");
cache.put(2, "B");
console.log(cache.get(1)); // "A"
cache.put(3, "C");
console.log(cache.get(2)); // -1 (evicted)
console.log(cache.get(3)); // "C"
