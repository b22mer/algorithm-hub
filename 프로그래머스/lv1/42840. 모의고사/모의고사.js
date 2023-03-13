function solution(answers) {
    
    let result=[0,0,0];
    let pattern1=[1, 2, 3, 4, 5];
    let pattern2=[2, 1, 2, 3, 2, 4, 2, 5];
    let pattern3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let p1= pattern1.length;
    let p2= pattern2.length;
    let p3= pattern3.length;
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] === pattern1[i%p1]) result[0]++;
        if(answers[i] === pattern2[i%p2]) result[1]++;
        if(answers[i] === pattern3[i%p3]) result[2]++;
    }    
    
    let max = Math.max(...result);
    let answer =[]
    for(let i=0; i<3; i++){
        if(result[i]===max) answer.push(i+1)
    }
    
    
    
    
    console.log(answer.sort((a,b)=>a-b))

    
    
    
    
     return answer;
}