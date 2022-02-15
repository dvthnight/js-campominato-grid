const buttonPlay = document.getElementById("play");
const difficoltà = document.getElementById("difficoltà");


buttonPlay.addEventListener("click",function(){
    const scelta = difficoltà.value;
    console.log(scelta);
})