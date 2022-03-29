const totalFamiliares = parseInt(prompt('Quantos familiares voce tem ?'));

let totalIdade = 0;

for(let repitaPergunta = 1; repitaPergunta <= totalFamiliares;repitaPergunta++){
    let perguntaIdade = parseInt(prompt('Qual e a idade?'))
    totalIdade = totalIdade + perguntaIdade
}
const mediaIdade = Math.round(totalIdade / totalFamiliares);

alert(`A media de idade de sua familia e de ${mediaIdade} anos`)