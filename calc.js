function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    
    if(operacao == "+"){
        return numero + outroNumero
    }
    if(operacao == "-"){
        return numero - outroNumero
    }
    
    return 0 

}

console.log(calculadoraAdicaoSubtracao(3,3,"-"))