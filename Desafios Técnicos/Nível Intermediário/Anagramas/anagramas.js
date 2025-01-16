function verifica(str1,str2) {
  const formatar = (str) => str.toLowerCase().split('').sort().join('');

  const anagrama1 = formatar(str1);
  const anagrama2 = formatar(str2);

  if (anagrama1 === anagrama2) {
    console.log('É um anagrama.');
  } else {
    console.log('Não é um anagrama.');
  }
}

verifica('Listen', 'silent');
verifica('Hello', 'World');