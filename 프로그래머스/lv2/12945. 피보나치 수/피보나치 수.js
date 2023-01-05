function solution(n) {
   
    
    let f1=0;
    let f2=1;
    let f3;
    
    for(let i=0; i<n-1; i++){
        f3=(f1+f2)%1234567; 
        f1=f2;
        f2=f3;
    }
    
    
    
    return f3;
}

