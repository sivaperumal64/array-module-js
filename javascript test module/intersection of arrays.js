function arrayIntersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

let arr5 = [1, 2, 3, 4];
let arr6 = [3, 4, 5, 6];
console.log(arrayIntersection(arr5, arr6));
