function prefixSums(A) {
  var N = A.length;
  P = new Array(N + 1).join('0').split('').map(parseFloat);
  for (var k = 1; k <= N; k++){
    P[k] = P[k - 1] + A[k - 1];
  }
  return P;
}

function countSliceTotal(P, x, y){
  return P[y + 1] - P[x];
}

var test = [1, 2, 3, 4, 5, 6]
console.log(prefixSums(test));
console.log(countSliceTotal(prefixSums(test), 0, 2));