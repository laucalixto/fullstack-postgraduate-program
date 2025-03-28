import LinkedList from './linked-list.js';
import { defaultEquals } from './utilities/util.js';

export class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = null;
    }
}
