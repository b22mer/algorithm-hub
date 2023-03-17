function solution(s1, s2) {
  
    let result =s1.length+ s2.length;
    let newarr= [...new Set([...s1,...s2])].length;
    return result-newarr
    
    
    
}