import { winCombinations } from "./winCombinations.js";

console.log(winCombinations);

const result = document.getElementsByClassName("result");
const reset = document.getElementsByClassName("reset");
const xPointsField = document.getElementsByClassName("x-points");
const oPointsField = document.getElementsByClassName("o-points");

let playerRound = 0;
let gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
let isWin = false;
let fields;
let player;
let rows;
let xPoints = 0, oPoints = 0;

function gameReset()
{
    //reset odświeża stronę
    // window.location.reload(true);

    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    result[0].innerHTML = "";
    playerRound = 0;
    gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    isWin = false;
}

function gameOver() 
{
    let resetButton =  document.getElementsByClassName("reset-button");
    resetButton[0].addEventListener("click", function()
    {
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        result[0].innerHTML = "";
        playerRound = 0;
        gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
        isWin = false;
    });
}

function addPoints(player)
{
    result[0].innerHTML = player + " WIN";
    isWin = true;
    
    if(player === "x")
    {
        xPoints++;
        xPointsField[0].innerHTML = xPoints;
    }
    else if(player === "o")
    {
        oPoints++;
        oPointsField[0].innerHTML = oPoints;
    }
    gameOver();
}

function winCheck(gameState, player, trials) 
{
    let currentCombination = [];

    for(let i = 0; i < gameState.length; i++)
    {
        if(gameState[i] == player)
        {
            currentCombination.push(i);
        }
    }
    // console.log(currentCombination);
    
    if(rows == 3)
    {
        for(let i = 0; i < winCombinations.c3.length; i++)
        {
            if(isWin == false && currentCombination.includes(winCombinations.c3[i][0]) && currentCombination.includes(winCombinations.c3[i][1]) && currentCombination.includes(winCombinations.c3[i][2]))
            {
                addPoints(player);
                console.log("win");
            }
        }
    }
    if(rows == 4)
    {
        for(let i = 0; i < winCombinations.c4.length; i++)
        {
            if(isWin == false && currentCombination.includes(winCombinations.c4[i][0]) && currentCombination.includes(winCombinations.c4[i][1]) && currentCombination.includes(winCombinations.c4[i][2]) && currentCombination.includes(winCombinations.c4[i][3]))
            {
                addPoints(player);
                console.log("win");
            }
        }   
    }
    if(rows == 5)
    {
        for(let i = 0; i < winCombinations.c5.length; i++)
        {
            if(isWin == false && currentCombination.includes(winCombinations.c5[i][0]) && currentCombination.includes(winCombinations.c5[i][1]) && currentCombination.includes(winCombinations.c5[i][2]) && currentCombination.includes(winCombinations.c5[i][3]) && currentCombination.includes(winCombinations.c5[i][4]))
            {
                addPoints(player);
                console.log("win");
            }
        }
    }
    if(rows == 6)
    {
        for(let i = 0; i < winCombinations.c6.length; i++)
        {
            if(isWin == false && currentCombination.includes(winCombinations.c6[i][0]) && currentCombination.includes(winCombinations.c6[i][1]) && currentCombination.includes(winCombinations.c6[i][2]) && currentCombination.includes(winCombinations.c6[i][3]) && currentCombination.includes(winCombinations.c6[i][4]) && currentCombination.includes(winCombinations.c6[i][5]))
            {
                addPoints(player);
                console.log("win");
            }
        }
    }
    
    //DRAW
    if(trials == (rows*rows) && isWin == false) 
    {
        result[0].innerHTML = " DRAW";
        isWin = true;
        gameOver();
    }
}

function playGame()
{
    fields = document.getElementsByClassName("cell");
    
    for(let i = 0; i < fields.length; i++)
    {
        fields[i].classList.toggle("event"); //temp
        
        fields[i].addEventListener("click", function write(){
            if(gameState[i] == "" && isWin == false)
            {
                if(playerRound%2 == 0)
                {
                    player = "x";
                    fields[i].innerHTML = "<span class='x'>x</span>";
                    gameState[i] = player;
                }
                else
                {
                    player="o"
                    fields[i].innerHTML = "<span class='o'>o</span>";
                    gameState[i] = player;
                }
                playerRound++;
                winCheck(gameState, player, playerRound);
            }
        });
    }
}

function generate()
{
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
        gameReset();
        playGame();
    }); 
}
generate();