function solution(num) {
    var answer = 0;
    
    let cnt=0;
    while(num!=1){
        
        // 짝수라면
        if(num%2==0){
            num=num/2
            cnt++
        }else {
            num=num*3+1
            cnt++
        }
        
        if(cnt==500){
            answer=-1
            return answer
        }
    }
    answer=cnt
    
    return answer;
}