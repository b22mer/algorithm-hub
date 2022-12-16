function solution(array, commands) {
    
    let answer=[]
    
    commands.forEach((it)=>{
        let newArr=array.slice(it[0]-1,it[1]).sort(compare)
       // console.log(newArr)
       // console.log(newArr[it[2]-1])
        answer.push(newArr[it[2]-1]);
    })
    
    

    return answer;
}

const compare= (a,b) =>{
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }
    
    return 0;
}