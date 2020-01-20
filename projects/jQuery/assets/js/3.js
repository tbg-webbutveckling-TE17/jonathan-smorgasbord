function isIdentical(myList) {
    for(i = 1; i < myList.length; i++) {
      if(myList[i] != myList[i-1]) {
        return false
      }
    }
    return true
  }
  
  var notIdenticalList = [1,2,4,6,7,8,10,15];
  var identicalList = [5,5,5,5,5,5];
  
  result = isIdentical(notIdenticalList);
  console.log(result);

  function sumArray(array) {
      sum = 0;
      array.forEach(num => {
          sum += num;
      });
      return sum
  }

  console.log(sumArray([3,5,304,7,3,205]));

function max(array) {
    highestNum = 0;
    array.forEach(num => {
        if(num > highestNum) {
            highestNum = num;
        }
    });
    return highestNum;
}

console.log(max([3,5,304,7,3,205]));