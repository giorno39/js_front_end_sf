function substring(substring, sentence){
    substring = substring.toLowerCase(); 
    sentence = sentence.toLowerCase().split(" ");
    let result = `${substring} not found!`
    for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === substring){
      result = substring;
      break;
    }
  }
  console.log(result);
}

substring('python',
'JavaScript is the best programming language'


)