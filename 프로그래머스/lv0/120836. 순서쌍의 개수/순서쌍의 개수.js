function solution(n) {

    if(n===1) return 1;
    
    let cnt=1;
    for(let i=1; i<=Math.floor(n/2); i++){
       if(n%i===0) cnt++;
    }
    
    return cnt;
    
}