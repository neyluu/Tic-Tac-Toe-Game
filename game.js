let fields;
const result = document.getElementsByClassName("result");
const reset = document.getElementsByClassName("reset");
const xPointsField = document.getElementsByClassName("x-points");
const oPointsField = document.getElementsByClassName("o-points");
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
let gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
let isWin = false;
// let isReseted = true;
let player;
let rows;
let xPoints = 0, oPoints = 0;

function gameReset()
{
    let resetButton = document.getElementsByClassName("reset-button")
    
    resetButton[0].addEventListener("click", function(){
        //reset odświeża stronę
        // window.location.reload(true);

        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        result[0].innerHTML = "";
        reset[0].innerHTML = "";
       
        playerRound = 0;
        gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
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
    // for(let i = 0; i <=7; i++)
    // {
    //     const winCondition = winLayouts[i];
    //     let a = gameState[winCondition[0]];
    //     let b = gameState[winCondition[1]];
    //     let c = gameState[winCondition[2]];
    //     if(a === '' || b === '' || c === '')
    //     {
    //         continue;
    //     }
    //     if(a === b && b === c)
    //     {
    //         result[0].innerHTML = player + " WIN";
    //         isWin = true;
    //         if(player === "x")
    //         {
    //             xPoints++;
    //             xPointsField[0].innerHTML = xPoints;
    //         }
    //         else if(player === "o")
    //         {
    //             oPoints++;
    //             oPointsField[0].innerHTML = oPoints;
    //         }
    //         gameOver();
    //     }
    // }
    // if(trials == (rows**2) && isWin == false)
    // {
    //     result[0].innerHTML = " DRAW";
    //     isWin = true;
    //     gameOver();
    // }
    //temp
    if(trials == (rows*rows)) 
    {
        gameOver();
    }
}

function playGame()
{
    fields = document.getElementsByClassName("cell");
    // console.log(fields)
    
    for(let i = 0; i < fields.length; i++)
    {
        // console.log("work"+i)
        fields[i].addEventListener("click", function write(){
            // console.log("cell " +i)
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
                // console.log(gameState)
            }
        });
    }
}

function generate()
{
    // isReseted = false;
    document.getElementById("draw").addEventListener("click", function fieldGenerate(){
        document.getElementsByClassName("play-field")[0].innerHTML = "";
    
        rows = parseInt(document.getElementById("rows").value);
        
        for(let i = 0; i < rows; i++)
        {
            document.getElementsByClassName("play-field")[0].innerHTML += "<tr></tr>";
            let tr = document.getElementsByTagName("tr");
            
            for(let j = 0; j < rows; j++)
            {
                tr[i].innerHTML += "<td class='cell'></td>";
            }
        }
        
        let td = document.getElementsByClassName("cell");
        // console.log(td);
        let leftBorder = [], rightBorder = [];
        let leftCell = 0, rightCell = rows - 1;
        
        for(let i = 0; i < rows; i++)
        {
            leftBorder[i] = leftCell;
            leftCell = leftCell + rows;
        }
        for(let i = 0; i < rows; i++)
        {
            rightBorder[i] = rightCell;
            rightCell = rightCell + rows;
        }
    
        for(let i = 0; i < td.length; i++)
        {
            //border top
            if(i <= rows)
            {
                td[i].classList.toggle("nbr-top");
            }
            //border bottom
            if(i >= td.length-rows && i <= td.length)
            {
                td[i].classList.toggle("nbr-bottom");
            }
            //border left
            for(let j = 0; j < leftBorder.length; j++)
            {
                if(leftBorder[j] == i)
                {
                    td[i].classList.toggle("nbr-left");
                }
            }
            //border right
            for(let k = 0; k < rightBorder.length; k++)
            {
                if(rightBorder[k] == i)
                {
                    td[i].classList.toggle("nbr-right");
                }
            }
        }
        playGame();
    });
}
generate();