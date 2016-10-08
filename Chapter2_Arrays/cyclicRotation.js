function solution(A, K) {
  var len = A.length;
  if (len !== 0) {
    for (var i = 0; i < K; i++) {
      var last = A.pop();
      A.unshift(last);
    }
  }
  return A;
}
