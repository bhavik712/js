//declaring array, push,pop, splice, shift & unshift methods 

const team = ['Rohit','Gill','Kohli']
console.log(team)
console.log(team.length)

//retriving the array element
let captain = team[0]
console.log(captain)

//enter the next element at the end of array 
team.push('Surya')
console.log(team)
team.push('Shreyas')
console.log(team)

let last = team.pop()
console.log(last)

let first = team.shift()
console.log(first)
team.unshift('Shikhar')
console.log(team)

console.log(team)
team.splice(1,0,'Rohit') //add element at 2
team.splice(2,0,'Pujara')


console.log(team)
team.splice(3,0,'Rahane')
console.log(team)

team[6] = 'jadeja'
console.log(team)

team.splice(3,3,'Kohli','Gill','Rahane')
console.log(team)

team.splice(2,1)
console.log(team)

team.splice(2,2,'Gill','Kohli')
console.log(team)

team.splice(2,3,'Rahane','HP')
console.log(team)

let result = team.pop()
console.log(result)