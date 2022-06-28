document.querySelector(".settings-svg").addEventListener("click", function(){
    document.querySelector(".settings-window").classList.toggle("settings-wide");
    
    // setTimeout(function(){
    //     document.querySelector(".settings-window").classList.toggle("settings-visible");
    // }, 700);
});

document.querySelector(".svg-settings").addEventListener("click", function(){
    document.querySelector(".svg-settings").classList.toggle("svg-settings-rotate");
});















// THEME
// const body = document.getElementsByTagName("body");

// let isDark = false;

// theme.addEventListener("click", function(){
//     body[0].classList.toggle("body-dt");
//     document.querySelectorAll('td').forEach(td => td.classList.toggle("cell-dt"));
// });


// document.getElementsByClassName("settings")[0].addEventListener("mouseover", function(){
//     document.getElementsByClassName("aside-main")[0].classList.toggle("wide");
// });