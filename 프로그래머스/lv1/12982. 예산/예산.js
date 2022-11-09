function solution(d, budget) {
    var answer = 0;
    var total=0;

   
    d.sort((a,b)=>{
        return a-b;
    })
  

    for(let i=0; i<d.length; i++){
      
        if(total+d[i]<=budget){
            total+=d[i];
            answer++;
        }else{
            break;
        }
        
  
        
    }
    console.log(answer)
    return answer;
}