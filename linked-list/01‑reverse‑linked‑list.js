/* ---------------------------------------------------------------
Problem: Reverse Linked List
---------------------------------------------------------------
🧩 Description:
Reverse a given singly linked list so that the last node
becomes the first, and every next pointer is flipped.

Example:
Input:  1 → 2 → 3 → null
Output: 3 → 2 → 1 → null
---------------------------------------------------------------
🧠 Steps to solve (Naive approach):
1️⃣ Traverse list, store node values into an array manually.
2️⃣ Rebuild a new linked list from the array backward.
3️⃣ Return new head.
🧮 Complexity:
Time  O(n)
Space O(n)
--------------------------------------------------------------- */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseListNaive(head) {
    if (!head) return null;
    const arr = [];
    let curr = head;
    // Step 1: collect values
    while (curr) {
        arr[arr.length] = curr.value;
        curr = curr.next;
    }
    // Step 2: rebuild reversed
    let newHead = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        const node = new Node(arr[i]);
        node.next = newHead;
        newHead = node;
    }
    return newHead;
}

// 🧪 Example
// let n1 = new Node(1), n2 = new Node(2), n3 = new Node(3);
// n1.next = n2; n2.next = n3;
// console.log(JSON.stringify(reverseListNaive(n1))); // reversed list

/* ---------------------------------------------------------------
SMART / OPTIMIZED SOLUTION
---------------------------------------------------------------
🧠 Idea:
Use three pointers (prev, curr, next):
    - While traversing, redirect current.next to prev.
    - Move prev and curr forward until end.
Return prev as new head.
🧮 Complexity:
Time  O(n)
Space O(1)
--------------------------------------------------------------- */
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
let n1 = new Node(1), n2 = new Node(2), n3 = new Node(3);
n1.next = n2; n2.next = n3;
console.log(JSON.stringify(reverseList(n1))); // reversed list

// ✅ Test
const t1 = buildList([1,2,3]);
console.log('Naive Reverse:', printList(reverseListNaive(t1))); // [3,2,1]
