
//  true - capturing && false - bubbling

document.querySelector("#grandparent").addEventListener('click',()=>{
    console.log("Grandparent Clicked!")
},false); 

document.querySelector("#parent").addEventListener('click',(e)=>{
    console.log("Parent Clicked!")
    e.stopPropagation()
},false); 


document.querySelector("#child").addEventListener('click',()=>{
    console.log("Child Clicked!")
},false);  