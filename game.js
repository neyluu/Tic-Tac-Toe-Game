import { winCombinations } from "./winCombinations.js";

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
    reset[0].innerHTML = "";

    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    result[0].innerHTML = "";
    playerRound = 0;
    gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    isWin = false;
}

function gameOver() 
{
    reset[0].innerHTML = "<button class='reset-button blue-button'>PLAY AGAIN</button>";
    document.getElementsByClassName("reset-button")[0].addEventListener("click", function(){
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
        result[0].innerHTML = "";
        playerRound = 0;
        gameState = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
        isWin = false;
    });
}

function addPoints(player)
{
    result[0].innerHTML = "<p>Player " + player + " win!</p>";
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
    
    if(rows == 3)
    {
        for(let i = 0; i < winCombinations.c3.length; i++)
        {
            if(currentCombination.includes(winCombinations.c3[i][0]) && currentCombination.includes(winCombinations.c3[i][1]) && currentCombination.includes(winCombinations.c3[i][2]))
            {
                addPoints(player);
                return;
            }
        }
    }
    if(rows == 4)
    {
        for(let i = 0; i < winCombinations.c4.length; i++)
        {
            if(currentCombination.includes(winCombinations.c4[i][0]) && currentCombination.includes(winCombinations.c4[i][1]) && currentCombination.includes(winCombinations.c4[i][2]) && currentCombination.includes(winCombinations.c4[i][3]))
            {
                addPoints(player);
                return;
            }
        }   
    }
    if(rows == 5)
    {
        for(let i = 0; i < winCombinations.c5.length; i++)
        {
            if(currentCombination.includes(winCombinations.c5[i][0]) && currentCombination.includes(winCombinations.c5[i][1]) && currentCombination.includes(winCombinations.c5[i][2]) && currentCombination.includes(winCombinations.c5[i][3]) && currentCombination.includes(winCombinations.c5[i][4]))
            {
                addPoints(player);
                return;
            }
        }
    }
    if(rows == 6)
    {
        for(let i = 0; i < winCombinations.c6.length; i++)
        {
            if(currentCombination.includes(winCombinations.c6[i][0]) && currentCombination.includes(winCombinations.c6[i][1]) && currentCombination.includes(winCombinations.c6[i][2]) && currentCombination.includes(winCombinations.c6[i][3]) && currentCombination.includes(winCombinations.c6[i][4]) && currentCombination.includes(winCombinations.c6[i][5]))
            {
                addPoints(player);
                return;
            }
        }
    }
    
    //DRAW
    if(trials == (rows*rows) && isWin == false) 
    {
        result[0].innerHTML = "<p> Draw!</p>";
        isWin = true;
        gameOver();
    }
}

function playGame()
{
    fields = document.getElementsByClassName("cell");
    
    for(let i = 0; i < fields.length; i++)
    {
        fields[i].addEventListener("click", function write(){
            if(gameState[i] == "" && isWin == false)
            {
                if(playerRound%2 == 0)
                {
                    player = "x";
                    fields[i].innerHTML = "<span class='x'>" + player + "</span>";
                    gameState[i] = player;
                }
                else
                {
                    player="o"
                    fields[i].innerHTML = "<span class='o'>" + player + "</span>";
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
    document.getElementById("generate").addEventListener("click", function fieldGenerate(){
        rows = document.querySelector('input[name="rows"]:checked').value;
        rows *= 1;

        document.getElementById("play-field").innerHTML = "<table class='play-field' data-size='" + rows + "'></table>"
        document.getElementsByClassName("play-field")[0].innerHTML = "";
        document.getElementsByClassName("ttt-img")[0].classList.add("ttt-non-vis");
        setTimeout(function(){
            document.getElementsByClassName("ttt-img")[0].style.display = "none"
        }, 500);

        for(let i = 0; i < rows; i++)
        {
            document.getElementsByClassName("play-field")[0].innerHTML += "<tr class='play-tr'></tr>";
            let tr = document.getElementsByClassName("play-tr");
            
            for(let j = 0; j < rows; j++)
            {
                tr[i].innerHTML += "<td class='cell'></td>";
            }
        }
        document.getElementById("play-field").classList.add("pf-vis");
        
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

function pointsReset()
{
    const pointsResetButton = document.getElementsByClassName("points-reset");
    
    pointsResetButton[0].addEventListener("click", function()
    {
        xPoints = 0; 
        oPoints = 0;
        xPointsField[0].innerHTML = xPoints;
        oPointsField[0].innerHTML = oPoints;
    });
}
pointsReset();