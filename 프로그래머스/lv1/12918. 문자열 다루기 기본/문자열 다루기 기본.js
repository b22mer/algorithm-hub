function solution(s) {
    
    
    
  
    var answer = true;
    if(s.length!=4 && s.length!=6){
        return false;
    }
    for(let i=0; i<s.length; i++){
        // if(s.charAt(i))
        if(48>s.charCodeAt(i)||57<s.charCodeAt(i)){
            answer=false;
        }
        
    }

    return answer
}