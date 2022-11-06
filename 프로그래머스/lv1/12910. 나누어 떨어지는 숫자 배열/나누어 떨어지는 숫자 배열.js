function solution(arr, divisor) {
    var answer = [];
    
    answer=arr.filter(num=>{
        if(num%divisor==0){
            return num
        }
    })
    
    
    
    if (answer.length==0){
        return [-1];
    }else{
        
       
        
         return answer.sort((a,b)=>{
             return a-b;
         })
    }
    
    
    
   
}