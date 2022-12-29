function solution(operations) {
    const answer=[]
    
    operations.forEach(it=>{
        
        let cmd=it.split(" ");
        if(cmd[0]=='I'){
            answer.push(parseInt(cmd[1]));
        }else{
            if(cmd[1]=='1'){
                answer.pop()
            }else if(cmd[1]='-1'){
                answer.shift()
            }   
        }
        answer.sort(compare)
    })
    
    if(answer.length<1){
        return [0,0];
    }else{
        return [answer.pop(), answer.shift()]    
    }
    
   // a.sort(compare);
  //  console.log(a)
   
}


const compare= (a,b)=>{
    
    if(a>b){
        return 1;
    }else if( a<b){
        return -1;
    }
    
    return 0;
}