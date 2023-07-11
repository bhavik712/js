const todo = ['Get Fresh', 
              'Breakfast',
              'Pack your lunch tiffin',
              'Come to office',
              'Complete Your project',
              'back to PG',
              'Dinner',
              'watch movie',
              'Sleep'
              ];

console.log(todo);

console.log(`your todo list has ${todo.length} items`);

console.log(`Todo:- Your first task is - ${todo[0]}`);


console.log(`Your last task before sleep is - ${todo[todo.length -2]}`);
//using for each
todo.forEach((item,index)=>console.log(`${index + 1} -> ${item}`));

//use of for loop 

for(let count=0; count<todo.length;count++){
    console.log(`${count+1}.${todo[count]}`);

}

