const fields = document.getElementsByTagName("td");
console.log(fields);

let playerRound = 1;

for(let i = 0; i < fields.length; i++)
{
    
        fields[i].addEventListener("click", function write(){
            // console.log(i + "działa");
            if(playerRound%2 == 0)
            {
                fields[i].innerHTML = "x";
                playerRound++;
                // fields[i].removeEventListener("click", write());
            }
            else
            {
                fields[i].innerHTML = "o";
                playerRound++;
                // fields[i].removeEventListener("click", write());
            }
            
        }); 
    
}
