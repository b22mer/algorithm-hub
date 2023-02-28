 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

let num = Number(input[0]);
let numOfPairs = Number(input[1]);

let graph = new Array(numOfPairs +1);

for(let i=0; i<num; i++){
    graph[i+1] =[];
}

for(let i=0; i<numOfPairs; i++){
    const [from, to] = input[i+2].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

let visited = new Array(num+1).fill(0);
let cnt=0;
const DFS= (v)=>{
    
    if(visited[v]===1) return;
    visited[v]=1;
   
    for(let i=0; i<graph[v].length; i++){
        let next= graph[v][i];
        if(visited[next] === 0){
            cnt++;
            DFS(next);
        }
    }
}

DFS(1);

console.log(cnt);