//1.created a todo list with task & status
//search a task using find
//showed comppleted task -- array object 
//sorted todo list -- remaining task above  

const todo = [
    {
        task: 'Get Fresh', 
        completed: true
    },
    {
        task: 'Breakfast', 
        completed: true
    },
    {
        task: 'Pack your lunch tiffin', 
        completed: true
    },
    {
        task: 'Come to office', 
        completed: false
    },
    {
        task: 'Complete Your project', 
        completed: false
    },
    {
        task: 'back to PG',
        completed: false
    },
    {
        task: 'Dinner', 
        completed: false
    },
    {
        task: 'watch movie', 
        completed: false
    }
   ];

console.log(todo);

let todoTask = todo.find((todo) => todo.task === 'Dinner');
console.log(todoTask);



const showCompletedTask = (array)=>{
    const completedTask = array.filter((array)=> array.completed === true);
    console.log('completed task');
    console.log(completedTask);
}
showCompletedTask(todo);


const sortToDoList = (array)=>{
    array.sort((a,b)=>{
        if(a.completed < b.completed){
            return -1;
        }
        else if(b.completed < a.completed){
            return 1
        }
        else{
            return 0;
        }
    })
}
sortToDoList(todo);
console.log(todo);

//console.log(typeof(todo[1].completed));