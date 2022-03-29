function calculaImc(peso,altura){
    return Math.round(peso / (altura * altura));
}

const nome = prompt(`Qual e o seu nome ?`);
const pesoDigitado = prompt(`${nome}, Qual o seu peso ?`);
const alturaDigitada = prompt(`${nome}, Qual e a sua altura ?`);

const resultado = calculaImc(pesoDigitado,alturaDigitada);
alert(`${nome}, Seu imc é ${resultado}`)