function hash_words(sentence){
    let re = /#[A-Za-z]+/mg;
    let result = sentence.match(re);
    let result_len = result.length;
    for(let i = 0; i < result_len; i++){
      let to_print =result[i].replace("#", "");
      console.log(to_print);
    }
}

hash_words('The symbol # is known #variously in English-speaking #regions as the #number sign')