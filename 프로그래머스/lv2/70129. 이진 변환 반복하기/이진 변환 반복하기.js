function solution(s) {
 
    s=s.split("")
    let loopCnt=0;
    let numOfdelnum=0

    while(s.length!=1){
    let oneBox=s.filter((it)=> it=='1')
     numOfdelnum+= s.length - oneBox.length;
     s=oneBox.length.toString(2).split("")
     loopCnt++; 
    }
  
    
    
    return ([loopCnt, numOfdelnum]) 

    
}