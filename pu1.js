

let outPut = (input) =>{

    let obj = {}
    
    input.forEach((item)=>{
        
       const {age} = item
     
       
         if(obj[age]){
         let newArr = obj[age];
         console.log( newArr)
         newArr.push(item)
         obj[age] = newArr
         }
      else{
      let a = new Array()
      obj[age]= [item]
      console.log(obj[age],item)
      }
      
    })
    
    return obj;
    
    
    }
    
    
    
    const input = [
    { name: "sri",age:20},
    { name: "attam",age:21},
    { name: "shashank",age:24},
    { name: "manas",age:20},
    ]
    
    console.log(outPut(input))
    
    const output = {
    "20": [{ name: "sri",age:20},{ name: "manas",age:20}],
    "21": [{ name: "attam",age:21}],
    "24": [{ name: "shashank",age:24}],
    }