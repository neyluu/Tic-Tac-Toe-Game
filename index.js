const fields = document.getElementsByTagName("td");
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

function winCheck(winLayouts, gameState, player, trials) 
{
    let isWin = false;
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
            document.write(player +" WIN");
            isWin = true;
            break
        }
        else if(trials == 9 && isWin == false)
        {
            document.write("DRAW");
            break;
        }
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
