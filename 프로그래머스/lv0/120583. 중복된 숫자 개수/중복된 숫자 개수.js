function solution(array, n) {
    let cnt =0;
    
    array.forEach(it=>{
        if(it===n) cnt++;
    })
    
    return cnt;
    
}