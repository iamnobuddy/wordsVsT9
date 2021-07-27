function wordsVsT9(phoneNum, strArr) {
  let output = [];
  strArr.forEach((element) => {
    if (checkValidity(element, generateTestSet(phoneNum))) output.push(element);
  });

  if (output != "") return output;
  else console.log("No match found!!");
}

function generateTestSet(phoneNum) {
  let testSet = [];
  let numpad = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let phoneNumArr = [...new Set(phoneNum.toString().split(""))];
  let len = phoneNumArr.length;
  for (i = 0; i < len; i++) {
    currentDigit = phoneNumArr[i];
    testSet.push(numpad[currentDigit]);
  }

  return testSet;
}

function checkValidity(targetString, testSet) {
  let compareStr = "";
  let indexAt = [];

  let len1 = testSet.length;
  let len2 = targetString.length;
  for (i = 0; i < len1; i++) {
    for (j = 0; j < len2; j++) {
      if (contains.call(testSet[i], targetString.charAt(j))) {
        compareStr = compareStr.concat(targetString.charAt(j));
        indexAt.push(i);
      }
    }
  }

  if (indexAt.length === targetString.length && compareStr === targetString) {
    if (isSorted(indexAt)) return true;
    else return false;
  } else return false;
}

var contains = function (string) {
  // Per spec, the way to identify NaN is that it is not equal to itself
  var findNaN = string !== string;
  var indexOf;

  if (!findNaN && typeof Array.prototype.indexOf === "function") {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function (string) {
      var i = -1,
        index = -1;

      for (i = 0; i < this.length; i++) {
        var item = this[i];

        if ((findNaN && item !== item) || item === string) {
          index = i;
          break;
        }
      }

      return index;
    };
  }

  return indexOf.call(this, string) > -1;
};

function isSorted(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}
