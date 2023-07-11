const scoreCard = [
    {name: 'Rohit', matches:5, Runs: 300, century:1},
    {name: 'Gill', matches:5, Runs: 389, century:3},
    {name: 'Kishan', matches:3, Runs: 125, century:0}
];

console.log(scoreCard[0]);
//getting value by searching 

const findScore = (scoreCard,batsmanName)=>{
    const index = scoreCard.findIndex((scoreCard,index)=>scoreCard.name === batsmanName);
    console.log(scoreCard[index]);
}

findScore(scoreCard,'Gill');
//deleting value by searchig 
deleteScore = (array,batsmanName)=>{
    const id = array.findIndex((array,index)=>array.name === batsmanName);
    if(id != -1){
        array.splice(id,1);
    }
    

}
deleteScore(scoreCard, 'Gill');
console.log(scoreCard);