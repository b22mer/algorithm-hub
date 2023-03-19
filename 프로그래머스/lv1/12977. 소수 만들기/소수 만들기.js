function solution(nums) {

    let comb=new Array(3).fill(0);
    let answer=0;
    let result= getCombinations(nums, 3);
    const reducer = (accumulator, curr) => accumulator + curr;
    let cnt;
    for(let i=0; i<result.length; i++){
        let val =result[i].reduce(reducer);
        cnt=0;
        for(let i=1; i<=Math.floor(val/2); i++){
            
            if(val%i===0) cnt++;
        }
        
        if(cnt<2){
            answer++;
        }
    }   
    
    return (answer)
    
    
    
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); 

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const combinations = getCombinations(rest, selectNumber - 1); 
    const attached = combinations.map((combination) => [fixed, ...combination]);
    
    results.push(...attached); 
  });

  return results; 
};