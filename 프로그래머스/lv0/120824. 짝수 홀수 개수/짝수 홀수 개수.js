function solution(num_list) {
    let list = [0,0]
    num_list.forEach(it=>{
      if(it%2===0){
            list[0]++;
        }else if(it%2===1){
            list[1]++;
        }
    })
   return  list;
}