function solution(A) {
  var P = 1;
  var partOne = A[0];
  var partTwo = A.slice(P).reduce((pre, suc) => {
    return pre + suc;
  });
  var minDiff = Math.abs(partOne - partTwo);
  for (i = 1; i < A.length - 1; i++) {
    partOne += A[i];
    partTwo -= A[i];
    var currentDiff = Math.abs(partOne - partTwo);
    if (currentDiff < minDiff) {
      minDiff = currentDiff;
    }
  }
  return minDiff;
}

console.log(solution([3, 1, 2, 4, 3]));