const removeFromArray = function (inputArray, ...elementsToRemove) {
  let indicesToKeep = Array(inputArray.length).fill(true);

  for (let element of elementsToRemove) {
    for (let index = 0; index < inputArray.length; index++) {
      if (inputArray[index] === element) {
        indicesToKeep[index] = false;
      }
    }
  }

  let outputArray = [];

  for (let index = 0; index < indicesToKeep.length; index++) {
    if (indicesToKeep[index]){
        outputArray.push(inputArray[index])
    }
  }
  console.log(outputArray)
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
