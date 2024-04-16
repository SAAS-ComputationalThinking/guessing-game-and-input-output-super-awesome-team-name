//function getRandomInt(max) {
    //return math.floor(math.random() * max);
//}
//console.log(getRandomInt(5));
const max=Math.floor(Math.random()*5);
const input = document.getElementById("myInput");
const inputValue = input.value;
console.log(inputValue);
if (max > inputValue) {
    console.log("Nick is an adult.");
    }