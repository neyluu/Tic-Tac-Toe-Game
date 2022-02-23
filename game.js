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
let player;

function gameReset()
{
    let resetButton = document.getElementsByClassName("reset-button")
    
    resetButton[0].addEventListener("click", function(){
        //reset odświeża stronę
        // window.location.reload(true);

        document.querySelectorAll('td').forEach(td => td.innerHTML = "");
        result[0].innerHTML = "";
        reset[0].innerHTML = "";
       
        playerRound = 0;
        gameState = ["","","","","","","","",""];
        isWin = false;
    });
}

function gameOver() 
{
    reset[0].innerHTML = "<button class='reset-button'>RESET</button>"
    gameReset();
}

function winCheck(gameState, player, trials) 
{
    for(let i = 0; i <=7; i++)
    {
        const winCondition = winLayouts[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if(a === '' || b === '' || c === '')
        {
            continue;
        }
        if(a === b && b === c)
        {
            result[0].innerHTML = player + " WIN";
            isWin = true;
            gameOver();
        }
    }
    if(trials == 9 && isWin == false)
    {
        result[0].innerHTML = " DRAW";
        isWin = true;
        gameOver();
    }
}

function playGame()
{
    for(let i = 0; i < fields.length; i++)
    {
        fields[i].addEventListener("click", function write(){
            if(gameState[i] == "" && isWin == false)
            {
                if(playerRound%2 == 0)
                {
                    player = "x";
                    fields[i].innerHTML = "x";
                    gameState[i] = player;
                }
                else
                {
                    player="o"
                    fields[i].innerHTML = "o";
                    gameState[i] = player;
                }
                playerRound++;
                winCheck(gameState, player, playerRound);
            }
        });
    }
}
playGame();







