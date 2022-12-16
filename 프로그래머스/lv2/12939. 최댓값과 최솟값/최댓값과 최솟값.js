function solution(s) {
    var answer = s.split(" ");
    
    let max=-100000
    let min=100000
    
    for(let i=0; i<answer.length; i++){
       max=Math.max(max,Number(answer[i]));
       min=min>Number(answer[i]) ? Number(answer[i]) : min;
    }
    
    
    let result=min + " " + max;
    return result;
    
    
    
    
}