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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 100) {
        console.log("peso invalido")
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";   
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("altura inválida")
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";        
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);

        tdImc.textContent = imc.toFixed(2);
    }



}