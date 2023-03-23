function solution(my_string, letter) {
    return my_string.split("").filter(it=>it!==letter).join("")
}