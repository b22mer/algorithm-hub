function solution(s) {
    var answer = 0;
    var num=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    var str=s;
    
    for(let i=0; i<num.length; i++){
       str=replaceAll(str,num[i],i.toString())
    }
    
    answer=Number(str)
    
    return answer;
}

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}