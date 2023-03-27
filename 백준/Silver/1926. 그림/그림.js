const fs=require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); 

const [N, M] = input.shift().split(" ").map(Number);
let graph = input.map(it=> it.trim().split(" "))

let visited = Array.from({length:N}, ()=> Array(M).fill(false));
// console.log(visited);
let dx = [0, 1,-1,0] // 우하상좌
let dy = [1,0,0,-1] //우하상좌
let cnt = 0;
let maximum = -1;

const bfs= (i, j)=>{
    let position =[];
    position.push([i,j]);
    let max= 0;
    while(position.length!==0){
        let [x,y]=position.shift();
        max+=1;
        for(let i =0 ; i<4; i++){
            let nx = x+ dx[i];
            let ny = y+ dy[i];
            if(nx<0 || ny<0 || nx>=N || ny>=M)continue;
            if(visited[nx][ny]) continue;
            if(graph[nx][ny]==="1"){
                position.push([nx,ny]);
                visited[nx][ny]=true;
              
            }
           
          
        }
    }
    
    return max;
}



for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if(graph[i][j]==='1' && !visited[i][j]){
            visited[i][j]=true;
            let recieve=bfs(i,j);
            cnt++;

   
            if(maximum<recieve) maximum=recieve;
        }
    
    }
}

console.log(cnt);
console.log(maximum===-1? 0: maximum);

