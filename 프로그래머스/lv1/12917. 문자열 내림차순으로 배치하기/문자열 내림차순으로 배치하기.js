function solution(s) {
    var answer=[...s]
    var result=answer.sort().reverse().toString().replace(/,/gi,"")
    
    return result;
}