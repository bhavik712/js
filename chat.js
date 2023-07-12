//1.created a whatsapp chat -- array of object 
//2.added search feature -- using filter 
//3.added another chat objject 
//4.sorted chat array according to name
//5.Sorted chat according to recent chat 
const chat = [
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

//console.log(chat);
const search = (array, text)=>{
    const searchResult = array.filter((array)=>{
        const isNameMatch = array.name.toLowerCase().includes(text);
        const isMsgMatch = array.message.toLowerCase().includes(text);
        return isNameMatch || isMsgMatch;
    })
    return searchResult;
}
const showResult = search(chat, 'j');
console.log(showResult);

chat.push(
    {
        name: 'Khushi',
        message: 'GST',
        date: '10/07/2023',
        time: '20:59'
    }
)
console.log(chat);


const sortChatOnName = (array) => {
    array.sort((a,b)=>{
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
        }
        else if(b.name.toLowerCase() < a.name.toLowerCase()){
            return 1;
        }
        else{
            return 0;
        }
    })
}
sortChatOnName(chat);
console.log(chat);

const sortChatOnDateAndTime = (array) =>{
    array.sort((a,b)=>{
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
sortChatOnDateAndTime(chat);
console.log(chat);

