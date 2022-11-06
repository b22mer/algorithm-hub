function solution(phone_number) {
    var answer = '';
    
    let size=phone_number.length
    let src=[...phone_number]
   
    for(let i=0; i<size-4; i++){
        src[i]='*'
    }
     return src.toString().replace(/,/g,"")

}