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
var n = 1;
var droll;
function getDiceFace() {
    let result = Math.ceil(Math.random() * 6); // give a number between 1-6
    droll = result;
    return diceRolls[result];
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        diceEl.innerHTML = `<div class="dice" id="dice">${getDiceFace()}</div>`;
        updatePawn();
    }, 1000);
});

function updatePawn() {
    if (n + droll <= 42) {
        var stopper = n + droll;
        var timer = setInterval(() => {
            document.querySelector(`#box${++n}`).appendChild(pawn);
            if (n >= stopper) {
                stopTimer();
            }
        }, 100);
        function stopTimer() {
            clearInterval(timer);
        }
        if (stopper == 42) {
            //alert and reset game
            setTimeout(() => {
                alert("Congratulation on finishing, let's play again!");
                document.querySelector("#box1").appendChild(pawn);
                n = 1;
            }, 500);
        }
    } else if (n + droll > 42) {
        setTimeout(() => {
            alert("Dice roll is TOO BIG ");
        }, 200);
    }

    //ladders
    if (stopper == 3) {
        setTimeout(() => {
            document.querySelector("#box14").appendChild(pawn);
            n = 14;
        }, 500);
    }

    if (stopper == 13) {
        setTimeout(() => {
            document.querySelector("#box26").appendChild(pawn);
            n = 26;
        }, 1000);
    }
    if (stopper == 19) {
        setTimeout(() => {
            document.querySelector("#box32").appendChild(pawn);
            n = 32;
        }, 1000);
    }
    //snakes bit action
    if (stopper == 16) {
        setTimeout(() => {
            document.querySelector("#box4").appendChild(pawn);
            n = 4;
        }, 1000);
    }
    if (stopper == 28) {
        setTimeout(() => {
            document.querySelector("#box2").appendChild(pawn);
            n = 2;
        }, 1000);
    }
    if (stopper == 38) {
        setTimeout(() => {
            document.querySelector("#box21").appendChild(pawn);
            n = 21;
        }, 1000);
    }
}
