function solution(N, stages) {
    
    let arr = {};
//     for(let i=0; i<stages.length; i++){
//         let cnt=0;
//         let beforeLen=stages.length;
//         stages.forEech(it => i+1 ===it ? cnt+=1 : "" )
        
//         arr.push({i+1: cnt/beforeLen});
        
        
//     }
    stages.sort((a,b)=> a-b);
    let i=1;
    while(i<=N){
        let beforeLen= stages.length;
        stages=stages.filter(it=> it!==i);
        arr[i]= (beforeLen-stages.length)/beforeLen;
        i++;
    }
    
    
   const sortedObj = Object.entries(arr).sort((a,b) => b[1]-a[1]);
  let answer=[]
  sortedObj.forEach(it=> answer.push(Number(it[0])));
 return answer;
    
    
}