var _ = {
  map: function (array, callback) {
    for (let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]);
    }
  },
  reduce: function (array, callback, memo) {
    let iterator = 0;
    if (!memo) {
      memo = array[0];
      iterator = 1;
    }
    for (let i = 0; i < array.length; i++) {
      memo = callback(array[i], memo);
    }
    return memo;
  },
  find: function (array, callback) {
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i]) === true) {
        return array[i];
      }
    }
  },
  filter: function (array, callback) {
    var temp = [];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        temp.push(array[i]);
      }
    }
    return temp;
  },
  reject: function (array, callback) {
    var temp = [];
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        temp.push(array[i]);
      }
    }
    return temp;
  }
}



var array = [8, 9, 2];
_.map(array, function callback(x) { return x * 5; });
console.log(array);
console.log(_.reduce(array, function callback(x, memo) { return x + memo; }));
console.log(_.find(array, function callback(x) { return x === 45; }));
console.log(_.filter(array, function (x) { return x > 40; }));