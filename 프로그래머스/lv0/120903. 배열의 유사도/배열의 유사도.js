function solution(s1, s2) {
  
    let cnt=0;
    s1.length>= s2.length ? s1.forEach(it=>{
        
        if(s2.includes(it)) cnt++;
        
        
    }): s2.forEach(it=>{
          if(s1.includes(it)) cnt++;
    })
    
    return cnt;
}