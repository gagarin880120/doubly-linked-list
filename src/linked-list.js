const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  get length() {
    let length = 0;
    let node = this._head;
    while (node !== null) {
      length += 1;
      node = node.next;
    }

    return length;
  }

  append(data) {
    if (this.length === 0) {
      const node = new Node (data, null, null);
      this._head = node;
      this._tail = node;
    } else {
      const node = new Node (data, null, null);
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    return this;
  }

  head() {
    return this._head && this._head.data;
  }

  tail() {
    return this._tail && this._tail.data;
  }

  _find(index) {
    for (let i = 0, currentNode = this._head; currentNode !== null; currentNode = currentNode.next, i+=1 ) {
      if (index === i) {
        return currentNode;
      }
    }
    return null;
  }

  at(index) {
    const result = this._find(index);
    return result && result.data;
  }

  insertAt(index, data) {
    if(this.length == 0) {
      this.append(data)
      return this;
    }
      const currentNode = this._find(index);
      const node = new Node (data, currentNode.prev, currentNode);
      currentNode.prev.next = node;
      currentNode.prev = node;

      return this;
    }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._head = null;
    this._tail = null;
    
    return this;
  }

  deleteAt(index) {
    const node = this._find(index);
    if(this.length === 1) {
      this.clear();
      return this;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;

    return this;
  }

    reverse() { 
      let currentNode = this._head;
      let prev = null;

      while(currentNode) {
      let next = currentNode.next;
      currentNode.next = prev;
      currentNode.prev = next;
      prev = currentNode;
      currentNode = next;
      }

      this._tail = this._head;
      this._head = prev;

      return this;
    }

  indexOf(data) {
    for (let i = 0, currentNode = this._head; currentNode !== null; currentNode = currentNode.next, i+=1 ) {
      if (data === currentNode.data) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = LinkedList;
