function solution(s)
{
    s=s.split("");
    let stack=[s.shift()]
    
    // console.log(stack)
    // console.log(s)
    
    s.forEach(it=>{
    if(stack.length!=0 && stack[stack.length-1]==it){
        stack.pop()
    }else if(stack[stack.length-1]!=it){
        stack.push(it)
    }
    })
    
    let answer= stack.length==0? 1: 0;
    return answer;
}