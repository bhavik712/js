//1.created a whatsapp chatMessages -- chatMessages of object 
//2.added search feature -- using filter 
//3.added another chatMessages objject 
//4.sorted chatMessages chatMessages according to name
//5.Sorted chatMessages according to recent chatMessages 
const chatMessages = [
    {
        name: 'Jignsa',
        message: 'Good Night',
        date: '11/07/2023',
        time: '23:00'
    },
    {
        name: 'Papa',
        message: 'I hope you are fine! take care',
        date: '10/07/2023',
        time: '21:00'
    },
    {
        name: 'Jayeshbhai',
        message: 'Keep it up! Moment of joy',
        date: '12/07/2023',
        time: '10:30'
    }
];

//console.log(chatMessages);
const search = (chatMessages, text)=>{
    const searchResult = chatMessages.filter((item)=>{
        const isNameMatch = item.name.toLowerCase().includes(text);
        const isMsgMatch = item.message.toLowerCase().includes(text);
        return isNameMatch || isMsgMatch;
    })
    return searchResult;
}
//const showResult = search(chatMessages, 'j');
//console.log(showResult);

chatMessages.push(
    {
        name: 'Khushi',
        message: 'GST',
        date: '10/07/2023',
        time: '20:59'
    }
)
//console.log(chatMessages);


const sortchatMessagesOnName = (chatMessages) => {
    chatMessages.sort((a,b)=>{
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
        }
       
    })
}
sortchatMessagesOnName(chatMessages);
console.log(chatMessages);

const sortchatMessagesOnDateAndTime = (chatMessages) =>{
    chatMessages.sort((a,b)=>{
        if(a.date < b.date){
            return 1;
        }
        else if(b.date < a.date){
            return -1;
        }
        else (a.date == b.date)
        {
            if(a.time < b.time){
                return 1;
            }
            else if(b.time < a.time)
            {
                return -1;
            }
            else{
                return 0;
            }
           
        }

    })

}
sortchatMessagesOnDateAndTime(chatMessages);
console.log(chatMessages);

