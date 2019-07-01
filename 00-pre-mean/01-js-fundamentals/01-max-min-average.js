function maxMinAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return "The minimum is: " + min + ", the maximum is " + max + ", and the average is " + sum / arr.length;
}

console.log(maxMinAvg([1, -2, 9, 4]));