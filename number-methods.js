let min = 1
let max = 5
let makeGuess = function (guess){
    return guess === Math.floor(Math.random()*(max-min+1))+1

}

console.log(makeGuess(3))
