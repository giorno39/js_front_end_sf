function arr_rotation(numbers, rotations){
    let n_len = numbers.length;
    rotations = rotations % n_len;
    for(let i =0; i < rotations; i++){
      let c_num = numbers.shift()
      numbers.push(c_num);
    }
    console.log(numbers.join(" "));
}

arr_rotation([2, 4, 15, 31], 5);