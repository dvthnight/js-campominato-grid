const buttonPlay = document.getElementById("play");
const difficoltà = document.getElementById("difficoltà");


buttonPlay.addEventListener("click",function(){
    const scelta = difficoltà.value;
    console.log(scelta);

    let colonna;
    let riga;

    switch (scelta) {
        case "1":
            riga = 10;
            colonna = 10;
            break;
    
        case "2":
            riga = 9;
            colonna = 9;
            break;

        case "3":
            riga = 7;
            colonna = 7;
    }

    let griglia = colonna * riga;

    console.log(griglia);
})