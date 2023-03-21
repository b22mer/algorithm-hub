const fs=require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 

console.log((BigInt(input[0].split(" ")[0])+BigInt(input[0].split(" ")[1])).toString())

