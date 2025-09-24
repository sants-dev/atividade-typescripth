//1) ativ
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//2) ativ
var n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
console.log("FIM");
//3) ativ
var N = 100;
var soma = 0;
var k = 1;
while (k <= N) {
    soma += k;
    k++;
}
console.log("Soma de 1 at\u00E9 ".concat(N, " = ").concat(soma));
//4) ativ
var base = 7;
var mult = 1;
while (mult <= 10) {
    console.log("".concat(base, " x ").concat(mult, " = ").concat(base * mult));
    mult++;
}
//5) ativ
var x = 1;
while (x <= 50) {
    if (x % 2 === 0) {
        console.log(x);
    }
    x++;
}
//6) ativ
var num = 5;
var fat = 1;
var c = num;
while (c > 1) {
    fat *= c;
    c--;
}
console.log("".concat(num, "! = ").concat(fat));
//7) ativ
var a = 0;
var b = 1;
var termos = 10;
var contador = 1;
while (contador <= termos) {
    console.log(a);
    var proximo = a + b;
    a = b;
    b = proximo;
    contador++;
}
//8) ativ
var valores = [10, 20, 30, 40, 50];
var idx = 0;
var total = 0;
while (idx < valores.length) {
    total += valores[idx];
    idx++;
}
console.log("Total = ".concat(total));
//9) ativ
var nums = [5, 12, 3, 27, 9, 27, 1];
var iMax = 0;
var maior = nums[0];
while (iMax < nums.length) {
    if (nums[iMax] > maior) {
        maior = nums[iMax];
    }
    iMax++;
}
console.log("Maior valor = ".concat(maior));
//10) ativ
var lista = ["sql", "ts", "js", "python", "go"];
var alvo = "python";
var pos = 0;
var encontrado = false;
while (pos < lista.length) {
    if (lista[pos] === alvo) {
        encontrado = true;
        break;
    }
    pos++;
}
console.log(encontrado ? "Encontrado em lista[".concat(pos, "]") : "Não encontrado");
//11) ativ 
var texto = "TypeScript";
var invertido = "";
var p = texto.length - 1;
while (p >= 0) {
    invertido += texto[p];
    p--;
}
console.log("Original: ".concat(texto));
console.log("Invertido: ".concat(invertido));
//12) ativ
var palavra = "radar";
var esq = 0;
var dir = palavra.length - 1;
var ehPalindromo = true;
while (esq < dir) {
    if (palavra[esq] !== palavra[dir]) {
        ehPalindromo = false;
        break;
    }
    esq++;
    dir--;
}
console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");
//13) ativ
var acumulador = 0;
var sorteado;
do {
    // "Simula" um número entre 1 e 10 (inteiro)
    sorteado = Math.floor(Math.random() * 10) + 1;
    acumulador += sorteado;
    console.log("Sorteado: ".concat(sorteado, " | Acumulado: ").concat(acumulador));
} while (acumulador <= 50);
console.log("Limite atingido!");
//14) ativ 
var m = 1;
while (m <= 20) {
    if (m % 3 === 0) {
        m++;
        continue;
    }
    console.log(m);
    m++;
}
