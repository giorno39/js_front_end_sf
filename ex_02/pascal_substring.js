function pascal_substring(sentence){
    let re = /[A-Z][a-z]*/mg;
    let result = sentence.match(re);
    console.log(result.join(", "));
}

pascal_substring('ThisIsSoAnnoyingToDo')