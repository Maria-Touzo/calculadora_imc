// Captura global dos elementos
const inputPeso = document.getElementById('weigth');
const inputAltura = document.getElementById('heigth');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// Função auxiliar
function mostrarResultado (mensagem){
    textoResultado.textContent = mensagem;
}

function calcularIMC (){
     const peso = parseFloat(inputPeso.value);
     const altura = parseFloat(inputAltura.value);

    //  validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        mostrarResultado('Por favor, insira valores válidos: '); 
        return;
    }

    // Cálculo
    const imc = peso / (altura * altura)
    let classificacao = '';

    // Classificação
    if (imc < 18.5) {
        console.log('abaixo do peso');
    }else if (imc >= 18.5 && imc < 25){
        console.log('peso normal');
    }else if (imc >= 25 && imc < 30){
        console.log('sobrepeso');
    }else {
        console.log('obesidade');
    };

    // Template string
    mostrarResultado(`Seu imc é ${imc.toFixed(2)} (${classificacao}).`);
};
