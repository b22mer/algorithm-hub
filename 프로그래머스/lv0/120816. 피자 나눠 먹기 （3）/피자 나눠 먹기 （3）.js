function solution(slice, n) {
  let cnt=1
    while(true) {
        if(cnt*slice / n <1){
            cnt+=1;
            continue;
        }else{
            return cnt;
        }
        
        
  }
    
}