function solution(my_string, n) {
 let answer=''
 my_string.split("").forEach(it=> {
     
     for(let i =0; i<n; i++){
     answer+=it;    
     }
 })
    
    return answer;
    
}