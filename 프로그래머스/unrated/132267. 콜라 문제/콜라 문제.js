function solution(a, b, n) {
   
    let earnBottle = 0;
    let answer= 0 ;
    let totalEmptyBottle = n;
    let hereBottle= a;
    let recieveBottle= b;
    //    while (inputCola >= a) {
    //     nowGetCola = parseInt(inputCola / a) * b
    //     totalGetCola += nowGetCola
    //     inputCola = nowGetCola + inputCola % a
    // }
    while(totalEmptyBottle>=hereBottle){
        
        earnBottle= parseInt(totalEmptyBottle / hereBottle) * recieveBottle;
        answer+= earnBottle;
        totalEmptyBottle = earnBottle + totalEmptyBottle % hereBottle
        
    }
    
    // console.log(earnBottle)
    return  answer;
}