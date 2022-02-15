
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function List() {
    this.head = null;
    this.tail = null;
}
List.prototype.addNode = function(val) {
    var node = new ListNode(val);
    if(!this.head) {
        this.head = node;
        this.tail = node;
    }
    else {
        this.tail.next = node;
        this.tail = node;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var pivot = 0;
    var head = new ListNode();
    var tail = head;
    while(l1 || l2 || pivot === 1) {
        var sum = 0;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        if(pivot > 0) sum += pivot;
        if(sum > 9) {
            sum = sum % 10;
            pivot = 1;
        }else {
            pivot = 0;
        }
        console.log(sum);
        var tempNode = new ListNode(sum, null);
        tail.next = tempNode;
        tail = tempNode;
        //console.log(tail.val);
    }
    //console.log('Result');
    //console.log(head.next);
    return head.next;
};

var l1 = new List();
l1.addNode(2);
l1.addNode(4);
l1.addNode(3);
console.log(l1.head);

var l2 = new List();
l2.addNode(5);
l2.addNode(6);
l2.addNode(4);
console.log(l2.head);

var resultList = addTwoNumbers(l1.head, l2.head);
console.log(resultList);