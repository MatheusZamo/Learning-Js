const numeroPensado = Math.round(Math.random() * 10);

const valorEntrada = document.querySelector('input');
valorEntrada.focus();

function verifica(){
    if(valorEntrada.value == numeroPensado){
        alert('Você acertou');
    }else{
        alert('Você errou');
    }
    valorEntrada.value = "";
    valorEntrada.focus();
}

const botao = document.querySelector('button');
botao.addEventListener('click',verifica)
