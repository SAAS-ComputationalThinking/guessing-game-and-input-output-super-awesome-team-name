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
