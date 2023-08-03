
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    add(value){
       let node = new Node(value)
    //    console.log(node)
       let current 
       if(this.head == null){
        this.head = node
       }else{
        current= this.head
        while(current.next){
            current = current.next
        }
        current.next = node
       }
       this.size++;
    }
    insertAt(value,index){
        let node = new Node(value)
        let curr,prev;
         curr = this.head
        if(index == 0){
            node.next=curr;
            this.head = node
        }else{
            let it = 0;
            while(it<index){
                prev=curr
                curr =curr.next
                it++;
            }
            node.next = curr
            prev.next = node

        }
      
        this.size++;
    }

    printList(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }

}

const ll = new LinkedList()
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList()
console.log("after change")
ll.insertAt(35,2)
ll.printList()



