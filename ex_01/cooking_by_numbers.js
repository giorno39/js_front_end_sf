function cooking(num, op1, op2, op3, op4,op5, op6){
    let to_be_cooked = Number(num);
    let result = 0;
    let operations = [op1, op2, op3, op4, op5, op6];
    for(let i = 0;i < operations.length; i++){
      switch (operations[i]){
        case 'chop':
          result = to_be_cooked / 2;
          to_be_cooked = result;
          console.log(result);
          break;
        case 'dice':
          result = Math.sqrt(to_be_cooked)
          to_be_cooked = result;
          console.log(result);
          break;
        case 'spice':
          result = to_be_cooked + 1;
          to_be_cooked = result;
          console.log(result); 
          break;
        case 'bake':
          result = to_be_cooked * 3;
          to_be_cooked = result;
          console.log(result);
          break;
        case 'fillet':
          result = to_be_cooked * 0.8;
          to_be_cooked = result;
          console.log(result.toFixed(1));
          break;
      }
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
