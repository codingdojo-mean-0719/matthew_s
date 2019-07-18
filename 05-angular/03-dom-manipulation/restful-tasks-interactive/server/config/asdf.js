var maxProfit = function (prices) {
  let min = [prices[0], 0];
  let max = [prices[1], 1];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > max) {
      max = [prices[i], i];
    }
    if (prices[i] < min) {
      min = [prices[i], i];
    }
  }
  return min, max;
};

var arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));