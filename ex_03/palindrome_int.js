function isListPalindrom(numbers){
    numbers = numbers.map((x) => x.toString())

    function isPalindrom(str, strLen){
      let to = Math.floor(strLen / 2);
      let isValid = true;
      for(let i = 0; i <= to; i++){
            if(!(str[i] === str[strLen - i - 1])){
              isValid = false;
            }
        }
        return isValid;
    }

    for(let i = 0; i < numbers.length; i++){
      console.log(isPalindrom(numbers[i], numbers[i].length));
    }
}

isListPalindrom([32,2,232,1010])