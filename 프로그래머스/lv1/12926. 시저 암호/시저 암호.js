function solution(s, n) {
    var answer = [];
    
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
            if(s.charCodeAt(i)+n>90) answer.push(String.fromCharCode(65+(s.charCodeAt(i)+n)%91));
            else answer.push(String.fromCharCode(s.charCodeAt(i)+n));
        }else if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
             if(s.charCodeAt(i)+n>122) answer.push(String.fromCharCode(97+(s.charCodeAt(i)+n)%123));
            else answer.push(String.fromCharCode(s.charCodeAt(i)+n));
        }else{
           answer.push(String.fromCharCode(s.charCodeAt(i)));
        }
    }
    
    let result=answer.toString();
    result=result.replace(/,/g,"")
    //console.log(result)
   
    
    
    
    
    return result;
}