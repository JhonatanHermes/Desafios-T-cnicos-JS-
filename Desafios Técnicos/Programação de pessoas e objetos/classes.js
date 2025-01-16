const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor da pessoa (número): ', (inputPessoa) => {
  let pessoa = parseInt(inputPessoa);
  
  rl.question('Digite o valor da conta (número): ', (inputConta) => {
    let conta = parseFloat(inputConta);

    rl.question('Digite o valor do produto (número): ', (inputProduto) => {
      let produto = parseInt(inputProduto);

      // Função para criar um objeto Pessoa
      function criapessoa(pessoa, conta, produto) {
        return {
          pessoa: pessoa,
          conta: conta,
          produto: produto,
          exibirInformacoes() {
            console.log(`Pessoa: ${this.pessoa}`);
            console.log(`Conta: ${this.conta}`);
            console.log(`Produto: ${this.produto}`);
          }
        };
      }

      const pessoaObj = criapessoa(pessoa, conta, produto);
      pessoaObj.exibirInformacoes();

      rl.close();  // Fecha a interface readline após terminar
    });
  });
});
