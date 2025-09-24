// 1) ativ - Imprime os números de 1 até 10
let i: number = 1;
while (i <= 10) {
  console.log(i);
  i++; // incrementa +1 a cada repetição
}

// 2) ativ - Imprime os números de 10 até 1
let n: number = 10;
while (n >= 1) {
  console.log(n);
  n--; // decrementa -1
}
console.log("FIM");

// 3) ativ - Soma todos os números de 1 até 100
let N: number = 100;
let soma: number = 0;
let k: number = 1;
while (k <= N) {
  soma += k;
  k++;
}
console.log(`Soma de 1 até ${N} = ${soma}`);

// 4) ativ - Tabuada do 7
let base: number = 7;
let mult: number = 1;
while (mult <= 10) {
  console.log(`${base} x ${mult} = ${base * mult}`);
  mult++;
}

// 5) ativ - Mostra apenas os números pares de 1 até 50
let x: number = 1;
while (x <= 50) {
  if (x % 2 === 0) {
    console.log(x);
  }
  x++;
}

// 6) ativ - Calcula o fatorial de 5 (5! = 5*4*3*2*1)
let num: number = 5;
let fat: number = 1;
let c: number = num;
while (c > 1) {
  fat *= c;
  c--;
}
console.log(`${num}! = ${fat}`);

// 7) ativ - Sequência de Fibonacci (primeiros 10 termos)
let a: number = 0;
let b: number = 1;
let termos: number = 10;
let contador: number = 1;
while (contador <= termos) {
  console.log(a);
  let proximo = a + b; // soma os dois últimos
  a = b;
  b = proximo;
  contador++;
}

// 8) ativ - Soma os valores de um array
let valores: number[] = [10, 20, 30, 40, 50];
let idx: number = 0;
let total: number = 0;
while (idx < valores.length) {
  total += valores[idx];
  idx++;
}
console.log(`Total = ${total}`);

// 9) ativ - Descobre o maior número de um array
let nums: number[] = [5, 12, 3, 27, 9, 27, 1];
let iMax: number = 0;
let maior: number = nums[0];
while (iMax < nums.length) {
  if (nums[iMax] > maior) {
    maior = nums[iMax];
  }
  iMax++;
}
console.log(`Maior valor = ${maior}`);

// 10) ativ - Procura uma palavra em uma lista
let lista: string[] = ["sql", "ts", "js", "python", "go"];
let alvo: string = "python";
let pos: number = 0;
let encontrado: boolean = false;
while (pos < lista.length) {
  if (lista[pos] === alvo) {
    encontrado = true;
    break; // sai do laço se encontrar
 }
  pos++;
}
console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");

// 11) ativ - Inverte um texto
let texto: string = "TypeScript";
let invertido: string = "";
let p: number = texto.length - 1;
while (p >= 0) {
  invertido += texto[p];
  p--;
}
console.log(`Original: ${texto}`);
console.log(`Invertido: ${invertido}`);

// 12) ativ - Verifica se a palavra é palíndromo
let palavra: string = "radar";
let esq: number = 0;
let dir: number = palavra.length - 1;
let ehPalindromo: boolean = true;
while (esq < dir) {
  if (palavra[esq] !== palavra[dir]) {
    ehPalindromo = false;
    break;
  }
  esq++;
  dir--;
}
console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");

// 13) ativ - Sorteia números de 1 a 10 até a soma ultrapassar 50
let acumulador: number = 0;
let sorteado: number;
do {
  sorteado = Math.floor(Math.random() * 10) + 1; // gera número aleatório
  acumulador += sorteado;
  console.log(`Sorteado: ${sorteado} | Acumulado: ${acumulador}`);
} while (acumulador <= 50);
console.log("Limite atingido!");

// 14) ativ - Mostra números de 1 a 20, pulando os múltiplos de 3
let m: number = 1;
while (m <= 20) {
  if (m % 3 === 0) {
     m++;
    continue; // pula para a próxima iteração
  }
  console.log(m);
  m++;
}
