
let TAP;
let totalapagar = document.querySelector (".tap");
let TOTALAPAGAR = totalapagar.innerHTML; 
let BotRes = document.getElementById ("BotRes");






function Cuenta() {
let Cantidad = document.getElementById ("Cantidad").value;
let Categoria = document.getElementById ("Categoria").value;

Cantidad = Cantidad * 200;

if (Categoria == "ES") {
TAP = Cantidad * 0.15
}
else if(Categoria == "TR") {
TAP = Cantidad * 0.50
}
else {
TAP = Cantidad *0.80
}

totalapagar.innerHTML = TOTALAPAGAR + TAP;
}

BotRes.onclick = Cuenta;