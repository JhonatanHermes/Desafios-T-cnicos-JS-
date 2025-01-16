function palindromo(str) {
  const reversedArray = str.split('').reverse().join('');

  if (str === reversedArray) {
    console.log('Essa palavra é um palíndromo.')
  } else {
    console.log('Essa palavra não é um palíndromo.')
  };
}

palindromo('radar');