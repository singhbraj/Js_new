let person = {
    fName:'Braj',
    lName:'Singh',
    displayName:function(){
    console.log(`My name is ${this.fName} ${this.lName}`)
    }
    };
    
    // setTimeout(person.disPlayName,3000)

  let display = person.displayName.bind(person);

  console.log(display)
 setTimeout(display,3000)
