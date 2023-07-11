//created a grade calculator to show the use of following topics:-
//Functions(arguments), template strings, mathemetical & logical operator & scope of var

const printGrade = (student_score, total_marks) => {
    percentage = (student_score / total_marks)*100;
    const grade = calculateGrade(percentage);
    return `You have got Grade ${grade} & ${percentage}%`;
}

const calculateGrade = (percentage)=>{
    let grade;
    if(percentage >= 90 && percentage < 100 ){
        grade= 'A';
    }
    else if(percentage >= 80 && percentage < 90){
        grade='B';
    }
    else if(percentage >= 70 && percentage < 80){
        grade='C';
    }
    else if(percentage >= 60 && percentage < 70){
        grade='D';
    }
    else{
        grade='F';
    }
    
    return grade;
}

let result = printGrade (10,20)
console.log(result)

//creating obj & reading & editing using a function
let person = {
    name: 'Rohit',
    age: 36,
    location: 'Mumbai'
}

let readObj = (obj)=>{
    console.log(`${obj.name} is ${obj.age} and lives in ${obj.location}`);

}
readObj(person)

let editObj = (obj)=>{
    person.age += 1

}
editObj(person)
readObj(person)

let x = 10
let y = 50

let rect =  (l,b)=>{
    return {
        length: l,
        width: b,
        circumference : 2*(l+b),
        area: l*b
    };
}

let rectObj = rect(x,y);
console.log(rectObj);
console.log(rectObj.length);
