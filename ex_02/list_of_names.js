function sorting_string_arr(strings){
    strings.sort((a, b) =>{
        return a.localeCompare(b);
    });
    let strings_len = strings.length;
    for(let i = 0; i < strings_len; i++ ){
      console.log(`${i + 1}.${strings[i]}`);
    }
}

sorting_string_arr(["John", "Bob", "Christina", "Ema"])