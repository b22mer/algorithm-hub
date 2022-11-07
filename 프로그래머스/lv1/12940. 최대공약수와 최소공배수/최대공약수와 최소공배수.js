function solution(n, m) {
    var answer = [];
    var max=0;
    var min=0;
    var num= n>m? n:m;
        // 최대 공약수
        for(let i=1; i<=num; i++){
            if(n%i==0 && m%i==0){
              max=i;  
            }
        }
    
    min=n*m/max
    return [max,min]
}
