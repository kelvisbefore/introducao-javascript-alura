var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecido Nutricionista";

var pacientes = document.querySelectorAll(".paciente")
console.log(paciente)

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    console.log(paciente)

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("peso invalido")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";   
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEhValida) {
        console.log("altura inválida")
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";        
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);

        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    return (peso >= 0 && peso < 1000) ? true : false;
}

function validaAltura(altura) {
    return (altura >= 0 && altura < 3.00) ? true : false;
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura)

    return imc.toFixed(2);
}