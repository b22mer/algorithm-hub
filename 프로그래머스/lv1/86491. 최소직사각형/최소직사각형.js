function solution(sizes) {
    var answer = sizes.map((it)=>{
        if(it[0]<it[1]) return [it[1],it[0]]
        else return [it[0],it[1]]
    })
    
    let gmax=-1;
    let smax=-1;
    answer.forEach((it)=>{
        smax=Math.max(it[1],smax);
        gmax=Math.max(it[0],gmax);
    })
    
//console.log(smax*gmax)
    
    let result=smax*gmax
    return result
}

