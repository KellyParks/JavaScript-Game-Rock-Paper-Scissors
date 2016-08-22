//IIFE to create a different name space
(function(){

    var userMove = "";
    var computerMove = "";
    var randomNumber = 0;

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

    //object to store all possible outcomes
    var messages = {
        'tie': 'It\'s a tie!',
        'computerWins': 'The computer won!',
        'userWins' : 'The user won!'
    }

    function getUserMove(){
        userMove = prompt("What do you choose? Rock, Paper, Scissors or Dynamite?");
        userMove = userMove.trim();
        userMove = userMove.toLowerCase();
    }

    //whoWins function compares userMove and computerMove variables to determine winner
    function whoWins(){
        if(userMove === computerMove){
            document.getElementById("winnerText").innerHTML = messages.tie;
        //if computerMove CAN be found in the array (returns a positive value), the user wins
        } else if (gameMovesAndWinners[userMove].winsOver.indexOf(computerMove) != -1){
            document.getElementById("winnerText").innerHTML = messages.userWins;
        //if computerMove CAN'T be found in the array (returns -1), the computer must be the winner
        } else {
            document.getElementById("winnerText").innerHTML = messages.computerWins;
        }
    }


})

function startGame(){

    //print user's choice to the screen
    document.getElementById("userMoveText").innerHTML = userMove;


        //Generate computer's move
        function getRandomGamePiece(){

            //create random number based on length of gamePieces array
            randomNumber = Math.floor((Math.random()*gamePieces.length)+0);

            //pass in randomly generated number, and based on that number, assign a value to
            //the computerMove variable
            switch (randomNumber){
                case 0:
                    computerMove = "ROCK";
                    break;
                case 1:
                    computerMove = "PAPER";
                    break;
                case 2:
                    computerMove = "SCISSORS";
                    break;
                case 3:
                    computerMove = "DYNAMITE";
                    break;
            }
            
            //print computer's move to the screen
            document.getElementById("computerMoveText").innerHTML = computerMove;
            
            }

            //call function to calculate computer's move
            getRandomGamePiece();


            
        }
            //call who Wins function to calculate winner
            whoWins();
        }