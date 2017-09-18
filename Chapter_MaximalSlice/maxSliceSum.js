function solution(A) {
  var N = A.length;
  var maxEnding = A[0];
  var maxSlice = A[0];
  for (var i = 1; i < N; i++) {
    maxEnding = Math.max(A[i], (maxEnding + A[i]));
    maxSlice = Math.max(maxSlice, maxEnding);
  }
  return maxSlice;
}

var test = [3, 2, -6, 4, 0];
console.log(solution(test));