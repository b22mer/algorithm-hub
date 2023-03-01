 const fs = require("fs");
 const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 let input = fs.readFileSync(filePath).toString().split("\n");

let N= Number(input[0])
let square = [];
for(let i= 0 ; i<N; i++){
    square.push(input[i+1].trim().split("").map(Number))
}
// console.log(square);

let visited = new Array(N);
for(let i= 0 ; i<N; i++){
    visited[i]= new Array(N).fill(0);
}

const dx= [1,0,-1, 0]; //우하 좌상
const dy= [0,1,0,-1];
let numOfVillages=0;
let cnt;
let result= [];



const DFS = (x, y)=>{
    
    square[x][y] = 0;
    for(let i=0; i<4; i++){
        let nx = x+dx[i];
        let ny = y+dy[i];
        if(nx<0 || ny<0 || nx>=N || ny>=N) continue;
        if(square[nx][ny]===0) continue;
        DFS(nx,ny);
        cnt++;
    }
}

for(let i=0; i<N; i++){
    for(let j=0;j<N; j++){
        if(square[i][j]===0 ) continue;
        numOfVillages++;
        cnt=1;
        DFS(i,j);
        result.push(cnt);
    }
}

result.sort((a,b)=> a-b);
result.unshift(numOfVillages);

result.forEach((it)=>{
    console.log(it);
})