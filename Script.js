//function getRandomInt(max) {
    //return math.floor(math.random() * max);
//}
//console.log(getRandomInt(5));
const max=Math.floor(Math.random()*1000);
var btn = document.getElementById("");
// btn.addEventListener("Click,enterbutton")
function enterbutton(){
const input = document.getElementById("myInput");
const inputValue = input.value;



 if (max > inputValue) {
    //window.print("Your too low");
    var html="<br/>Your too low";
     document.getElementById('feedback').innerHTML=html;
    

    }else if(inputValue==max){
       // window.print("You got it!");
       var html="<br/>You got it!";
       document.getElementById('feedback').innerHTML=html;
    

    }else{
       // window.print("Your too High")
       var html="<br/>Your too high!";
        document.getElementById('feedback').innerHTML=html;
    }
        
}
document.getElementById('Myintput2').addEventListener("change",enterbutton2);
document.getElementById('SubmitGuess').addEventListener("change", enterbutton3);
function enterbutton2(){
    const input2 = document.getElementById("Myintput2");
    const inputValue2 = input2.value;
    const finalanswer=inputValue2**2;
    document.getElementById('Feedback2').innerText=finalanswer;


}
function enterbutton3(){
    const answer = document.getElementById("SubmitGuess")
    const answer2 = answer.toString(); 
    keyword1 = "square";
    keyword2 = "squared";
    keyword3 = "It is squared";
    keyword4 = "The Number is squared";
    keyword5 = "Squared";
    keyword6 = "The final answer is the input squared";

    if(text.search(keyword1)!=-1) {
        document.getElementById('Feedback3').innertext="You got it!";
    } else{
        document.getElementById('Feedback3').innertext="You didn't Get it!";
}

