function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

var arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(bubbleSort(arr));