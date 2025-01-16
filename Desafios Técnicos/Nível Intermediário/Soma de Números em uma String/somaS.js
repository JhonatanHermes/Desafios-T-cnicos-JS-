const array = ["a1b2c3"];

function somaString(array) {
  const str = array[0].split('')

  let soma = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      soma += Number(str[i]);
    }
  }

  console.log(soma);
}

somaString(array);