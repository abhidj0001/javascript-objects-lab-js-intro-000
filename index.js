var recipes=new Object();

function updateOjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateOjectWithKeyAndValue(object,key,value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object,key) {
  var newObj = Object.assign({},object)
  delete newObj[key];
  return newObj;
}

function destructivelyDeletefromObjectByKey(object,key) {
  delete object[key];
  return object;
}
