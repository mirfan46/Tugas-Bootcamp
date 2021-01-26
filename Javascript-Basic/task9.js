const array = [11, 5, 6, 19, 53, 82, 12, 54, 44, 15];

function arrayDuaDimensi(arr) {
  let newArr = [];

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr.slice(i, i + 2));
  }

  return newArr;
}

console.log(arrayDuaDimensi(array));
