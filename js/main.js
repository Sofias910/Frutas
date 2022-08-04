//DATA
let grupoTarjetas = ["🍇","🍈","🍉","🍋","🍊","🍌","🍍","🍎","🥭"];


function agregartitulos(){

//DOM
let root = document.querySelector("#root");



grupoTarjetas.forEach(function(fruta){

//CREAR UN ELEMENTO DENTRO DEL DOM
let titulo = document.createElement("h1");

//SE AGREGA CONTENIDO AL ELEMENTO
titulo.innerHTML = fruta;

// SE AGREGA AL DOM
root.appendChild(titulo);
} );



}

agregartitulos();