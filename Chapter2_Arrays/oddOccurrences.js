function solution(A) {
  var len = A.length;
  if (len === 1) {
    return A[0];
  }
  A.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < len-1; i+=2) {
    if (A[i] != A[i + 1]) {
      return A[i];
    }
  }
  return A[len - 1];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));