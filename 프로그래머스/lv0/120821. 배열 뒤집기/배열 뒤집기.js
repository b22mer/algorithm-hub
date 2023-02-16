function solution(num_list) {
    var answer = []
    var len = num_list.length;
    for(let i =0; i<len; i++){
        answer.push(num_list.pop())
    }
    return answer
    
}