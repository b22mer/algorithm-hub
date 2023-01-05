function solution(n) {
    
    var origin = n.toString(2).split("");
    var zeroCnt= 0;
    var chkCnt=0;
    origin.forEach(it=>{
        if (it=='1') zeroCnt++;
    })
    
    while(zeroCnt!=chkCnt){
        n=n+1;
        chkCnt=0;
        var fake=n.toString(2).split("");
        fake.forEach(it=>{
        if(it=='1') chkCnt++;
         })
    }
    
    return n;
}

