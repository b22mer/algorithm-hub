function solution(s) {
    const arr=s.split(" ");
    let answer=''
    let answerArr=[]
    arr.forEach((it)=>{
        let answer=''
        for(let i=0; i<it.length; i++){
            if(i==0){
                answer+=it[i].toUpperCase();
            }else{
                answer+=it[i].toLowerCase();
            }
        }
        answerArr.push(answer);
    })
    answer=answerArr.join(" ")
  
    
    
    
    return answer;
}