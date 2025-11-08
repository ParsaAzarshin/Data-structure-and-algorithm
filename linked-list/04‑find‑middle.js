/* ---------------------------------------------------------------
Problem: Find Middle Node
---------------------------------------------------------------
🧩 Description:
Return the middle node of a singly linked list.
If even number of nodes → return the second middle.

Example:
Input: 1→2→3→4→5 → Output: node(3)
Input: 1→2→3→4→5→6 → Output: node(4)
---------------------------------------------------------------
🧠 Steps to solve (Naive approach):
1️⃣ Traverse list once to count its length N.
2️⃣ Compute mid = floor(N / 2).
3️⃣ Traverse again mid steps → return current node.
🧮 Complexity:
Time  O(n)
Space O(1)
--------------------------------------------------------------- */
class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
    }
}

function buildList(arr) {
    if (!arr.length) return null;
    const head = new Node(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return head;
}

function findMiddleNaive(head) {
    let len = 0, curr = head;
    while (curr) {
        len++;
        curr = curr.next;
    }
    const mid = Math.floor(len / 2);
    curr = head;
    for (let i = 0; i < mid; i++) curr = curr.next;
    return curr;
}

// ✅ Test Naive
const m1 = buildList([1, 2, 3, 4, 5]);
console.log('Naive Middle:', findMiddleNaive(m1).value); // → 3
/* ---------------------------------------------------------------
SMART / OPTIMIZED SOLUTION
---------------------------------------------------------------
🧠 Idea:
Use slow/fast pointers — fast moves twice as fast.
When fast reaches end, slow will be at the middle.
🧮 Complexity:
Time  O(n)
Space O(1)
--------------------------------------------------------------- */
function findMiddle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// ✅ Test Optimized
const m2 = buildList([10, 20, 30, 40, 50, 60]);
console.log('Optimized Middle:', findMiddle(m2).value); // → 40
