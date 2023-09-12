const diceEl = document.querySelector("#dice");
const buttonEl = document.querySelector(".roll-btn");
const pawn = document.querySelector("#pawn");
document.querySelector("#box1").appendChild(pawn);
const diceRolls = [
    "",
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
];
var n=1;
var droll;
function getDiceFace() {
    let result = Math.ceil(Math.random() * 6); // give a number between 1-6
    droll = result;
    console.log(typeof(droll));
    // console.log(droll);
    return diceRolls[result];
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        diceEl.innerHTML = `<div class="dice" id="dice">${getDiceFace()}</div>`;
        updatePawn();
       
    },1000);
    
});


 function updatePawn(){
   let stopper= n+droll;
   if(stopper <= 43){
         var timer = setInterval(()=>{
        document.querySelector(`#box${++n}`).appendChild(pawn);
        if(n>=stopper){ stopTimer()}
        },100);
        function stopTimer(){
            clearInterval(timer);
        }
        console.log("stoper"+stopper);
        console.log("n is:"+n);
    }

    if(stopper==3){
        console.log("ladder up")
        setTimeout(()=>{
                    document.querySelector("#box14").appendChild(pawn);
                   n=14;
        } ,500);
    }
    if(stopper==13){
        setTimeout(()=>{
            document.querySelector("#box26").appendChild(pawn);
           n=26;
        } ,1000);
    }
    if(stopper==19){
        setTimeout(()=>{
            document.querySelector("#box32").appendChild(pawn);
           n=32;
        } ,1000);
    }
    //snakes bit action
    if(stopper==16){
        setTimeout(()=>{
            document.querySelector("#box4").appendChild(pawn);
           n=4;
        } ,1000);
    }
    if(stopper==28){
        setTimeout(()=>{
            document.querySelector("#box2").appendChild(pawn);
           n=2;
        } ,1000);
    }
    if(stopper==38){
        setTimeout(()=>{
            document.querySelector("#box21").appendChild(pawn);
           n=21;
        } ,1000);
    }
}


// console.log
// if(updatePawn == 3){
//     console.log("compare")
//     setTimeout(()=>{
//         document.querySelector("#box14").appendChild(pawn);
//     } ,100);
// }