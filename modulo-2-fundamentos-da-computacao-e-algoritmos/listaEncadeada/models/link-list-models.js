export class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

export class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}
