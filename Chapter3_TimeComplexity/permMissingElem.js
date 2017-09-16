function solution(A) {
  var len = A.length;
  var lim = len + 1;

  /* Edge Case 0 */
  if (!A || len === 0) {
    return 1;
  }
  /* Edge Case 0 */

  var sumArr = A.reduce((p, s) => { return p + s; });
  var count = (lim * (lim + 1)) / 2;

  return count - sumArr;

}

console.log(solution([2, 3, 1, 5]));