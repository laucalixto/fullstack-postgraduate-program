import { DoublyLinkedList } from './doubly-linked-list.js';

export class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }
    isEmpty() {
        return this.items.isEmpty();
    }
    size() {
        return this.items.size();
    }
    clear() {
        this.items.clear();
    }
    toString() {
        return this.items.toString();
    }
}

const list = new StackLinkedList();
list.push(89);
list.push(5);
list.push(12);
list.push(700);

console.log(list.isEmpty());
console.log(list.toString());
list.clear();

console.log(list.isEmpty());
console.log(list.toString());
