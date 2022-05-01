var obj = {
    address:{
        city:{
            name:'New York',
            pincode:{
                id:12,
                value:21222,

            }
        }
    }
}



// const flattenObj = (obj) =>{
//   let result = {}
//   for(const i in obj){
//       if((typeof obj[i]) === 'object' && !Array.isArray(obj[i])){

//           const temp = flattenObj(obj[i]);
         
//           for(const j in temp){
//               result[i+'.'+j] = temp[j]
//           }
//       }
//       else{
         
//           result[i] = obj[i];
//       }
//   }
//   return result;
// }

const getValueFromPath  = (obj,string) =>{


    // let finalObj = flattenObj(obj)

    // if(finalObj.hasOwnProperty(string)){
    //     console.log(finalObj[string])
    // }

    let params = string.split('.')
    let output = {...obj}
    console.log(params)
    for(let i =0; i<params.length; i++){
        console.log(params[i])
     output =  output[params[i]]
      console.log(output);
    }
}



getValueFromPath(obj,'address.city.pincode.value')