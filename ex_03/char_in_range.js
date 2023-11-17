function printAsciiInRange(startSymbol, endSymbol){
  let startNumber = startSymbol.charCodeAt();
  let endNumber = endSymbol.charCodeAt();
  let result = []
  if(startNumber > endNumber){
    let t = startNumber;
    startNumber = endNumber;
    endNumber = t;
  }


  for(let i = startNumber + 1; i < endNumber; i++){
    result.push(String.fromCharCode(i))
  }
  console.log(result.join(" "))
}

printAsciiInRange('C',
'#'
)