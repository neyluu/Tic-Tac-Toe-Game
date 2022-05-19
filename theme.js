const body = document.getElementsByTagName("body");

let isDark = false;

theme.addEventListener("click", function(){
    body[0].classList.toggle("body-dt");
    document.querySelectorAll('td').forEach(td => td.classList.toggle("cell-dt"));
});


document.getElementsByClassName("settings")[0].addEventListener("mouseover", function(){
    document.getElementsByClassName("aside-main")[0].classList.toggle("wide");
});