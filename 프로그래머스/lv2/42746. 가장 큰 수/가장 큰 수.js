function solution(numbers) {

    numbers.sort((a,b)=> b-a);
     
    numbers.sort((a,b)=>Number(Number(b.toString().charAt(0))-a.toString().charAt(0)))
    const setArr= numbers.map(it => it.toString())
console.log(setArr)
    
    setArr.sort((a,b)=>{
       return (b+a)-(a+b)
    })
    
     return setArr.join("")[0] == "0" ? "0" : setArr.join("");
 

}