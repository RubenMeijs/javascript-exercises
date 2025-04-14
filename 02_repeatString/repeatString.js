const repeatString = function (stringToRepeat, numberOfRepetitions) {
  let outputString = "";

  switch (numberOfRepetitions >= 0) {
    case true:
      for (let i = 0; i < numberOfRepetitions; i++) {
        outputString = outputString.concat(stringToRepeat);
      }
      return outputString;
    case false:
        return "ERROR"
  }
};

repeatString("test", 3);
// Do not edit below this line
module.exports = repeatString;
