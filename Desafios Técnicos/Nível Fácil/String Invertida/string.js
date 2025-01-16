function invertString(str) {
  const array = str.split('');
  const reversedArray = array.reverse('');
  const reversedStr = array.join('');
  return reversedStr;
}

console.log(invertString('hello'));