class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function printLevelOrderTraversal(root) {
    let queue = [];
  
    queue.push(root);
  
    while (queue.length > 0) {
      let obj = queue.shift(); // Corrected line
      console.log(obj.data);
  
      if (obj.left) {
        queue.push(obj.left);
      }
  
      if (obj.right) {
        queue.push(obj.right);
      }
    }
  }
  
  let root = null;
  root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log("______print Level order traversal_______");
  printLevelOrderTraversal(root);
  