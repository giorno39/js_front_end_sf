function count_words(sentence, special_word){
    let sentence_words = sentence.split(" ")
    let sentence_len = sentence_words.length;
    let result = 0;
    for(let i = 0; i < sentence_len; i++){
      if(sentence_words[i] === special_word){
        result+= 1
      }
    }
    console.log(result);
}

count_words('softuni is great place for learning new programming languages',
'softuni'

)