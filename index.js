var recipes = {key:'value'}

function updateObjectWithKeyAndValue(object, key, value){
  return `)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey (object, key){
  delete object[key];
  return object
}



