function censor_words(sentence, word_to_censor){
  let censored_len = word_to_censor.length; 
  let censored = "*".repeat(censored_len);
  while(sentence.includes(word_to_censor)){
    sentence = sentence.replace(word_to_censor, censored)
  }
  
  console.log(sentence)
}

censor_words('A small sentence with some small words', 'small')