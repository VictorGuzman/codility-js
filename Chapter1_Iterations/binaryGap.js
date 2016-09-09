function solution(N) {
  var binStr = (N >>> 0).toString(2);
  var binArr = binStr.split('');
  var currentZCount, maxZcount = 0;
  for (var i = 0; i < binArr.length; i++) {
    if (binArr[i] === "0") {
      currentZCount++;
    }
    else {
      if (currentZCount > maxZcount) {
        maxZcount = currentZCount;
      }
      currentZCount = 0;
    }
  }
  return maxZcount;
}
