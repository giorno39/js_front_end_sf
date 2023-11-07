function reveal_words(words_to_reveal, sentence){
  words_to_reveal = words_to_reveal.split(", ");
  sentence = sentence.split(" ");

  let lengths = [];
  for(let i = 0; i < words_to_reveal.length; i++){
      lengths.push(words_to_reveal[i].length);
  }

  for(let i = 0; i < sentence.length; i++){
    let word_len = sentence[i].length;
    if(sentence[i] === "*".repeat(word_len) && lengths.includes(word_len)){
      let index = lengths.indexOf(word_len);
      sentence[i] = words_to_reveal[index];
    }
  }
  console.log(sentence.join(" "))

}

reveal_words('great, learning',
'softuni is ***** place for ******** new programming languages'

)