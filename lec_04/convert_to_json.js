function jsObjectToJSON(name, lastName, hairColor) {
  let toCreateObj = {
    name,
    lastName,
    hairColor,
  };

  let jsonRepresentation = JSON.stringify(toCreateObj);
  console.log(jsonRepresentation);
}

jsObjectToJSON("George", "Jones", "Brown");
