function fatorial(n) {
  let resultado = 1;
  
  if (n < 0) {
    console.log('Não pode ser fatorado.');
    return;
  }
  
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  
  console.log(resultado);
}

fatorial(0);  