function solution(n) {
    var answer = '';
    var tmp=0
   
    while(n>=1){
        tmp=n%3
        answer+=tmp.toString()
        n=(n-tmp)/3
    }
    
    var answer=[...answer]
    answer.reverse().join()
    
    var total=0
    for(let i=answer.length-1; i>=0; i--){
        total+=answer[i]*(1*Math.pow(3,i))
    }
    
    
  
    
    return total;
}