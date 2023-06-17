


const replace = (sentence,character, index) =>{

 return sentence.substring(0,index) + character +sentence.substring(index+1)



}



const removeDuplicate = (sentence) =>{

    let readPointer =0;
    let writePointer = 0;
    let arraySet = new Set()
    
    while(readPointer<sentence.length){

        if(!arraySet.has(sentence[readPointer])){
            arraySet.add(sentence[readPointer])
            console.log("________setence_______",sentence)
            sentence = replace(sentence,sentence[readPointer], writePointer)
            writePointer++;
        }
        readPointer++;
    }

    return sentence.substring(0,writePointer)
    
}








const res = removeDuplicate("Hello world")

console.log(res)