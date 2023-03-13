function solution(n) {
  // 2부터 n까지의 모든 수에 대해 소수 판별을 위한 배열 생성
  let sieve = new Array(n+1).fill(true);
  // 에라토스테네스의 체 알고리즘 수행
  let m = Math.floor(Math.sqrt(n)); // n의 제곱근까지만 계산하면 됨
  for (let i = 2; i <= m; i++) {
    if (sieve[i] == true) { // i가 소수인 경우
      for (let j = i+i; j <= n; j += i) { // i의 배수들을 false 판정
        sieve[j] = false;
      }
    }
  }
  // 소수의 개수 카운트
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (sieve[i] == true) {
      count++;
    }
  }
  return count;
    
}