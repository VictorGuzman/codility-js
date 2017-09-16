function solution(X, Y, D) {
  var dist = (Y - X);
  var jmps = (dist / D)
  return Math.floor(jmps + ((dist % D > 0) ? 1 : 0));
}

console.log(solution(10, 85, 30));
