function solution(n)
{
    let result = 0;
    let N= n;
    while(N!=0){
        if(N%2==1){
            N=N-1;
            result+=1;
        }else {
            N = N/2;
        }
    }
    
    return result;
    
    
    
    
}