//1)exem
var a = 10;
var b = 44;
console.log("Soma:", a + b);
console.log("Subtração", a - b);
console.log("Multiplicação", a * b);
console.log("Divisão:", a / b);
console.log("Módulo:", a % b);
console.log("Exponenciação:", Math.pow(a, b));
//2) exem 
var contador = 0;
contador++;
console.log("Incremento:", contador);
contador--;
console.log("Decremento:", contador);
//3) exem
var x = 20;
x += 10;
console.log("Atribuição de Soma:", x);
x -= 5;
console.log("Atribuição de Subtração:", x);
x *= 2;
console.log("Atribuição de Multiplicação:", x);
x /= 4;
console.log("Atribuição de Divisão:", x);
x %= 3;
console.log("Atribuição de Módulo:", x);
// Exemplo 4
var resultado = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado);
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado);
// Exemplo 5
function calcularQuadrado(num) {
    return Math.pow(num, 2);
}
console.log("Quadrado de 4:", calcularQuadrado(4));
// Exemplo 6
function ehParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log("O número 7 é:", ehParOuImpar(7));
console.log("O número 10 é:", ehParOuImpar(10));
// Exemplo 7
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Fatorial de 7:", calcularFatorial(7));
