/* ---------------------------------------------------------------
Problem: Merge Two Sorted Linked Lists
---------------------------------------------------------------
🧩 Description:
Merge two sorted linked lists into a single sorted list.
Result should reuse existing nodes (no new allocations required).

Example:
L1: 1→2→4, L2: 1→3→4 → Output: 1→1→2→3→4→4
---------------------------------------------------------------
🧠 Steps to solve (Naive approach):
1️⃣ Copy values of both lists into an array manually.
2️⃣ Sort array using simple bubble or insertion logic.
3️⃣ Build a new linked list from sorted values.
🧮 Complexity:
Time  O((n+m)²)
Space O(n+m)
--------------------------------------------------------------- */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function buildList(arr){
    if(!arr.length) return null;
    const head=new Node(arr[0]);
    let curr=head;
    for(let i=1;i<arr.length;i++){ curr.next=new Node(arr[i]); curr=curr.next; }
    return head;
}
function printList(head){
    const out=[];
    while(head){ out.push(head.value); head=head.next; }
    return out;
}
function mergeSortedListsNaive(l1, l2) {
    const vals = [];
    let i = 0;
    while (l1) { vals[i++] = l1.value; l1 = l1.next; }
    while (l2) { vals[i++] = l2.value; l2 = l2.next; }
    // bubble sort
    for (let a = 0; a < i; a++)
        for (let b = a + 1; b < i; b++)
            if (vals[b] < vals[a]) { const t = vals[a]; vals[a] = vals[b]; vals[b] = t; }
    let head = null;
    for (let k = i - 1; k >= 0; k--) {
        const node = new Node(vals[k]); node.next = head; head = node;
    }
    return head;
}
// ✅ Test Naive
const L1 = buildList([1,4,5]);
const L2 = buildList([2,3,6]);
console.log('Naive Merge:', printList(mergeSortedListsNaive(L1,L2))); // [1,2,3,4,5,6]
/* ---------------------------------------------------------------
SMART / OPTIMIZED SOLUTION
---------------------------------------------------------------
🧠 Idea:
Use two pointers, tail always points to the new list’s end.
Compare node values and attach the smaller.
Continue until one list is empty, then append the rest.
🧮 Complexity:
Time  O(n+m)
Space O(1)
--------------------------------------------------------------- */
function mergeSortedLists(l1, l2) {
    const dummy = new Node(0);
    let tail = dummy;
    while (l1 && l2) {
        if (l1.value < l2.value) {
            tail.next = l1; l1 = l1.next;
        } else {
            tail.next = l2; l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}
// ✅ Test Optimized
const X1=buildList([1,3,5]);
const X2=buildList([2,4,6]);
console.log('Optimized Merge:', printList(mergeSortedLists(X1,X2))); // [1,2,3,4,5,6]
