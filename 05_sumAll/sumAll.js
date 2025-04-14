const sumAll = function (firstInteger, secondInteger) {
  if (
    Number.isInteger(firstInteger) &
    Number.isInteger(secondInteger) &
    (firstInteger >= 0) &
    (secondInteger >= 0)
  ) {
    let startValue = Math.min(firstInteger, secondInteger);
    let endValue = Math.max(firstInteger, secondInteger);

    let sumOfAllValues = 0;
    for (let number = startValue; number <= endValue; number++) {
      sumOfAllValues += number;
    }
    return sumOfAllValues;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
