import { defaultEquals } from './utilities/util.js';
import { Node } from './models/link-list-models.js';

export default class LinkedList {
    #head;

    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.setHead(null);
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.getHead() == null) {
            this.setHead(node);
        } else {
            current = this.getHead();
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.getHead();
            if (index === 0) {
                this.setHead(current.next); //(options => this.getHead() = this.getHead().next || current = current.next)
            } else {
                //Initial option
                // let previous;
                // for (let i = 0; i < index; i++) {
                //     previous = current;
                //     current = current.next;
                // }
                // previous.next = current.next;

                //use getElement method
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.getHead();
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.getHead();
                node.next = current;
                this.setHead(node);
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this.getHead();
        for (let i = 0; this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        return this.removeAt(this.indexOf(element));
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.#head;
    }

    setHead(node) {
        this.#head = node;
    }

    clear() {
        this.setHead(null);
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.getHead().element}`;
        let current = this.getHead().next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

// const list = new LinkedList();
// list.push(15);
// list.push(10);
// list.push(6);
// list.removeAt(2);
// list.push(7);
// list.insert(50, 1);
// list.insert(123, 0);

// console.log('The list:', list.toString());

// console.log('Element 50 pos:', list.indexOf(50));
// console.log('Element 2 pos:', list.indexOf(2));
// list.remove(50);

// console.log('The list is empty:', list.isEmpty());
// console.log('Size of list:', list.size());
// console.log('The head is:', list.getHead().element);

// console.log('The list:', list.toString());
