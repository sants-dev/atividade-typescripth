// 1) Verificar se o número é positivo ou negativo
let numero: number = -44;

if (numero >= 0) {
  console.log(`${numero} é positivo.`);  // Caso seja maior ou igual a zero
} else {
  console.log(`${numero} é negativo.`);  // Caso seja menor que zero
}

// 2) Verificar se um número é par ou ímpar
let valor: number = 44;

if (valor % 2 === 0) {
  console.log(`${valor} é par.`);        // Resto da divisão por 2 igual a zero
} else {
  console.log(`${valor} é ímpar.`);      // Resto diferente de zero
}

// 3) Maioridade
let idadE: number = 20;

if (idadE >= 18) {
  console.log("Maior de idade.");        // 18 anos ou mais
} else {
  console.log("Menor de idade.");        // Menos de 18 anos
}

// 4) Aprovação do aluno
let nota: number = 8;

if (nota >= 6) {
  console.log("Aluno aprovado.");        // Nota mínima 6
} else {
  console.log("Aluno reprovado.");
}

// 5) Classificação por faixa etária
let idade: number = 20;

if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// 6) Aprovação com nota e faltas
let materia: string = "Matemática";
let notaFinal: number = 8;
let faltas: number = 12;

if (notaFinal >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia}.`);   // Duas condições: nota boa e poucas faltas
} else {
  console.log(`Reprovado em ${materia}.`);
}

// 7) Verificação de login
let usuario: string = "admin";
let senha: string = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}

// 8) Desconto para cliente idoso
let idadeCliente: number = 65;

if (idadeCliente >= 60) {
  console.log("Cliente tem direito a desconto.");
} else {
  console.log("Cliente não tem desconto.");
}

// 9) Verificação de senha forte
let senhaNova: string = "40028922";

if (senhaNova.length >= 8) {
  console.log("Senha forte.");      // 8 ou mais caracteres
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}

// 10) Comparar dois números
let a: number = 44;
let b: number = 22;

if (a > b) {
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  console.log(`${b} é maior que ${a}.`);
} else {
  console.log("Os números são iguais.");
}

// 11) Dia da semana
let dia: number = 6; // 1=Segunda ... 7=Domingo

if (dia >= 1 && dia <= 5) {
  console.log("Dia útil.");               // Segunda a sexta
} else if (dia === 6 || dia === 7) {
  console.log("Final de semana.");        // Sábado ou domingo
} else {
  console.log("Número inválido para dia."); // Fora do intervalo 1 a 7
}

// 12) Conceito do aluno
let notaAluno: number = 82;

if (notaAluno >= 90) {
  console.log("Conceito A");
} else if (notaAluno >= 80) {
  console.log("Conceito B");
} else if (notaAluno >= 70) {
  console.log("Conceito C");
} else if (notaAluno >= 60) {
  console.log("Conceito D");
} else {
  console.log("Conceito F");
}

// 13) Classificação da temperatura
let temperatura: number = 28;

if (temperatura < 15) {
  console.log("Está frio.");
} else if (temperatura <= 25) {
  console.log("Clima agradável.");
} else {
  console.log("Está quente.");
}

// 14) Validação de triângulo
let lado1: number = 5;
let lado2: number = 7;
let lado3: number = 10;

// Para ser triângulo, a soma de dois lados precisa ser sempre maior que o terceiro
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
  console.log("Forma um triângulo válido.");
} else {
  console.log("Não forma um triângulo.");
}
