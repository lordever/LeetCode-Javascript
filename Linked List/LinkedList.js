class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const node = {
            value,
            next: null
        };

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    remove(value) {
        if (!this.head) {
            return;
        }

        let currentNode = this.head;
        let prevNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                if (!prevNode) {
                    this.head = this.head.next;
                    return;
                }

                if (!currentNode.next && this.tail.value === value) {
                    this.tail = prevNode;
                    return;
                }

                prevNode.next = currentNode.next;
                return;
            }

            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
        }

        let currentNode = this.head;
        let count = 1;
        while (currentNode) {
            console.log(`${count}): ${currentNode.value}`);
            currentNode = currentNode.next;
            count++;
        }
    }
}

// Create a new instance of the linked list
let myList = new LinkedList();

// Add several elements to the list
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);

// Print all elements of the list
myList.print();

// Remove an element (for example, with value 3)
myList.remove(3);

// Print all elements of the list after removal
myList.print();