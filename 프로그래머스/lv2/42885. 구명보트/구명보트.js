function solution(people, limit) {
    people.sort((a,b)=>{
        if( a>b){
            return -1;    
        }else if (a<b){
            return 1
        }
        return 0;
    })
    
    let cnt=0;
    let front=0;
    let back=people.length-1;
    
    while(1) {
          
        if(back-front==1){
            if(people[front] + people[back]<=limit){
                cnt+=1
            }else if(people[front] + people[back]>limit){
                cnt+=2
            }
            break;
        }else if(back-front==0){
            cnt+=1;
            break;
        }
        
        if(people[front] + people[back]<=limit){
            back-=1
            front+=1
            cnt+=1
        }else if(people[front] + people[back]>limit){
            cnt+=1
            front+=1
        }
        
 
        
    }
 
    return cnt;
}