//IIFE to create a different name space
(function(){

    //store moves and relationships to other moves via nested objects and properties
    var gameMovesAndWinners = {

        'rock': {
            winsOver: ['scissors']
        },

        'paper': {
            winsOver: ['rock']
        },

        'scissors': {
            winsOver: ['paper', 'dynamite']
        },

        'dynamite': {
            winsOver: ['rock', 'paper']
        }
    };

    var gamePieces = Object.keys(gameMovesAndWinners);
    var userMove = "";
    var computerMove = "";

    //object to store all possible outcomes
    var messages = {
        'tie': 'It\'s a tie!',
        'computerWins': 'The computer won!',
        'userWins' : 'The user won!'
    }

    function showUserMove(){
        document.getElementById("userMoveText").innerHTML = userMove;
    }

    function showComputerMove(){
        document.getElementById("computerMoveText").innerHTML = computerMove;
    }

    function showResult(winnerText){
        document.getElementById("winnerText").innerHTML = winnerText;
    }

    function calculateComputerMove() {
        var random = 0;
        //create random number based on length of gamePieces array
        random = Math.floor((Math.random()*gamePieces.length)+0);
        //grab the computer move randomly from the gamePieces array
        computerMove = gamePieces[random];
    }

    function getUserMove(){
        do {
            userMove = prompt("What do you choose? Rock, Paper, Scissors or Dynamite?");
            userMove = userMove.trim();
            userMove = userMove.toLowerCase();
        } while (gamePieces.indexOf(userMove) === -1)
    }

    //whoWins function compares userMove and computerMove variables to determine winner
    function whoWins(){
        if(userMove === computerMove){
            showResult(messages.tie);
        //if computerMove CAN be found in the array (returns a positive value), the user wins
        } else if (gameMovesAndWinners[userMove].winsOver.indexOf(computerMove) != -1){
            showResult(messages.userWins);
        //if computerMove CAN'T be found in the array (returns -1), the computer must be the winner
        } else {
            showResult(messages.computerWins);
        }
    }

    function startGame(){
        getUserMove();
        showUserMove();
        calculateComputerMove();
        showComputerMove();
        whoWins();
    }

    // console.log(document.getElementById("startGameButton"));
    document.getElementById("startGameButton").addEventListener("click", startGame);

})()
