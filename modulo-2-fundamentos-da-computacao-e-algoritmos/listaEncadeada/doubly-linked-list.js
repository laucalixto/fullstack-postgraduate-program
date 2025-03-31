import LinkedList from './linked-list.js';
import { DoublyNode } from './models/link-list-models.js';
import { defaultEquals } from './utilities/util.js';

export class DoublyLinkedList extends LinkedList {
    #tail;
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.setTail(null);
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.getHead();
            if (index === 0) {
                if (this.getHead() == null) {
                    this.setHead(node);
                    this.setTail(node);
                } else {
                    node.next = this.getHead();
                    current.prev = node;
                    this.setHead(node);
                }
            } else if (index === this.count) {
                current = this.getTail();
                current.next = node;
                node.prev = current;
                this.setTail(node);
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.getHead();
            if (index === 0) {
                this.setHead(current.next);
                if (this.count === 1) {
                    this.setTail(null);
                } else {
                    this.getHead().prev = null;
                }
            } else if (index === this.count - 1) {
                current = this.getTail();
                this.setTail(current.prev);
                this.getTail().next = null;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getTail() {
        return this.#tail;
    }
    setTail(node) {
        this.#tail = node;
    }
}
