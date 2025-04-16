import { Node } from './node.js';
import { Colors } from '../utilities/util.js';

class RedBlackNode extends Node {
    #key;
    #color;
    #parent;
    constructor(key) {
        super(key);
        this.#key = key;
        this.#color = Colors.RED;
        this.#parent = null;
    }
    get key() {
        return this.#key;
    }

    set key(value) {
        this.#key = value;
    }

    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
    }

    get parent() {
        return this.#parent;
    }
    set parent(value) {
        this.#parent = value;
    }
    isRed() {
        return this.color === Colors.RED;
    }
}
