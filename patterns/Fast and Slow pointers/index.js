function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && slow !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

function ListNode(value) {
    this.value = value;
    this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; //cycle

console.log(hasCycle(head));
