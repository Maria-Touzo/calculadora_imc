// Variáveis no escopo global
let peso = 68;
let altura = 1.60
const imc = peso / (altura * altura)

// Cacular o imc
function calcularIMC(){
// const imc = 9
    console.log(`Este é o valor do IMC calculado: ${imc.toFixed(2)}.`)
    classificaIMC()
};
    
function classificaIMC(){
    // Classiicando o imc
    if (imc < 18.5) {
        console.log('abaixo do peso');
    }else if (imc >= 18.5 && imc < 25){
        console.log('peso normal');
    }else if (imc >= 25 && imc < 30){
        console.log('sobrepeso');
    }else {
        console.log('obesidade');
    };
};

calcularIMC();


