const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");
let [n, m, v] = input[0].split(" ").map(Number); 

let arr = new Array(n+1);
for(let i = 0; i<arr.length; i++){
    arr[i] =[];
}

for(let i=0; i<m; i++){
    let [from, to] = input[i+1].split(" ").map(Number);
    arr[from].push(to);
    arr[to].push(from);
}

arr.forEach(it =>{
    it.sort((a,b)=> a-b);
})

let visited = new Array(n+1).fill(0);
let dfs_answer= [];

const DFS =(v) =>{
    if(visited[v]) return;
    visited[v]=1;
    dfs_answer.push(v);
    for(let i=0; i<arr[v].length; i++){
        let next= arr[v][i];
        if(visited[next] === 0){
            DFS(next);
        }
    }
}

DFS(v);
console.log(dfs_answer.join(" "));

let answer_bfs = [];
visited.fill(0);
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < arr[x].length; i++) {
      let next = arr[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(v);
console.log(answer_bfs.join(" "));