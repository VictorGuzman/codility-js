function solution(A) {
  var N = A.length;
  var sumN = (N * (N + 1)) / 2;
  var countArr = new Array(N);
  var sumA = 0;
  for (var i = 0; i < N; i++) {
    if (A[i] < 1 || A[i] > N) {
      return 0;
    }
    else if (countArr[i - 1] === 1) {
      return 0;
    }
    else {
      sumA += A[i];
      countArr[i - 1] = 1;
    }
  }
  return ((sumN - sumA) === 0) ? 1 : 0;
}

console.log(solution([4, 1, 3]));