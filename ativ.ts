// 1) Exibir mensagem no terminal
console.log("Óla Wesley");

// 2) Declarar variáveis e exibir uma frase usando elas
let nome: string = "Wesley";  
let idade: number = 20;  
let cidade: string = "Itupeva";  

console.log(`Meu nome ${nome}, eu tenho ${idade} anos e moro na cidade de ${cidade}`);

// 3) Verificar se um número é par ou ímpar
let numero: number = 20;  

if (numero % 2 === 0) { // se o resto da divisão por 2 for 0 → número par
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} é ímpar`);
}

// 4) Verificar se é maior ou menor de idade
let idade2: number = 20; // (usei outro nome pra não dar conflito com a variável de cima)

if (idade2 >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}

// 5) Calcular média de notas e verificar aprovação
let nota1: number = 6;
let nota2: number = 7;
let nota3: number = 10;

let media: number = (nota1 + nota2 + nota3) / 3; // soma e divide pela quantidade de notas

console.log(`Média: ${media.toFixed(2)}`); // toFixed(2) mostra só 2 casas decimais

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 6) Verificar aprovação considerando nota e faltas
let materia: string = "Inglês";
let nota: number = 7;      
let faltas: number = 11;   

// precisa ter nota >= 7 E faltas <= 10
if (nota >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia} com a nota: ${nota}, faltas: ${faltas}`);
} else {
  console.log(`Reprovado em ${materia} com a nota: ${nota}, faltas: ${faltas}`);
}

// 7) Tabuada de um número (neste caso, 4)
let base: number = 4; 

for (let i = 1; i <= 10; i++) {
  console.log(`${base} * ${i} = ${base * i}`);
}

// 8) Contagem regressiva de 10 até 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("FELIZ ANO NOVO");

// 9) Função simples de soma
function somar(a: number, b: number): number {
  return a + b;
}

let Soma = somar(40, 50);
console.log(`Soma: ${Soma}`);

// 10) Função de calculadora básica (+, -, *, /)
function calcular(a: number, b: number, op: string): number {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }

  console.log("Operação inválida. Use +, -, * ou /.");
  return NaN;
}

console.log(`7 + 8 = ${calcular(7, 8, "+")}`);
console.log(`11 - 10 = ${calcular(11, 10, "-")}`);
console.log(`10 * 50 = ${calcular(10, 50, "*")}`);
console.log(`10 / 2 = ${calcular(10, 2, "/")}`);

// 11) Juros simples
function juros(dinheiro: number, taxa: number, tempo: number): number {
  return dinheiro + (dinheiro * taxa * tempo);
}

let dinheiro1 = 1000;
let taxa = 0.05; // 5%
let tempo = 12; // meses

let vfSimples = juros(dinheiro1, taxa, tempo);
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);

// 12) Juros compostos
function Compostos(dinheiro: number, taxa: number, tempo: number): number {
  return dinheiro * Math.pow(1 + taxa, tempo);
}

let dinheiro2 = 1000;
let taxaC = 0.05;
let tempoC = 12;

let vfCompostos = Compostos(dinheiro2, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);

// 13) Conversão de Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}

let c = 30;
let f = celsiusParaFahrenheit(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);

// 14) Converter nota em conceito (A, B, C, D, F)
function conceito(nota: number): string {
  if (nota >= 90) return "A";
  else if (nota >= 80) return "B";
  else if (nota >= 70) return "C";
  else if (nota >= 60) return "D";
  else return "F";
}

console.log(`Nota 95 -> Conceito ${conceito(95)}`);
console.log(`Nota 82 -> Conceito ${conceito(82)}`);
console.log(`Nota 73 -> Conceito ${conceito(73)}`);
console.log(`Nota 61 -> Conceito ${conceito(61)}`);
console.log(`Nota 42 -> Conceito ${conceito(42)}`);
