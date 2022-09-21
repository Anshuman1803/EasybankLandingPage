let NavBar = document.getElementById("NavBar");
let MenuButton = document.getElementById("MenuButton");
MenuButton.addEventListener("click", ()=>{
    MenuButton.classList.toggle("fa-xmark");
    NavBar.classList.toggle("ShowHideNav");
})