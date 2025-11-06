/**
 * 🟣 Problem: Validate parentheses using manual stack (no Array methods)
 *
 * Input: "()[]{}", "([{}])", "(]"
 * Output: true | false
 */

class ManualStack {
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
}

/* -------------------- 🧩 Naive Solution -------------------- */
// Check balance count only for parentheses type.
function isValidParenthesesNaive(s) {
    let balance = 0;
    for (let ch of s) {
        if (ch === '(') balance++;
        else if (ch === ')') balance--;
        if (balance < 0) return false;
    }
    return balance === 0;
}
// ❌ fails for mixed types like "{}[]" — works only for "()"


/* -------------------- ⚡ Optimized (Manual Stack) -------------------- */
function isValidParentheses(s) {
    const stack = new ManualStack();
    const map = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            const top = stack.pop();
            if (top !== map[ch]) return false;
        }
    }
    return stack.isEmpty();
}

// ✅ Examples:
console.log(isValidParentheses("([])")); // true
console.log(isValidParentheses("(]"));   // false
