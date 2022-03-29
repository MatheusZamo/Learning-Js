function vezesLetraAparece(frase, letra) {
    let contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == letra){
             contador++
        }
    }
     return contador
 }

const matheus = vezesLetraAparece("alabada","a")

console.log(matheus)