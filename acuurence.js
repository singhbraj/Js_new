


function norMalizeString(str){
    return str.toLowerCase()
}


function countAcc(str){
  
    let res = norMalizeString(str);
    let charMap={};
    let max=0;
    let maxChar = '';
    for(let char of res){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char]=1;
        }
    }

    for(let char in charMap){
        if(charMap[char]>max){
            max=charMap[char];
            maxChar=char
        }
    }

    return maxChar



}


console.log(countAcc("aAbAdhBbbba"));


// console.log(res);