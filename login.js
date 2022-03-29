const loginCadastrado = 'Matheus';
const senhaCadastrada = 2612;

let tentativas = 3;

    while(tentativas >= 0){
        
        let loginInformado = prompt('Qual e o seu login ?');
        let senhaInformada = prompt(`Qual e sua senha ${loginInformado}?`)
        

        if(loginCadastrado == loginInformado && senhaCadastrada == senhaInformada){
            alert(`Seja bem vindo ${loginInformado}`)
            tentativas = 0
        }else{
            alert(`senha ou login incorreto voce tem mais ${tentativas} tentativas`)
        }
        
        tentativas--
}
