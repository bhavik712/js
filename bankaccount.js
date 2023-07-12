//used the concept of object & array 

const myAccount = {
    number: 10001,
    name: 'Bhavik',
    credit: [ 
        {
            description: 'salary',
            amount: 3333,
            date: '03/07/2023',
            time: '11:00'
        },
        {
            description: 'paytm',
            amount: 4000,
            date: '10/07/2023',
            time: '19:00'
        }
    ],
    totalCredit: function(){
        let credit = this.credit;
        let total=0;
        credit.forEach((item,index)=> total = total +item.amount);
        return total;
    },
    debit: [
        {
            description: 'tripexpense_1',
            amount: 410,
            date: '09/07/2023',
            time: '17:00'
        },
        {
            description: 'rent',
            amount: 6000,
            date: '10/07/2023',
            time: '20:00'
        },
        {
            description: 'tripexpense_2',
            amount: 50,
            date: '10/07/2023',
            time: '21:00'
        }
    ],
    totalDebit: function(){
        debit = this.debit;
        let total=0;
        debit.forEach((item)=>total=total+item.amount);
        return total;
    },
    getSummary: function(account){
        totalBalance = account.totalCredit() - account.totalDebit();
        return (`This is account of ${account.name}.Account No is ${account.number}.total income is ${account.totalCredit()}.total expense is ${account.totalDebit()}
        net balance is ${totalBalance} .`)
    },
    addCredit: function(type, value, date, time){
        this.credit.push(
            {
                description: type,
                amount: value,
                date: date,
                time: time
            })
    },
    addDebit: function(type, value, date, time){
        this.debit.push(
            {
                description: type,
                amount: value,
                date: date,
                time: time
            })
    } 

}

let summary= myAccount.getSummary(myAccount);
console.log(summary);
myAccount.addCredit('cashback',15,'11/07/2023','19:45');
console.log(myAccount.credit);
myAccount.addDebit('ticket',15,'11/07/2023','19:30');
console.log(myAccount.debit);
