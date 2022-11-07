function solution(left, right) {
    var answer = 0;
    var total=0
        
    for(let i=left; i<=right; i++){  
    var cnt=0
        for(let j=i; j>=1; j--){
            if(i%j==0){
                cnt++;
                
            }
        }
        console.log(cnt)
        
        if(cnt%2==1){
            total-=i
        }else{
            total+=i
        }
        
    }
    answer=total;
    return answer;
}