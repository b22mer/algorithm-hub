function solution(A,B){
    A=A.sort(compare)
    B=B.sort(compare)
    return result(A,B)
}

const result= (a,b)=>{
    let answer=0
    for(let i=0; i<a.length; i++) answer+=a[i]*b[a.length-1-i];
    return answer;
}

const compare=(a,b)=>{
    if(a>b) return 1;
    else if(a<b) return -1;
    return 0;
}