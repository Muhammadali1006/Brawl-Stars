

var btn=document.querySelector(".toogle_btn");
var elMenu=document.querySelector(".menu");
let elMenuu=document.querySelector(".bir-1");
let elMene=document.querySelector(".bir_2");
let skinImg = document.querySelector(".skin_img")
let korinmas= document.querySelector(".korinmas_img")

btn.addEventListener("click",()=>{

elMenu.classList.toggle("active")
})
skinImg.addEventListener("click",()=>{

    elMenuu.classList.toggle("active")
    korinmas.classList.toggle("active")
    elMene.classList.toggle("active_img")
    })