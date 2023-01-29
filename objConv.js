let obj = {
    name: 'Braj',
    getName: {
      myName: function() {
        console.log(`my name is ${this.name}`)
      }
    }
  }
  
//   let obj1 = JSON.parse(JSON.stringify(obj))

let obj1 ={...obj}

  
  console.log(obj1)
  