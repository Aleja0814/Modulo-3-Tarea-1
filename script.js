let calculoPropina;
let calculoTotal;
let boton = document.getElementById("boton");
let totalCnta = document.querySelector("h3");
let propina = document.querySelector("h4");
let totalPagar = document.querySelector("h5");


boton.addEventListener("click", function () {
   
    let cuenta = document.getElementById("totalcuenta").value;
    let porcentaje = document.getElementById("porcentajepropina").value;
    calculoPropina = cuenta*(porcentaje/100);
    calculoTotal = parseFloat(cuenta)+parseFloat(calculoPropina);

    totalCnta.textContent = cuenta;
    propina.textContent = calculoPropina;
    totalPagar.textContent = calculoTotal;
})