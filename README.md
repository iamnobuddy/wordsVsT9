# wordsVsT9

**...NO ALGORITHMS WE'RE HARMED IN THE PROCESS**



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
  

1. _**'testSet'**_ is the Global array that contains string items that matches each of the **user entered number** to the 'numpad' Object.

2. The _**'numpad'**_ Object does not contain the **key** '1' as T9 keyboards don't have letters on the keyPad 1.
    For. e.g if you typed '123' the 'testSet' will contain [].
		
3. _**generateTestSet()**_  populates _**'testSet'**_ with values as mentioned above.

4.	_**checkValidity()**_ is called by _**generateTestSet()**_ and it returns true if the word matches and flase otherwise.

 


