/* 
O que e Higher order functions?
-Uma função que recebe uma função por argumento
-Uma função que retorna uma função 
-Ou as duas coisas juntas 
*/

//Exemplo-1 :Esse e um exemplo de uma função(addEventListener) que recebe uma função por argumento(message)

document.addEventListener('click',message)

function message(){
    //console.log('Você clicou')
}

//Exemplo-2 :Esse e um exemplo de uma função(getMultiplier) que retorna uma outra função embutida nela

function getMultiplier(multiplier){
    return function(aNumber){
        return aNumber * multiplier
    }
}
const double = getMultiplier(2)
const triple = getMultiplier(3)
const quadruple = getMultiplier(4)

//console.log(double(10))
//console.log(triple(10))
//console.log(quadruple(10))
 
//Exemplo-3 Utilizando o map()

const numbers = [1,2,3]
const squareNumbers = numbers.map(number => number ** 2)
//console.log(squareNumbers)

//Exemplo-4 Utilizando o map()

const tvShows = [
    {name:'Breaking Bad', releaseYear: 2008},
    {name:'Mr. Robot', releaseYear:2015},
    {name:'True Detective', releaseYear:2014},
    {name:'Hannibal', releaseYear:2013},
    {name:'The Handmaid\'s Tale', releaseYear:2017},
    {name:'House M.D.', releaseYear:2004},
    {name:'Watchmen', releaseYear:2019}
]

const showNames = tvShows.map(tvShow => tvShow.name )
//console.log(showNames)

//Exemplo-5 Utilizando o filter()

const randomNumbers = [36,99,37,63]

const numbersGreaterThan37 = randomNumbers.filter(number => number > 37)
//console.log(numbersGreaterThan37)

//Exemplo-6 Utilizando o filter()

const tarantinoMovies = [
    {name:'Bastardos inglórios', release:2009},
    {name:'Pulp Fiction', release:1994},
    {name:'Kill Bill: Volume 2', release:2004},
    {name:'Quatro Quartos', release:1995},
    {name:'Era Uma Vez em... Hollywood', release:2019},
    {name:'Django Livre', release:2012},
    {name:'Cães de Aluguel', release:1992},
    {name:'A Prova de Morte', release:2007},
    {name:'Kill Bill: Volume 1', release:2003}
]

const moviesBefore2000 = tarantinoMovies.filter(movie => movie.release < 2000)
//console.log(moviesBefore2000)

//Exemplo-7 Utilizando o filter() e includes()

const firstTravelerCities = [
    'Sydney','Berlim','Lisboa','Sófia','Praga','Bali','Florianópolis'
]
const secondTravelerCities = [
    'Praga','Roma','Chiang Mai','Lisboa','Zagreb'
]
const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city))
//console.log(commonCities)

//Exemplo-8 Utilizando o reduce()

const numberss = [1,2,3]
const sum = numberss.reduce((accumulator,item) => accumulator + item,0)
//console.log(sum)

//Exemplo-9 Utilizando o reduce()

const games = [
    {name:'Dark Souls III', price:95.03},
    {name:'Shadow of the Tomb Raider', price:101.19},
    {name:'Sekiro: Shadow Die Twice', price:179.99},
    {name:'Resident Evil 2', price:119.90},
    {name:'Death Stranding', price:149.90}
]
const productList = games.reduce((accumulator,{name}) => `${accumulator}- ${name}\n`,'')
//console.log(productList)

//Exemplo-10 Utilizando filter() e reduce()

const topBrazilMovies = [
    {title:'Vingadores: Ultimato', peopleAmount:19_686_119, distributedBy:'Disney'},
    {title:'Titanic', peopleAmount:17_050_000, distributedBy:'Paramount/ 20th Century'},
    {title:'O Rei Leão', peopleAmount:16_267_649, distributedBy:'Disney'},
    {title:'Vingadores: Guerra Infinita', peopleAmount:14_572_181, distributedBy:'Disney'},
    {title:'Tubarão', peopleAmount:13_035_000, distributedBy:'Universal'},
    {title:'Nada a Perder', peopleAmount:11_944_985, distributedBy:'Paris Filmes'},
    {title:'Os Dez Mandamentos', peopleAmount:11_259_536, distributedBy:'Paris/ Downtown Filmes'},
    {title:'Tropa de Elite 2', peopleAmount:11_204_815, distributedBy:'Zazen'},
    {title:'Os Vingadores', peopleAmount:10_968_065, distributedBy:'Disney'},
    {title:'Dona Flor e Seus Dois Maridos', peopleAmount:10_735_524, distributedBy:'Embrafilme'},
]
const showDisney = topBrazilMovies
.filter(({distributedBy}) => distributedBy === 'Disney')
.reduce((accumulator,{peopleAmount}) => accumulator + peopleAmount,0)

//console.log(showDisney)

