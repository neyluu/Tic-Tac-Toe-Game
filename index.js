const fields = document.getElementsByTagName("td");
const winLayouts = {
    0: [0, 1, 2],
    1: [3, 4, 5],
    2: [6, 7, 8],
    3: [0, 3, 6],
    4: [1, 4, 7],
    5: [2, 5, 8],
    6: [0, 4, 8],
    7: [2, 4, 6]
};

let playerRound = 1;
let circleFields = [];
let crossFields = [];

for(let i = 0; i < fields.length; i++)
{
    fields[i].addEventListener("click", function write(){
        // console.log(i + "działa");
        if(playerRound%2 == 1)
        {
            fields[i].innerHTML = "x";
            playerRound++;
            
            crossFields.push(i);
            console.log("xFields " + crossFields)
            
            fields[i].removeEventListener("click", write);
        }
        else
        {
            fields[i].innerHTML = "o";
            playerRound++;
           
            circleFields.push(i);
            console.log("cFields " + circleFields);
           
            fields[i].removeEventListener("click", write);
        }
    }); 
    
}
