const fs=require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 

let days= [31,28,31,30,31,30,31,31,30,31,30,31];
let week=["SUN","MON","TUE","WED","THU","FRI","SAT"];

let month =input[0].split(" ")[0];
let day =input[0].split(" ")[1];

let total=0;

for(let i=0; i<month-1; i++){
    total+=days[i];
}


total+=Number(day);
// console.log(total)
console.log(week[total%7])

