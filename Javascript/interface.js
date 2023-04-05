document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

/* _______________________RESTART_________________________________________ */
    let btnRestart = document.querySelector(".btn-restart");
    btnRestart.addEventListener('click', restart);

/* ________________________NAME-PLAYERS____________________________________ */
    let player1Input = document.querySelector("#player1");
    player1Input.addEventListener("input", () => {
        player1Name = player1Input.value;
    });
      
    let player2Input = document.querySelector("#player2");
      player2Input.addEventListener("input", () => {
        player2Name = player2Input.value;
    });
      
})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        
        setTimeout(() => {
            alert (" Vencedor foi o jogador " + playerName)
        }, 10)

    }
    updadeSquares(position);
}   

function updadeSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


function clear() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.innerHTML = '';
    });

    document.querySelector("#player1").value = "";
    document.querySelector("#player2").value = "";
}

function restart() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    clear();
}