//creating a tracker program to track the details of an account
//an account object will be interacted using different functions 
const myAccount = {
    name: 'Bhavik',
    income: 0,
    expense: 0
};

const addIncome =(account,amount)=>{
    account.income = account.income + amount;
    console.log(`Total income = ${account.income}`);
}
;
const addExpense = (account,amount)=>{
    account.expense = account.expense + amount;
    console.log(`Total Expense = ${account.expense}`);
};

const resetAccount = (account)=>{
    account.income =0;
    account.expense =0;
};

const getSummary = (account)=>{
    let name = account.name;
    let totalIncome = account.income;
    let totalExpense = account.expense;
    let currentBalance = totalIncome - totalExpense;

    console.log(`this is account of ${name}. Current balance = ${currentBalance}. Total income = ${totalIncome}. Total expence = ${totalExpense} `);
}

getSummary(myAccount);
addIncome(myAccount,1000);
addExpense(myAccount,200);
getSummary(myAccount);
resetAccount(myAccount);
getSummary(myAccount);