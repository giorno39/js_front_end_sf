function nth_elements(elements, step){
    let result = [];
    let elements_len = elements.length;
    for(let i = 0; i < elements_len; i += step){
      result.push(elements[i]);
    }
    return result
}

nth_elements(['1', 
'2',
'3', 
'4', 
'5'], 
6)