function solution(array, height) {
    let cnt=0;
    array.forEach(it=>{
        it>height? cnt++: ""
    })
    
    return cnt
}