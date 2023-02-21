function solution(food) {
    let result = [0];
    let foodLength = food.length;
    food= food.reverse();
    console.log(food)
    //arr.unshift('A');
    food.forEach((it, index) =>{
        
        let N= parseInt(it/2);
        const arr = new Array(N);
        arr.fill(foodLength-index-1)
        result = [
            ...arr,
            ...result,
            ...arr
        ]
        
    })
    
return result.join("")
}