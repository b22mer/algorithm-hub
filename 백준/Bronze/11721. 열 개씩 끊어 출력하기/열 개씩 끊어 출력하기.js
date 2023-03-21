const fs=require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 
let result="";
for(let i=0; i<input[0].length; i++){
    result+=input[0].charAt(i);
    if(result.length===10){
        console.log(result);
        result="";
    }else if(i===input[0].length-1){
        console.log(result);
    }
}