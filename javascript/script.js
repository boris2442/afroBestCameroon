const menu=document.querySelector("header .fa-bars");
const navigation=document.querySelector("header ul");
const removeIcone=document.querySelector("header .fa-x")
menu.addEventListener("click", ()=>{
    navigation.classList.add("navigation");
    menu.style.display="none";
    removeIcone.style.opacity="0";

});
removeIcone.addEventListener("click", ()=>{
    
})
