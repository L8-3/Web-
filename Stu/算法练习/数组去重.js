var arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];
function unique1(arr) {
  var hash = [];
  for (var i = 0; i < arr.length; i++) {
    if (hash.indexOf(arr[i]) == -1) {
      hash.push(arr[i]);
    }
  }
  return hash;
}
