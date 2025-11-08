/* ---------------------------------------------------------------
Problem: Detect Cycle in Linked List
---------------------------------------------------------------
🧩 Description:
Determine if a linked list contains a cycle (loop).
Return true if any node is visited twice.

Example:
head = [3 → 2 → 0 → -4], tail connects to 2 → cycle exists.
---------------------------------------------------------------
🧠 Steps to solve (Naive approach):
1️⃣ Keep an object `visited` to record seen node references.
2️⃣ Traverse list, at each node check if visited[curr] is true.
3️⃣ If yes → cycle detected, else mark as visited.
4️⃣ Return false if reached null.
🧮 Complexity:
Time  O(n)
Space O(n)
--------------------------------------------------------------- */
function hasCycleNaive(head) {
    const visited = {};
    while (head) {
        if (visited[head]) return true;
        visited[head] = true;
        head = head.next;
    }
    return false;
}

// ✅ Test (Naive)
const a = new Node(1), b = new Node(2), c = new Node(3);
a.next = b;
b.next = c; // no cycle
console.log('Naive no cycle:', hasCycleNaive(a)); // false
c.next = b; // create cycle
console.log('Naive cycle:', hasCycleNaive(a)); // true
/* ---------------------------------------------------------------
SMART / OPTIMIZED SOLUTION
---------------------------------------------------------------
🧠 Idea (Floyd’s Tortoise‑and‑Hare):
Use two pointers:
    - slow moves by one, fast by two.
    - If they ever meet → cycle exists.
Return false if fast or fast.next is null.
🧮 Complexity:
Time  O(n)
Space O(1)
--------------------------------------------------------------- */
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

// ✅ Test (Optimized)
const x = new Node(1), y = new Node(2), z = new Node(3);
x.next = y;
y.next = z;
z.next = y;
console.log('Optimized cycle:', hasCycle(x)); // true
const p = new Node(1), q = new Node(2);
p.next = q;
console.log('Optimized no cycle:', hasCycle(p)); // false
