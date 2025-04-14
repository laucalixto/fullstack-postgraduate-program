import BinarySearchTree from './binary-search-tree.js';
import { Compare, defaultCompare } from './utilities/util.js';
import { Node } from './models/node.js';

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5,
};

class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root;
    }

    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }

    getBalanceFactor(node) {
        const heightDiffenrence = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDiffenrence) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    #rotationLL(node) {
        const tmp = node.left;
        node.left = temp.right;
        tmp.right = node;
        return tmp;
    }

    #rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    #rotationLR(node) {
        node.left = this.#rotationRR(node.left);
        return this.#rotationLL(node);
    }

    #rotationRL(node) {
        node.right = this.#rotationLL(node.right);
        return this.#rotationRR(node);
    }

    insert(key) {
        this.root = this.#insertNode(this.root, key);
    }
    #insertNode(node, key) {
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.#insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.#insertNode(node.right, key);
        } else {
            return node;
        }
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.#rotationLL(node);
            } else {
                return this.#rotationLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.#rotationRR(node);
            } else {
                return this.#rotationRL(node);
            }
        }
        return node;
    }

    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == null) {
            return node;
        }
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if (
                balanceFactorLeft === BalanceFactor.BALANCED ||
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.#rotationLL(node);
            }

            if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.left);
            }
            if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
                const balanceFactorRight = this.getBalanceFactor(node.right);
                if (
                    balanceFactorRight === BalanceFactor.BALANCED ||
                    balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
                ) {
                    return this.rotationRR(node);
                }
                if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                    return this.rotationRL(node.right);
                }
            }
            return node;
        }
    }
}

// const treeAVL = new AVLTree();
// treeAVL.insert(11);
// treeAVL.insert(12);
// treeAVL.insert(13);
// treeAVL.insert(15);
// treeAVL.insert(16);
// treeAVL.insert(17);
// console.log('__________');

// console.log(treeAVL.root.key);

// console.log('__________');
// treeAVL.insert(80);
// treeAVL.insert(100);
// treeAVL.insert(112);
// treeAVL.insert(114);
// treeAVL.insert(115);
// treeAVL.insert(116);

// treeAVL.inOrderTraverse((value) => console.log(value));
// console.log('__________');

// console.log(treeAVL.root.key);
