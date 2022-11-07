function solution(s) {
    var answer = '';
    var list=s.split(" ")
    for(let i=0; i<list.length; i++){
        for(let j=0; j<list[i].length; j++){
            
            // 홀수라면
            if(j%2==0){
                
                answer+=list[i].charAt(j).toUpperCase();
                
            // 짝수라면
            }else{
                answer+=list[i].charAt(j).toLowerCase();
            }
                
            }
        if(i<list.length-1){
            answer+=" "
        }
        
        }
    return answer;
    }
    
