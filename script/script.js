function soma() {
    let valor1 = document.getElementById("n1").value;
    let valor2 = document.getElementById("n2").value;
    let soma = 0;

    if (valor1 === "" || valor2 === "") {
        alert("Preencha todos os campos!");
        return;
    }

    valor1 = parseFloat(document.getElementById("valor1").value);
    valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Algum valor é inválido, insira outro valor em números!");
    } else {
        soma = (valor1 + valor2);
        alert("O resultado da soma é: " + soma);
    }

}

function subtracao() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let subtracao = 0;

    if (valor1 === "" || valor2 === "") {
        alert("Preencha todos os campos!");
        return;
    }

    valor1 = parseFloat(document.getElementById("valor1").value);
    valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Algum valor é inválido, insira outro valor em números!");
    } else {
        subtracao = (valor1 - valor2);
        alert("O resultado da subtração é: " + subtracao);
    }

}

function divisao() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let divisao = 0;

    if (valor1 === "" || valor2 === "") {
        alert("Preencha todos os campos!");
        return;
    }

    valor1 = parseFloat(document.getElementById("valor1").value);
    valor2 = parseFloat(document.getElementById("valor2").value);

    if (valor1 === 0 || valor2 === 0) {
        alert("A divisão por 0 não é possível, insira outro valor dirente de 0!");
    } else if (isNaN(valor1) || isNaN(valor2)) {
        alert("Algum valor é inválido, insira outro valor em números!");
    } else if (!isNaN(valor1) || !isNaN(valor2)) {
        divisao = (valor1 / valor2);
        alert("O resultado da divisão é: " + divisao);
    }

}

function multiplicacao() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let multiplicacao = 0;

    if (valor1 === "" || valor2 === "") {
        alert("Preencha todos os campos!");
        return;
    }

    valor1 = parseFloat(document.getElementById("valor1").value);
    valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Algum valor é inválido, insira outro valor em números!");
    } else {
        multiplicacao = (valor1 * valor2);
        alert("O resultado da multiplicação é: " + multiplicacao);
    }

}