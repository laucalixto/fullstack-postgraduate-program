import LinkedList from './linked-list.js';
import { Compare, defaultCompare, defaultEquals } from './utilities/util.js';

export class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }
    getIndexNextSortedElement(element) {
        let current = this.getHead();
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}

// const list = new SortedLinkedList();

// list.insert(14, 3);
// list.insert(15, 2);
// list.insert(9, 19);

// console.log(list.toString());

// list.insert(17, 3);
// list.insert(15, 2);
// list.insert(90, 19);

// console.log(list.toString());
