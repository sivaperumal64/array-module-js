function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

let arr1 = [1, 2, 3, 4, 5];
console.log(sumArray(arr1));
