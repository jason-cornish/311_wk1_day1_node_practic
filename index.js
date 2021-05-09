const split = (str, delim) => {
  return str.split(delim);

}

const pairs = (str) => {
  // write code for strings.pairs
  let strArray = [];
  for (let i = 0; i < str.length; i+=2) {
    strArray.push(str.slice(i, i+2));
  }
  return strArray;

}

const reverse = (str) => {
  // write code for strings.reverse
  let strWords = str.split('');
  strWords.reverse();
  let strReversed = strWords.join('');
  return strReversed;

  
}

module.exports = {
  split,
  pairs,
  reverse
}