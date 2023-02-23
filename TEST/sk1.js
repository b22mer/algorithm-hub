let input = ["09:05 10", "12:20 5", "13:25 6", "14:24 5"];
let input1 = ["12:00 10"];
let input2 = ["12:00 10"];

let current_time ="12:00";
let current_hour = Number(current_time.split(":")[0]);
let current_minute = Number(current_time.split(":")[1]);


let k=11;
let result=0;

for(it of input2){
    if(k<=0) break;
    let schedule = it.split(" ");
    let time = schedule[0].split(":");
    let hour = Number(time[0]);
    let minute = Number(time[1]);
    let sell = Number(schedule[1]);
    if(current_hour>hour){
        continue;
    }else if(current_hour<hour){
        k-=sell;
        result+= (hour * 60 + minute) - (current_hour*60 + current_minute);
        current_hour =hour;
        current_minute= minute;
    }else if(current_hour==hour && current_minute<minute){
        k-=sell;
        result+=minute-current_minute;
        current_hour =hour;
        current_minute= minute;
    }else if(current_hour==hour && current_minute==minute){
        k-=sell;
    }
}

if(k>0) result = -1;
console.log(result);
