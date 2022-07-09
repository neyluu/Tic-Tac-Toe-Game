// settings expanding and icon rotate
document.querySelector(".settings-svg").addEventListener("click", function(){
    document.querySelector(".settings-window").classList.toggle("settings-wide");
    document.querySelector(".svg-settings").classList.toggle("svg-settings-rotate");
});

//theme
const body = document.getElementsByTagName("body");

let isDark = false;

theme.addEventListener("click", function(){
    body[0].classList.toggle("body-dt");
    document.querySelectorAll('td').forEach(td => td.classList.toggle("cell-dt"));
});