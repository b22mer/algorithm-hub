function solution(s) {
   
 const arr = s.split('')
  const obj = {}
  const answer = [];
  arr.filter((e,i)=>arr.indexOf(e) === i).forEach(e=> obj[e] = -2)
  arr.forEach((e,i)=>{
    if(obj[e] === -2) {
      answer.push(-1)
    } else {
      answer.push(i - obj[e])
    }
    obj[e] = i

  })
  return answer
}