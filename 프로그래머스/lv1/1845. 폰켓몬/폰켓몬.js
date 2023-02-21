function solution(nums) {
    const numlength=parseInt(nums.length/2);
    const newArrLength = nums.filter((element, index) => nums.indexOf(element) === index).length;
    if(numlength>newArrLength){
        return newArrLength;
    }else return numlength
}