export class Node {
    #key;
    #left;
    #right;
    constructor(key) {
        this.#key = key;
        this.#left = null;
        this.#right = null;
    }
    get key() {
        return this.#key;
    }
    set key(key) {
        this.#key = key;
    }
    get left() {
        return this.#left;
    }
    set left(left) {
        this.#left = left;
    }
    get right() {
        return this.#right;
    }
    set right(right) {
        this.#right = right;
    }
}
