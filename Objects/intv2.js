let obj = {
    user: {
      name: "Vaibhav",
      address: {
        state: "Delhi",
        zone: "South West"
      }
    }  
  }
  
  let count =0;
  const flattenObj = (obj) =>{
    let result = {}
    for(const i in obj){
        if((typeof obj[i]) === 'object' && !Array.isArray(obj[i])){
            const temp = flattenObj(obj[i]);
            console.log(temp)
            // console.log(temp,count++)
            for(const j in temp){
                result[i+'.'+j] = temp[j]
            }
        }
        else{
            // console.log('Else block is called',i)
            // console.log(i,obj[i])
            result[i] = obj[i];
        }
    }
    return result;
  }

  console.log(flattenObj(obj))