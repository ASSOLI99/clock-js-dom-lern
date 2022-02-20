let secondsHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let HourHand = document.querySelector(".hour-hand");
function setDate(){
    
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let secondsHandDegree = (seconds*6)+90;
    let minHandDegree = (minutes*6)+90;
    let hourHandDegree = ((hours/12)*360)+90;
    if(seconds===0){
        secondsHand.classList.add("remove-transition")
    }
    if(seconds===1){
        secondsHand.classList.remove("remove-transition")
}
    secondsHand.style.transform=`rotate(${secondsHandDegree}deg)`;
    minHand.style.transform=`rotate(${minHandDegree}deg)`;
    HourHand.style.transform=`rotate(${hourHandDegree}deg)`;

}
setInterval(setDate,1000);
