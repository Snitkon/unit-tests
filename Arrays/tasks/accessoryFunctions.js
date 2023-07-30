function slice(arr, start, end) {
    const newArray = []
    for(let i = start; i < end; i++) {
        newArray[i - start] = arr[i]
    }
    return newArray
}

function comparison(first_object, second_object) {
  const firstProps = Object.getOwnPropertyNames(first_object).sort();
  const secondProps = Object.getOwnPropertyNames(second_object).sort();
  let length

  if (firstProps.length > secondProps.length) {
    length = secondProps.length
  } else {
    length = firstProps.length
  } 

  for (let i = 0; i < length; ++i) {
    const item = firstProps[i];
    const both_objects = typeof first_object[item] === 'object' && typeof second_object[item] === 'object';

    if ((!both_objects && first_object[item] !== second_object[item])
      || (both_objects && !comparison(first_object[item], second_object[item]))) {
      return false;
    }
  }

  return true;
}
  
module.exports = {slice, comparison}
