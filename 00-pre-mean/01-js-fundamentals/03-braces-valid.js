function bracesValid(str) {
  var brace = [];
  var obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  }

  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      brace.push(str[i]);
    } else {
      var pop = brace.pop();
      if (str[i] !== obj[pop]) {
        return false;
      }
    }
  }
  return true;
}

console.log(bracesValid("{(})"));