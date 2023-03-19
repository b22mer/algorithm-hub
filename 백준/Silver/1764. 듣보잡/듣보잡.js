const fs=require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 

const [N,M]= input.shift().split(" ").map(it => Number(it));
let arr=[]

let T= N+M;
// console.log(T);
for(let i=0; i<T; i++){
    arr.push(input[i].trim());
}
let result= Array.from(new Set(arr));


const answer = [];

for (const item of arr) {
  const index = result.indexOf(item);
  
  if (index === -1) {
    answer.push(item);
  } else {
    result.splice(index, 1);
  }
}


answer.sort()
console.log(answer.length);
answer.forEach(it=> console.log(it))






