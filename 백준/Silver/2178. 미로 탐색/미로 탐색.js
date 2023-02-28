 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let graph = new Array(N);

for(let i=0; i<N; i++){
    graph[i]= input[i+1].trim().split("").map(Number)
}

const dx= [-1,1, 0, 0];
const dy= [0,0, -1, 1];

const BFS = (a,b)=>{
    let queue = [];
    queue.push([a,b]);
    // console.log(queue);
    while(queue.length>0){
      
        let [x,y]= queue.shift();
        for(let i=0; i<4; i++){
       
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx<0 || nx >=N || ny<0 || ny >=M) continue;
            if(graph[nx][ny]===0) continue;
            if(graph[nx][ny]===1) {
                graph[nx][ny]= graph[x][y]+1;
                // console.log(queue);
                queue.push([nx, ny])
                // console.log(queue);
            }
        }
       
    }
    console.log(graph[N-1][M-1]);
}

BFS(0,0)