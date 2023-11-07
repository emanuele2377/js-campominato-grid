// <div class="square"></div>

//creare la griglia dinamicamente, inserendo N elementi .square nel container
let numCelle = 100;
let grid = document.getElementById("grid");
let numeri = "";

for (let i = 1; i < 100; i++) {
  numeri += i + "<br>";
  
}

for (let i = 1; i <= numCelle; i++) {
    
    let cella = creaQuadrato(i);
    grid.appendChild(cella);   
}

/******************************************************************** */

function creaQuadrato(numero) {
    
    document.getElementById("main").innerHTML = numeri;


    const cella = document.createElement("div");
    cella.classList.add("square");

    //per ogni quadrato voglio un evento che gestisca il click
    cella.addEventListener("click", function() {

        const cella = document.createElement("div");
        cella.classList.add("numeri");
        console.log("Cella cliccata", numero);
        
        //versione abbreviata
        cella.classList.toggle("highlight");

        

    });

    return cella;
}