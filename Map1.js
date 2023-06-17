


const isAnagram = (str1,str2) =>{

    const map = new Map()
    
    for(let i= 0; i<str1.length; i++){
         if(map.has(str1[i])){
            map.set(str1[i],map.get(str1[i])+1)
        } else{
            map.set(str1[i],1)
        }
            
    }
    
 for(let i =0; i<str2.length; i++){
    if(map.has(str2[i])){
        map.set(str2[i],map.get(str2[i])-1)
    }
 }
    
    let keys = map.keys()
    // console.log(key)

    for(let key of keys){
        if(map.get(key)!=0){
            return false
        }
    }

    return true;
    
    }


    
    
    
    
    
    
    let str1 = "braj";
    let str2 = "kishor";
     
    // Function call
    if (isAnagram(str1, str2))
        console.log("The two strings are" +
        " anagram of each other<br>");
    else
        console.log("The two strings are not" +
        " anagram of each other<br>");