import { defaultEquals } from './utilities/util.js';
import LinkedList from './linked-list.js';
import { Node } from './models/link-list-models.js';

export class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.getHead();
            if (index === 0) {
                if (this.getHead() == null) {
                    this.setHead(node);
                    node.next = this.getHead();
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.setHead(node);
                    current.next = this.getHead();
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
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
                if (this.size() === 1) {
                    this.setHead(null);
                } else {
                    const removed = this.getHead();
                    current = this.getElementAt(this.size());
                    this.setHead(this.getHead().next);
                    current.next = this.getHead();
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

// const list = new CircularLinkedList();
// list.insert(30, 0);
// list.insert(70, 1);
// list.insert(2, 2);
// list.insert(123, 3);

// console.log(list.toString());
// console.log(list.getHead());
