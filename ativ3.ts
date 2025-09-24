// 1) Saudação simples
function saudacao(): void {
  console.log("Olá, Unianchieta!");
}
// -> Útil para mostrar uma mensagem inicial de boas-vindas.
saudacao();

// 2) Saudação personalizada
function dizerOla(nome: string): void {
  console.log(`Olá, ${nome} tenha um ótimo dia!`);
}
// -> Serve para interagir com diferentes usuários.
dizerOla("Wesley");
dizerOla("Nicolly");

// 3) Soma de dois números
function soma(a: number, b: number): number {
  return a + b;
}
// -> Usada em qualquer cálculo matemático.
console.log(`Resultado da soma: ${soma(11, 44)}`);

// 4) Subtração
function subtrair(a: number, b: number): number {
  return a - b;
}
// -> Calcula a diferença entre dois números.
console.log(`Resultado da subtração: ${subtrair(44, 11)}`);

// 5) Multiplicação
function multi(a: number, b: number): number {
  return a * b;
}
// -> Útil em cálculos de áreas, escalas, etc.
console.log(`Resultado da multiplicação: ${multi(44, 2)}`);

// 6) Divisão
function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("Erro: divisão por zero");
    return NaN;
  }
  return a / b;
}
// -> Garante que não aconteça divisão por zero.
console.log(`Resultado da divisão: ${dividir(44, 4)}`);

// 7) Dobro de um número
function dobro(n: number): number {
  return n * 2;
}
// -> Dobra o valor informado.
console.log(`Dobro de 22 = ${dobro(22)}`);

// 8) Verificar par ou ímpar
function parOuImpar(n: number): string {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
// -> Muito usado em lógica de programação.
console.log(`44 é ${parOuImpar(44)}`);

// 9) Média de três valores
function media(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}
// -> Usada em notas escolares e estatísticas.
console.log(`Média = ${media(10, 5, 7.5).toFixed(2)}`);

// 10) Verificar aprovação com base em nota e faltas
function Aprov(nota: number, faltas: number): string {
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
// -> Exemplo prático de regra educacional.
console.log(Aprov(8, 5));
console.log(Aprov(6, 12));

// 11) Fatorial de um número
function fatorial(n: number): number {
  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}
// -> Usado em estatística, probabilidade e matemática.
console.log(`Fatorial de 3 = ${fatorial(3)}`);

// 12) Juros Simples
function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}
// -> Usado em cálculos financeiros.
console.log(`VF (Juros Simples) = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);

// 13) Conversão Celsius → Fahrenheit
function celsiusParaFahrenheit(c: number): number {
  return c * 1.8 + 32;
}
// -> Útil em conversão de temperaturas.
console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);

// 14) Calculadora básica
function calculadora(a: number, b: number, op: string): number {
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
  console.log("Operador inválido!");
  return NaN;
}
// -> Mini calculadora com as quatro operações.
console.log(calculadora(14, 14, "+"));
console.log(calculadora(10, 2, "-"));
console.log(calculadora(22, 2, "*"));
console.log(calculadora(51, 17, "/"));