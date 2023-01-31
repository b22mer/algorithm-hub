function solution(numbers) {

    const answer= [];
    for (let i = 0; i<numbers.length-1; i++){
        for (let j = i+1; j<numbers.length; j++){

            const addItem= numbers[i] + numbers[j];
            if(answer.includes(addItem)){
                continue;
            }else{
                answer.push(addItem);
            }
            
        }
    }
    
    // console.log(answer.sort((a,b) => a -b))

    return answer.sort((a,b) => a -b);
}