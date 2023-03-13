function solution(participants, completions) {

    let arr1 = participants.sort();
    let arr2 = completions.sort();
    
    for(let i =0; i<arr1.length; i++){
        if(arr1[i]!= arr2[i]){
            return arr1[i];
        }
    }
}