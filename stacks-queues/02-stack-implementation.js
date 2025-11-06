/**
 * 🟣 Problem: Implement Stack manually (no array methods)
 * Methods -> push, pop, peek, isEmpty, size
 */

/* -------------------- 🧩 Naive Solution -------------------- */
class NaiveStack {
    constructor() {
        this.data = [];
    }

    push(v) {
        this.data[this.data.length] = v;
    }

    pop() {
        if (this.data.length === 0) return undefined;
        const val = this.data[this.data.length - 1];
        this.data.length--;
        return val;
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }

    size() {
        return this.data.length;
    }
}

/* -------------------- ⚡ Optimized (Manual Object) -------------------- */
class Stack {
    constructor() {
        this.storage = {};
        this.top = 0;
    }

    push(value) {
        this.storage[this.top] = value;
        this.top++;
    }

    pop() {
        if (this.top === 0) return undefined;
        this.top--;
        const val = this.storage[this.top];
        delete this.storage[this.top];
        return val;
    }

    peek() {
        return this.storage[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }

    size() {
        return this.top;
    }
}

// ✅ Example:
// const s = new Stack();
// s.push(10); s.push(20); s.pop(); console.log(s.peek()); // 10
