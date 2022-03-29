const idade = parseInt(prompt("Qual é sua idade?"));
const temCarteira = prompt("Tem carteira? Responda S ou N");


if(idade >= 18 && temCarteira == "S"){
    document.write('Você pode dirigir')
}else{
    document.write('Você não pode dirigir')
}