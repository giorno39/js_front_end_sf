function sort_nums(nums){
    nums.sort((a, b) => {
      return a - b;
    })

    let nums_size = nums.length;
    let result = [];

    for(let i = 0; i < nums_size; i++){
      let to_add;
      if(i % 2 == 0){
          to_add = nums.shift();
      }else{
        to_add = nums.pop();
      }
      result.push(to_add);
    }

    return result;
}


sort_nums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);