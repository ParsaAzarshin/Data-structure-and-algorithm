/**
 * 🟣 Problem: Implement Queue using two manual Stacks (FIFO)
 *  Constraint: Only manual Object logic allowed.
 *  Methods: enqueue, dequeue, peek, isEmpty
 */

/* -------------------- 🧩 Naive Solution -------------------- */

// Simulate queue with single array manually
class NaiveQueue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.storage[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        const val = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        return val;
    }

    peek() {
        return this.storage[this.front];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

/* -------------------- ⚡ Optimized (Two Manual Stacks) -------------------- */
class ManualStack {
    constructor() {
        this.storage = {};
        this.top = 0;
    }

    push(v) {
        this.storage[this.top] = v;
        this.top++;
    }

    pop() {
        if (this.top === 0) return undefined;
        this.top--;
        const val = this.storage[this.top];
        delete this.storage[this.top];
        return val;
    }

    isEmpty() {
        return this.top === 0;
    }

    size() {
        return this.top;
    }

    peek() {
        return this.storage[this.top - 1];
    }
}

class QueueUsingStacks {
    constructor() {
        this.input = new ManualStack();
        this.output = new ManualStack();
    }

    enqueue(value) {
        this.input.push(value);
    }

    dequeue() {
        if (this.output.isEmpty()) {
            while (!this.input.isEmpty()) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.pop();
    }

    peek() {
        if (this.output.isEmpty()) {
            while (!this.input.isEmpty())
                this.output.push(this.input.pop());
        }
        return this.output.peek();
    }

    isEmpty() {
        return this.input.isEmpty() && this.output.isEmpty();
    }
}

// ✅ Example:
const q = new QueueUsingStacks();
q.enqueue(1); q.enqueue(2); console.log(q.dequeue()); // 1
