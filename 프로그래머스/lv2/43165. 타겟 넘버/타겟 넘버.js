function solution(numbers, target) {

    let cnt = 0;
    const dfs = (sum, i)=>{
        
        if(i===numbers.length){
            if(sum===target){
                cnt++;
            }
            
        }else{
            dfs(sum+numbers[i], i+1)
            dfs(sum-numbers[i], i+1)
                        
        }
    }
    dfs(0, 0);
    return cnt
    
}

