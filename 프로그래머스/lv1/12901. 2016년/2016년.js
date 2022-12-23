function solution(a, b) {
    var days=["THU","FRI","SAT","SUN","MON","TUE","WED"];
    var months = [31,29,31,30,31,30, 31,31,30,31,30,31];
    var totalDays=0
    for(let i=0; i<a-1; i++){
        totalDays+=months[i];
    }
    totalDays= totalDays+b
    var answer= days[totalDays%7]
    return answer;
}