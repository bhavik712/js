//here we genrate a num using random function between 1-5 and guessing by using passing our value to function
//if our guess is true it shows won else false  


let guessGame = function(num){
    let min =1
    let max =5

    let number = Math.floor(Math.random() * (max- min +1)) + min
    if(num == number){
        console.log('Won')
    }
    else{
        console.log('Lost')
    }
}

guessGame(2)
guessGame(3)
guessGame(1)
guessGame(5)
guessGame(5)
