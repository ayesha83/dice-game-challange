//initialize total score to zero
var totalScore = 0;
//roll the dice function
let play = ()=>{
    document.getElementById("winOrLose").innerText="";

    //generate random number between 1 and 6
    let result = Math.ceil(Math.random()*6);
    //generating the dice file name with the assosiated image
    let imageFile = `images/dice-${result}.png`
    //displaying assosiated image on screen
    document.getElementById("diceOutput").src=imageFile;
    //adding result up to total score
    totalScore = totalScore + result;
    // check if the total score is less than 20 and result of 
    //random out is 1
    if(totalScore < 20 && result == 1){
        //display text you lost
        document.getElementById("winOrLose").innerText="You Lost";
        //display start again 
        document.getElementById("startAgain").style.display="block";
        //hide roll button
        document.getElementById("rollDice").style.display="none";
        //reset total score after it's a lost
        totalScore = 0;
    }
    // check if total score is greater than 20
    if(totalScore > 20){
        //display you won
        document.getElementById("winOrLose").innerText="You Won";
        //display start again button again
        document.getElementById("startAgain").style.display="block";
        //hide roll button
        document.getElementById("rollDice").style.display="none";
        //reset total score to after winning
        totalScore = 0;
    }
    //displaying total score
    document.getElementById("totalScore").innerHTML=totalScore;


}
//start again function
let startAgain = () => {
    //hide start again button
    document.getElementById("startAgain").style.display="none";
    //display roll button
    document.getElementById("rollDice").style.display="block";
    // set win or lose text to empty string
    document.getElementById("winOrLose").innerText="";
}
