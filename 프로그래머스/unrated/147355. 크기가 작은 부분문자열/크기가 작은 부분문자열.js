function solution(t, p) {
    let result= 0;
    const baseLength = t.length- p.length;
    for(let i = 0; i<=baseLength; i++){
        let baseValue= t.slice(i, p.length+i);
        if (baseValue <= p) result++;
        
        console.log(baseValue)
    }
    return result
}