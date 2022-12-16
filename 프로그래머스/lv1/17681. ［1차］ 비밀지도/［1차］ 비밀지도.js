function solution(n, arr1, arr2) {
    
    let answer=[]
    let newArr1=arr1.map((it)=>{
        return it.toString(2).padStart(n,'0')
    })
    
    let newArr2=arr2.map((it)=>{
        return it.toString(2).padStart(n,'0')
    })
    
    return chkFunc(newArr1,newArr2,n,answer)

}
const chkFunc=((Arr1,Arr2,N,answer)=>{
    for(let i=0; i<N; i++){
        let result=""
        for(let j=0; j<N; j++){
    
            if(Arr1[i][j]=='1'|| Arr2[i][j]=='1'){
                result+='#';        
            }else{
                 result+=' ';   
            }
        }
        answer.push(result)
    }
    return answer;
})