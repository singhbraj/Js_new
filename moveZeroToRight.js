

//  optimize solution


const moveZeros = (a) =>{

    let c = 0;
    const n = a.length;
    for(let i=0; i<n; i++){
        if(a[i]!==0){
            [a[i],a[c]] = [a[c],a[i]]
            c++; 
        }
    }

    return a;

}


console.log(moveZeros([8,5,0,10,0,20,0]))