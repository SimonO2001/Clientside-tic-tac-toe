
const gameboard = document.querySelector(".gameboard")

let playerXTurn = true;

const setMark = function (e) {
    if(this.innerText !== "") { return }
    this.innerText = playerXTurn ? "X" : "O"
    if(winner()) {
        let w = `Vinder er: ${playerXTurn? "A" : "B"}`
        alert(w);
    }
    playerXTurn = !playerXTurn;
}

const winner = function() {
    for (let i = 0; i < 3; i++) {
        if ( //tjekker rækker
            document.querySelector(`#r${i}c0`).innerText === document.querySelector(`#r${i}c1`).innerText &&
            document.querySelector(`#r${i}c0`).innerText === document.querySelector(`#r${i}c2`).innerText &&
            document.querySelector(`#r${i}c0`).innerText !== ""
           ) {return true}

           if ( //tjekker kolonner
            document.querySelector(`#r0c${i}`).innerText === document.querySelector(`#r1c${i}`).innerText &&
            document.querySelector(`#r0c${i}`).innerText === document.querySelector(`#r2c${i}`).innerText &&
            document.querySelector(`#r0c${i}`).innerText !== ""
           ) {return true}
        }
    if(
        document.querySelector(`#r0c0`).innerText === document.querySelector(`#r1c1`).innerText && 
        document.querySelector(`#r0c0`).innerText === document.querySelector(`#r2c2`).innerText &&
        document.querySelector(`#r0c0`).innerText !== ""
    ) {return true;}

    if(
        document.querySelector(`#r0c2`).innerText === document.querySelector(`#r1c2`).innerText && 
        document.querySelector(`#r0c2`).innerText === document.querySelector(`#r2c2`).innerText &&
        document.querySelector(`#r0c2`).innerText !== ""
    ) {return true;}
    return false
}

for (let row = 0; row < 3; row++) {
    for  (let col = 0; col < 3; col++) {
        let btn = document.createElement("button");
        btn.id = `r${row}c${col}`
        btn.addEventListener("click", setMark)

        gameboard.appendChild(btn);
    }
}

function newGame () {
    const fields = document.querySelectorAll(".gameboard button");
    fields.forEach( f => {
        f.innerText = "";
    })
    playerXTurn = true;
}

document.querySelector("#btnNewGame").addEventListener("click", newGame)
