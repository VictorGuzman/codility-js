/* O(n) with Sum Prefixes */
function quadMaxSlice(A) {
  var N = A.length;
  var P = prefixSums(A);
  var result = 0;
  for (var p = 0; p < N; p++) {
    for (var q = p; q < N; q++) {
      console.log(p, q);
      var sum = P[q + 1] - P[p];
      result = Math.max(result, sum);
    }
  }
  return result;
}

/* Golden O(n) */
function goldenMaxSlice(A) {
  var N = A.length;
  var maxEnding = 0;
  var maxSlice = 0;
  for (var i = 0; i < N; i++) {
    maxEnding = Math.max(0, maxEnding + A[i]);
    maxSlice = Math.max(maxSlice, maxEnding);
  }
  return maxSlice;
}

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

/* Test Results */
var test = [5, -7, 3, 5, -2, 4, 1];
console.log(goldenMaxSlice(test));
