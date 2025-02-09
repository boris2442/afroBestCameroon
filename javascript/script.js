const menu=document.querySelector("header .fa-bars");
console.log(menu)
const navigation=document.querySelector("header ul");
const removeIcone=document.querySelector("header .fa-x")
menu.addEventListener("click", ()=>{
    navigation.classList.toggle("error");
//     console.log("text")
    // menu.style.display="none";
    // removeIcone.style.opacity="0";

});
window.addEventListener("scroll", ()=>{
    navigation.classList.remove("error");
})
// removeIcone.addEventListener("click", ()=>{
//     navigation.classList.remove("navigation");
//     // menu.style.display="none";
//     // removeIcone.style.opacity="1";
// })


// const menu=document.querySelector(" header .fa-bars")