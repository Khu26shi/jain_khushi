const daysvalue= document.querySelector("#days");
const minutesvalue= document.querySelector("#minutes");
const hoursvalue= document.querySelector("#hours");
const secondsvalue= document.querySelector("#seconds");
const countdowmDateTime= new Date(2023,1,1,0,0,0).getTime();


function countDowm(){ 
const dateTimeNow= new Date().getTime();
let difference = countdowmDateTime-dateTimeNow;

//days
const daysValueNumber= Math.floor(difference/(1000*60*60*24));

//hours
const hoursValueNumber= Math.floor(difference/(1000*60*60)%24);

//minutes
const minutesValueNumber= Math.floor(difference/(1000*60)%60);

//seconds
const secondsValueNumber= Math.floor(difference/(1000)%60);

daysvalue.innerHTML=daysValueNumber;
hoursvalue.innerHTML=hoursValueNumber;
minutesvalue.innerHTML=minutesValueNumber;
secondsvalue.innerHTML=secondsValueNumber;

console.log(daysValueNumber,hoursValueNumber,minutesValueNumber,secondsValueNumber);

function greet(){
    console.log("time's up");
 
}
setTimeout(greet,50000);
}




setInterval(countDowm,1000);