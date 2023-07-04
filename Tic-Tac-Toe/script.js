const container = document.getElementById("container")
const gameResult = document.getElementById("gameResult")
const restart = document.getElementById("restart")



let boxes;

let xTurn = true;

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let correctCombination
   
startGame("")

restart.addEventListener("click", ()=>startGame("restart"))


function startGame(type){

    let box
 
    for(let i=0; i<9; i++){
        if(type==='restart'){
          resetValue(i)
        }else{
        box = document.createElement("div")
        box.classList.add("box")
        container.appendChild(box)
    }
    (box || boxes[i]).addEventListener("click", handleClick, {once:true})
    }



}

boxes = document.querySelectorAll(".box");


function resetValue(i){
    container.style.pointerEvents = "unset";
    boxes[i].removeEventListener("click",handleClick)
    boxes[i].innerText=""
    gameResult.innerText = ''
    correctCombination.every((item)=>boxes[item].style.background="none") 
    restart.classList.remove('show')
    xTurn = true
}


function handleClick(e){
const currentBox = e.target
// console.log(currentBox)
if(xTurn){
    currentBox.innerText = 'X'
    xTurn = false
}else{
    currentBox.innerText = 'O'
    xTurn = true
}

const currentSelection  = currentBox.innerText;

const win = checkWinOrNot(currentSelection)
if(win){
    gameOver("win",currentSelection)
    correctCombination.every((item)=>boxes[item].style.background="lightblue")
}else if(isGameDraw()){
    gameOver("draw",currentSelection)
}

}

function isGameDraw(){
    return [...boxes].every((box)=>box.innerText === 'X' || box.innerText === 'O')
}

function gameOver(type, currentSelection){
    if(type === 'win'){
   gameResult.innerHTML =`${currentSelection} WINS THE MATCH`
    }else{
   gameResult.innerHTML =`MATCH DRAW`
    }
    container.style.pointerEvents = "none"
    restart.classList.add('show')
}




function checkWinOrNot(currentSelection){
   
    return winningCombinations.some((combination)=>{
        correctCombination  = combination
       return  combination.every((item)=>boxes[item].innerText === currentSelection)
    })

}