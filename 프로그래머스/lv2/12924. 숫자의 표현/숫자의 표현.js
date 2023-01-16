function solution(n) {
    var answer = 0;
    var result = 0;
    for (let i=1; i<=n/2; i++){
         answer=0;
        for(let j=i; j<=(n/2)+1; j++){
            answer+=j  
            if(answer==n){
                result+=1;
                break;
            }else if(answer>n){
                break;
            }
            
        } 
    }
  
    return result+1;
}