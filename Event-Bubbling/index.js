
//  true - capturing && false - bubbling

document.querySelector("#grandparent").addEventListener('click',(e)=>{
    console.log("Grandparent Clicked!")
    // e.stopPropagation()
},true); 

document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("Parent Clicked!")
    // e.stopPropagation()
},true); 


document.querySelector("#child").addEventListener('click',()=>{
    console.log("Child Clicked!")
},true);  