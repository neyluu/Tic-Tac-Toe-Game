const fields = document.getElementsByTagName("td");
const result = document.getElementsByClassName("result");
const reset = document.getElementsByClassName("reset");
const winLayouts = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let playerRound = 0;
let gameState = ["","","","","","","","",""];
let isWin = false;

function gameReset()
{
    let resetButton = document.getElementsByClassName("reset-button")
    resetButton[0].addEventListener("click", function(){
        //nie działa
        // for(let i = 0; i <= fields.length; i++)
        // {
        //     if(gameState != "")
        //     {
        //         fields[i].innerHTML = "";
        //     }
        // }
        // gameState = ["","","","","","","","",""];
        // playerRound = 0;
        // isWin = false;
        // console.log("resetPlaterRound " + playerRound);
        // console.log("resetGameState " + gameState);
        // console.log("resetIsWin " + isWin);
        // playGame();
        
        //reset odświeża stronę
        window.location.reload(true);
    });
}

function gameOver(gameState) 
{
    for(let i = 0; i < fields.length; i++)
    {   
        if(gameState[i] == "")
        {
            fields[i].addEventListener("click", function endGame(){
                fields[i].innerHTML = "";
            });
        }    
    }
    reset[0].innerHTML = "<button class='reset-button'>RESET</button>"
    gameReset();
}

function winCheck(winLayouts, gameState, player, trials) 
{
    for(let i = 0; i <=7; i++)
    {
        const winCondition = winLayouts[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if(a === '' || b === '' || c === '') {
            continue;
        }
        if(a === b && b === c) {
            //player sie zmienia po wygranej, do poprawy
            result[0].innerHTML = player + "WIN";
            isWin = true;
            gameOver(gameState);
        }
    }
    if(trials == 9 && isWin == false)
    {
        result[0].innerHTML = "DRAW";
        gameOver(gameState);
    }
}

function playGame()
{
    for(let i = 0; i < fields.length; i++)
    {
        fields[i].addEventListener("click", function write(){
            if(playerRound%2 == 0)
            {
                let player = "x";
                fields[i].innerHTML = "x";
                playerRound++;
            
                gameState[i] = player;
                console.log(gameState);
    
                fields[i].removeEventListener("click", write);
                winCheck(winLayouts, gameState, player, playerRound);
            }
            else
            {
                let player="o"
                fields[i].innerHTML = "o";
                playerRound++;
                
                gameState[i] = player;
                console.log(gameState);
    
                fields[i].removeEventListener("click", write);
                winCheck(winLayouts, gameState, player, playerRound);
            }
        });
    }
}
playGame();