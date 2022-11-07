function solution(price, money, count) {
    var answer = 0;
    
    //3 6 9 12
    for(let i=1; i<=count; i++){
        answer+=price*i    
    }
    
    //console.log(answer)
    
    if(answer<=money) answer=0
    else answer=Math.abs(answer-money)
  
    
    
    return answer;
}