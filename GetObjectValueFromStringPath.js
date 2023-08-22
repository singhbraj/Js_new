


const get = (obj,stringPath)=>{
    if(!stringPath || stringPath.length===0){
        return undefined
    }

  const execuldingCharacters = ['[',']','.']
  const keys = []

  for(let i=0; i<stringPath.length; i++){
    if(!execuldingCharacters.includes(stringPath[i])){
        keys.push(stringPath[i])
    }
  }
//   console.log(keys)

  const result = keys.reduce((obj,key)=>obj[key],obj)
  return result
}


let obj={
    a:{
        b:{
            c:[1,2,3]
        }
    }
}

console.log(get(obj,'a.b.c'))
console.log(get(obj,'a.b.c.0'))
console.log(get(obj,'a.b.c[1]'))
console.log(get(obj,'a.c'))

