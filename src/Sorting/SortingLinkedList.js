export default class SortingLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.comparisons = 0;
    this.time = performance.now();
  }

  add(element) {
    if (!this.length) {
      this.head = element;
      this.tail = element;
    } else {
      element.previous = this.tail;
      this.tail.next = element;
      this.tail = element;
    }
    this.length++;
  }

  finish() {
    this.time = performance.now() - this.time;
  }
}
