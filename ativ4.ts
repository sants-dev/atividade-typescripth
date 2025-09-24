// ============================
// Exemplos de Operadores e Funções em TypeScript
// ============================

// 1) Operações Matemáticas Básicas
let a: number = 10;
let b: number = 44;

console.log("Soma:", a + b);               // Soma de dois números
console.log("Subtração:", a - b);          // Diferença entre dois números
console.log("Multiplicação:", a * b);      // Multiplicação
console.log("Divisão:", a / b);            // Divisão
console.log("Módulo:", a % b);             // Resto da divisão
console.log("Exponenciação:", a ** b);     // Potência (a elevado a b)

// 2) Incremento e Decremento
let contador: number = 0;
contador++; // Adiciona 1
console.log("Incremento:", contador);
contador--; // Subtrai 1
console.log("Decremento:", contador);

// 3) Operadores de Atribuição
let x: number = 20;
x += 10; // Soma e atribui
console.log("Atribuição de Soma:", x);
x -= 5; // Subtrai e atribui
console.log("Atribuição de Subtração:", x);
x *= 2; // Multiplica e atribui
console.log("Atribuição de Multiplicação:", x);
x /= 4; // Divide e atribui
console.log("Atribuição de Divisão:", x);
x %= 3; // Resto da divisão e atribui
console.log("Atribuição de Módulo:", x);

// 4) Precedência de Operadores
let resultado: number = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado); // Multiplica antes de somar
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado);  // Força a soma antes da multiplicação

// 5) Função para calcular o quadrado
function calcularQuadrado(num: number): number {
    return num ** 2;
}
console.log("Quadrado de 4:", calcularQuadrado(4));

// 6) Função que verifica se o número é par ou ímpar
function ehParOuImpar(numero: number): string {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log("O número 7 é:", ehParOuImpar(7));
console.log("O número 10 é:", ehParOuImpar(10));

// 7) Função recursiva para calcular fatorial
function calcularFatorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1; // Caso base
    }
    return n * calcularFatorial(n - 1); // Chama a si mesma
}
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Fatorial de 7:", calcularFatorial(7));
