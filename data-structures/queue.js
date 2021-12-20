class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }
  pop() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    let temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp.value;
  }
}

let q = new Queue();
q.push(19);
q.push(199);
q.push(1999);
console.log(q);
console.log(q.pop());
console.log(q);
