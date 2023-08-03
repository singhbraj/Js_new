class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }


  reverseList(){

    let prev = null
    let next=null
    let curr = this.head
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr=next
    }

    this.head = prev

  }

  printLikedList(){
    let curr = this.head
    while(curr){
        console.log(curr.value)
        curr = curr.next
    }
  }

}

let ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printLikedList()

ll.reverseList()

console.log("___after reverse____")
ll.printLikedList()
