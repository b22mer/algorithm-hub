function solution(n) {
    n=n.toString()
    let test=[...n]
    
    
    
    
    var answer= Number(test.sort().reverse().toString().replace(/,/g, ""))
    return answer;
}