
//   Call() method

let name={
    fName:"Braj",
    lName:"kishor",
    // printFName:function(){
    //     console.log(this.fName+ " " +this.lName)
    // }
}

let printFName = function(hometown,state){
    console.log(this.fName+ " " +this.lName + "From " + hometown + "," + state)
}

printFName.call(name, "Aligarh", "UP")

let name2 = {
    fName:"MS",
    lName:"Dhoni",
}

// function borrowing 

printFName.call(name2, "Ranchi", "Jharkhand")


//  Apply()

printFName.apply(name,["Aligarh","UP"])


//  bind()
   
//    It does not call the method rather it's return us a method which can be called latter

                  
let printMyName =printFName.bind(name2, "Ranchi", "Jharkhand")
printMyName()