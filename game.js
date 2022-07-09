// import { winCombinations } from "./winCombinations.js";
const winCombinations = {
    c3: [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
    ],
    c4: [
         [0, 1, 2, 3],
         [4, 5, 6, 7],
         [8, 9, 10, 11],
         [12, 13, 14, 15],
         [0, 4, 8, 12],
         [1, 5, 9, 13],
         [2, 6, 10, 14],
         [3, 7, 11, 15],
         [0, 5, 10, 15],
         [3, 6, 9, 12] 
    ],
    c5: [
         [0, 1, 2, 3, 4],          
         [5, 6, 7, 8, 9],         
         [10, 11, 12, 13, 14],
         [15, 16, 17, 18, 19],
         [20, 21, 22, 23, 24],
         [0, 5, 10, 15, 20],
         [1, 6, 11, 16, 21],
         [2, 7, 12, 17, 22],
         [3, 8, 13, 18, 23],
         [4, 9, 14, 19, 24],
         [0, 6, 12, 18, 24],
         [4, 8, 12, 16, 20]
    ],
    c6: [
         [0, 1, 2, 3, 4, 5],          
         [6, 7, 8, 9, 10, 11],
         [12, 13, 14, 15, 16, 17],
         [18, 19, 20, 21, 22, 23],
         [24, 25, 26, 27, 28, 29],
         [30, 31, 32, 33, 34, 35],
         [0, 6, 12, 18, 24, 30],
         [1, 7, 13, 19, 25, 31],
         [2, 8, 14, 20, 26, 32],
         [3, 9, 15, 21, 27, 33],
         [4, 10, 16, 22, 28, 34],
         [5, 11, 17, 23, 29, 35],
         [0, 7, 14, 21, 28, 35],
         [5, 10, 15, 20, 25, 30]
    ]
}

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
    // result[0].innerHTML = player + " WIN";
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
    // console.log(currentCombination);
    

    //return zamiast isWin == false w if
    if(rows == 3)
    {
        for(let i = 0; i < winCombinations.c3.length; i++)
        {
            if(currentCombination.includes(winCombinations.c3[i][0]) && currentCombination.includes(winCombinations.c3[i][1]) && currentCombination.includes(winCombinations.c3[i][2]))
            {
                addPoints(player);
                console.log("win");
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
                console.log("win");
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
                console.log("win");
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
                console.log("win");
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
    document.getElementById("generate").addEventListener("click", function fieldGenerate(){
        rows = document.querySelector('input[name="rows"]:checked').value;
        rows *= 1;

        document.getElementById("play-field").innerHTML = "<table class='play-field' data-size='" + rows + "'></table>"
        document.getElementsByClassName("play-field")[0].innerHTML = "";
        document.getElementsByClassName("ttt-img")[0].classList.add("ttt-non-vis");
        setTimeout(function(){
            document.getElementsByClassName("ttt-img")[0].style.display = "none"
        }, 500);
        

        //nie działa z nowym formem
        // rows = parseInt(document.getElementById("rows").value);

        for(let i = 0; i < rows; i++)
        {
            document.getElementsByClassName("play-field")[0].innerHTML += "<tr class='play-tr'></tr>";
            // let tr = document.getElementsByTagName("tr");
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