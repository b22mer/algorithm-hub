function solution(arr) {
    var answer = [];
    if(arr.length==1) return [-1]
    else{
        let min=Math.min.apply(null, arr);
        
        answer=arr.filter(num=>{
            if(min!=num) return num
        })
        return answer
    }
   
}