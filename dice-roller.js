var rolled = process.argv[2];



function diceroller(rolled){
 var x = rolled ;
 var ans = ""
 for(let i = 0 ; i < x ; i++){
 ans =  ans + getRandomInt()+ ", ";

 }
 return ans;
}



min = 6;
max = 1;
function getRandomInt(min, max) {
 min = Math.ceil(1);
 max = Math.floor(6);
 return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}

console.log("Rolled " + rolled + " dice: " + diceroller(rolled));