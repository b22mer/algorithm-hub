const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dx =[0,0,-1,1];//좌우상하
const dy =[-1,1,0,0];//좌우상하



let N = parseInt(input.shift());
let graph = input.map(it => it.split(" ").map(Number));

let max=-1;
graph.forEach(it =>{
    max = Math.max(...it);
})

let cnt=0;
let result=0;

const dfs = (graph,visited,x,y,k)=>{

    if(x>=N || y>=N || x<0 || y<0 || graph[x][y]<=k) return;
    if(visited[x][y]===false) {
        visited[x][y]=true;
        for(let i=0; i<4; i++){
            let nx = x+dx[i];
            let ny = y+dy[i];
            dfs(graph,visited,nx,ny,k);
    }
    }
}


for(let k=0; k<=max; k++){
    let visited = Array.from({length:N},()=> Array(N).fill(false));
    cnt=0;
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            if(graph[i][j]>k && !visited[i][j]){
                dfs(graph,visited, i, j,k);
                cnt++;
            }
        }
    }

    // console.log("-------------------------");
    result= Math.max(result, cnt);
}


console.log(result);

