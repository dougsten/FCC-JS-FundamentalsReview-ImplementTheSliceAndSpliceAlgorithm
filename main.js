const frankenSplice = (array1,array2,index) => {
  let newArr = array2.slice() //?
  newArr.splice(index,0,...array1) //?
  return newArr 
  } ;
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));