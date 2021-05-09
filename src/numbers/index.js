const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }

}

const sum = (arr) => {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

}

const comboSum = (arr, sum) => {
  
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {

      if ( arr[x] + arr[y] == sum) {
        return true;
      } else {
        return false;
      }

    }
  }

}

module.exports = {
  isEven,
  sum,
  comboSum
}