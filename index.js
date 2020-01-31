function BinarySearch(inputArray, value) {
  var min = 0;
  var max = inputArray.length - 1;
  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
    if (value === inputArray[mid])
      return ++mid //returns postion of value if found
    else if (value > inputArray[mid])
      min = mid + 1;
    else
      max = mid - 1;
  }
  return `nil` // value not found
}

let arr = [4, 16, 23, 54, 76, 102];
console.log(BinarySearch(arr, 4));