// 📌 1. Manipulação de Arrays: Rotacionar Elementos
function rotacionarArray(arr, k) {
  k = k % arr.length;                 // Ajusta k se for maior que o array
  let parte1 = arr.slice(-k);        // Pega os últimos k elementos
  let parte2 = arr.slice(0, arr.length - k); // Pega o restante
  return parte1.concat(parte2);      // Junta as partes
}
console.log("Array Rotacionado:", rotacionarArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// 📌 2. Pilha (Stack) - LIFO
class Pilha {
  constructor() {
      this.itens = [];               // Cria um array vazio para armazenar os itens
  }

  push(elemento) {
      this.itens.push(elemento);     // Adiciona o elemento no topo
  }

  pop() {
      return this.itens.pop();       // Remove o elemento do topo
  }

  peek() {
      return this.itens[this.itens.length - 1]; // Consulta o topo sem remover
  }

  isEmpty() {
      return this.itens.length === 0; // Verifica se a pilha está vazia
  }
}
const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
console.log("Topo da Pilha:", pilha.peek()); // 20
console.log("Removido da Pilha:", pilha.pop()); // 20

// 📌 2. Fila (Queue) - FIFO
class Fila {
  constructor() {
      this.itens = [];               // Cria um array vazio
  }

  enqueue(elemento) {
      this.itens.push(elemento);     // Adiciona no final da fila
  }

  dequeue() {
      return this.itens.shift();     // Remove do início da fila
  }

  isEmpty() {
      return this.itens.length === 0; // Verifica se a fila está vazia
  }
}
const fila = new Fila();
fila.enqueue(1);
fila.enqueue(2);
console.log("Removido da Fila:", fila.dequeue()); // 1

// 📌 3. Árvores Binárias: Caminhamentos
class Nodo {
  constructor(valor) {
      this.valor = valor;            // Valor do nó
      this.esquerda = null;         // Filho à esquerda
      this.direita = null;          // Filho à direita
  }
}

function preOrdem(nodo) {
  if (nodo !== null) {
      console.log(nodo.valor);       // Visita o nó
      preOrdem(nodo.esquerda);      // Caminha pela esquerda
      preOrdem(nodo.direita);       // Caminha pela direita
  }
}

function emOrdem(nodo) {
  if (nodo !== null) {
      emOrdem(nodo.esquerda);       // Caminha pela esquerda
      console.log(nodo.valor);      // Visita o nó
      emOrdem(nodo.direita);       // Caminha pela direita
  }
}

function posOrdem(nodo) {
  if (nodo !== null) {
      posOrdem(nodo.esquerda);      // Caminha pela esquerda
      posOrdem(nodo.direita);       // Caminha pela direita
      console.log(nodo.valor);      // Visita o nó
  }
}

// 🌳 Construindo a árvore
let raiz = new Nodo(1);
raiz.esquerda = new Nodo(2);
raiz.direita = new Nodo(3);
raiz.esquerda.esquerda = new Nodo(4);
raiz.esquerda.direita = new Nodo(5);

console.log("Pré-Ordem:");
preOrdem(raiz); // 1 2 4 5 3

console.log("Em Ordem:");
emOrdem(raiz);  // 4 2 5 1 3

console.log("Pós-Ordem:");
posOrdem(raiz); // 4 5 2 3 1
