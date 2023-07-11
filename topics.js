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

let result = printGrade (10,20);
console.log(result);